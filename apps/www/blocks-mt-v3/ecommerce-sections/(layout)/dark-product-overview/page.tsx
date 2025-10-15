"use client";

// @components
import { Tabs, Button, IconButton, Typography } from "@material-tailwind/react";

// @icons
import { HeartSolid } from "iconoir-react";

const DATA = [
  {
    title: "Features",
    desc: `There's nothing I really wanted to do in life that I wasn't 
    able to get good at. That's my skill. I'm not really specifically 
    talented at anything except for the ability to learn. That's what I do. 
    That's what I'm here for. Don't be afraid to be wrong because you can't 
    learn anything from a compliment.`,
  },
  {
    title: "Product Care",
    desc: `There's nothing I really wanted to do in life that I wasn't 
    able to get good at. That's my skill. I'm not really specifically 
    talented at anything except for the ability to learn. That's what I do. 
    That's what I'm here for.`,
  },
  {
    title: "Shipping and Returns",
    desc: `There's nothing I really wanted to do in life that I wasn't 
    able to get good at. That's my skill. I'm not really specifically 
    talented at anything except for the ability to learn. That's what I do. 
    That's what I'm here for. Don't be afraid to be wrong because you can't 
    learn anything from a compliment.`,
  },
];

export default function EcommerceSection14() {
  return (
    <section className="container mx-auto bg-primary rounded-lg">
      <div className="py-16 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <Typography className="text-white font-semibold">
            Shop Previewer
          </Typography>
          <Typography as="h2" type="h3" className="text-white my-4">
            New Collection
          </Typography>
          <Typography type="lead" className="max-w-3xl mx-auto text-white/80">
            Easily preview furniture, decor, and more in your space, ensuring
            everything fits perfectly and looks just right. It&apos;s the
            ultimate tool for hassle-free home customization and design!
          </Typography>
        </div>
        <div className="justify-between gap-x-6 gap-y-12 items-center flex flex-col lg:flex-row">
          <div>
            <Typography type="h6" className="text-white">
              Elegant Suite
            </Typography>
            <Typography type="h4" className="text-white my-4">
              $449,90
            </Typography>
            <Typography type="lead" className="text-white/80 max-w-md">
              Add a touch of sophistication to your home with our handcrafted
              ceramic vase. Each piece is uniquely made, blending seamlessly
              into both modern and classic decors.
            </Typography>
            <div className="mb-4 mt-8 flex w-full items-center gap-2">
              <Button
                size="lg"
                className="w-56 bg-white border-white hover:bg-white hover:border-white text-black"
              >
                Add to Cart
              </Button>
              <IconButton size="lg" color="error" variant="ghost">
                <HeartSolid className="h-5 w-5" />
              </IconButton>
            </div>
            <div className="mt-16 max-w-xl">
              <Tabs defaultValue="Features">
                <Tabs.List className="w-full rounded-none border-0 bg-transparent py-0">
                  {DATA.map(({ title }) => (
                    <Tabs.Trigger
                      key={title}
                      value={title}
                      className="w-full py-3 text-white text-base"
                    >
                      {title}
                    </Tabs.Trigger>
                  ))}
                  <Tabs.TriggerIndicator className="rounded-none border-b-2 border-white bg-transparent shadow-none" />
                </Tabs.List>
                {DATA.map(({ desc, title }) => (
                  <Tabs.Panel
                    key={title}
                    value={title}
                    className="text-white/80"
                  >
                    {desc}
                  </Tabs.Panel>
                ))}
              </Tabs>
            </div>
          </div>
          <img
            src="https://v3.material-tailwind.com/3d-obj-6.jpg"
            alt="image"
            className="max-w-sm w-full h-full rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
