"use client";

import * as React from "react";
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransactionsPage } from "@/lib/api/transactions";
import type { DashboardTransaction, TxMeta } from "@/lib/api/dashboard";
import { PaymentsTable } from "@/components/dashboard/PaymentsTable";

export default function PaymentsMainClient() {
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

  const hasPrev = page > 1;
  const hasNext = !!meta?.has_more;

  const onPrev = () => {
    if (hasPrev) setPage((p) => p - 1);
  };

  const onNext = async () => {
    if (!hasNext) return;
    const res = await fetchTransactionsPage({
      cursor: meta?.next_cursor,
      include_subs: false,  // only transactions
    });
    // Cache the next page and updated meta
    qc.setQueryData(["transactions", "page", page + 1], res.items);
    qc.setQueryData<TxMeta>(["transactions", "meta"], {
      has_more: res.has_more,
      next_cursor: res.next_cursor,
      version: res.version,
      total_count: res.total_count,
      page_size: res.page_size,
    });
    setPage((p) => p + 1);
  };

  const pageSize    = meta?.page_size ?? 25;
  const totalCount  = meta?.total_count ?? 0;
  const totalPages  = Math.max(1, Math.ceil(totalCount / pageSize));

  return (
    <PaymentsTable
      transactions={transactions}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
      totalPages={totalPages}
    />
  );
}
