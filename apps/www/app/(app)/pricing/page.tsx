"use client"

import { usePaddle } from "@/hooks/usePaddle"

export default function PricingSection() {
  const { handleBuy, isProcessing } = usePaddle()

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl">Buy Pro Plan</h1>
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
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {isProcessing ? "Processing..." : "Buy Now"}
      </button>
    </div>
  )
}
