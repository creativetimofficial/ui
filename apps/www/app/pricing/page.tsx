"use client";

import { usePaddle } from "@/hooks/usePaddle";

export default function PricingSection() {
  const { handleBuy, isProcessing } = usePaddle();

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Buy Pro Plan</h1>
      <button
        onClick={() =>
          handleBuy(
            process.env.NEXT_PUBLIC_PADDLE_PRO_PRICE_ID!,
            ["pro"],
            process.env.NEXT_PUBLIC_PADDLE_PRO_PRODUCT_ID!,
            "Pro Plan",
            1
          )
        }
        disabled={isProcessing}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {isProcessing ? "Processing..." : "Buy Now"}
      </button>
    </div>
  );
}
