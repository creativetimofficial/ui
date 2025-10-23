import * as React from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
