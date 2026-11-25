import { appendRow, GoogleSheetsError } from "@/lib/google-sheets";

export const runtime = "nodejs";

const MAX_FEEDBACK_LENGTH = 5_000;
const MAX_REASONS = 13;
const MAX_REQUEST_BYTES = 20_000;
const VALID_REASONS = new Set([
    "I found a wallet I like more",
    "BridgeKey is too slow or buggy",
    "BridgeKey doesn't have the features I need from my wallet",
    "Reinstalling to troubleshoot",
    "BridgeKey is too hard to use",
    "BridgeKey does not support the network I wish to use",
    "I lost access to my wallet",
    "I use BridgeKey on another device",
    "I no longer use or need a wallet",
    "I need to import another Secret Recovery Phrase",
    "I installed or uninstalled BridgeKey by mistake",
    "I was scammed",
    "Other",
]);

class RequestTooLargeError extends Error {}

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

async function readBoundedBody(request: Request): Promise<string> {
    const reader = request.body?.getReader();
    if (!reader) return "";

    const chunks: Uint8Array[] = [];
    let byteLength = 0;
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        byteLength += value.byteLength;
        if (byteLength > MAX_REQUEST_BYTES) {
            await reader.cancel();
            throw new RequestTooLargeError();
        }
        chunks.push(value);
    }

    const body = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) {
        body.set(chunk, offset);
        offset += chunk.byteLength;
    }
    return new TextDecoder("utf-8", { fatal: true }).decode(body);
}

export async function POST(request: Request) {
    const contentLength = Number(request.headers.get("content-length"));
    if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BYTES) {
        return Response.json({ success: false, error: "Feedback request is too large." }, { status: 400 });
    }

    let body: unknown;
    try {
        const rawBody = await readBoundedBody(request);
        body = JSON.parse(rawBody);
    } catch (error) {
        if (error instanceof RequestTooLargeError) {
            return Response.json({ success: false, error: "Feedback request is too large." }, { status: 400 });
        }
        return Response.json({ success: false, error: "Request body must be valid JSON." }, { status: 400 });
    }

    if (!isRecord(body)) {
        return Response.json({ success: false, error: "A feedback object is required." }, { status: 400 });
    }

    const reasons = body.reasons;
    const feedback = body.feedback;
    if (
        !Array.isArray(reasons)
        || reasons.length > MAX_REASONS
        || reasons.some((reason) => typeof reason !== "string" || !VALID_REASONS.has(reason.trim()))
        || (feedback !== undefined && (
            typeof feedback !== "string"
            || feedback.length > MAX_FEEDBACK_LENGTH
            || /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(feedback)
        ))
        || (reasons.length === 0 && !(typeof feedback === "string" && feedback.trim()))
    ) {
        return Response.json({ success: false, error: "Please provide valid feedback and try again." }, { status: 400 });
    }

    const uniqueReasons = [...new Set((reasons as string[]).map((reason) => reason.trim()))];
    if (uniqueReasons.length !== reasons.length) {
        return Response.json({ success: false, error: "Duplicate feedback reasons are not allowed." }, { status: 400 });
    }

    const sheetName = process.env.GOOGLE_SHEETS_SHEET_NAME?.trim() || "Feedback";
    const row = [
        new Date().toISOString(),
        uniqueReasons.join(", ") || "None selected",
        typeof feedback === "string" ? feedback.trim() : "",
    ];

    try {
        const result = await appendRow(sheetName, row);
        return Response.json({ success: true, rowNumber: result.rowNumber });
    } catch (error) {
        console.error("Feedback submission failed:", error);
        const message = error instanceof GoogleSheetsError
            ? error.message
            : "Feedback could not be saved right now.";
        return Response.json({ success: false, error: message }, { status: 503 });
    }
}