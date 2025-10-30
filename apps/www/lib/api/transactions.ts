// lib/api/transactions.ts
import { DashboardData } from "@/lib/api/dashboard";

type FetchTransactionsOptions = {
  cursor?: string | null;
  limit?: number;
  include_subs?: boolean;
  subscription_id?: string | null;
};

/**
 * Fetch a page of transactions from the API.
 *
 * - Uses keyset pagination via the `cursor` param
 * - Supports optional `subscription_id` filtering
 * - `include_subs` controls whether to include subscriptions in the response
 */
export async function fetchTransactionsPage({
  cursor,
  limit = 25,
  include_subs = false,
  subscription_id,
}: FetchTransactionsOptions) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not defined");
  }

  const url = new URL(`${baseUrl}/api/v1/dashboard`);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("include_subs", String(include_subs));

  if (cursor) url.searchParams.set("cursor", cursor);
  if (subscription_id) url.searchParams.set("subscription_id", subscription_id);

  const res = await fetch(url.toString(), {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Failed to fetch dashboard page: ${errText}`);
  }

  type Resp = {
    transactions: DashboardData["transactions"];
  };

  const json = (await res.json()) as Resp;

  return json.transactions;
}
