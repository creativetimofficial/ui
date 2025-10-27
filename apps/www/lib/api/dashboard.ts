// lib/dashboard.ts
import { api } from "@/lib/auth/api";
import { AuthUser } from "../auth/auth.types";

// Based on payment_subscriptions and payment_transactions from schema.rb

export type DashboardSubscription = {
  id: string; // subscription_id
  status: string;
  plan: string | null; // product_name || price_description
  renews_at: string | null; // next_billed_at
  canceled_at: string | null;
  currency: string | null;
  team: boolean;
  team_size: number;
  created_at: string;
};

export type DashboardTransaction = {
  id: string; // transaction_id
  amount: string; // usually returned as string with decimal (precision: 12, scale: 2)
  currency: string | null;
  status: string;
  created_at: string;
  product_id: string | null;
  product: string | null;
  kind: string | null;
  refunded_at: string | null;
  refund_status: string | null;
  refund_reason: string | null;
  subscription_id: string | null;
};

export type DashboardLicense = {
  status: string;
  features: string[];
  items: unknown[];
  expires_at: string | null;
};

export type DashboardResponse = {
  user: AuthUser;
  subscriptions: DashboardSubscription[];
  transactions: {
    items: DashboardTransaction[];
    has_more: boolean;
    next_cursor?: string;
    version?: string;
  };
  counts: {
    transactions: number;
    active_subscriptions: number;
  };
  license: DashboardLicense;
};

export async function fetchDashboard() {
  return api<DashboardResponse>("/dashboard");
}
