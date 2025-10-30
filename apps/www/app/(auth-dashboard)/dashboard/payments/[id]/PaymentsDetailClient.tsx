// PaymentsMainClient.tsx
"use client";

import * as React from "react";
import { useState, useMemo } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransactionsPage } from "@/lib/api/transactions";
import type { DashboardTransaction, TxMeta } from "@/lib/api/dashboard";
import { PaymentsTable } from "@/components/dashboard/PaymentsTable";

export default function PaymentsMainClient({ id: subscriptionId }: { id: string }) {

  const qc = useQueryClient();
  const [page, setPage] = useState(1);

  const { data: transactions = [] } = useQuery<DashboardTransaction[]>({
    queryKey: ["transactions", "page", page],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  const { data: meta } = useQuery<TxMeta>({
    queryKey: ["transactions", "meta"],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // Filter by subscription on the client, if your cache is unfiltered
  const filtered = useMemo(
    () => transactions.filter(t => String(t.subscription_id) === String(subscriptionId)),
    [transactions, subscriptionId]
  );

  const pageSize    = meta?.page_size ?? 25;
  const totalCount  = meta?.total_count ?? 0;
  const totalPages  = Math.max(1, Math.ceil(totalCount / pageSize));

  const hasPrev = page > 1;
  const hasNext = !!meta?.has_more;

  const onPrev = () => {
    if (hasPrev) setPage(p => p - 1);
  };

  const onNext = async () => {
    if (!hasNext) return;
    const res = await fetchTransactionsPage({
      cursor: meta?.next_cursor,
      limit: pageSize,
      include_subs: false,  // only transactions
      subscription_id: subscriptionId, // filter for this subscription
    });


    qc.setQueryData(["transactions", "page", page + 1, subscriptionId], res.items);
    qc.setQueryData<TxMeta>(["transactions", "meta", subscriptionId], {
      has_more: res.has_more,
      next_cursor: res.next_cursor,
      version: res.version,
      page_size: res.page_size,
      total_count: res.total_count,
    });

    setPage(p => p + 1);
  };

  return (
    <PaymentsTable
      transactions={filtered}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
      page={page}
      totalPages={totalPages}
    />
  );
}
