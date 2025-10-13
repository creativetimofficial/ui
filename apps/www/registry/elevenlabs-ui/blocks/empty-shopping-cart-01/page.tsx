"use client"

import { Button } from "@/registry/elevenlabs-ui/ui/button"

export default function EmptyShoppingCart01() {
  return (
    <section className="grid min-h-screen place-items-center justify-center">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <p className="text-primary font-semibold">Store</p>
          <h2 className="text-2xl font-bold mt-4">
            Your Shopping Cart is Empty
          </h2>
          <img
            src="https://v3.material-tailwind.com/cart-illustration.png"
            alt="Empty cart"
            className="max-h-[30rem] mx-auto my-8"
          />
          <Button>Back to Store</Button>
        </div>
      </div>
    </section>
  )
}
