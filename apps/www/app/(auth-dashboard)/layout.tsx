import type { ReactNode } from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  );
}
