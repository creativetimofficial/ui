'use client';

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboard, type DashboardSubscription } from "@/lib/api/dashboard";
import { formatMoney } from "@/lib/api/formatMoney";
import { StatusBadge } from "@/components/dashboard/StatusBadge";

export function SubscriptionCard({
  name,
  description,
  price,
  href,
  status,
}: {
  name: string | null;
  description: string;
  price: string;
  href: string;
  status: string;
}) {
  return (
    <Link href={href} className="block group">
      <Card className="group relative bg-card/60 px-6 shadow-none transition-colors cursor-pointer hover:border-primary/30">
        {/* top-right arrow */}
        <ArrowRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground transition-transform group-hover:translate-x-1" />

        {/* logo */}
        <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
          <div className="h-5 w-5 rounded-md bg-black/10">
            <div className="h-full w-full rounded-md bg-white/90 mix-blend-overlay" />
          </div>
        </div>

        <CardContent className="p-0">
          <h3 className="mb-4 text-lg font-semibold text-foreground">{name}</h3>
          <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
            {description}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-lg font-medium">{price}</div>
            <StatusBadge status={status} />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function SubscriptionsCards() {
  // Read subscriptions from the React Query cache (do not fetch on mount)
  const { data: subs = [] } = useQuery<DashboardSubscription[]>({
    queryKey: ["subscriptions"],
    queryFn: async () => (await fetchDashboard()).subscriptions,
    enabled: false, // Disabled auto re-fetch: only retrieve from cache
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground border-b pb-6">
        Subscriptions
      </h1>

      <div className="w-full bg-background py-6">
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {subs.length > 0 ? (
            subs.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                name={sub.plan}
                description={sub.product_description}
                price={`${formatMoney(sub.unit_price_amount, sub.currency)} /${sub.billing_cycle}`}
                href={`/dashboard/subscriptions/${sub.id}`}
                status={sub.status}
              />
            ))
          ) : (
            <p className="text-muted-foreground text-center col-span-full py-10">
              No active subscriptions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
