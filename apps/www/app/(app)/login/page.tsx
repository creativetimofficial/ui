"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/auth";
import { useAuth } from "@/components/auth/AuthProvider";
import { setAccessToken, clearAccessToken } from "@/lib/session";
import { normalizeAccessToken } from "@/lib/normalizers";
// import { HeroTestimonial } from "@/components/HeroTestimonial";

export default function LoginPage() {
  const router = useRouter();
  const { user, setUser, bootstrapDone } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const googleDivRef = React.useRef<HTMLDivElement>(null);

  const handleGoogleLogin = React.useCallback(
    async (idToken: string) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RAILS_BASE_URL}/api/v1/auth/google`,
          {
            method: "POST",
            credentials: "include",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: idToken }),
          }
        );
        if (!res.ok) throw new Error("Google login failed");
        router.push("/dashboard");
      } catch (err) {
        console.error(err);
        setError(err instanceof Error ? err.message : "Google login failed");
      }
    },
    [router]
  );

  React.useEffect(() => {
    if (!bootstrapDone || user) return;

    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    if (!clientId) {
      console.warn("Missing NEXT_PUBLIC_GOOGLE_CLIENT_ID");
      return;
    }

    let cancelled = false;
    if (!cancelled && window.google && googleDivRef.current) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: ({ credential }) => handleGoogleLogin(credential),
      });

      // Important for React 18 StrictMode double-mount
      googleDivRef.current.innerHTML = "";
      window.google.accounts.id.renderButton(googleDivRef.current, {
        type: "standard",
        theme: "outline",
        size: "large",
        width: 320,
      });
    }

    return () => {
      cancelled = true;
    };
  }, [bootstrapDone, user, handleGoogleLogin]);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const data = await AuthAPI.login({ email, password });
      const access = normalizeAccessToken(data);
      if (access) setAccessToken(access);
      if (data.user) setUser(data.user);
      router.push("/dashboard");
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
    } catch {}
    clearAccessToken();
    setUser(null);
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:items-center min-h-screen">
        {/* Left column: card + form, centered with the same widths as your AuthForm wrapper */}
        <div className="flex items-center justify-center w-10/12 sm:w-6/12 mx-auto">
          {/* Content card */}
          {!bootstrapDone ? (
            <div className="text-slate-500 text-sm">Loading…</div>
          ) : user ? (
            <div className="w-full bg-white border border-slate-200 rounded-xl shadow-md p-6">
              <h2 className="text-3xl font-bold leading-tight mb-2">Welcome back</h2>
              <p className="mt-2 text-base text-slate-500 mb-6">
                You are already signed in.
              </p>
              <div className="text-sm text-slate-700 space-y-2">
                <div>
                  <span className="font-medium">Name:</span> {user.name ?? "—"}
                </div>
                <div>
                  <span className="font-medium">Email:</span> {user.email}
                </div>
              </div>
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => router.push("/dashboard")}
                  className="w-full py-2.5 rounded-lg bg-black text-white font-medium hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  Go to dashboard
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full py-2.5 rounded-lg border border-slate-300 font-medium hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-slate-300"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              {/* Header matches the AuthForm typography */}
              <h2 className="text-3xl font-bold leading-tight sm:text-3xl mt-16">
                Sign In
              </h2>
              <p className="mt-2 text-base text-slate-500 mb-8">
                Enter your email and password to continue
              </p>

              {/* Google button (kept as your One Tap/rendered button) */}
              <div className="mb-6">
                <div className="w-full border border-slate-300 shadow-xs rounded-lg p-4 flex items-center justify-center">
                  <div ref={googleDivRef} className="flex justify-center" />
                </div>
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-slate-600">Or</span>
                  </div>
                </div>
              </div>

              {/* Email + password form styled to match */}
              <form onSubmit={handleLogin} className="space-y-3">
                {error && (
                  <p className="text-red-500 text-sm my-4">{error}</p>
                )}

                <label className="text-sm font-semibold mb-2 block text-slate-900">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <label className="text-sm font-semibold mb-2 mt-4 block text-slate-900">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                  className="w-full rounded-lg border border-slate-300 px-3 py-2.5 shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full rounded-lg bg-black text-white font-medium py-2.5 disabled:opacity-50 hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black"
                >
                  {loading ? "Signing in…" : "Sign In"}
                </button>
              </form>

              {/* Footer link matching your AuthForm CTA */}
              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={() => router.push("/signup")}
                  className="text-slate-500 font-medium text-sm hover:underline"
                >
                  Don&apos;t have an account? <span className="underline">Create Account</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right column: reuses your existing HeroTestimonial component */}
        {/* <HeroTestimonial /> */}
      </div>
    </div>
  );
}
