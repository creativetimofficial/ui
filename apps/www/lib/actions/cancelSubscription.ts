"use server";

/**
 * Cancel a Paddle Billing subscription using the Paddle API.
 * 
 * @param subscriptionId - The Paddle subscription ID (e.g. "sub_01abc123xyz")
 * @param effectiveFrom  - When to cancel: "immediately" | "next_billing_period"
 * @returns JSON response from Paddle API, or throws on error
 */

import { revalidatePath } from "next/cache";

export async function paddleCancelSubscription(
  subscriptionId: string,
  effectiveFrom: "immediately" | "next_billing_period" = "immediately"
) {
  if (!subscriptionId) {
    throw new Error("Missing subscriptionId");
  }

  const apiKey = process.env.PADDLE_API_KEY;
  if (!apiKey) {
    throw new Error("Missing PADDLE_API_KEY in environment");
  }

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "https://sandbox-api.paddle.com"
      : "https://api.paddle.com";
  const url = `${baseUrl}/subscriptions/${encodeURIComponent(subscriptionId)}/cancel`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      effective_from: effectiveFrom, // Allowed: "immediately" | "next_billing_period"
    }),
    // no-cache ensures Paddle doesn’t reuse stale responses
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    console.error("[Paddle] Cancel subscription failed:", res.status, text);
    throw new Error(
      `Failed to cancel Paddle subscription (${res.status}): ${text}`
    );
  }

  return res.json();
}

export async function cancelSubscriptionAction(
  subscriptionId: string,
  atPeriodEnd = false
) {
  try {
    const effectiveFrom: "immediately" | "next_billing_period" = atPeriodEnd
      ? "next_billing_period"
      : "immediately";
    const result = await paddleCancelSubscription(subscriptionId, effectiveFrom);

    revalidatePath("/dashboard/subscriptions");
    revalidatePath(`/dashboard/subscriptions/${subscriptionId}`);

    return { ok: true, subscription: result };
  } catch (error) {
    // Ensure error is typed to `unknown`, then coerce for logging
    const message =
      error &&
      typeof error === "object" &&
      "message" in error &&
      typeof error.message === "string"
        ? (error as { message: string }).message
        : "Something went wrong";
    console.error("cancelSubscriptionAction failed:", error);
    return { ok: false, error: message };
  }
}
