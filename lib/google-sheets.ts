import https from "node:https";

type SheetCell = string | number | boolean | null;

type AppsScriptResponse<T> = {
    success: boolean;
    data?: T;
    error?: string;
};

export class GoogleSheetsError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "GoogleSheetsError";
    }
}

function getConfig() {
    const url = process.env.GOOGLE_SHEETS_SCRIPT_URL?.trim();
    const secret = process.env.GOOGLE_SHEETS_SCRIPT_SECRET?.trim();

    if (!url || !secret) {
        throw new GoogleSheetsError("Google Sheets integration is not configured.");
    }

    try {
        const parsedUrl = new URL(url);
        if (parsedUrl.protocol !== "https:") {
            throw new Error("HTTPS is required.");
        }
    } catch {
        throw new GoogleSheetsError("Google Sheets Web App URL is invalid.");
    }

    if (secret.length < 32) {
        throw new GoogleSheetsError("Google Sheets shared secret must be at least 32 characters.");
    }

    return { url, secret };
}

type RawResponse = { status: number; location: string | null; contentType: string | null; text: string };

// Uses node:https directly: Next.js's patched fetch was making Apps Script calls slow and flaky in route handlers.
function httpsRequest(url: string, timeoutMs: number, body?: string): Promise<RawResponse> {
    return new Promise((resolve, reject) => {
        const req = https.request(
            url,
            {
                method: body === undefined ? "GET" : "POST",
                headers: body === undefined
                    ? {}
                    : { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(body) },
                timeout: timeoutMs,
            },
            (res) => {
                const chunks: Buffer[] = [];
                res.on("data", (chunk: Buffer) => chunks.push(chunk));
                res.on("end", () => resolve({
                    status: res.statusCode ?? 0,
                    location: res.headers.location ?? null,
                    contentType: res.headers["content-type"] ?? null,
                    text: Buffer.concat(chunks).toString("utf8"),
                }));
                res.on("error", reject);
            },
        );
        req.on("timeout", () => req.destroy(Object.assign(new Error("timeout"), { name: "TimeoutError" })));
        req.on("error", reject);
        if (body !== undefined) req.write(body);
        req.end();
    });
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const REDIRECT_STATUSES = new Set([301, 302, 303, 307, 308]);

async function getRedirectResult(url: string): Promise<RawResponse> {
    let currentUrl = url;

    for (let redirects = 0; redirects <= 5; redirects++) {
        const response = await httpsRequest(currentUrl, 15_000);
        if (!REDIRECT_STATUSES.has(response.status) || !response.location) {
            return response;
        }
        if (redirects === 5) {
            throw new GoogleSheetsError("Google Apps Script redirected too many times while returning its response.");
        }
        currentUrl = new URL(response.location, currentUrl).toString();
    }

    throw new GoogleSheetsError("Could not retrieve the Google Apps Script response.");
}

async function request<T>(
    action: "append" | "read" | "update",
    data: Record<string, unknown>,
): Promise<T> {
    const { url, secret } = getConfig();

    let response: RawResponse;
    try {
        // Apps Script runs the POST, then redirects to a one-time result URL.
        // Follow all GET redirects and retry only that result URL, never the POST,
        // so a slow Google response cannot append the same feedback multiple times.
        response = await httpsRequest(url, 45_000, JSON.stringify({ action, ...data, secret }));
        if (REDIRECT_STATUSES.has(response.status) && response.location) {
            const resultUrl = new URL(response.location, url).toString();
            let lastError: unknown;
            let fetched = false;

            for (let attempt = 0; attempt < 4; attempt++) {
                if (attempt > 0) await sleep(700 * attempt);
                try {
                    response = await getRedirectResult(resultUrl);
                    if (response.status !== 404 && response.status < 500) {
                        fetched = true;
                        break;
                    }
                } catch (error) {
                    lastError = error;
                }
            }

            if (!fetched) {
                if (lastError) throw lastError;
                throw new GoogleSheetsError("Google Apps Script created a result URL, but its response was not available after retries.");
            }
        }
    } catch (error) {
        if (error instanceof GoogleSheetsError) throw error;
        const message = error instanceof Error && error.name === "TimeoutError"
            ? "Google Sheets request timed out."
            : "Could not reach the Google Sheets Web App.";
        throw new GoogleSheetsError(message);
    }

    let result: AppsScriptResponse<T>;
    try {
        result = JSON.parse(response.text) as AppsScriptResponse<T>;
    } catch {
        console.error(
            `Apps Script returned non-JSON (status ${response.status}, ${response.contentType}):`,
            response.text.replace(/\s+/g, " ").slice(0, 300),
        );
        throw new GoogleSheetsError(
            `Apps Script returned non-JSON (HTTP ${response.status}, ${response.contentType || "unknown content type"}). Check the Apps Script deployment and URL; see the server log for a response preview.`,
        );
    }

    if (response.status !== 200 || result.success !== true || result.data === undefined) {
        throw new GoogleSheetsError(result.error || "Google Sheets could not complete the request.");
    }

    return result.data;
}

function validateSheetName(sheetName: string) {
    if (!sheetName.trim() || sheetName.length > 100) {
        throw new GoogleSheetsError("A valid sheet name is required.");
    }
}

function validateRow(values: SheetCell[]) {
    if (!Array.isArray(values) || values.length === 0 || values.length > 50) {
        throw new GoogleSheetsError("Row data must contain between 1 and 50 values.");
    }
    if (values.some((value) => value !== null && !["string", "number", "boolean"].includes(typeof value))) {
        throw new GoogleSheetsError("Row data contains an unsupported value.");
    }
}

export async function appendRow(sheetName: string, values: SheetCell[]) {
    validateSheetName(sheetName);
    validateRow(values);
    return request<{ rowNumber: number }>("append", { sheetName, values });
}

export async function getSheetData(sheetName: string) {
    validateSheetName(sheetName);
    return request<{ headers: string[]; rows: SheetCell[][] }>("read", { sheetName });
}

export async function updateRow(sheetName: string, rowNumber: number, values: SheetCell[]) {
    validateSheetName(sheetName);
    validateRow(values);
    if (!Number.isInteger(rowNumber) || rowNumber < 2) {
        throw new GoogleSheetsError("Row number must refer to a data row, not the header.");
    }
    return request<{ rowNumber: number }>("update", { sheetName, rowNumber, values });
}