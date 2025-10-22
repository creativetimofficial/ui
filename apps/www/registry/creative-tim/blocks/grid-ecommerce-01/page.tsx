"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const CARDS = [
  {
    image:
      "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=973",
    title: "New",
    subtitle: "Urban Chick Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1661327930345-9c6714b603b3?auto=format&fit=crop&q=80&w=400&h=400",
    title: "Shop Sales",
    subtitle: "Urban Chick Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535220459927-c8428851fd45?auto=format&fit=crop&q=80&w=400&h=400",
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
              className="group relative h-96 overflow-hidden border-0 p-0 shadow-lg transition-all hover:shadow-xl"
            >
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
                <Button variant="link" className="p-0 text-white">
                  Read More
                </Button>
              </div>
            </Card>
          ))}
        </div>
        <Card className="group relative mt-6 h-96 overflow-hidden border-0 p-0 shadow-lg transition-all hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1559745482-57bfa9ca5a8a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1481"
            alt="Formal Elegance"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center p-8 text-white">
            <div className="text-center">
              <p className="mb-3 text-lg font-bold tracking-wider uppercase">
                UP TO 70%
              </p>
              <h3 className="mb-6 text-3xl font-bold md:text-4xl">
                Formal Elegance Series
              </h3>
              <Button variant="link" size="lg" className="p-0 text-white">
                Discover
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
