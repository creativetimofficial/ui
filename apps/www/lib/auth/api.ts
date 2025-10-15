// lib/api.ts
import { getAccessToken, setAccessToken, clearAccessToken } from "@/lib/session";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || ""; // e.g. http://localhost:4001/api/v1
const joinUrl = (p: string) =>
  `${API_BASE.replace(/\/+$/, "")}/${p.replace(/^\/+/, "")}`;

// ---- Types & type guards ----
type ErrorLike = { message?: unknown };

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

// ---- Refresh using cookie (no body) ----
async function tryRefresh(): Promise<string | null> {
  const res = await fetch(joinUrl("/auth/refresh"), {
    method: "POST",
    credentials: "include", // send the HttpOnly cookie
  });

  const data = await safeJson<{ access_token?: string }>(res);
  if (!res.ok) return null;

  // 👇 We don't care about refresh_token here anymore — Rails handles it via cookie.
  return data?.access_token ?? null;
}


// ---- Main API helper ----
export async function api<T>(url: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type")) headers.set("Content-Type", "application/json");

  const at = getAccessToken();
  if (at && !headers.has("Authorization")) headers.set("Authorization", `Bearer ${at}`);

  let res = await fetch(joinUrl(url), {
    ...init,
    credentials: "include",
    headers,
  });

  // One retry on 401 using refresh cookie
  if (res.status === 401) {
    const newAT = await tryRefresh();
    if (newAT) {
      setAccessToken(newAT);
      headers.set("Authorization", `Bearer ${newAT}`);
      res = await fetch(joinUrl(url), {
        ...init,
        credentials: "include",
        headers,
      });
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
