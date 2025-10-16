"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"

const CARDS = [
  {
    image: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    title: "New",
    subtitle: "Urban Chick Collection",
  },
  {
    image: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    title: "Shop Sales",
    subtitle: "Urban Chick Collection",
  },
  {
    image: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    title: "50% off",
    subtitle: "Urban Chick Collection",
  },
]

export default function GridEcommerce01() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <p className="mb-8 font-semibold">
          Gear Up and Enjoy Savings | Get up to 50% off on select items
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map(({ image, title, subtitle }, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl"
            >
              <div className="relative h-96">
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="mb-2 text-sm font-semibold tracking-wider text-white/90 uppercase">
                    {title}
                  </p>
                  <h3 className="mb-4 text-2xl font-bold">{subtitle}</h3>
                  <Button
                    variant="outline"
                    className="border-white bg-white/10 text-white backdrop-blur-sm hover:bg-white hover:text-black"
                  >
                    Read More
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <Card className="group relative mt-6 overflow-hidden border-0 shadow-lg transition-all hover:shadow-xl">
          <div className="relative flex flex-col md:flex-row">
            <div className="relative h-96 w-full md:w-1/2">
              <img
                src="https://v3.material-tailwind.com/3d-obj-4.jpg"
                alt="Formal Elegance"
                className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent md:from-black/80 md:via-black/60" />
            <div className="relative flex w-full items-center justify-center p-8 text-white md:w-1/2 md:p-12">
              <div className="text-center md:text-left">
                <p className="mb-3 text-lg font-bold tracking-wider uppercase">
                  UP TO 70%
                </p>
                <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                  Formal Elegance Series
                </h3>
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-white/90"
                >
                  Discover
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
