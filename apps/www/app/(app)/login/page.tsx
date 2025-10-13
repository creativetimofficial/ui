// app/login/page.tsx
"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/auth";
import { useAuth } from "@/components/auth/AuthProvider";
import { setAccessToken, clearAccessToken } from "@/lib/session";
import { normalizeAccessToken } from "@/lib/normalizers";

export default function LoginPage() {
  const router = useRouter();
  const { user, setUser, bootstrapDone } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleGoogleLogin = React.useCallback(async (idToken: string) => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_RAILS_BASE_URL}/api/v1/auth/google`, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: idToken }),
      });

      if (!res.ok) throw new Error("Google login failed");
      // Rails should set the refresh cookie here and return access_token+user like classic login
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
    }
  }, [router]);

  React.useEffect(() => {
    if (typeof window === "undefined" || !window.google) return;

    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: async (response: { credential: string }) => {
        const idToken = response.credential;
        await handleGoogleLogin(idToken);
      },
    });

    window.google.accounts.id.renderButton(
      document.getElementById("googleSignInDiv")!,
      { type: "standard", theme: "outline", size: "large" }
    );
  }, [handleGoogleLogin]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      // Rails will set the refresh cookie here automatically
      const data = await AuthAPI.login({ email, password });

      const access = normalizeAccessToken(data);
      if (access) setAccessToken(access);
      if (data.user) setUser(data.user);

      router.push("/login");
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : typeof err === "string"
          ? err
          : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await AuthAPI.logout();
    } catch {
      // ignore network errors on logout
    }
    clearAccessToken();
    setUser(null);
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      {!bootstrapDone ? (
        <div className="text-gray-500 text-sm">Loading…</div>
      ) : user ? (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-center">
            You are already signed in
          </h2>
          <div className="text-center space-y-2">
            <div>
              <span className="font-medium">Name:</span> {user.name ?? "—"}
            </div>
            <div>
              <span className="font-medium">Email:</span> {user.email}
            </div>
          </div>
          <div className="mt-6 space-y-2">
            <button
              onClick={() => router.push("/dashboard")}
              className="w-full py-2 bg-black text-white rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black"
            >
              Go to dashboard
            </button>
            <button
              onClick={handleLogout}
              className="w-full py-2 border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Logout
            </button>
          </div>
        </div>
      ) : (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md p-6">
          <h1 className="text-2xl font-bold mb-2 text-center">
            Sign in to your account
          </h1>
          <p className="text-sm text-gray-500 mb-6 text-center">
            Enter your email and password below
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-black text-white rounded-md hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
            >
              {loading ? "Signing in…" : "Sign In"}
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-4">
              <div className="h-px bg-gray-200 flex-1" />
              <span className="text-xs text-gray-400">or</span>
              <div className="h-px bg-gray-200 flex-1" />
            </div>

            <div className="w-full max-w-sm bg-white border p-6 rounded-lg shadow">
              <div id="googleSignInDiv" className="w-full flex justify-center" />
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
