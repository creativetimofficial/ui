"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-lg">
          <h2 className="mb-4 text-3xl font-bold">
            The heartfelt testimonials of our community
          </h2>
          <p className="text-muted-foreground text-lg">
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card className="grid bg-white">
            <CardContent className="p-6">
              <blockquote className="text-center text-2xl font-medium md:text-start">
                &quot;The team went above and beyond to ensure my issue was
                resolved quickly and efficiently. Truly outstanding!&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-between gap-4 px-6 pb-6 text-center md:flex-row md:text-start">
              <div>
                <p className="font-semibold">Jessica Devis</p>
                <p className="text-muted-foreground text-sm">
                  Full Stack Developer @Netflix
                </p>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/netflix.svg"
                alt="logo"
                className="h-14 grayscale"
              />
            </CardFooter>
          </Card>
          <Card className="grid bg-white">
            <CardContent className="p-6">
              <blockquote className="text-center text-2xl font-medium md:text-start">
                &quot;It have broadened my horizons and helped me advance my
                career. The community is incredibly supportive.&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center justify-between gap-4 px-6 pb-6 text-center md:flex-row md:text-start">
              <div>
                <p className="font-semibold">Marcell Glock</p>
                <p className="text-muted-foreground text-sm">
                  Graphic Designer, @Coinbase
                </p>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/coinbase.svg"
                alt="logo"
                className="h-14 brightness-75 grayscale"
              />
            </CardFooter>
          </Card>
          <Card className="col-span-full grid bg-white">
            <CardContent className="p-6">
              <blockquote className="text-center text-2xl font-medium">
                &quot;Its intuitive design and powerful features make it
                indispensable. I can&apos;t imagine going back to life before
                it!&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="mt-auto flex flex-col items-center justify-center gap-4 px-6 pb-6 text-center">
              <div>
                <p className="font-semibold">Emma Roberts</p>
                <p className="text-muted-foreground text-sm">
                  Chief Executive @Spotify
                </p>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="logo"
                className="h-14 brightness-50 grayscale"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
