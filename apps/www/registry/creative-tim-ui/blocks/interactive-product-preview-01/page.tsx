"use client"

import { Heart } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"

export default function InteractiveProductPreview01() {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <p className="text-primary font-semibold">Room Previewer</p>
        <h2 className="my-4 text-3xl font-bold">Visualize Your Space</h2>
        <p className="text-muted-foreground mx-auto max-w-2xl">
          Easily preview furniture, decor, and more in your space, ensuring
          everything fits perfectly and looks just right. It&apos;s the ultimate
          tool for hassle-free home customization and design!
        </p>
      </div>

      <div className="container mx-auto mt-14">
        <div className="relative">
          <img
            src="https://v3.material-tailwind.com/room.png"
            alt="Room preview"
            className="h-[680px] w-full rounded-xl object-cover object-center"
          />
          <div className="absolute inset-0 h-full w-full rounded-2xl bg-black/20" />
          <div className="absolute top-6 right-6 bottom-6 left-6 !ml-auto flex max-w-[24rem] flex-col justify-between rounded-lg border border-white/25 bg-white/25 px-6 py-4 shadow-lg backdrop-blur-md">
            <div>
              <div className="mx-auto grid place-items-center py-8">
                <img
                  src="https://v3.material-tailwind.com/vase.svg"
                  alt="Vase"
                  className="mb-4"
                />
                <h3 className="text-xl font-bold text-white">
                  Elegant Ceramic Vase
                </h3>
                <p className="mt-4 text-2xl font-bold text-white">$149,90</p>
              </div>
              <p className="mx-auto max-w-xs text-center text-white/80">
                Add a touch of sophistication to your home with our handcrafted
                ceramic vase. Each piece is uniquely made, blending seamlessly
                into both modern and classic decors.
              </p>
            </div>
            <div className="mt-10 mb-2 flex items-center justify-center gap-2">
              <Button className="w-full" size="lg">
                Add to Cart
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="shrink-0 text-red-500 hover:text-red-600"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="absolute hidden lg:flex">
            <div className="relative grid h-10 w-10 translate-x-[17rem] -translate-y-[30rem] place-content-center rounded-full border border-white/25 bg-white/25 backdrop-blur">
              <div className="h-5 w-5 rounded-full bg-white shadow-lg"></div>
            </div>
            <div className="relative grid h-10 w-10 translate-x-[26rem] -translate-y-[26rem] place-content-center rounded-full border border-white/25 bg-white/25 backdrop-blur">
              <div className="h-5 w-5 rounded-full bg-white shadow-lg"></div>
            </div>
            <div className="relative grid h-10 w-10 translate-x-[5rem] -translate-y-[21rem] place-content-center rounded-full border border-white/25 bg-white/25 backdrop-blur">
              <div className="h-5 w-5 rounded-full bg-white shadow-lg"></div>
            </div>
            <div className="relative grid h-10 w-10 translate-x-[32rem] -translate-y-[16rem] place-content-center rounded-full border border-white/25 bg-white/25 backdrop-blur">
              <div className="h-5 w-5 rounded-full bg-white shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
