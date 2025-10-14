"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/creative-tim-ui/ui/accordion"
import { Button } from "@/registry/creative-tim-ui/ui/button"

const IMAGES = [
  "https://v3.material-tailwind.com/coat-1.png",
  "https://v3.material-tailwind.com/coat-2.png",
  "https://v3.material-tailwind.com/coat-3.png",
  "https://v3.material-tailwind.com/coat-4.png",
]

const DATA = [
  {
    value: "one",
    title: "Features",
    desc: "The jacket could be made from a weather-resistant or waterproof fabric, such as Gore-Tex or a similar technology, to keep the wearer dry and comfortable in rainy or windy conditions.",
  },
  {
    value: "two",
    title: "Product Care",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    value: "three",
    title: "Shipping & Returns",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    value: "four",
    title: "Warranty",
    desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams",
  },
]

export default function ComplexProductDescription01() {
  const [active, setActive] = useState(IMAGES[0])

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <div>
            <img
              alt="Product"
              src={active}
              className="h-auto w-full max-w-full rounded-lg border object-cover object-center"
            />
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {IMAGES.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Gallery ${index + 1}`}
                onClick={() => setActive(img)}
                className="h-24 w-auto cursor-pointer rounded-md border object-cover object-center hover:opacity-75"
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Pink Blouse</h2>
          <p className="text-primary my-4 text-2xl font-semibold">$1,490</p>
          <p className="text-muted-foreground [text-wrap:_balance]">
            As we live, our hearts turn colder. Cause pain is what we go through
            as we become older. We get insulted by others, lose trust for those
            others. We get back stabbed by friends. It becomes harder for us to
            give others a hand. We get our heart broken by people we love, even
            that we give them all we have. Then we lose family over time. What
            else could rust the heart more over time? Blackgold.
          </p>
          <div className="my-8 flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg
                  key={star}
                  className="h-5 w-5 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <svg className="h-5 w-5 fill-gray-300" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">100 Reviews</span>
          </div>
          <h3 className="my-4 text-lg font-semibold">Color</h3>
          <div className="flex gap-2">
            <div className="h-5 w-5 cursor-pointer rounded bg-black" />
            <div className="h-5 w-5 cursor-pointer rounded border bg-white" />
            <div className="h-5 w-5 cursor-pointer rounded border bg-gray-200" />
          </div>
          <div className="my-6 flex items-center gap-2">
            <Button size="lg" className="w-full max-w-60">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="text-red-500">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
          <Accordion
            type="single"
            defaultValue="one"
            collapsible
            className="w-full"
          >
            {DATA.map(({ value, title, desc }) => (
              <AccordionItem key={value} value={value}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>{desc}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
