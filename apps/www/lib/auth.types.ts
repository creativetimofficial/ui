export type Provider = 'email' | 'google';

export type AuthUser = {
  id: number;
  email: string;
  name?: string | null;
  provider?: Provider;
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
