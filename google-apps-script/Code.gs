// Set SHARED_SECRET in Apps Script Project Settings > Script Properties.
const SHEET_NAME = "Feedback";
const HEADERS = ["Timestamp", "Uninstallation Reason", "Additional Feedback"];
const MAX_FEEDBACK_LENGTH = 5000;
const MAX_REASONS = 13;
const VALID_REASONS = [
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
  "Other"
];

function doGet() {
  return json_({
    success: true,
    message: "Feedback Sheets endpoint is running."
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  let locked = false;

  try {
    const raw = e && e.postData && e.postData.contents;
    if (!raw || Utilities.newBlob(raw).getBytes().length > 20000) {
      throw new Error("A valid JSON request under 20 KB is required.");
    }

    const request = JSON.parse(raw);
    if (!request || typeof request !== "object" || Array.isArray(request)) {
      throw new Error("Request must be a JSON object.");
    }
    const expectedSecret = PropertiesService.getScriptProperties().getProperty("SHARED_SECRET");
    if (!expectedSecret || expectedSecret.length < 32) {
      throw new Error("Set SHARED_SECRET in Apps Script Project Settings > Script Properties (minimum 32 characters).");
    }
    if (typeof request.secret !== "string" || !sameSecret_(request.secret, expectedSecret)) {
      throw new Error("Unauthorized. Check the shared secret in Apps Script and .env.");
    }
    if (request.sheetName !== SHEET_NAME) {
      throw new Error("Sheet name must be " + SHEET_NAME + ".");
    }
    if (request.action === "append" || request.action === "update") {
      validateFeedbackRow_(request.values);
    }

    locked = lock.tryLock(10000);
    if (!locked) {
      throw new Error("The Sheet is busy. Please retry shortly.");
    }

    const sheet = getSheet_();
    let data;
    switch (request.action) {
      case "append":
        data = append_(sheet, request.values);
        break;
      case "read":
        data = read_(sheet);
        break;
      case "update":
        data = update_(sheet, request.rowNumber, request.values);
        break;
      default:
        throw new Error("Action must be append, read, or update.");
    }
    return json_({ success: true, data: data });
  } catch (error) {
    return json_({
      success: false,
      error: error && error.message ? error.message : "Request failed."
    });
  } finally {
    if (locked) lock.releaseLock();
  }
}

function getSheet_() {
  const spreadsheetId = PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
  if (!spreadsheetId || !/^[a-zA-Z0-9_-]+$/.test(spreadsheetId)) {
    throw new Error("Set SPREADSHEET_ID in Apps Script Project Settings > Script Properties.");
  }

  const spreadsheet = SpreadsheetApp.openById(spreadsheetId);

  let sheet = spreadsheet.getSheetByName(SHEET_NAME);
  if (!sheet) sheet = spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.getRange(1, 1, 1, HEADERS.length)
      .setFontWeight("bold")
      .setBackground("#EE3148")
      .setFontColor("#FFFFFF");
    sheet.setFrozenRows(1);
  } else {
    const currentHeaders = sheet.getRange(1, 1, 1, HEADERS.length).getDisplayValues()[0];
    const normalizedHeaders = currentHeaders.map(function (header) {
      return String(header).trim().toLowerCase().replace(/\s+/g, " ");
    });
    const acceptedHeaders = [
      ["timestamp", "time stamp"],
      ["uninstallation reason", "uninstallation reasons", "uninstall reason", "reasons", "reason"],
      ["additional feedback", "additional feedbacks", "feedback", "comments"]
    ];
    const headersAreRecognized = acceptedHeaders.every(function (accepted, index) {
      return accepted.indexOf(normalizedHeaders[index]) !== -1;
    });

    if (!headersAreRecognized) {
      throw new Error("The Feedback tab must have Timestamp, Reasons/Uninstallation Reason, and Additional Feedback(s) in row 1.");
    }

    if (normalizedHeaders.some(function (header, index) {
      return header !== HEADERS[index].toLowerCase();
    })) {
      sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    }
  }
  return sheet;
}

function append_(sheet, values) {
  const row = validateRow_(values);
  const rowNumber = Math.max(sheet.getLastRow() + 1, 2);
  sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([row]);
  return { rowNumber: rowNumber };
}

function read_(sheet) {
  const lastRow = sheet.getLastRow();
  const rows = lastRow < 2
    ? []
    : sheet.getRange(2, 1, lastRow - 1, HEADERS.length).getValues();
  return { headers: HEADERS, rows: rows };
}

function update_(sheet, rowNumber, values) {
  if (!Number.isInteger(rowNumber) || rowNumber < 2 || rowNumber > sheet.getLastRow()) {
    throw new Error("rowNumber must be an existing data row (2 or greater).");
  }
  sheet.getRange(rowNumber, 1, 1, HEADERS.length).setValues([validateRow_(values)]);
  return { rowNumber: rowNumber };
}

function validateRow_(values) {
  if (!Array.isArray(values) || values.length !== HEADERS.length) {
    throw new Error("Provide exactly three values: timestamp, uninstallation reason, and additional feedback.");
  }
  return values.map(function (value) {
    if (value !== null && typeof value !== "string" && typeof value !== "number" && typeof value !== "boolean") {
      throw new Error("Each cell must be text, a number, a boolean, or empty.");
    }
    if (typeof value === "string" && value.length > MAX_FEEDBACK_LENGTH) {
      throw new Error("Cell values must be 5,000 characters or fewer.");
    }
    if (typeof value === "string" && /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(value)) {
      throw new Error("Cell values contain unsupported control characters.");
    }
    // Prevent user-provided text from being evaluated as a Sheet formula.
    if (typeof value === "string" && /^[\s\uFEFF]*[=+@-]/.test(value)) return "'" + value;
    return value;
  });
}

function validateFeedbackRow_(values) {
  validateRow_(values);
  const timestamp = values[0];
  const reasonText = values[1];
  const feedback = values[2];
  if (typeof timestamp !== "string" || timestamp.length > 40 || isNaN(Date.parse(timestamp))) {
    throw new Error("A valid feedback timestamp is required.");
  }
  if (typeof reasonText !== "string" || reasonText.length > 2000) {
    throw new Error("Uninstallation reasons must be valid text.");
  }
  if (typeof feedback !== "string" || feedback.length > MAX_FEEDBACK_LENGTH ||
      /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(feedback)) {
    throw new Error("Additional feedback must be 5,000 characters or fewer and contain valid text.");
  }

  const reasons = reasonText === "None selected" ? [] : reasonText.split(", ");
  if (reasons.length > MAX_REASONS || reasons.some(function (reason) {
    return VALID_REASONS.indexOf(reason) === -1;
  }) || new Set(reasons).size !== reasons.length) {
    throw new Error("Please provide valid, non-duplicate uninstallation reasons.");
  }
  if (reasons.length === 0 && !feedback.trim()) {
    throw new Error("Please provide a reason or additional feedback.");
  }
  return validateRow_(values);
}

function sameSecret_(provided, expected) {
  if (expected.length < 32 || provided.length !== expected.length) {
    return false;
  }
  let difference = 0;
  for (let i = 0; i < expected.length; i++) {
    difference |= provided.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return difference === 0;
}

function json_(value) {
  return ContentService.createTextOutput(JSON.stringify(value))
    .setMimeType(ContentService.MimeType.JSON);
}
