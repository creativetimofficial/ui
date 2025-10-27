'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";

export function SubscriptionCard({
  name = "AeroEdit Pro",
  description = "Enhanced design tools for scaling teams who need more flexibility.",
  price = "€50.00/month",
}) {
  return (
    <Card className="group relative rounded-2xl border border-border/80 bg-card/60 p-6 shadow-none transition-colors">
      {/* top-right arrow */}
      <ArrowRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground" />

      {/* logo */}
      <div className="grid h-10 w-10 place-content-center rounded-xl bg-gradient-to-br from-green-400 to-blue-500">
        <div className="h-5 w-5 rounded-md bg-black/10">
          <div className="h-full w-full rounded-md bg-white/90 mix-blend-overlay" />
        </div>
      </div>

      {/* content */}
      <CardContent className="p-0">
        <h3 className="mb-4 text-lg font-semibold text-foreground">{name}</h3>
        <p className="mb-6 max-w-md leading-relaxed text-muted-foreground">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <div className="text-lg font-medium">{price}</div>
          <div className="flex items-center gap-2 rounded-lg border px-3 py-2 text-base">
            <Check className="h-4 w-4" />
            <span>Active</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

/** Example usage showing the two cards side-by-side on the subscriptions page */
export default function SubscriptionsCards() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-foreground border-b pb-6">Subscriptions</h1>
      <div className="w-full bg-background py-6">
        <div className="mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SubscriptionCard />
          <SubscriptionCard />
        </div>
      </div>
    </div>
  );
}
