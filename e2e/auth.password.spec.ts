import { test, expect } from '@playwright/test';
import { apiRegister, uniqueEmail } from './helpers';

test('forgot + reset password flow works end-to-end with mock token', async ({ page, request }) => {
  const email = uniqueEmail('pw');
  const oldPass = 'OldPass!123';
  const newPass = 'NewPass!123';

  await apiRegister(request, email, oldPass);

  // 1) Request reset
  await page.goto('/forgot-password');
  await page.getByLabel(/email/i).fill(email);
  await page.getByRole('button', { name: /send|reset|submit/i }).click();

  // The mock returns a token in the response body. Capture it with route interception.
  // Alternative: call API programmatically here:
  const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '');
  const resp = await request.post(`${apiBase}/auth/forgot-password`, { data: { email } });
  expect(resp.ok()).toBeTruthy();
  const { token } = await resp.json();

  // 2) Complete reset
  await page.goto('/reset-password');
  await page.getByLabel(/token/i).fill(token);            // adjust if your UI reads token from URL param
  await page.getByLabel(/^password$/i).fill(newPass);
  await page.getByRole('button', { name: /reset/i }).click();
  await expect(page.getByText(/updated|success/i)).toBeVisible();

  // 3) Login with new password
  await page.goto('/login');
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password/i).fill(newPass);
  await page.getByRole('button', { name: /sign in/i }).click();
  await expect(page).toHaveURL(/dashboard/);
});
