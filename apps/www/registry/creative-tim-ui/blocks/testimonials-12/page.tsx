"use client";

import { Card, CardContent, CardFooter } from "@/registry/creative-tim-ui/ui/card";

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 max-w-lg">
          <h2 className="text-3xl font-bold mb-4">
            The heartfelt testimonials of our community
          </h2>
          <p className="text-lg text-muted-foreground">
            From life-enhancing gadgets to unparalleled customer support, and
            transformative learning opportunities.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="grid bg-secondary/40">
            <CardContent className="p-6">
              <blockquote className="text-2xl font-medium md:text-start text-center">
                &quot;The team went above and beyond to ensure my issue was
                resolved quickly and efficiently. Truly outstanding!&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row text-center md:text-start px-6 pb-6 items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Jessica Devis</p>
                <p className="text-sm text-muted-foreground">
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
          <Card className="grid bg-secondary/40">
            <CardContent className="p-6">
              <blockquote className="text-2xl font-medium md:text-start text-center">
                &quot;It have broadened my horizons and helped me advance my
                career. The community is incredibly supportive.&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="flex flex-col md:flex-row mt-auto px-6 pb-6 text-center md:text-start items-center justify-between gap-4">
              <div>
                <p className="font-semibold">Marcell Glock</p>
                <p className="text-sm text-muted-foreground">
                  Graphic Designer, @Coinbase
                </p>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/coinbase.svg"
                alt="logo"
                className="h-14 grayscale brightness-75"
              />
            </CardFooter>
          </Card>
          <Card className="grid bg-secondary/40 col-span-full">
            <CardContent className="p-6">
              <blockquote className="text-2xl font-medium text-center">
                &quot;Its intuitive design and powerful features make it
                indispensable. I can&apos;t imagine going back to life before
                it!&quot;
              </blockquote>
            </CardContent>
            <CardFooter className="flex flex-col text-center mt-auto px-6 pb-6 items-center justify-center gap-4">
              <div>
                <p className="font-semibold">Emma Roberts</p>
                <p className="text-sm text-muted-foreground">
                  Chief Executive @Spotify
                </p>
              </div>
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="logo"
                className="h-14 grayscale brightness-50"
              />
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
