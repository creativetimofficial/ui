import { setAccessToken, clearAccessToken, getAccessToken } from "@/lib/auth/session";
import { hasRefreshMarker } from "./cookies";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";
const joinUrl = (p: string) =>
  `${API_BASE.replace(/\/+$/, "")}/${p.replace(/^\/+/, "")}`;

type ErrorLike = { message?: unknown };
export type ApiInit = RequestInit & { skipRefresh?: boolean };

const isAuthRoute = (u: string) =>
  /\/auth\/(login|register|forgot-password|reset-password|google|refresh|logout)\b/i.test(
    u
  );

function isJsonResponse(res: Response) {
  const ct = res.headers.get("content-type") || "";
  return ct.toLowerCase().includes("application/json");
}

async function safeJson<T = unknown>(res: Response): Promise<T | null> {
  try {
    return (await res.json()) as T;
  } catch {
    return null;
  }
}

function extractMessage(data: unknown, fallback = ""): string {
  if (data && typeof data === "object" && "message" in (data as ErrorLike)) {
    const msg = (data as ErrorLike).message;
    if (typeof msg === "string") return msg;
  }
  return fallback;
}

// ------------------------
// REFRESH HELPERS
// ------------------------

let refreshInFlight: Promise<string | null> | null = null;

async function tryRefresh(): Promise<string | null> {
  const isDev = process.env.NODE_ENV === "development";

  // In production: only bother refreshing if we *think* there's a session
  // (hasRefreshMarker() checks the rt_present cookie).
  // In dev: always try, because cookies may be cross-origin and unreadable.
  if (!isDev && !hasRefreshMarker()) {
    return null;
  }

  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      const res = await fetch(joinUrl("/auth/refresh"), {
        method: "POST",
        credentials: "include", // send cookies (refresh_token, user_id)
      });

      const data = await safeJson<{ access_token?: string; accessToken?: string }>(
        res
      );

      if (!res.ok) {
        return null;
      }

      // Rails returns "access_token"
      // (we also fall back to accessToken just in case)
      return data?.access_token ?? data?.accessToken ?? null;
    })().finally(() => {
      refreshInFlight = null;
    });
  }

  return refreshInFlight;
}

// ------------------------
// MAIN API WRAPPER
// ------------------------

export async function api<T>(url: string, init: ApiInit = {}): Promise<T> {
  const absUrl = joinUrl(url);

  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  // attach current access token if we have one in memory
  const at = getAccessToken();
  if (at && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${at}`);
  }

  const reqInit: RequestInit = {
    ...init,
    credentials: "include", // VERY important for refresh flow
    headers,
  };

  // 1st attempt
  let res = await fetch(absUrl, reqInit);

  // If unauthorized, try to refresh the session ONCE and retry the same request
  if (
    res.status === 401 &&
    !init.skipRefresh &&
    !isAuthRoute(absUrl) // never recurse on /auth/*
  ) {
    const newAT = await tryRefresh();

    if (newAT) {
      // store new token in memory for future calls
      setAccessToken(newAT);

      // retry the original request with the new Authorization header
      headers.set("Authorization", `Bearer ${newAT}`);
      res = await fetch(absUrl, {
        ...init,
        credentials: "include",
        headers,
      });
    } else {
      // refresh failed, kill whatever token we had
      clearAccessToken();
    }
  }

  const isJson = isJsonResponse(res);
  const data = isJson ? await safeJson<unknown>(res) : null;

  if (!res.ok) {
    const text = isJson ? "" : (await res.text().catch(() => "")) || "";
    const msg = extractMessage(data, text || `Request failed ${res.status}`);
    throw new Error(msg);
  }

  return (data as T) ?? ({} as T);
}
