"use client";

// @components
import { Button, Typography, IconButton } from "@material-tailwind/react";

// @icons
import { HeartSolid } from "iconoir-react";

export default function EcommerceSection11() {
  return (
    <section className="py-16">
      <div className="mx-auto container text-center">
        <Typography color="primary" className="font-semibold">
          Room Previewer
        </Typography>
        <Typography as="h2" type="h3" color="default" className="my-4">
          Visualize Your Space
        </Typography>
        <Typography className="text-foreground max-w-2xl mx-auto">
          Easily preview furniture, decor, and more in your space, ensuring
          everything fits perfectly and looks just right. It&apos;s the ultimate
          tool for hassle-free home customization and design!
        </Typography>
      </div>

      <div className="mt-14 container mx-auto">
        <div className="relative">
          <img
            src="https://v3.material-tailwind.com/room.png"
            alt="room"
            className="rounded-xl h-[680px] w-full object-cover object-center"
          />
          <div className="absolute rounded-2xl inset-0 h-full w-full bg-black/20" />
          <div className="absolute bottom-6 top-6 max-w-[24rem] right-6 left-6 !ml-auto rounded-lg border border-white/25 bg-white/25 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-md flex flex-col justify-between">
            <div>
              <div className="mx-auto grid place-items-center py-8">
                <img
                  src="https://v3.material-tailwind.com/vase.svg"
                  alt="vase"
                  className="mb-4"
                />
                <Typography type="h5" className="text-white">
                  Elegant Ceramic Vase
                </Typography>
                <Typography type="h4" className="mt-4 text-white">
                  $149,90
                </Typography>
              </div>
              <Typography className="max-w-xs mx-auto text-center text-white/80">
                Add a touch of sophistication to your home with our handcrafted
                ceramic vase. Each piece is uniquely made, blending seamlessly
                into both modern and classic decors.
              </Typography>
            </div>
            <div className="mt-10 mb-2 flex items-center justify-center gap-2">
              <Button isFullWidth size="lg">
                add to cart
              </Button>
              <IconButton
                variant="ghost"
                size="lg"
                color="error"
                className="shrink-0"
              >
                <HeartSolid className="h-5 w-5" />
              </IconButton>
            </div>
          </div>
          <div className="absolute lg:flex hidden">
            <div className="relative -translate-y-[30rem] translate-x-[17rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25 backdrop-saturate-200">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[26rem] translate-x-[26rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25 backdrop-saturate-200">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[21rem] translate-x-[5rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25 backdrop-saturate-200">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
            <div className="relative -translate-y-[16rem] translate-x-[32rem] bg-white/25 backdrop-blur w-10 h-10 rounded-full grid place-content-center border border-white/25 backdrop-saturate-200">
              <div className="bg-white shadow-lg w-5 h-5 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
