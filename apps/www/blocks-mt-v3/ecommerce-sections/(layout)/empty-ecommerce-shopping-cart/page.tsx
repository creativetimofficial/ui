"use client";

// @components
import { Button, Typography } from "@material-tailwind/react";

export default function EcommerceSection4() {
  return (
    <section className="grid min-h-screen place-items-center justify-center">
      <div className="container mx-auto py-16">
        <div className="text-center">
          <Typography color="primary" className="font-semibold">
            Store
          </Typography>
          <Typography as="h2" type="h4" className="mt-4">
            Your Shopping Cart is Empty
          </Typography>
          <img
            src="https://v3.material-tailwind.com/cart-illustration.png"
            alt="cart"
            className="max-h-[30rem]"
          />
          <Button>Back to Store</Button>
        </div>
      </div>
    </section>
  );
}
