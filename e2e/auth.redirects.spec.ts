import { test, expect } from '@playwright/test';
import { apiRegister, uiLogin, uniqueEmail, trackRefresh } from './helpers';

test('visiting /login while authenticated redirects quickly without refresh storms', async ({ page, request }) => {
  const email = uniqueEmail('redir');
  const password = 'Password!123';
  await apiRegister(request, email, password);

  await uiLogin(page, email, password);
  await expect(page).toHaveURL(/dashboard/);

  const refreshHits = trackRefresh(page);

  // Go to /login again; AuthLayout + context should push back to dashboard
  await page.goto('/login');
  await expect(page).toHaveURL(/dashboard/);

  expect(refreshHits.length).toBeLessThanOrEqual(1);
});
