import type { ReactNode } from "react";
import DashboardShell from "@/components/auth/DashboardShell";
import { AuthProvider } from "@/components/auth/AuthProvider";
// import { SiteHeader } from "@/components/site-header";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <AuthProvider>
        {/* <SiteHeader /> */}
        <DashboardShell>{children}</DashboardShell>
      </AuthProvider>
    </>
  );
}
