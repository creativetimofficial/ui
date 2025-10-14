"use client"

import { Heart } from "lucide-react"
import { Button } from "@/registry/elevenlabs-ui/ui/button"

export default function InteractiveProductPreview01() {
  return (
    <section className="py-16">
      <div className="mx-auto container text-center">
        <p className="text-primary font-semibold">Room Previewer</p>
        <h2 className="text-3xl font-bold my-4">Visualize Your Space</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Easily preview furniture, decor, and more in your space, ensuring
          everything fits perfectly and looks just right. It&apos;s the ultimate
          tool for hassle-free home customization and design!
        </p>
      </div>

      <div className="mt-14 container mx-auto">
        <div className="relative">
          <img
            src="https://v3.material-tailwind.com/room.png"
            alt="Room preview"
            className="rounded-xl h-[680px] w-full object-cover object-center"
          />
          <div className="absolute rounded-2xl inset-0 h-full w-full bg-black/20" />
          <div className="absolute bottom-6 top-6 max-w-[24rem] right-6 left-6 !ml-auto rounded-lg border border-white/25 bg-white/25 py-4 px-6 shadow-lg backdrop-blur-md flex flex-col justify-between">
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
                <p className="text-2xl font-bold mt-4 text-white">$149,90</p>
              </div>
              <p className="max-w-xs mx-auto text-center text-white/80">
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
          <div className="absolute lg:flex hidden">
            <div className="relative -translate-y-[30rem] translate-x-[17rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[26rem] translate-x-[26rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[21rem] translate-x-[5rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[16rem] translate-x-[32rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
