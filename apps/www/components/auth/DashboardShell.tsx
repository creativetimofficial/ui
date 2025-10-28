"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Home, CreditCard, Banknote, Key, LogOut } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarProvider,
  SidebarInset,
} from "@/components/ui/sidebar";
import type { ReactNode } from "react";
import { DashboardSubscription, fetchDashboard } from "@/lib/api/dashboard";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/components/auth/AuthProvider";
import { Button } from "../ui/button";

// Helper: strip basePath (/ui) from pathname so your checks work in dev & prod
function normalizePath(pathname: string) {
  return pathname.replace(/^\/ui(?=\/|$)/, "");
}

export default function DashboardShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const path = normalizePath(pathname);

  const isDashboardActive = path === "/dashboard" || path === "/dashboard/";
  const isSubscriptionsActive = path.startsWith("/dashboard/subscriptions");
  const isPaymentsActive = path.startsWith("/dashboard/payments");
  const isApiKeysActive = path.startsWith("/dashboard/keys");

  // Read subscriptions from the React Query cache (do not fetch on mount)
  const { data: subs = [] } = useQuery<DashboardSubscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => (await fetchDashboard()).subscriptions,
    enabled: false, // Disabled auto re-fetch: only retrieve from cache
  });

  const { user } = useAuth();

  return (
    <div className="h-screen flex flex-col bg-background p-6">
      <div className="flex flex-1 overflow-hidden">
        <SidebarProvider>
          <Sidebar className="w-64 text-white flex flex-col">
            <SidebarHeader className="p-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/80">
                  <div className="w-4 h-4 rounded-sm bg-white" />
                </div>
                <span className="flex items-baseline gap-2 text-lg font-semibold text-foreground">
                  <span className="font-geist-bold leading-[0.95] font-bold tracking-[-0.03em]">
                    Creative Tim
                  </span>
                  <span className="font-geist font-normal tracking-[-0.02em] opacity-90">
                    UI
                  </span>
                </span>
              </div>
            </SidebarHeader>

            <SidebarContent className="px-4 flex-1">
              <SidebarMenu>
                <SidebarMenuItem>
                  <Link href="/dashboard">
                    <SidebarMenuButton
                      className="text-gray-400 cursor-pointer transition-colors duration-100"
                      isActive={isDashboardActive}
                    >
                      <Home className="w-4 h-4" />
                      <span>Dashboard</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  {(() => {
                    // Count active subscriptions
                    const activeSubs = subs.filter(s => s.status === "active");
                    let linkHref = "/dashboard/subscriptions";
                    if (activeSubs.length === 1) {
                      linkHref = `/dashboard/subscriptions/${activeSubs[0].id}`;
                    }
                    return (
                      <Link href={linkHref}>
                        <SidebarMenuButton
                          className="text-gray-400 cursor-pointer transition-colors duration-100"
                          isActive={isSubscriptionsActive}
                        >
                          <CreditCard className="w-4 h-4" />
                          <span>Subscriptions</span>
                        </SidebarMenuButton>
                      </Link>
                    );
                  })()}
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link href="/dashboard/payments">
                    <SidebarMenuButton
                      className="text-gray-400 cursor-pointer transition-colors duration-100"
                      isActive={isPaymentsActive}
                    >
                      <Banknote className="w-4 h-4" />
                      <span>Payments</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <Link href="/dashboard/keys">
                    <SidebarMenuButton
                      className="text-gray-400 cursor-pointer transition-colors duration-100"
                      isActive={isApiKeysActive}
                    >
                      <Key className="w-4 h-4" />
                      <span>API Keys</span>
                    </SidebarMenuButton>
                  </Link>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>

            {/* User email and logout at the bottom */}
            <div className="mt-auto px-6 pb-6 pt-4">
              {user && (
                <div className="flex items-center justify-between gap-3 bg-card/60 border rounded-lg px-3 py-2">
                  <span className="truncate text-sm text-foreground">{user.email}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="cursor-pointer"
                  >
                    <LogOut className="text-muted-foreground" />
                  </Button>
                </div>
              )}
            </div>
          </Sidebar>

          <SidebarInset className="flex-1 overflow-auto bg-background">
            {children}
          </SidebarInset>
        </SidebarProvider>
      </div>
    </div>
  );
}
