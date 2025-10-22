"use client"

import { Button } from "@/components/ui/button"

export default function EmptyShoppingCart01() {
  return (
    <section className="grid min-h-screen place-items-center justify-center">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <p className="text-primary font-semibold">Store</p>
          <h2 className="mt-4 text-2xl font-bold">
            Your Shopping Cart is Empty
          </h2>
          <img
            src="https://v3.material-tailwind.com/cart-illustration.png"
            alt="Empty cart"
            className="mx-auto my-8 max-h-[30rem]"
          />
          <Button>Back to Store</Button>
        </div>
      </div>
    </section>
  )
}
