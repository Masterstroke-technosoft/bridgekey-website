# Google Apps Script Web App

This script is the only component that reads or writes the Google Sheet. The Next.js server sends authenticated JSON POST requests; the secret is never sent to browser code. No Google Cloud Console project, Google Cloud billing, Service Account, OAuth client, or payment method is needed.

## Setup

1. Create or open the Google Sheet.
2. Open **Extensions → Apps Script** and replace the editor contents with `Code.gs` from this folder.
3. In Apps Script, open **Project Settings → Script Properties** and add `SHARED_SECRET` with the exact same value as `GOOGLE_SHEETS_SCRIPT_SECRET` in the server `.env` (at least 32 characters). The secret is read from Script Properties and is not stored in `Code.gs`.
4. Confirm `SPREADSHEET_ID` at the top of `Code.gs` matches the ID from the target spreadsheet URL (the part between `/d/` and `/edit`). It is currently set to the spreadsheet you supplied. Save. The script uses its `Feedback` tab, creates it if missing, and writes these headers: `Timestamp`, `Uninstallation Reason`, `Additional Feedback`. Existing common labels such as `Reasons` or `Additional Feedbacks` are accepted and normalized without changing existing response rows. To use another tab, set `SHEET_NAME` in `Code.gs` and `GOOGLE_SHEETS_SHEET_NAME` in `.env` to the exact same name.
5. Choose **Deploy → New deployment → Web app**. Set **Execute as** to **Me** and **Who has access** to **Anyone**, then deploy and authorize. The secret protects read/write actions; `doGet` only returns a status message. After editing a deployed script, open **Deploy → Manage deployments → Edit**, select **New version**, and deploy. Merely saving the script does not update the live Web App.
6. Put the deployed Web App URL ending in `/exec` into `.env` as `GOOGLE_SHEETS_SCRIPT_URL`, then restart Next.js. Open the URL in a browser; it should return `Feedback Sheets endpoint is running.` If it returns a different message, the URL still points to an older deployment/version.
7. Submit a test response at `/feedback` and confirm a row appears in the Sheet.

The endpoint accepts authenticated POST actions `append`, `read`, and `update`. The Node.js client allows up to 60 seconds for Apps Script cold starts and Sheet operations. Apps Script execution and Google Sheets availability may still affect response times.