"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/auth/auth";
import { useAuth } from "@/components/auth/AuthProvider";
import { setAccessToken, clearAccessToken } from "@/lib/session";
import { normalizeAccessToken } from "@/lib/auth/normalizers";
import { HeroTestimonial } from "@/components/auth/HeroTestimonial";
import { Input } from "@/registry/elevenlabs-ui/ui/input";
import { Label } from "@/registry/elevenlabs-ui/ui/label";
import { GoogleLogin } from "@/components/auth/GoogleLogin";
import { Button } from "@/registry/elevenlabs-ui/ui/button";
import { googleLogin } from "@/lib/auth/googleLogin";

export default function LoginPage() {
  const router = useRouter();
  const { user, setUser, bootstrapDone } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  const handleGoogleLogin = React.useCallback(
  async (idToken: string) => {
    try {
      await googleLogin(idToken);
      router.push("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "Google login failed");
    }
  },
  [router]
);


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
                <Button
                  onClick={() => router.push("/dashboard")}
                  className="w-full py-2.5"
                >
                  Go to dashboard
                </Button>
                <Button
                  variant="outline"
                  onClick={handleLogout}
                  className="w-full py-2.5"
                >
                  Logout
                </Button>
              </div>
            </div>
          ) : (
            <div className="w-full">
              {/* Header with ElevenLabs styling */}
              <h2 className="mt-16 text-3xl font-bold leading-tight sm:text-3xl text-slate-900">
                Sign In
              </h2>
              <p className="mt-2 text-base text-muted-foreground mb-8">
                Enter your email and password to continue
              </p>

              {/* Google button (kept as your One Tap/rendered button) */}
              <div className="mb-6">
                <GoogleLogin
                  onCredential={handleGoogleLogin}
                  onError={(e) => setError(e instanceof Error ? e.message : String(e))}
                  className="w-full"
                />
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-2 text-muted-foreground font-semibold">Or</span>
                  </div>
                </div>
              </div>

              {/* Email + password form styled to match */}
              <form onSubmit={handleLogin} className="space-y-3">
                {error && (
                  <p className="text-red-500 text-sm my-4">{error}</p>
                )}

                <Label htmlFor="email" className="text-sm font-semibold mb-2 block text-slate-900">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />

                <Label htmlFor="password" className="text-sm font-semibold mb-2 mt-4 block text-slate-900">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />

                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-5 w-full cursor-pointer"
                >
                  {loading ? "Signing in…" : "Sign In"}
                </Button>
              </form>

              {/* Footer link matching your AuthForm CTA */}
              <div className="mt-8 text-center text-muted-foreground text-sm">
                Don&apos;t have an account?{" "}
                <Button
                  type="button"
                  variant="link"
                  className="underline underline-offset-4 transition-colors cursor-pointer p-0 h-auto text-muted-foreground"
                  onClick={() => router.push("/signup")}
                >
                  Create an account
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Right column: reuses your existing HeroTestimonial component */}
        <HeroTestimonial />
      </div>
    </div>
  );
}
