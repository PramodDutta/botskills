// Set E2E_BASE_URL to run the suite against a deployed site instead of the
// local dev server. Tests that would write a real row or a telemetry event
// skip themselves in that mode, so a production run never adds a fake copy,
// vote, visit, signup or enquiry to the live numbers.
export const REMOTE = !!process.env.E2E_BASE_URL;
export const SKIP_WRITES = 'writes to the live database';
