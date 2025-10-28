"use server";

export type ManagementUrls = {
  update_payment_method: string;
  cancel: string;
};

type PaddleSubscription = {
  id: string;
  management_urls?: { update_payment_method?: string; cancel?: string };
  managementUrls?: { updatePaymentMethod?: string; cancel?: string };
};

export async function getSubscriptionManagementUrls(
  subscriptionId: string
): Promise<ManagementUrls | { error: string }> {
  try {
    if (!subscriptionId) return { error: "Missing subscription id" };

    const apiKey = process.env.PADDLE_API_KEY;
    if (!apiKey) return { error: "Missing PADDLE_API_KEY" };
    const baseUrl =
    process.env.NODE_ENV === "development"
      ? "https://sandbox-api.paddle.com"
      : "https://api.paddle.com";
    const url = `${baseUrl}/subscriptions/${encodeURIComponent(subscriptionId)}`;

    const res = await fetch(
      url,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        }
      }
    );

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      console.error("[Paddle] GET subscription failed:", res.status, text);
      return { error: "Failed to fetch subscription" };
    }

    const json = (await res.json().catch(() => ({})));
    const data: PaddleSubscription = json?.data ?? json ?? {};

    const snake = data.management_urls;
    const camel = data.managementUrls;

    return {
      update_payment_method:
        snake?.update_payment_method ?? camel?.updatePaymentMethod ?? "",
      cancel: snake?.cancel ?? camel?.cancel ?? "",
    };
  } catch (e) {
    console.error("Error fetching subscription management URLs", e);
    return { error: "Failed to retrieve subscription management URLs" };
  }
}
