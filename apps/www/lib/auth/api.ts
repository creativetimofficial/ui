// lib/api.ts
import { getAccessToken, setAccessToken, clearAccessToken } from "@/lib/session";
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
function isTokenFresh(token: string, leewaySec = 60): boolean {
  try {
    const payload = JSON.parse(atob(token.split(".")[1] || ""));
    const exp: number = payload?.exp ?? 0;
    return exp - Math.floor(Date.now() / 1000) > leewaySec;
  } catch {
    return false;
  }
}

// ---- Singleton refresh to avoid duplicate refresh calls ----
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
    })().finally(() => {
      refreshInFlight = null;
    });
  }
  return refreshInFlight;
}

// ---- Optional: in-flight de-dupe for identical concurrent API calls ----
const inflight = new Map<string, Promise<Response>>();
function reqKey(url: string, init: RequestInit) {
  return `${url}::${(init.method || "GET").toUpperCase()}::${typeof init.body === "string" ? init.body : ""}`;
}

// ---- Main API helper ----
export async function api<T>(url: string, init: ApiInit = {}): Promise<T> {
  const absUrl = joinUrl(url);
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const at = getAccessToken();
  const hadBearer = !!at;
  if (at && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${at}`);
  }

  const reqInit: RequestInit = { ...init, credentials: "include", headers };
  const key = reqKey(absUrl, reqInit);

  // De-dupe identical concurrent requests
  if (inflight.has(key)) {
    const existing = inflight.get(key)!;
    const clone = await existing.then(r => r.clone());
    return (await clone.json()) as T;
  }

  const fetchPromise = fetch(absUrl, reqInit);
  inflight.set(key, fetchPromise);
  let res = await fetchPromise.finally(() => inflight.delete(key));

  // Refresh logic: only for protected endpoints, no skip, no auth routes, and token not fresh
  if (
    res.status === 401 &&
    hadBearer &&
    !init.skipRefresh &&
    !isAuthRoute(absUrl) &&
    at &&
    !isTokenFresh(at) &&
    hasRefreshMarker()   
  ) {
    const newAT = await tryRefresh();
    if (newAT) {
      setAccessToken(newAT);
      headers.set("Authorization", `Bearer ${newAT}`);
      const retryInit: RequestInit = { ...init, credentials: "include", headers };
      const retryKey = reqKey(absUrl, retryInit);
      const retryPromise = fetch(absUrl, retryInit);
      inflight.set(retryKey, retryPromise);
      res = await retryPromise.finally(() => inflight.delete(retryKey));
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
