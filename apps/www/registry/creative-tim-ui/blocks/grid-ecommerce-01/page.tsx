"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/creative-tim-ui/ui/card"

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
            <Card key={index}>
              <CardHeader className="p-4">
                <img
                  src={image}
                  alt={title}
                  className="h-80 w-full rounded object-cover object-center"
                />
              </CardHeader>
              <CardContent className="px-6 py-2 text-center">
                <p className="text-primary font-semibold">{title}</p>
                <h3 className="mt-4 text-xl font-semibold">{subtitle}</h3>
              </CardContent>
              <CardFooter className="justify-center p-6 pt-0">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card className="mt-6 flex flex-col items-center md:flex-row">
          <CardHeader className="h-96 w-full p-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-4.jpg"
              alt="Formal Elegance"
              className="h-full w-full rounded object-cover object-center"
            />
          </CardHeader>
          <CardContent className="py-8 text-center">
            <p className="text-primary text-lg font-semibold">UP TO 70%</p>
            <h3 className="mt-4 text-xl font-semibold">
              Formal Elegance Series
            </h3>
            <Button className="mt-6">Discover</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
