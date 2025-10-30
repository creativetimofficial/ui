// lib/api/transactions.ts
import { DashboardData } from "@/lib/api/dashboard";

export async function fetchTransactionsPage(cursor?: string, limit = 25) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/dashboard`);
  url.searchParams.set("limit", String(limit));
  if (cursor) url.searchParams.set("cursor", cursor);

  const res = await fetch(url.toString(), {
    credentials: "include",
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch dashboard page");

  type Resp = {
    transactions: DashboardData["transactions"];
  };

  const json = (await res.json()) as Resp;

  return json.transactions;
}
