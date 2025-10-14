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
  const [active, setActive] = useState("https://v3.material-tailwind.com/coat-1.png")
  const [selectedSize, setSelectedSize] = useState("S")

  return (
    <section className="py-16">
      <div className="container mx-auto grid gap-10 md:grid-cols-2 grid-cols-1">
        <div>
          <nav className="flex text-sm mb-4">
            <a href="#" className="text-muted-foreground hover:text-foreground">Store</a>
            <span className="mx-2">/</span>
            <a href="#" className="text-muted-foreground hover:text-foreground">Designers</a>
            <span className="mx-2">/</span>
            <span className="text-foreground">Pink Blouse</span>
          </nav>
          <div className="border mt-4 overflow-hidden rounded-lg">
            <img
              src={active}
              alt="Product"
              className="h-96 w-auto mx-auto object-cover object-center"
            />
          </div>
          <div className="flex justify-center flex-wrap mb-16 mt-4 gap-4">
            {IMAGES.map(({ imgelink }, index) => (
              <div key={index}>
                <img
                  src={imgelink}
                  alt={`Gallery ${index + 1}`}
                  onClick={() => setActive(imgelink)}
                  className="object-cover border rounded-md object-center h-24 w-auto cursor-pointer hover:opacity-75"
                />
              </div>
            ))}
          </div>
          <h3 className="text-lg font-semibold">Product Description</h3>
          <p className="text-muted-foreground [text-wrap:_balance] mt-2 mb-6">
            There&apos;s nothing I really wanted to do in life that I wasn&apos;t
            able to get good at. That&apos;s my skill. I&apos;m not really
            specifically talented at anything except for the ability to learn.
            That&apos;s what I do. That&apos;s what I&apos;m here for. Don&apos;t
            be afraid to be wrong because you can&apos;t learn anything from a
            compliment.
          </p>
          <h3 className="text-lg font-semibold">Benefits</h3>
          <p className="text-muted-foreground [text-wrap:_balance] mt-2 mb-6">
            There&apos;s nothing I really wanted to do in life that I wasn&apos;t
            able to get good at. That&apos;s my skill. I&apos;m not really
            specifically talented at anything except for the ability to learn.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold">Pink Blouse</h2>
          <p className="text-muted-foreground my-4">
            There&apos;s nothing I really wanted to do in life that I wasn&apos;t
            able to get good at.
          </p>
          <p className="text-2xl font-semibold text-primary">$1,290</p>
          <div className="flex items-center gap-2 my-8">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <svg key={star} className="w-5 h-5 fill-yellow-400" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
              <svg className="w-5 h-5 fill-gray-300" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
            <span className="text-sm font-semibold">100 Reviews</span>
          </div>
          <h3 className="text-lg font-semibold mb-4">Color</h3>
          <div className="flex gap-2 mb-8">
            <div className="h-5 w-5 bg-black rounded cursor-pointer" />
            <div className="h-5 w-5 bg-white rounded border cursor-pointer" />
            <div className="h-5 w-5 bg-gray-200 rounded border cursor-pointer" />
          </div>
          <h3 className="text-lg font-semibold mb-4">Size</h3>
          <div className="flex items-center gap-4 mb-6">
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
              <Heart className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
