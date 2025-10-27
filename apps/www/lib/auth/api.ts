// lib/api.ts
import { setAccessToken, clearAccessToken, getAccessToken } from "@/lib/auth/session";
import { hasRefreshMarker } from "./cookies";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "";
const joinUrl = (p: string) => `${API_BASE.replace(/\/+$/, "")}/${p.replace(/^\/+/, "")}`;

type ErrorLike = { message?: unknown };
export type ApiInit = RequestInit & { skipRefresh?: boolean };

const isAuthRoute = (u: string) =>
  /\/auth\/(login|register|forgot-password|reset-password|google|refresh|logout)\b/i.test(u);

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

// ---- JWT helper to skip unnecessary refresh ----
// function isTokenFresh(token: string, leewaySec = 60): boolean {
//   try {
//     const payload = JSON.parse(atob(token.split(".")[1] || ""));
//     const exp: number = payload?.exp ?? 0;
//     return exp - Math.floor(Date.now() / 1000) > leewaySec;
//   } catch {
//     return false;
//   }
// }

// ---- Singleton refresh (unchanged) ----
let refreshInFlight: Promise<string | null> | null = null;
async function tryRefresh(): Promise<string | null> {
  if (!hasRefreshMarker()) return null;
  if (!refreshInFlight) {
    refreshInFlight = (async () => {
      const res = await fetch(joinUrl("/auth/refresh"), {
        method: "POST",
        credentials: "include",
      });
      const data = await safeJson<{ access_token?: string; accessToken?: string }>(res);
      if (!res.ok) return null;
      return data?.access_token ?? data?.accessToken ?? null;
    })().finally(() => { refreshInFlight = null; });
  }
  return refreshInFlight;
}

// ---- Main API helper ----
export async function api<T>(url: string, init: ApiInit = {}): Promise<T> {
  const absUrl = joinUrl(url);
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const at = getAccessToken();
  if (at && !headers.has("Authorization")) headers.set("Authorization", `Bearer ${at}`);

  const reqInit: RequestInit = { ...init, credentials: "include", headers };

  let res = await fetch(absUrl, reqInit);

  // 🔁 Refresh on any protected 401, retry once
  if (res.status === 401 && !init.skipRefresh && !isAuthRoute(absUrl) && hasRefreshMarker()) {
    const newAT = await tryRefresh();
    if (newAT) {
      setAccessToken(newAT);
      headers.set("Authorization", `Bearer ${newAT}`);
      res = await fetch(absUrl, { ...init, credentials: "include", headers });
    } else {
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
