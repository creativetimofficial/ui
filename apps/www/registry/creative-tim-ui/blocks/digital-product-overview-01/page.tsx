"use client"

import { Lock } from "lucide-react"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Label } from "@/registry/creative-tim-ui/ui/label"
import { RadioGroup, RadioGroupItem } from "@/registry/creative-tim-ui/ui/radio-group"

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
    <section className="py-16 container mx-auto">
      <nav className="flex text-sm mb-6">
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
      <div className="mt-6 place-items-center items-center grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="w-full h-full border overflow-hidden rounded-xl shadow-lg grid place-items-center">
          <img
            src="https://v3.material-tailwind.com/preview-1.png"
            alt="Digital product preview"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex-col">
          <h2 className="text-2xl font-bold mb-2">Digital Product</h2>
          <p className="mb-8 text-muted-foreground">
            There&apos;s nothing I really wanted to do in life that I wasn&apos;t
            able to get good at. That&apos;s my skill. I&apos;m not really
            specifically.
          </p>
          <p className="text-lg mb-4 font-semibold">Choose your plan</p>
          <RadioGroup defaultValue="React Version" className="gap-4">
            {data.map(({ name, desc, price }) => (
              <div key={name} className="flex items-start gap-4">
                <RadioGroupItem value={name} id={name} className="mt-1.5" />
                <Label
                  htmlFor={name}
                  className="flex items-center justify-between gap-4 flex-1 cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-semibold mb-0.5">{name}</p>
                    <p className="text-sm text-muted-foreground">{desc}</p>
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
            <p className="flex font-semibold items-center gap-1 text-muted-foreground text-sm">
              <Lock className="h-4 w-4" />
              123 <span className="font-normal">Sales</span>
            </p>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className="w-4 h-4 fill-yellow-400"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <span className="text-sm font-semibold ml-1">12 Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
