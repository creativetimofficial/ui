// app/forgot-password/page.tsx
"use client";

import * as React from "react";
import { AuthAPI } from "@/lib/auth/auth";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { Input } from "@/registry/creative-tim-ui/ui/input";
import { Label } from "@/registry/creative-tim-ui/ui/label";
import { Button } from "@/registry/creative-tim-ui/ui/button";

export default function ForgotPasswordPage() {
  const [email, setEmail] = React.useState("");
  const [error, setError] = React.useState<string | null>(null);
  const [notice, setNotice] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setNotice(null);
    setLoading(true);
    try {
      // Your backend method — using the signature from your snippet
      await AuthAPI.forgotPassword(email);
      setNotice("If that email exists, we sent a password reset link.");
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

  return (
    <AuthLayout
      title="Forgot Password"
      subtitle="Enter your email and we’ll send you a reset link"
      footerLink={{ label: "Back to", href: "/login", hrefText: "Sign In" }}
    >
      <form onSubmit={handleSubmit} className="space-y-3">
        {error && <p className="text-red-500 text-sm my-4">{error}</p>}
        {notice && <p className="text-green-600 text-sm my-4">{notice}</p>}

        <Label
          htmlFor="email"
          className="text-sm font-semibold mb-2 block text-slate-900 dark:text-slate-100"
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

        <Button type="submit" disabled={loading} className="mt-5 w-full cursor-pointer">
          {loading ? "Sending link…" : "Send reset link"}
        </Button>
      </form>
    </AuthLayout>
  );
}
