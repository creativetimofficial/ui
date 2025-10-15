"use client"

import { Lock } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import {
  RadioGroup,
  RadioGroupItem,
} from "@/registry/creative-tim-ui/ui/radio-group"

const data = [
  {
    name: "HTML Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$39",
  },
  {
    name: "React Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$49",
  },
  {
    name: "Angular Version",
    desc: "@material-tailwind/react, packed with rich components and widgets.",
    price: "$99",
  },
]

export default function DigitalProductOverview01() {
  return (
    <section className="container mx-auto py-16">
      <nav className="mb-6 flex text-sm">
        <a href="#" className="text-muted-foreground hover:text-foreground">
          Home
        </a>
        <span className="mx-2">/</span>
        <a href="#" className="text-muted-foreground hover:text-foreground">
          Templates
        </a>
        <span className="mx-2">/</span>
        <span className="text-foreground">Digital Product</span>
      </nav>
      <div className="mt-6 grid grid-cols-1 place-items-center items-center gap-16 lg:grid-cols-2">
        <div className="grid h-full w-full place-items-center overflow-hidden rounded-xl border shadow-lg">
          <img
            src="https://v3.material-tailwind.com/preview-1.png"
            alt="Digital product preview"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex-col">
          <h2 className="mb-2 text-2xl font-bold">Digital Product</h2>
          <p className="text-muted-foreground mb-8">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically.
          </p>
          <p className="mb-4 text-lg font-semibold">Choose your plan</p>
          <RadioGroup defaultValue="React Version" className="gap-4">
            {data.map(({ name, desc, price }) => (
              <div key={name} className="flex items-start gap-4">
                <RadioGroupItem value={name} id={name} className="mt-1.5" />
                <Label
                  htmlFor={name}
                  className="flex flex-1 cursor-pointer items-center justify-between gap-4"
                >
                  <div>
                    <p className="mb-0.5 text-sm font-semibold">{name}</p>
                    <p className="text-muted-foreground text-sm">{desc}</p>
                  </div>
                  <p className="text-lg font-semibold">{price}</p>
                </Label>
              </div>
            ))}
          </RadioGroup>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button size="lg" className="w-full">
              Buy Now
            </Button>
            <Button size="lg" variant="outline" className="w-full">
              Live Preview
            </Button>
          </div>
          <div className="mt-6 flex items-start justify-between">
            <p className="text-muted-foreground flex items-center gap-1 text-sm font-semibold">
              <Lock className="h-4 w-4" />
              123 <span className="font-normal">Sales</span>
            </p>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="h-4 w-4 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="ml-1 text-sm font-semibold">12 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
