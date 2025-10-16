// app/login/page.tsx  (Server Component)
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React, { Suspense } from "react";
import LoginClient from "./LoginClient";

export default async function LoginPage() {
  // Rails now sets rt_present=1 when a refresh session exists
  const isAuthed = (await cookies()).get("rt_present")?.value === "1";
  if (isAuthed) {
    // Server-side redirect = no flicker, no client race
    redirect("/dashboard");
  }

  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">Loading...</div>}>
      <LoginClient />
    </Suspense>
  );
}
