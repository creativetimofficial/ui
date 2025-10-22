import { test, expect } from '@playwright/test';
import { uiRegister, uniqueEmail, trackRefresh } from './helpers';

test('register → creates account, sets session, redirects to dashboard, no extra refresh spam', async ({ page }) => {
  const email = uniqueEmail('reg');
  const refreshHits = trackRefresh(page);

  await uiRegister(page, email, 'Password!123', 'Reg User');

  await expect(page).toHaveURL(/dashboard/i, { timeout: 10_000 });

  // sanity: check we appear logged-in (tweak selector to your header/avatar)
  await expect(page.getByText(/reg user/i)).toBeVisible({ timeout: 10_000 });

  // Registration API already returns tokens/user; no reason to instantly call /auth/refresh
  expect(refreshHits.length).toBeLessThanOrEqual(1);
});
