# BridgeKey website

This is the BridgeKey Next.js website, on the `next-code` branch.

## Run locally

1. Install dependencies with `npm ci`.
2. Copy `.env.example` to `.env.local` and set the Google Sheets values if you want feedback submissions persisted.
3. Start the development server with `npm run dev`, then open [http://localhost:3000](http://localhost:3000).
4. Run `npm run lint` and `npm run build` to check the project.

## Google Sheets feedback integration

The `/feedback` form sends data to the Next.js `/api/feedback` route. That server-side route validates the request and calls the reusable service in `lib/google-sheets.ts`, which sends JSON over HTTPS to a Google Apps Script Web App. The shared secret stays in server environment variables and Apps Script Script Properties; it is never sent to browser code. The Apps Script implementation, configuration, and deployment instructions are in [google-apps-script/README.md](google-apps-script/README.md).

Required server-only environment variables:

- `GOOGLE_SHEETS_SCRIPT_URL`: deployed Apps Script Web App URL ending in `/exec`.
- `GOOGLE_SHEETS_SCRIPT_SECRET`: same random secret as the Apps Script `SHARED_SECRET` Script Property (minimum 32 characters).
- `GOOGLE_SHEETS_SHEET_NAME`: optional; must match Apps Script `SHEET_NAME`, default `Feedback`.

To test, configure the Sheet and Web App, set the variables in `.env.local`, restart Next.js, then submit the form at `/feedback`. The service also supports authenticated read and row-update operations for server-side use. Apps Script can be tested from **Deploy → Test deployments** or by requesting its URL in a browser for the non-sensitive `doGet` status response.

No Google Cloud Console project, Google Cloud billing, Service Account, OAuth credentials, or payment method is used.