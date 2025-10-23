export type Provider = "email" | "google";

export type LicenseItem = { id: number; code: string; exp?: number };
export type LicensePayload = {
  status: "active" | "none";
  features: string[];
  items: LicenseItem[];
  expires_at?: string | number | null;
};

export type AuthUser = {
  id: number;
  email: string;
  username?: string;
  name?: string | null;
  first_name?: string | null;
  last_name?: string | null;
  user_type?: number;
  provider?: string | null;
  photo_url?: string | null;
  google_sub?: string | null;
  created_at?: string;
  updated_at?: string;

  payment_account_id?: number;
  license?: LicensePayload;
};

/**
 * Canonical payload returned by /api/v1/auth/login and /api/v1/auth/refresh
 * NOTE: access_token is required; refresh_token may be omitted on some flows.
 */
export type AuthResponse = {
  access_token: string;
  refresh_token?: string;
  refresh_token_expires_at?: string;
  user: AuthUser;
};

/** If you still want named aliases: */
export type AuthLoginResponse = AuthResponse;
export type AuthRefreshResponse = AuthResponse;

/** /api/v1/auth/me still returns only { user } (no license changes here) */
export type AuthMeResponse = {
  user: AuthUser;
};

/** Optional: temporary compatibility type (deprecated). Prefer AuthResponse. */
export type AuthTokens = {
  /** @deprecated use access_token */
  accessToken?: string;
  /** @deprecated use refresh_token */
  refreshToken?: string;
  access_token?: string;
  refresh_token?: string;
};

export type MessageResponse = {
  message: string;
};
