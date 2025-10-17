import { test, expect } from '@playwright/test';
import { apiRegister, uiLogin, uniqueEmail } from './helpers';

test('logout clears session and allows login page to render', async ({ page, request }) => {
  const email = uniqueEmail('logout');
  const password = 'Password!123';
  await apiRegister(request, email, password);
  await uiLogin(page, email, password);
  await expect(page).toHaveURL(/dashboard/);

  // click your logout control; tweak selector to your UI
  await page.getByRole('button', { name: /log ?out/i }).click();

  // app should route to /login or home, and render the sign-in form again
  await expect(page).toHaveURL(/login/);
  await expect(page.getByRole('button', { name: /sign in/i })).toBeVisible();
});
