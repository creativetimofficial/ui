// lib/dashboard.ts
import { api } from "@/lib/auth/api";
import { AuthUser } from "../auth/auth.types";

// Based on payment_subscriptions and payment_transactions from schema.rb

export type DashboardSubscription = {
  id: string; // subscription_id
  status: string;
  plan: string | null; // product_name 
  next_billed_at: string | null; 
  canceled_at: string | null;
  currency: string;
  product_description: string;
  product_code: string;
  unit_price_amount: number;
  team: boolean;
  team_size: number;
  created_at: string;
  billing_cycle: string;
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
  tax_rates_used?: unknown; // jsonb column; can contain array or object

};

export type DashboardLicense = {
  status: string;
  features: string[];
  items: unknown[];
  expires_at: string | null;
};

export type DashboardData = {
  subscriptions: DashboardSubscription[];
  transactions: {
    items: DashboardTransaction[];
    has_more: boolean;
    next_cursor: string | null;
    version?: string;
  };
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
  dashboardData: DashboardData;
};

export async function fetchDashboard() {
  return api<DashboardResponse>("/dashboard");
}
