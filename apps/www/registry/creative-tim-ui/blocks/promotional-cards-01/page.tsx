"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent, CardHeader } from "@/registry/creative-tim-ui/ui/card"

export default function PromotionalCards01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold">Tailored Product Search</p>
          <h2 className="text-3xl font-bold my-4">Find What You Need</h2>
          <p className="text-muted-foreground max-w-3xl [text-wrap:_balance] mx-auto text-lg">
            Whether you&apos;re looking for specific features, price ranges, or
            brands, our filters help you quickly narrow down options, so you can
            find exactly what you need with ease.
          </p>
        </div>
        <div className="space-y-6">
          <Card className="p-6 flex flex-col sm:flex-row items-center justify-center bg-secondary/10">
            <CardHeader className="p-0 w-full">
              <img
                src="https://v3.material-tailwind.com/double-mobile-mockup.png"
                alt="Product mockup"
                className="max-h-[30rem]"
              />
            </CardHeader>
            <CardContent className="pr-0 md:pr-16 pl-0 py-0">
              <p className="text-lg text-primary font-semibold">Up to 70%</p>
              <h2 className="text-4xl font-bold my-4">
                Formal and Elegance Series
              </h2>
              <p className="text-muted-foreground [text-wrap:_balance] mb-6 font-medium text-lg">
                From sleek denim to cozy jackets, find your perfect city look
              </p>
              <Button size="lg">Shop Now</Button>
            </CardContent>
          </Card>
          <Card className="p-6 flex flex-col sm:flex-row items-center">
            <CardContent className="pl-0 md:pl-16 pr-0 py-0 order-2 sm:order-1">
              <p className="text-lg text-primary font-semibold">Up to 50%</p>
              <h2 className="text-4xl font-bold my-4">Urban New Collection</h2>
              <p className="text-muted-foreground [text-wrap:_balance] mb-6 font-medium text-lg">
                Functional, fashionable, and now at up to 50% off!
              </p>
              <Button size="lg">Shop Now</Button>
            </CardContent>
            <CardHeader className="p-0 w-full order-1 sm:order-2">
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
