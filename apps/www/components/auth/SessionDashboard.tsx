// components/auth/SessionDashboard.tsx
"use client";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { fetchDashboard } from "@/lib/api/dashboard";
import { useAuth } from "./AuthProvider";

export default function SessionDashboard() {
  const qc = useQueryClient();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    // Prime the cache once; no UI flicker.
    fetchDashboard()
      .then((data) => {
        qc.setQueryData(["dashboardData"], data);
        qc.setQueryData(["subscriptions"], data.subscriptions);
        qc.setQueryData(["transactions", "page", 1], data.transactions.items);
        qc.setQueryData(["transactions", "meta"], {
          has_more: data.transactions.has_more,
          next_cursor: data.transactions.next_cursor,
          version: data.transactions.version,
          total_count: data.transactions.total_count
        });
      })
      .catch(() => {
        // Optional: surface a non-blocking toast
      });
  }, [qc, user]);

  return null;
}
