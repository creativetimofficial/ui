"use client";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchDashboard } from "@/lib/api/dashboard";
import { useAuth } from "./AuthProvider";

export default function SessionDashboard() {
  const qc = useQueryClient();
  const { user, bootstrapDone } = useAuth();

  useEffect(() => {
    if (!user) return;
    if (!bootstrapDone) return;

    fetchDashboard()
      .then((data) => {
        // Global cache entries
        qc.setQueryData(["dashboardData"], data);
        qc.setQueryData(["subscriptions"], data.subscriptions);

        // 💡 Mark this page as the "global" transactions feed
        qc.setQueryData(["transactions", "page", 1, "global"], data.transactions.items);

        qc.setQueryData(["transactions", "meta", "global"], {
          has_more: data.transactions.has_more,
          next_cursor: data.transactions.next_cursor,
          version: data.transactions.version,
          total_count: data.transactions.total_count,
          page_size: data.transactions.page_size,
        });
      })
      .catch(() => {});
  }, [bootstrapDone, qc, user]);

  return null;
}
