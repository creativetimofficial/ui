'use client';

import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DashboardData } from "@/lib/api/dashboard";
import { useQuery } from "@tanstack/react-query";
import { Calendar, CreditCard, CheckCircle2, Key } from "lucide-react";
import { formatMoney } from "@/lib/api/formatMoney";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { formatDate } from "@/lib/api/formatDate";
import { useAuth } from "@/components/auth/AuthProvider";
import { LicenseItem, LicenseSubscription } from "@/lib/auth/auth.types";
import Link from "next/link";

function toInt(value: unknown): number | null {
  const n = Number(value);
  return Number.isFinite(n) ? Math.round(n) : null;
}

type TaxTotals = { subtotal: number | null; tax: number | null; discount: number | null; total: number | null };

function aggregateTxTaxTotals(taxRatesUsed: unknown): TaxTotals {
  if (!Array.isArray(taxRatesUsed)) return { subtotal: null, tax: null, discount: null, total: null };

  let saw = false;
  let subtotal = 0, tax = 0, discount = 0, total = 0;

  for (const r of taxRatesUsed) {
    const t = r?.totals;
    if (!t) continue;
    saw = true;
    subtotal += toInt(t.subtotal) ?? 0;
    tax      += toInt(t.tax) ?? 0;
    discount += toInt(t.discount) ?? 0;
    total    += toInt(t.total) ?? 0;
  }
  return saw ? { subtotal, tax, discount, total } : { subtotal: null, tax: null, discount: null, total: null };
}


export default function SubscriptionDetailClient({ id }: { id: string }) {  
  const { user } = useAuth();

  // Find a license item whose 'subscriptions' contains a subscription with id === props.id
  const matchingLicenseItem = useMemo(() => {
    if (!user?.license?.items || !Array.isArray(user.license.items)) return undefined;
    return user.license.items.find((item: LicenseItem) => {
      if (!item.subscriptions || !Array.isArray(item.subscriptions)) return false;
      // Each element in item.subscriptions should be LicenseSubscription, not LicenseItem
      // Check type - sub: LicenseSubscription (which has subscription_id)
      return item.subscriptions.some(
        (sub: LicenseSubscription) => String(sub.subscription_id) === String(id)
      );
    });
  }, [user, id]);
  
  // Read subscriptions from the React Query cache (do not fetch on mount)
  // Use React Query to read dashboardData from the cache, without triggering a refetch.
  // Read from cache only, no fetch: use the query key and set enabled: false, provide a dummy queryFn.
  const { data: dashboardData } = useQuery<DashboardData>({
    queryKey: ["dashboardData"],
    queryFn: () => Promise.reject("cache only"),
    enabled: false, // Do not auto-fetch, only read from cache
  });

  const subs = useMemo(() => dashboardData?.subscriptions ?? [], [dashboardData]);
  const txs  = useMemo(() => dashboardData?.transactions?.items ?? [], [dashboardData]);

  const sub = useMemo(
    () => subs.find((s) => String(s.id) === String(id)),
    [subs, id]
  );

  const lastTx = useMemo(() => {
    if (!id) return undefined;
    const matching = txs.filter((t) => String(t.subscription_id) === String(id));
    return matching
      .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())[0];
  }, [txs, id]);

  const currency = sub?.currency ?? "USD";
  const priceStr = formatMoney(sub?.unit_price_amount, currency);
  const cycle = sub?.billing_cycle

  // Prefer tx tax totals if present; otherwise fall back to the per-cycle price
  const pricePerCycleCents = toInt(sub?.unit_price_amount) ?? 0;
  const txTotals = aggregateTxTaxTotals(lastTx?.tax_rates_used);
  const totals: TaxTotals = {
    subtotal: txTotals.subtotal ?? pricePerCycleCents,
    tax:      txTotals.tax,                         // may be null
    discount: txTotals.discount,                    // may be null / 0
    total:    txTotals.total ?? pricePerCycleCents,
  };

  // convenience formatted strings
  const fmtSubtotal = formatMoney(totals.subtotal ?? pricePerCycleCents, currency);
  const fmtTax      = totals.tax != null ? formatMoney(totals.tax, currency) : null;
  const fmtDiscount = totals.discount != null ? formatMoney(totals.discount, currency) : null;
  const fmtTotal    = formatMoney(totals.total ?? pricePerCycleCents, currency);
  
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b pb-6">
        <div className="mx-auto">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Title + Brand */}
            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-green-400 to-blue-500">
                <div className="h-5 w-5 rounded-sm bg-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  {sub?.plan || "Subscription"}
                </h1>
                <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-2xl font-semibold leading-none text-foreground">
                    {priceStr}
                  </span>
                  <span className="text-muted-foreground">{cycle}</span>
                  <StatusBadge status={sub?.status} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                className="rounded-full border px-4 text-sm"
                disabled={!(sub && sub.status === "active")}
                onClick={() => {/* TODO: open cancel flow */}}
              >
                Cancel subscription
              </Button>

              {subs.length > 1 && (
                <Link href="/dashboard/subscriptions">
                  <Button
                    variant="outline"
                    className="rounded-full px-4 text-sm"
                  >
                    See all subscriptions
                  </Button>
                </Link>
              )}
              
            </div>
          </div>

          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" />
            Started on:
            <span className="font-medium text-foreground">
              {formatDate(sub?.created_at, "MMM d, yyyy")}
            </span>
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Key className="h-4 w-4" />
            License Key:
            <span className="font-medium text-foreground">
              {matchingLicenseItem?.license_key || 'No license'}
            </span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto grid gap-6 py-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="bg-card/60 shadow-none">
            <CardHeader>
              <CardTitle className="text-lg">Next payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-2xl font-semibold">
                  {priceStr}
                </div>
                <div className="text-sm text-muted-foreground">
                  due <span className="font-medium text-foreground">
                    {formatDate(sub?.next_billed_at, "MMM d, yyyy")}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Payment method</div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-content-center rounded-md bg-muted">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {/* Placeholder; wire actual PM info if/when API exposes it */}
                      **** •••• 
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/60 shadow-none">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">Payments</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                View all
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* If you later pass transactions for this subscription, render a few here.
                  For now we keep the shell, or you can remove this card entirely. */}
              <div className="text-sm text-muted-foreground">
                {sub ? formatDate(sub?.created_at, "MMM d, yyyy") : "—"}
              </div>

              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">
                    {sub?.status ? sub.status.replace("_", " ") : "—"}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{sub?.plan || "—"}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">{priceStr}</div>
                  <div className="flex items-center gap-2 rounded-lg border px-2 py-1 text-xs">
                    <CheckCircle2 className="h-4 w-4" /> Completed
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="lg:col-span-2">
          <Card className="bg-card/60 shadow-none">
            <CardHeader>
              <CardTitle>Recurring products in this subscription</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-6 rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[55%]">&nbsp;</TableHead>
                      <TableHead className="w-[15%] text-right">Qty</TableHead>
                      <TableHead className="w-[15%] text-right">Cycle</TableHead>
                      <TableHead className="w-[15%] text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="hover:bg-muted/40">
                      <TableCell>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 grid h-8 w-8 place-content-center rounded-md bg-gradient-to-br from-green-400 to-blue-500">
                            <div className="h-4 w-4 rounded-[2px] bg-white" />
                          </div>
                          <div>
                            <div className="font-medium">{sub?.plan || "—"}</div>
                            <div className="text-sm text-muted-foreground">
                              {sub?.product_description || "—"}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right align-top">1</TableCell>
                      <TableCell className="text-right align-top">
                        {sub?.billing_cycle || "—"}
                      </TableCell>
                      <TableCell className="text-right align-top">
                        {priceStr}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Totals with taxes/discounts if available from last transaction; else per-cycle amount */}
              <div className="space-y-2">
                <div className="flex items-center justify-end gap-6 text-sm">
                  <div className="text-muted-foreground">Subtotal</div>
                  <div className="w-28 text-right font-medium">{fmtSubtotal}</div>
                </div>

                {fmtTax && (
                  <div className="flex items-center justify-end gap-6 text-sm">
                    <div className="text-muted-foreground">Tax</div>
                    <div className="w-28 text-right font-medium">{fmtTax}</div>
                  </div>
                )}

                {fmtDiscount && Number(totals.discount) !== 0 && (
                  <div className="flex items-center justify-end gap-6 text-sm">
                    <div className="text-muted-foreground">Discount</div>
                    <div className="w-28 text-right font-medium">-{fmtDiscount}</div>
                  </div>
                )}

                <div className="mt-4 flex items-center justify-end gap-6 border-t pt-4 text-base">
                  <div className="font-medium">Total</div>
                  <div className="w-28 text-right font-semibold">{fmtTotal}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
