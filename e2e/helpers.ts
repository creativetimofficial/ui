import { Page, APIRequestContext, expect } from '@playwright/test';

export function uniqueEmail(prefix = 'user'): string {
  const rand = Math.random().toString(36).slice(2, 8);
  return `${prefix}.${Date.now()}.${rand}@example.com`;
}

// Programmatic register via API (fast & reliable seed)
export async function apiRegister(request: APIRequestContext, email: string, password: string, name = 'Testy') {
  const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '');
  const res = await request.post(`${apiBase}/auth/register`, {
    data: { email, password, name },
  });
  expect(res.ok()).toBeTruthy();
  return res.json();
}

export async function apiLogout(request: APIRequestContext) {
  const apiBase = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/+$/, '');
  await request.post(`${apiBase}/auth/logout`);
}

// UI helpers
export async function uiLogin(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.getByLabel(/email address/i).fill(email);
  await page.getByLabel(/password/i).fill(password);
  await page.getByRole('button', { name: /sign in/i }).click();
}

export async function uiRegister(page: Page, email: string, password: string, name = 'Testy McTestface') {
  await page.goto('/register');
  await page.getByLabel(/name/i).fill(name);
  await page.getByLabel(/email/i).fill(email);
  await page.getByLabel(/password/i).fill(password);
  await page.getByRole('button', { name: /create|register|sign up/i }).click();
}

// Count refresh calls on a page (works per test)
export function trackRefresh(page: Page) {
  const hits: string[] = [];
  page.on('request', req => {
    if (/\/auth\/refresh\b/i.test(req.url()) && req.method() === 'POST') hits.push(req.url());
  });
  return hits;
}
