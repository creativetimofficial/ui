export type Provider = 'email' | 'google';

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
};

export type AuthTokens = {
  accessToken?: string;
  refreshToken?: string;
  access_token?: string;
  refresh_token?: string;
};

export type AuthLoginResponse = {
  user: AuthUser;
} & AuthTokens;

export type AuthMeResponse = {
  user: AuthUser;
};

export type MessageResponse = {
  message: string;
};
