import { api } from "./api";
import type { AuthLoginResponse, AuthMeResponse, AuthTokens, MessageResponse } from "./auth.types";

export const AuthAPI = {
  register: (body: { email: string; password: string; name?: string }) =>
    api<AuthLoginResponse>("/auth/register", { method: "POST", body: JSON.stringify(body) }),

  login: (body: { email: string; password: string }) =>
    api<AuthLoginResponse>("/auth/login", { method: "POST", body: JSON.stringify(body) }),

  google: (mockToken: { email: string; name?: string; sub: string }) =>
    api<AuthLoginResponse>("/auth/google", {
      method: "POST",
      body: JSON.stringify({ token: JSON.stringify(mockToken) }),
    }),

  me: (accessToken: string) =>
    api<AuthMeResponse>("/auth/me", { headers: { Authorization: `Bearer ${accessToken}` } }),

  // cookie-based refresh: NO body
  refresh: () =>
    api<AuthTokens>("/auth/refresh", { method: "POST" }),

  // cookie + revoke
  logout: () =>
    api<MessageResponse>("/auth/logout", { method: "POST" }),

  forgotPassword: (email: string) =>
    api<MessageResponse>("/auth/forgot-password", {
      method: "POST", body: JSON.stringify({ email }),
    }),

  resetPassword: (token: string, password: string) =>
    api<MessageResponse>("/auth/reset-password", {
      method: "POST", body: JSON.stringify({ token, password }),
    }),
};
