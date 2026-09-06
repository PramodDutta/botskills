import { defineConfig, devices } from '@playwright/test';

const PORT = 3311;
// Point the whole suite at a deployed site: E2E_BASE_URL=https://botskills.sh
const REMOTE = process.env.E2E_BASE_URL;

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: [['list']],
  use: {
    baseURL: REMOTE ?? `http://127.0.0.1:${PORT}`,
    trace: 'on-first-retry',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  webServer: REMOTE
    ? undefined
    : {
        command: `pnpm exec next dev --port ${PORT}`,
        url: `http://127.0.0.1:${PORT}`,
        // Tests submit forms and telemetry. Never inherit production credentials
        // or reuse a server whose database and mail configuration are unknown.
        env: { DATABASE_URL: '', RESEND_API_KEY: '' },
        reuseExistingServer: false,
        timeout: 180_000,
      },
});
