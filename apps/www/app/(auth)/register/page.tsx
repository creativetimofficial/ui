"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { AuthAPI } from "@/lib/auth/auth";
import { setAccessToken } from "@/lib/session";
import { normalizeAccessToken } from "@/lib/auth/normalizers";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/registry/creative-tim-ui/ui/input";
import { Label } from "@/registry/creative-tim-ui/ui/label";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { GoogleLoginButton } from "@/components/auth/GoogleLoginButton";

export default function RegisterPage() {
  const router = useRouter();
  const { setUser } = useAuth();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirm, setConfirm] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  // Handle form submission
  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const data = await AuthAPI.register({ email, password });
      const access = normalizeAccessToken(data);
      if (access) setAccessToken(access);
      if (data.user) setUser(data.user);
      router.push("/dashboard");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create Account"
      subtitle="Enter your details to get started"
      footerLink={{ label: "Already have an account?", href: "/login", hrefText: "Sign In" }}
    >
      {/* Google sign-up */}
      <div className="mb-6">
        <GoogleLoginButton />
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-muted-foreground dark:text-slate-100 dark:bg-background font-semibold">Or</span>
          </div>
        </div>
      </div>

      {/* Registration form */}
      <form onSubmit={handleRegister} className="space-y-3">
        {error && <p className="text-red-500 text-sm my-4">{error}</p>}

        <Label
          htmlFor="email"
          className="text-sm font-semibold mb-2 mt-4 block text-slate-900 dark:text-slate-100"
        >
          Email Address
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          required
        />

        <Label
          htmlFor="password"
          className="text-sm font-semibold mb-2 mt-4 block text-slate-900 dark:text-slate-100"
        >
          Password
        </Label>
        <Input
          id="password"
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="new-password"
          required
        />

        <Label
          htmlFor="confirm"
          className="text-sm font-semibold mb-2 mt-4 block text-slate-900 dark:text-slate-100"
        >
          Confirm Password
        </Label>
        <Input
          id="confirm"
          type="password"
          placeholder="Re-enter your password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          autoComplete="new-password"
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="mt-5 w-full cursor-pointer"
        >
          {loading ? "Creating account…" : "Create Account"}
        </Button>
      </form>
    </AuthLayout>
  );
}
