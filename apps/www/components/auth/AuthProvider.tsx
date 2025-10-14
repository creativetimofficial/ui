// components/auth/AuthProvider.tsx
"use client";

import * as React from "react";
import { AuthAPI } from "@/lib/auth/auth";
import { setAccessToken, clearAccessToken } from "@/lib/session";
import type { AuthUser, AuthTokens, MessageResponse } from "@/lib/auth/auth.types";

type Ctx = {
  user: AuthUser | null;
  setUser: (u: AuthUser | null) => void;
  logout: () => Promise<void>;
  bootstrapDone: boolean;
};

const AuthContext = React.createContext<Ctx | undefined>(undefined);

function isMessageResponse(x: unknown): x is MessageResponse {
  return !!x && typeof x === "object" && "message" in (x as Record<string, unknown>);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthUser | null>(null);
  const [bootstrapDone, setBootstrapDone] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        // 👉 We don't read any refresh token from localStorage anymore.
        // The refresh endpoint will use the HttpOnly cookie automatically.

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL!.replace(/\/+$/, "")}/auth/refresh`,
          {
            method: "POST",
            credentials: "include", // send the cookie
          }
        );

        let parsed: unknown = null;
        try {
          parsed = await res.json();
        } catch {
          parsed = null;
        }

        if (!res.ok) {
          const msg = isMessageResponse(parsed)
            ? parsed.message
            : `Request failed ${res.status}`;
          throw new Error(msg);
        }

        const tokens = parsed as AuthTokens;
        const access = tokens.access_token ?? tokens.accessToken ?? null;

        if (access) {
          setAccessToken(access);
          const me = await AuthAPI.me(access);
          setUser(me.user);
        } else {
          setUser(null);
        }
      } catch {
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
    } catch {}
    clearAccessToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, setUser, logout, bootstrapDone }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
