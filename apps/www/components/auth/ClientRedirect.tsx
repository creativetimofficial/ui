"use client";

import * as React from "react";
import { useRouter } from "next/navigation";

export function ClientRedirect({ href }: { href: string }) {
  const router = useRouter();

  React.useEffect(() => {
    // try client navigation first
    router.replace(href);

    // hard fallback in case middleware/Link prefetch conflicts
    const t = setTimeout(() => {
      if (location.pathname !== href) {
        window.location.assign(href);
      }
    }, 150);

    return () => clearTimeout(t);
  }, [href, router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-muted-foreground text-sm">Redirecting…</div>
    </div>
  );
}
