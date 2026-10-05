# Google Apps Script Web App

This script is the only component that reads or writes the Google Sheet. The Next.js server sends authenticated JSON POST requests; the secret is never sent to browser code. No Google Cloud Console project, Google Cloud billing, Service Account, OAuth client, or payment method is needed.

## Setup

1. Ask your manager to create/share the destination Google Sheet with the Google account that owns and deploys the Apps Script. That account must have **Editor** access; sharing the Sheet link alone is not enough for the script to write.
2. Get the manager's spreadsheet URL. Copy the spreadsheet ID from between `/d/` and `/edit` (not the `gid` tab number).
3. Open **Extensions → Apps Script** from the destination Sheet, or use the existing Apps Script project if its deploying account has editor access to the destination Sheet. Replace its editor contents with `Code.gs` from this folder.
4. In Apps Script, open **Project Settings → Script Properties** and add:
	- `SPREADSHEET_ID` — the manager's spreadsheet ID from step 2.
	- `SHARED_SECRET` — the exact same value as `GOOGLE_SHEETS_SCRIPT_SECRET` in the server `.env` (at least 32 characters).
	Both values are configured outside the source code; the spreadsheet ID and secret are not hard-coded.
5. Save. The script uses the tab named `Feedback`, creates it if missing, and writes the headers `Timestamp`, `Uninstallation Reason`, `Additional Feedback`. Existing common labels such as `Reasons` or `Additional Feedbacks` are accepted and normalized without changing response rows. For another tab name, set `SHEET_NAME` in `Code.gs` and `GOOGLE_SHEETS_SHEET_NAME` in `.env` to exactly the same name.
6. Choose **Deploy → New deployment → Web app**. Set **Execute as** to **Me** (the account must have editor access to the Sheet) and **Who has access** to **Anyone**, then deploy and authorize. The secret protects read/write actions; `doGet` only returns a status message. For code changes, open **Deploy → Manage deployments → Edit**, select **New version**, and deploy.
7. Put the deployed Web App URL ending in `/exec` into `.env` as `GOOGLE_SHEETS_SCRIPT_URL`, then restart Next.js. Open the URL in a browser; it should return `Feedback Sheets endpoint is running.`
8. Submit a test response at `/feedback` and confirm it appears on the manager's `Feedback` tab.

The endpoint accepts authenticated POST actions `append`, `read`, and `update`. The Node.js client allows up to 60 seconds for Apps Script cold starts and Sheet operations. Apps Script execution and Google Sheets availability may still affect response times.