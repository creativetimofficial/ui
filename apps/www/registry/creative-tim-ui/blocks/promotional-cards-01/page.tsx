"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
} from "@/registry/creative-tim-ui/ui/card"

export default function PromotionalCards01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <p className="text-primary font-semibold">Tailored Product Search</p>
          <h2 className="my-4 text-3xl font-bold">Find What You Need</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg [text-wrap:_balance]">
            Whether you&apos;re looking for specific features, price ranges, or
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease.
          </p>
        </div>
        <div className="space-y-6">
          <Card className="bg-secondary/10 flex flex-col items-center justify-center p-6 sm:flex-row">
            <CardHeader className="w-full p-0">
              <img
                src="https://v3.material-tailwind.com/double-mobile-mockup.png"
                alt="Product mockup"
                className="max-h-[30rem]"
              />
            </CardHeader>
            <CardContent className="py-0 pr-0 pl-0 md:pr-16">
              <p className="text-primary text-lg font-semibold">Up to 70%</p>
              <h2 className="my-4 text-4xl font-bold">
                Formal and Elegance Series
              </h2>
              <p className="text-muted-foreground mb-6 text-lg font-medium [text-wrap:_balance]">
                From sleek denim to cozy jackets, find your perfect city look
              </p>
              <Button size="lg">Shop Now</Button>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center p-6 sm:flex-row">
            <CardContent className="order-2 py-0 pr-0 pl-0 sm:order-1 md:pl-16">
              <p className="text-primary text-lg font-semibold">Up to 50%</p>
              <h2 className="my-4 text-4xl font-bold">Urban New Collection</h2>
              <p className="text-muted-foreground mb-6 text-lg font-medium [text-wrap:_balance]">
                Functional, fashionable, and now at up to 50% off!
              </p>
              <Button size="lg">Shop Now</Button>
            </CardContent>
            <CardHeader className="order-1 w-full p-0 sm:order-2">
              <img
                src="https://v3.material-tailwind.com/double-mobile-mockup.png"
                alt="Product mockup"
                className="max-h-[30rem]"
              />
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
