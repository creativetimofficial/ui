"use client";

import { useGoogleLogin } from "@react-oauth/google";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { useRouter } from "next/navigation";

export function GoogleLoginButton() {
  const router = useRouter();
  
  const login = useGoogleLogin({
    flow: "auth-code",                   // popup → returns { code }
    scope: "openid email profile",
    onSuccess: async ({ code }) => {
      try {
        // 1) Exchange code for id_token on our server
        const ex = await fetch("/api/google/exchange", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code }),
        });
        if (!ex.ok) throw new Error(await ex.text());
        const { id_token } = (await ex.json()) as { id_token: string };

        // 2) Send id_token to Rails
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_RAILS_BASE_URL}/api/v1/auth/google`,
          {
            method: "POST",
            credentials: "include", // ⬅️ important for cookies
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: id_token }),
          }
        );

        if (!res.ok) {
          const txt = await res.text();
          throw new Error(`Rails google failed: ${txt}`);
        }

        // 3) Redirect
        router.push("/dashboard");
      } catch (err) {
        console.error("Google login error:", err);
        // Show toast / setError here if you want
      }
    },
    onError: (err) => {
      console.error("Google popup error:", err);
    },
  });


  return (
    <Button
      type="button"
      onClick={() => login()}
      variant="outline"
      className={
        "w-full inline-flex items-center justify-center cursor-pointer"
      }
    >
      <>
        {/* Google G icon */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="h-5 w-5">
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
            c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
            C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20
            C44,22.659,43.862,21.35,43.611,20.083z"
          />
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12
            c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4
            C16.318,4,9.656,8.337,6.306,14.691z"
          />
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238
            C29.211,35.091,26.715,36,24,36
            c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          />
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303
            c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238
            C36.971,39.205,44,34,44,24
            C44,22.659,43.862,21.35,43.611,20.083z"
          />
        </svg>
        <span>Continue with Google</span>
      </>
    </Button>
  );
}
