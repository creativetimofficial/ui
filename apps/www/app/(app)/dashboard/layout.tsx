import React from "react";
import { AuthProvider } from "@/components/auth/AuthProvider";
// import DashboardClient from "./DashboardClient";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      {/* <DashboardClient> */}
        {children}
      {/* </DashboardClient> */}
    </AuthProvider>
  );
}
