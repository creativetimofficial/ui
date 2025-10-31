'use client';

import { useAuth } from "@/components/auth/AuthProvider";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { DashboardSubscription } from "@/lib/api/dashboard";
import DashboardShell from "@/components/auth/DashboardShell";
export interface Subscription {
  id: string;
  plan: string;
  status: string;
  renews_at: string | null;
  canceled_at: string | null;
}

export default function DashboardPage() {
  const { user } = useAuth();

    const { data: subs } = useQuery<DashboardSubscription[]>({
    queryKey: ["subscriptions"],
    queryFn: () => Promise.reject("cache only"),
    enabled: false, // Do not auto-fetch, only read from cache
  });

  // If there's no user, show a white window spinner.
  if (!user) {
    return (
      <main className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <svg className="animate-spin h-8 w-8 text-gray-500 mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
          </svg>
          <span>Loading...</span>
        </div>
      </main>
    );
  }

  return (
    <DashboardShell title="Dashboard">
      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Active Subscriptions */}
        <Card className="bg-card/60 shadow-none">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Active subscriptions</CardTitle>
              <Button variant="ghost" size="sm" className="text-blue-600">
                View all
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {(!subs || subs.length === 0) ? (
              <div className="text-gray-500 text-center py-8">
                There are no active subscriptions.
              </div>
            ) : subs.length === 1 ? (
              <div className="flex flex-row gap-4">
                <div
                  key={subs[0].id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:bg-sidebar-accent cursor-pointer min-w-[270px] w-full"
                  style={{ maxWidth: "100%" }}
                >
                  <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
                    <div className="h-5 w-5 rounded-md bg-black/10">
                      <div className="h-full w-full rounded-md bg-white/90 mix-blend-overlay" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 dark:text-white">{subs[0].plan}</div>
                    <div className="text-sm text-gray-500">
                      {subs[0].status === "active"
                        ? "Subscription is active"
                        : subs[0].status === "canceled"
                        ? "Canceled"
                        : subs[0].status}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </div>
              </div>
            ) : (
              <div className="flex flex-row gap-4">
                {subs.slice(0, 2).map((sub) => (
                  <div
                    key={sub.id}
                    className="flex items-center gap-4 p-4 border rounded-lg hover:bg-sidebar-accent cursor-pointer flex-1"
                    style={{ maxWidth: "100%" }}
                  >
                    <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
                      <div className="h-5 w-5 rounded-md bg-black/10">
                        <div className="h-full w-full rounded-md bg-white/90 mix-blend-overlay" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900 dark:text-white">{sub.plan}</div>
                      <div className="text-sm text-gray-500">
                        {sub.status === "active"
                          ? "Subscription is active"
                          : sub.status === "canceled"
                          ? "Canceled"
                          : sub.status}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </DashboardShell>
  );
}