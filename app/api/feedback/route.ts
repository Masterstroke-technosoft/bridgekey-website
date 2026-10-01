import { appendRow, GoogleSheetsError } from "@/lib/google-sheets";

export const runtime = "nodejs";

const MAX_FEEDBACK_LENGTH = 5_000;
const MAX_REASONS = 13;

function isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}

export async function POST(request: Request) {
    let body: unknown;
    try {
        body = await request.json();
    } catch {
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
        || reasons.some((reason) => typeof reason !== "string" || !reason.trim() || reason.length > 140)
        || (feedback !== undefined && (typeof feedback !== "string" || feedback.length > MAX_FEEDBACK_LENGTH))
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