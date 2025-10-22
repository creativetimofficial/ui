import type { AuthTokens, AuthMeResponse, AuthUser } from "@/lib/auth.types";

export function normalizeAccessToken(tokens?: AuthTokens | null): string | null {
  if (!tokens) return null;
  return tokens.accessToken ?? tokens.access_token ?? null;
}

export function normalizeUser(me?: AuthMeResponse | null): AuthUser | null {
  return me?.user ?? null;
}
