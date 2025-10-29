"use client";

import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status?: string | null;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const normalized = (status || "").toLowerCase();

  const getStatusText = (s: string) => {
    switch (s) {
      case "active":
        return "Active";
      case "trialing":
        return "Trialing";
      case "paused":
        return "Paused";
      case "past_due":
        return "Past due";
      case "canceled":
        return "Canceled";
      default:
        return s ? s.charAt(0).toUpperCase() + s.slice(1) : "—";
    }
  };

  const getStatusClass = (s: string) => {
    switch (s) {
      case "active":
      case "completed": // for transactions
      case "trialing":
        return "text-emerald-500 bg-emerald-600/10";
      case "paused":
      case "past_due":
        return "text-amber-500 bg-amber-600/10";
      case "canceled":
        return "text-red-500 bg-red-600/10";
      default:
        return "text-muted-foreground bg-muted/40";
    }
  };

  return (
    <Badge
      variant="secondary"
      className={`${getStatusClass(normalized)} gap-2 py-1`}
    >
      {getStatusText(normalized)}
    </Badge>
  );
}
