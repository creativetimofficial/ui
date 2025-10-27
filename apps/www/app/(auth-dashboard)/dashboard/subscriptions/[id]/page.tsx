'use client';

import { Badge } from "@/components/ui/badge";
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
import { Calendar, CreditCard, CheckCircle2 } from "lucide-react";

export default function SubscriptionDetail() {
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Top bar */}
      <div className="border-b">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            {/* Title + Brand */}
            <div className="flex items-center gap-4">
              <div className="grid h-10 w-10 place-content-center rounded-lg bg-gradient-to-br from-green-400 to-blue-500">
                <div className="h-5 w-5 rounded-sm bg-white" />
              </div>
              <div>
                <h1 className="text-2xl font-semibold tracking-tight">AeroEdit Pro</h1>
                <div className="mt-1 flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="text-2xl font-semibold leading-none text-foreground">€43.08</span>
                  <span className="text-muted-foreground">/month</span>
                  <Badge variant="secondary" className="bg-emerald-600/15 text-emerald-500">
                    Active
                  </Badge>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="ghost" className="rounded-full border px-4 text-sm">
                Cancel subscription
              </Button>
            </div>
          </div>
          <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar className="h-4 w-4" /> Started on: <span className="font-medium text-foreground">Oct 26, 2025</span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-6 lg:grid-cols-3">
        {/* Left column */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="bg-card/60 shadow-none">
            <CardHeader>
              <CardTitle className="text-lg">Next payment</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="text-2xl font-semibold">€43.08</div>
                <div className="text-sm text-muted-foreground">due <span className="font-medium text-foreground">Nov 26, 2025</span></div>
              </div>

              <div className="space-y-3">
                <div className="text-sm font-medium">Payment method</div>
                <div className="flex items-center justify-between rounded-lg border p-3">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-content-center rounded-md bg-muted">
                      <CreditCard className="h-4 w-4" />
                    </div>
                    <div className="text-sm text-muted-foreground">**** 4242</div>
                  </div>
                  <Button size="sm" variant="outline">Update</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/60 shadow-none">
            <CardHeader className="flex-row items-center justify-between space-y-0">
              <CardTitle className="text-lg">Payments</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">View all</Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">Oct 26, 2025</div>

              <div className="rounded-lg border p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="text-sm font-medium">New</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>AeroEdit Pro</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-lg font-semibold">€43.08</div>
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
              {/* Product row */}
              <div className="mb-6 rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[55%]">&nbsp;</TableHead>
                      <TableHead className="w-[15%] text-right">Qty</TableHead>
                      <TableHead className="w-[15%] text-right">Tax</TableHead>
                      <TableHead className="w-[15%] text-right">Amount <span className="text-xs text-muted-foreground align-middle">(exc. tax)</span></TableHead>
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
                            <div className="font-medium">AeroEdit Pro</div>
                            <div className="text-sm text-muted-foreground">Enhanced design tools for scaling teams who need more flexibility.</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right align-top">1</TableCell>
                      <TableCell className="text-right align-top">21%</TableCell>
                      <TableCell className="text-right align-top">€35.60</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Totals */}
              <div className="space-y-2">
                <div className="flex items-center justify-end gap-6 text-sm">
                  <div className="text-muted-foreground">Amount</div>
                  <div className="w-28 text-right font-medium">€35.60</div>
                </div>
                <div className="flex items-center justify-end gap-6 text-sm">
                  <div className="text-muted-foreground">Tax</div>
                  <div className="w-28 text-right font-medium">€7.48</div>
                </div>
                <div className="mt-4 flex items-center justify-end gap-6 border-t pt-4 text-base">
                  <div className="font-medium">Total (Inc. tax)</div>
                  <div className="w-28 text-right font-semibold">€43.08</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
