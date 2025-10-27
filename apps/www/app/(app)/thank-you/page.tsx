// app/thank-you/page.tsx (or /ui/thank-you)
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth/AuthProvider";
import { AuthAPI } from "@/lib/auth/auth";
import { setAccessToken } from "@/lib/auth/session";

export default function ThankYou() {
  const { setUser } = useAuth();
  const router = useRouter();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      // give Paddle webhook some time to update your backend
      await new Promise((r) => setTimeout(r, 8000)); // wait 8 seconds
      if (cancelled) return;

      try {
        const data = await AuthAPI.refresh(); // { access_token, user }
        setAccessToken(data.access_token);
        setUser(data.user);
      } catch (err) {
        console.warn("License refresh failed:", err);
      } finally {
        // Redirect after 8 seconds regardless of success/failure
        router.push("/dashboard");
      }
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [setUser, router]);


  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Thanks for your purchase!</h1>
      <p>We’re activating your license… this can take a few seconds.</p>
    </div>
  );
}
