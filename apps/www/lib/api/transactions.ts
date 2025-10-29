import { DashboardTransaction } from "./dashboard";

// lib/api/transactions.ts
export async function fetchTransactionsPage(cursor?: string, limit = 25) {
  const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/dashboard`);
  url.searchParams.set("limit", String(limit));
  if (cursor) url.searchParams.set("cursor", cursor);

  const res = await fetch(url.toString(), {
    credentials: "include", // forward Rails session cookie
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch dashboard page");
  type Resp = {
    transactions: {
      items: DashboardTransaction[];
      has_more: boolean;
      next_cursor: string | null;
      version?: string | null;
    };
  };
  const json = (await res.json()) as Resp;

  return json.transactions;
}
