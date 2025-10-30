import { api } from "@/lib/auth/api";
import { AuthUser } from "../auth/auth.types";

/**
 * Subscription row displayed in dashboard
 */
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

/**
 * Transaction row displayed in dashboard
 */
export type DashboardTransaction = {
  id: string; // transaction_id
  amount: string; // decimal as string
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
  // Raw jsonb from DB, could be object or array depending on tax config
  tax_rates_used?: unknown;
};

/**
 * Pagination / cursor metadata for transactions
 * (this is what you were calling TxMeta)
 */
export type TxMeta = {
  has_more: boolean;
  next_cursor: string | null;
  version?: string | null;
  total_count: number;
  page_size: number;
};

/**
 * Full "transactions" payload that the backend returns:
 * - list of items
 * - plus meta / paging info
 */
export type TransactionsPage = TxMeta & {
  items: DashboardTransaction[];
};

/**
 * License info for the current user/org
 */
export type DashboardLicense = {
  status: string;
  features: string[];
  items: unknown[];
  expires_at: string | null;
};

/**
 * Data block the frontend actually renders in the dashboard UI
 */
export type DashboardData = {
  subscriptions: DashboardSubscription[];
  transactions: TransactionsPage;
};

/**
 * Raw /dashboard API response
 */
export type DashboardResponse = {
  user: AuthUser;
  subscriptions: DashboardSubscription[];
  transactions: TransactionsPage;
  license: DashboardLicense;
  dashboardData: DashboardData;
};

export async function fetchDashboard() {
  return api<DashboardResponse>("/dashboard");
}
