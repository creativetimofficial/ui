// components/auth/AuthProvider.tsx
"use client";

import * as React from "react";
import { AuthAPI } from "@/lib/auth/auth";
import {
  getAccessToken,
  setAccessToken,
  clearAccessToken,
} from "@/lib/session";
import type { AuthUser } from "@/lib/auth/auth.types";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { hasRefreshMarker } from "@/lib/auth/cookies";

/** Context shape */
type Ctx = {
  user: AuthUser | null;
  setUser: (u: AuthUser | null) => void;
  logout: () => Promise<void>;
  bootstrapDone: boolean;
};

const AuthContext = React.createContext<Ctx | undefined>(undefined);

/** Base URL helper (same as used in api.ts) */
const API_BASE = (process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "");
const joinUrl = (p: string) => `${API_BASE}/${p.replace(/^\/+/, "")}`;

/** Decode JWT and check freshness with a small leeway to avoid race near expiry */
function isTokenFresh(token: string, leewaySec = 60): boolean {
  try {
    const part = token.split(".")[1] || "";
    // atob expects base64 (not base64url); normalize minimal differences
    const normalized = part.replace(/-/g, "+").replace(/_/g, "/");
    const payload = JSON.parse(atob(normalized));
    const exp: number | undefined = payload?.exp;
    if (!exp) return false;
    const now = Math.floor(Date.now() / 1000);
    return exp - now > leewaySec;
  } catch {
    return false;
  }
}

/** One-shot cookie-based refresh */
async function refreshOnce(): Promise<string | null> {
  try {
    const res = await fetch(joinUrl("/auth/refresh"), {
      method: "POST",
      credentials: "include",
    });
    if (!res.ok) return null;
    const data = (await res.json().catch(() => null)) as
      | { access_token?: string; accessToken?: string }
      | null;
    return data?.access_token ?? data?.accessToken ?? null;
  } catch {
    return null;
  }
}

/** Google OAuth provider wrapper */
export function GoogleAuthClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!;
  return <GoogleOAuthProvider clientId={clientId}>{children}</GoogleOAuthProvider>;
}

/** Main provider with run-once bootstrap */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [bootstrapDone, setBootstrapDone] = React.useState(false);
  const didRun = React.useRef(false); // 👈 prevents Strict Mode double-run

  React.useEffect(() => {
    if (didRun.current) return;
    didRun.current = true;

    (async () => {
      try {
        const at = getAccessToken();

        // 1) Fast path: if we have a fresh token, try /me without refreshing
        if (at && isTokenFresh(at)) {
          try {
            const me = await AuthAPI.me(at); // should NOT auto-refresh
            setUser(me.user);
            return;
          } catch {
            // token might be invalid server-side; fall back to refresh
          }
        }

        // 2) Only attempt refresh if the readable marker says a session likely exists
        if (hasRefreshMarker()) {
          const newAT = await refreshOnce();
          if (newAT) {
            setAccessToken(newAT);
            const me = await AuthAPI.me(newAT);
            setUser(me.user);
            return;
          }
        }

        // 3) No session
        clearAccessToken();
        setUser(null);
      } finally {
        setBootstrapDone(true);
      }
    })();
  }, []);

  async function logout() {
    try {
      await AuthAPI.logout();
    } catch {
      // ignore network errors on logout
    } finally {
      clearAccessToken();
      setUser(null);
    }
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, bootstrapDone }}>
      <GoogleAuthClientProvider>{children}</GoogleAuthClientProvider>
    </AuthContext.Provider>
  );
}

/** Safe hook */
export function useAuth(): Ctx {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
