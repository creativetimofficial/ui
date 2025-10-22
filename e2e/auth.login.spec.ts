import { test, expect } from '@playwright/test';
import { apiRegister, uiLogin, uniqueEmail, trackRefresh } from './helpers';

test('login (happy): redirects to dashboard and avoids extra refresh calls', async ({ page, request }) => {
  const email = uniqueEmail('login');
  const password = 'Password!123';
  await apiRegister(request, email, password);

  const refreshHits = trackRefresh(page);

  await uiLogin(page, email, password);
  await expect(page).toHaveURL(/dashboard/i, { timeout: 10_000 });

  // Should not need an immediate refresh after successful login
  expect(refreshHits.length).toBeLessThanOrEqual(1);
});

test('login (bad creds): shows error and DOES NOT call /auth/refresh', async ({ page }) => {
  const refreshHits = trackRefresh(page);

  await uiLogin(page, 'wrong@example.com', 'nope');
  // expect some error UI; adjust text to your app
  await expect(page.getByText(/invalid|wrong|credentials|creden/i)).toBeVisible();

  expect(refreshHits.length).toBe(0);
});
