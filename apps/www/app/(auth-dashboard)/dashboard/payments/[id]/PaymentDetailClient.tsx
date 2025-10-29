"use client";

import * as React from "react";
import { useMemo, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransactionsPage } from "@/lib/api/transactions";
import type { DashboardTransaction, TxMeta } from "@/lib/api/dashboard";
import { PaymentsTable } from "@/components/dashboard/PaymentsTable";

export default function PaymentDetailClient({ id: subscriptionId }: { id: string }) {
  const qc = useQueryClient();
  const [page, setPage] = useState(1);

  // Read the current page from cache only
  const { data: transactions = [] } = useQuery<DashboardTransaction[]>({
    queryKey: ["transactions", "page", page],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // Read pagination meta from cache only
  const { data: meta } = useQuery<TxMeta>({
    queryKey: ["transactions", "meta"],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // Filter ONLY the transactions that match the subscription id
  const filtered = useMemo(
    () =>
      transactions.filter(
        (t) => String(t.subscription_id) === String(subscriptionId)
      ),
    [transactions, subscriptionId]
  );

  const hasPrev = page > 1;
  const hasNext = !!meta?.has_more;

  const onPrev = () => {
    if (hasPrev) setPage((p) => p - 1);
  };

  const onNext = async () => {
    if (!hasNext) return;
    const res = await fetchTransactionsPage(meta?.next_cursor || undefined);
    qc.setQueryData(["transactions", "page", page + 1], res.items);
    qc.setQueryData<TxMeta>(["transactions", "meta"], {
      has_more: res.has_more,
      next_cursor: res.next_cursor,
      version: res.version,
    });
    setPage((p) => p + 1);
  };

  return (
    <PaymentsTable
      transactions={filtered}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
    />
  );
}
