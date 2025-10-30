// PaymentsDetailsClient.tsx
"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransactionsPage } from "@/lib/api/transactions";
import type { DashboardTransaction, TxMeta } from "@/lib/api/dashboard";
import { PaymentsTable } from "@/components/dashboard/PaymentsTable";

export default function PaymentsDetailsClient({ id: subscriptionId }: { id: string }) {

  const qc = useQueryClient();
  const [page, setPage] = useState(1);

  // 🧩 define a scope key: use subscriptionId or "global" for the default feed
  const scope = subscriptionId || "global";

  // 🧩 read transactions for this specific scope and page
  const { data: transactions = [] } = useQuery<DashboardTransaction[]>({
    queryKey: ["transactions", "page", page, scope],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // 🧩 read meta for this scope
  const { data: meta } = useQuery<TxMeta>({
    queryKey: ["transactions", "meta", scope],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // 🧩 fetch the first page for this subscription if not already cached
  useEffect(() => {
    const cached = qc.getQueryData<DashboardTransaction[]>(["transactions", "page", 1, scope]);
    if (!cached) {
      fetchTransactionsPage({
        limit: 15,
        subscription_id: subscriptionId ?? undefined,
      })
        .then((res) => {
          qc.setQueryData(["transactions", "page", 1, scope], res.items);
          qc.setQueryData(["transactions", "meta", scope], {
            has_more: res.has_more,
            next_cursor: res.next_cursor,
            version: res.version,
            page_size: res.page_size,
            total_count: res.total_count,
          });
        })
        .catch((err) => console.error("Failed to fetch first page:", err));
    }
  }, [qc, scope, subscriptionId]); // 🧩 added

  // 🧩 no need to filter globally anymore — transactions are already scoped
  const visibleTransactions = transactions;

  const pageSize = meta?.page_size ?? 15;
  const totalCount = meta?.total_count ?? 0;
  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  const hasPrev = page > 1;
  const hasNext = !!meta?.has_more;

  const onPrev = () => {
    if (hasPrev) setPage((p) => p - 1);
  };

  const onNext = async () => {
    if (!hasNext) return;

    const nextPage = page + 1;
    const nextPageKey = ["transactions", "page", nextPage, scope];
    const nextMetaKey = ["transactions", "meta", scope];

    // 🧩 1️⃣ Check if we already have this page cached
    const cachedPage = qc.getQueryData<DashboardTransaction[]>(nextPageKey);
    const cachedMeta = qc.getQueryData<TxMeta>(nextMetaKey);

    if (cachedPage && cachedMeta) {
      // 🧩 Already cached → just switch page, skip fetch
      setPage(nextPage);
      return;
    }

    // 🧩 2️⃣ Otherwise, fetch it
    const res = await fetchTransactionsPage({
      cursor: meta?.next_cursor,
      limit: pageSize,
      subscription_id: subscriptionId ?? undefined,
    });

    // 🧩 3️⃣ Cache new results
    qc.setQueryData(nextPageKey, res.items);
    qc.setQueryData<TxMeta>(nextMetaKey, {
      has_more: res.has_more,
      next_cursor: res.next_cursor,
      version: res.version,
      page_size: res.page_size,
      total_count: res.total_count,
    });

    // 🧩 4️⃣ Advance page
    setPage(nextPage);
  };

  return (
    <PaymentsTable
      transactions={visibleTransactions}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
      page={page}
      totalPages={totalPages}
    />
  );
}
