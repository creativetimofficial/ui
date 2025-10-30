"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { formatDate } from "@/lib/api/formatDate";
import { formatMoney } from "@/lib/api/formatMoney";
import type { DashboardTransaction } from "@/lib/api/dashboard";

type PaymentsTableProps = {
  transactions: DashboardTransaction[];
  hasPrev: boolean;
  hasNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  /** new prop */
  page?: number;
  className?: string;
};

export function PaymentsTable({
  transactions,
  hasPrev,
  hasNext,
  onPrev,
  onNext,
  page = 1,
  className,
}: PaymentsTableProps) {
  return (
    <Card
      className={["mt-6 rounded-2xl border bg-card/60 shadow-none", className]
        .filter(Boolean)
        .join(" ")}
    >
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-gray-400">Date</TableHead>
              <TableHead className="text-gray-400">Amount</TableHead>
              <TableHead className="text-gray-400">Status</TableHead>
              <TableHead className="text-gray-400">Kind</TableHead>
              <TableHead className="text-gray-400">Description</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="py-10 text-center text-sm text-gray-400"
                >
                  No transactions yet.
                </TableCell>
              </TableRow>
            ) : (
              transactions.map((t) => (
                <TableRow key={t.id}>
                  {/* Date */}
                  <TableCell>
                    {formatDate(t.created_at, "MMM d, yyyy")}{" "}
                    <span className="text-gray-400 text-sm">
                      at{" "}
                      {formatDate(t.created_at, {
                        hour: "numeric",
                        minute: "2-digit",
                      })}
                    </span>
                  </TableCell>

                  {/* Amount */}
                  <TableCell>
                    {formatMoney(t.amount, t.currency, {
                      amountIsMinorUnits: false,
                    })}
                  </TableCell>

                  {/* Status */}
                  <TableCell>
                    <StatusBadge status={t.status} />
                  </TableCell>

                  {/* Kind */}
                  <TableCell>
                    {t.kind === "one_time"
                      ? "Perpetual"
                      : t.kind === "subscription_charge"
                      ? "Subscription"
                      : t.kind}
                  </TableCell>

                  {/* Description */}
                  <TableCell>{t.product}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Footer pagination */}
        <div className="flex items-center justify-end gap-3 mt-5">
          <Button
            variant="outline"
            size="sm"
            onClick={onPrev}
            disabled={!hasPrev}
            className="cursor-pointer"
          >
            Previous
          </Button>

          {/* ✅ Current page indicator */}
          <span className="text-sm text-gray-500">Page {page}</span>

          <Button
            variant="outline"
            size="sm"
            onClick={onNext}
            disabled={!hasNext}
            className="cursor-pointer"
          >
            Next
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
