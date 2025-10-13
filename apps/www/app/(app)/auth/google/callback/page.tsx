"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleCallbackPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  React.useEffect(() => {
    if (error) return;
    // The refresh cookie is already set by Rails at this point.
    // AuthProvider will pick it up automatically.
    router.replace("/dashboard");
  }, [error, router]);

  if (error) {
    return (
      <div className="p-6 text-red-600">
        Google sign-in failed: {error}
      </div>
    );
  }

  return <div className="p-6 text-gray-500">Finishing Google sign-in…</div>;
}
