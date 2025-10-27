'use client';

import { useAuth } from "@/components/auth/AuthProvider";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight,
} from "lucide-react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
export interface Subscription {
  id: string;
  plan: string;
  status: string;
  renews_at: string | null;
  canceled_at: string | null;
}

export default function DashboardPage() {
  const { user } = useAuth();
  const queryClient = useQueryClient();

  const cachedSubs = queryClient.getQueryData<Subscription[]>(["subscriptions"]);

  const { data: subs } = useQuery<Subscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => cachedSubs ?? [], // satisfies v5 requirement; won’t run because enabled:false
    initialData: cachedSubs,     // ← use cached data from bootstrap
    enabled: false,              // ← no automatic fetch
    staleTime: 5 * 60 * 1000,    // ← consider fresh for 5 minutes
  });

  // Console log the subs variable
  React.useEffect(() => {
    console.log('subs', subs);
  }, [subs]);

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

  // 5️⃣ Render
  if (!subs) return <p>No subscriptions found.</p>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 text-foreground border-b pb-6">Dashboard</h1>
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
            
            <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-sidebar-accent cursor-pointer">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-sm"></div>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-gray-900 dark:text-white">AeroEdit Pro</div>
                <div className="text-sm text-gray-500">Enhanced design tools for scaling teams who...</div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}