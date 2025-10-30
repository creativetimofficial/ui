"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchTransactionsPage } from "@/lib/api/transactions";
import type { DashboardTransaction, TxMeta } from "@/lib/api/dashboard";
import { PaymentsTable } from "@/components/dashboard/PaymentsTable";

export default function PaymentsClient() {
  const qc = useQueryClient();
  const [page, setPage] = useState(1);

  // 🧩 fixed scope for the global feed
  const scope = "global";

  // 🧩 read cached data
  const { data: transactions = [] } = useQuery<DashboardTransaction[]>({
    queryKey: ["transactions", "page", page, scope],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  const { data: meta } = useQuery<TxMeta>({
    queryKey: ["transactions", "meta", scope],
    queryFn: () => Promise.reject("cache only"),
    enabled: false,
  });

  // 🧩 prefetch first page if not already cached (e.g. user refresh)
  useEffect(() => {
    const cached = qc.getQueryData<DashboardTransaction[]>(["transactions", "page", 1, scope]);
    if (!cached) {
      fetchTransactionsPage({ limit: 25 }).then((res) => {
        qc.setQueryData(["transactions", "page", 1, scope], res.items);
        qc.setQueryData(["transactions", "meta", scope], {
          has_more: res.has_more,
          next_cursor: res.next_cursor,
          version: res.version,
          page_size: res.page_size,
          total_count: res.total_count,
        });
      });
    }
  }, [qc, scope]);

  const pageSize = meta?.page_size ?? 25;
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

    // 🧩 1️⃣ check cache first
    const cachedPage = qc.getQueryData<DashboardTransaction[]>(nextPageKey);
    const cachedMeta = qc.getQueryData<TxMeta>(nextMetaKey);

    if (cachedPage && cachedMeta) {
      setPage(nextPage);
      return;
    }

    // 🧩 2️⃣ otherwise fetch from backend
    const res = await fetchTransactionsPage({
      cursor: meta?.next_cursor,
      limit: pageSize,
      include_subs: false, // only transactions (no subscriptions)
    });

    // 🧩 3️⃣ cache results
    qc.setQueryData(nextPageKey, res.items);
    qc.setQueryData<TxMeta>(nextMetaKey, {
      has_more: res.has_more,
      next_cursor: res.next_cursor,
      version: res.version,
      page_size: res.page_size,
      total_count: res.total_count,
    });

    // 🧩 4️⃣ move page
    setPage(nextPage);
  };

  return (
    <PaymentsTable
      transactions={transactions}
      hasPrev={hasPrev}
      hasNext={hasNext}
      onPrev={onPrev}
      onNext={onNext}
      page={page}
      totalPages={totalPages}
    />
  );
}
