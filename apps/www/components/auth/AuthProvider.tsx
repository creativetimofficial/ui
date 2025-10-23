// components/auth/AuthProvider.tsx
"use client";

import * as React from "react";
import { AuthAPI } from "@/lib/auth/auth";
import {
  setAccessToken,
  clearAccessToken,
} from "@/lib/auth/session";
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
        // Only attempt refresh if the readable marker says a session likely exists
        if (hasRefreshMarker()) {
          try {
            const data = await AuthAPI.refresh(); // returns { access_token, user }
            setAccessToken(data.access_token);
            setUser(data.user);
            return;
          } catch {
            // fall through to clear session below
          }
        }

        // No session
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
