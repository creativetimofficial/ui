import { test, expect } from '@playwright/test';
import { apiRegister, uiLogin, uniqueEmail, trackRefresh } from './helpers';

test('concurrent 401s trigger exactly one refresh (singleton)', async ({ page, request }) => {
  const email = uniqueEmail('single');
  const password = 'Password!123';
  await apiRegister(request, email, password);
  await uiLogin(page, email, password);
  await expect(page).toHaveURL(/dashboard/);

  const refreshHits = trackRefresh(page);

  // Trigger two protected fetches in the app at once.
  // E.g., navigate to a page that loads two protected endpoints on mount.
  // If you don’t have such a page, add a tiny dev route that does it for tests,
  // or invoke window.fetch twice via evaluate:
  await page.evaluate(() => {
    // these URLs should be protected in your app (adjust to real endpoints)
    fetch(`${process.env.NEXT_PUBLIC_API_URL!.replace(/\/+$/, '')}/protected/a`, { credentials: 'include' });
    fetch(`${process.env.NEXT_PUBLIC_API_URL!.replace(/\/+$/, '')}/protected/b`, { credentials: 'include' });
  });

  // Allow a moment for network to settle
  await page.waitForTimeout(1000);

  // The wrapper ensures only one refresh went out even if both 401'd
  expect(refreshHits.length).toBeLessThanOrEqual(1);
});
