// Set SHARED_SECRET in Apps Script Project Settings > Script Properties.
const SPREADSHEET_ID = "1fONf3omjQkia5Gp6_xEqCRvyuqpjSZ9LAlZCqykaF3A";
const SHEET_NAME = "Feedback";
const HEADERS = ["Timestamp", "Uninstallation Reason", "Additional Feedback"];

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
    if (!raw || raw.length > 20000) {
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
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);

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
    if (typeof value === "string" && value.length > 5000) {
      throw new Error("Cell values must be 5,000 characters or fewer.");
    }
    // Prevent user-provided text from being evaluated as a Sheet formula.
    if (typeof value === "string" && /^[\s]*[=+@-]/.test(value)) return "'" + value;
    return value;
  });
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
