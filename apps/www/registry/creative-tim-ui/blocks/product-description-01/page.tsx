"use client"

import { useState } from "react"
import { Heart } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"

const IMAGES = [
  { imgelink: "https://v3.material-tailwind.com/coat-1.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-2.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-3.png" },
  { imgelink: "https://v3.material-tailwind.com/coat-4.png" },
]

const SIZES = ["XS", "S", "M", "L"]

export default function ProductDescription01() {
  const [active, setActive] = useState(
    "https://v3.material-tailwind.com/coat-1.png"
  )
  const [selectedSize, setSelectedSize] = useState("S")

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <nav className="mb-4 flex text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Store
            </a>
            <span className="mx-2">/</span>
            <a href="#" className="text-muted-foreground hover:text-foreground">
              Designers
            </a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Pink Blouse</span>
          </nav>
          <div className="mt-4 overflow-hidden rounded-lg border">
            <img
              src={active}
              alt="Product"
              className="mx-auto h-96 w-auto object-cover object-center"
            />
          </div>
          <div className="mt-4 mb-16 flex flex-wrap justify-center gap-4">
            {IMAGES.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  src={imgelink}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => setActive(imgelink)}
                  className="h-24 w-auto cursor-pointer rounded-md border object-cover object-center hover:opacity-75"
                />
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold">Product Description</h3>
          <p className="text-muted-foreground mt-2 mb-6 [text-wrap:_balance]">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn. That&apos;s what I do. That&apos;s what I&apos;m here for.
            Don&apos;t be afraid to be wrong because you can&apos;t learn
            anything from a compliment.
          </p>
          <h3 className="text-lg font-semibold">Benefits</h3>
          <p className="text-muted-foreground mt-2 mb-6 [text-wrap:_balance]">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at. That&apos;s my skill. I&apos;m not
            really specifically talented at anything except for the ability to
            learn.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Pink Blouse</h2>
          <p className="text-muted-foreground my-4">
            There&apos;s nothing I really wanted to do in life that I
            wasn&apos;t able to get good at.
          </p>
          <p className="text-primary text-2xl font-semibold">$1,290</p>
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
          <h3 className="mb-4 text-lg font-semibold">Color</h3>
          <div className="mb-8 flex gap-2">
            <div className="h-5 w-5 cursor-pointer rounded bg-black" />
            <div className="h-5 w-5 cursor-pointer rounded border bg-white" />
            <div className="h-5 w-5 cursor-pointer rounded border bg-gray-200" />
          </div>
          <h3 className="mb-4 text-lg font-semibold">Size</h3>
          <div className="mb-6 flex items-center gap-4">
            {SIZES.map((size) => (
              <Button
                key={size}
                onClick={() => setSelectedSize(size)}
                variant={size === selectedSize ? "default" : "outline"}
              >
                {size}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button size="lg" className="w-full max-w-60">
              Add to Cart
            </Button>
            <Button size="lg" variant="outline" className="text-red-500">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
