"use client"

import { Button } from "@/registry/elevenlabs-ui/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/elevenlabs-ui/ui/card"

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
        <p className="font-semibold mb-8">
          Gear Up and Enjoy Savings | Get up to 50% off on select items
        </p>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {CARDS.map(({ image, title, subtitle }, index) => (
            <Card key={index}>
              <CardHeader className="p-4">
                <img
                  src={image}
                  alt={title}
                  className="rounded w-full h-80 object-cover object-center"
                />
              </CardHeader>
              <CardContent className="px-6 py-2 text-center">
                <p className="text-primary font-semibold">{title}</p>
                <h3 className="text-xl mt-4 font-semibold">{subtitle}</h3>
              </CardContent>
              <CardFooter className="p-6 pt-0 justify-center">
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <Card className="flex flex-col md:flex-row mt-6 items-center">
          <CardHeader className="w-full h-96 p-4">
            <img
              src="https://v3.material-tailwind.com/3d-obj-4.jpg"
              alt="Formal Elegance"
              className="rounded w-full h-full object-cover object-center"
            />
          </CardHeader>
          <CardContent className="text-center py-8">
            <p className="text-lg text-primary font-semibold">UP TO 70%</p>
            <h3 className="text-xl mt-4 font-semibold">
              Formal Elegance Series
            </h3>
            <Button className="mt-6">Discover</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
