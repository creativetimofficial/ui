// lib/auth/auth.ts
import { api } from "./api";
import type {
  AuthLoginResponse,
  AuthMeResponse,
  AuthTokens,
  MessageResponse,
} from "@/lib/auth/auth.types";

export const AuthAPI = {
  register: (body: { email: string; password: string; name?: string }) =>
    api<AuthLoginResponse>("/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
      skipRefresh: true,   
    }),

  login: (body: { email: string; password: string }) =>
    api<AuthLoginResponse>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
      skipRefresh: true, 
    }),

  google: (mockToken: { email: string; name?: string; sub: string }) =>
    api<AuthLoginResponse>("/auth/google", {
      method: "POST",
      body: JSON.stringify({ token: JSON.stringify(mockToken) }),
      skipRefresh: true, 
    }),

  // Protected: allow refresh on 401
  me: (accessToken: string) =>
    api<AuthMeResponse>("/auth/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
      // no skipRefresh here ✅
    }),

  // Cookie-based refresh; skip is optional (guard already blocks)
  refresh: () =>
    api<AuthTokens>("/auth/refresh", { method: "POST", skipRefresh: true }),

  // Non-protected action; be safe and skip
  logout: () =>
    api<MessageResponse>("/auth/logout", { method: "POST", skipRefresh: true }),

  forgotPassword: (email: string) =>
    api<MessageResponse>("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email }),
      skipRefresh: true, 
    }),

  resetPassword: (token: string, password: string) =>
    api<MessageResponse>("/auth/reset-password", {
      method: "POST",
      body: JSON.stringify({ token, password }),
      skipRefresh: true,
    }),
};
