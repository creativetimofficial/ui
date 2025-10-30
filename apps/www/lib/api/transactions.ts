// lib/api/transactions.ts
import { api } from "@/lib/auth/api";
import { DashboardData } from "@/lib/api/dashboard";

type FetchTransactionsOptions = {
  cursor?: string | null;
  limit?: number;
  include_subs?: boolean;
  subscription_id?: string | null;
};

export async function fetchTransactionsPage({
  cursor,
  limit = 25,
  include_subs = false,
  subscription_id,
}: FetchTransactionsOptions): Promise<DashboardData["transactions"]> {
  // Build query string for /api/v1/dashboard
  const params = new URLSearchParams();
  params.set("limit", String(limit));
  params.set("include_subs", String(include_subs));
  if (cursor) params.set("cursor", cursor);
  if (subscription_id) params.set("subscription_id", subscription_id);

  // 🔥 Use api<T>() here so:
  // - Authorization header is attached
  // - refresh-on-401 works
  // - credentials: "include" is set
  const data = await api<{ transactions: DashboardData["transactions"] }>(
    `/dashboard?${params.toString()}`,
    {
      method: "GET",
      // no need to set headers; api() will attach Authorization/Bearer if we have it
      // no need to set credentials here; api() does that
    }
  );

  return data.transactions;
}
