"use client"

import { Heart } from "lucide-react"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/registry/creative-tim-ui/ui/tabs"

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
    title: "Shipping",
    desc: `There's nothing I really wanted to do in life that I wasn't 
    able to get good at. That's my skill. I'm not really specifically 
    talented at anything except for the ability to learn. That's what I do. 
    That's what I'm here for. Don't be afraid to be wrong because you can't 
    learn anything from a compliment.`,
  },
]

export default function DarkProductOverview01() {
  return (
    <section className="container mx-auto bg-primary rounded-lg">
      <div className="py-16 max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-white font-semibold">Shop Previewer</p>
          <h2 className="text-3xl font-bold text-white my-4">New Collection</h2>
          <p className="text-lg max-w-3xl mx-auto text-white/80">
            Easily preview furniture, decor, and more in your space, ensuring
            everything fits perfectly and looks just right. It&apos;s the ultimate
            tool for hassle-free home customization and design!
          </p>
        </div>
        <div className="justify-between gap-x-6 gap-y-12 items-center flex flex-col lg:flex-row">
          <div>
            <h3 className="text-lg text-white">Elegant Suite</h3>
            <p className="text-2xl font-bold text-white my-4">$449,90</p>
            <p className="text-lg text-white/80 max-w-md">
              Add a touch of sophistication to your home with our handcrafted
              ceramic vase. Each piece is uniquely made, blending seamlessly into
              both modern and classic decors.
            </p>
            <div className="mb-4 mt-8 flex w-full items-center gap-2">
              <Button
                size="lg"
                className="w-56 bg-white hover:bg-white/90 text-black"
              >
                Add to Cart
              </Button>
              <Button size="lg" variant="ghost" className="text-red-500 hover:text-red-600">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <div className="mt-16 max-w-xl">
              <Tabs defaultValue="Features" className="w-full">
                <TabsList className="w-full bg-transparent border-b border-white/20 rounded-none justify-start h-auto p-0">
                  {DATA.map(({ title }) => (
                    <TabsTrigger
                      key={title}
                      value={title}
                      className="text-white data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-white rounded-none px-4 py-3"
                    >
                      {title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                {DATA.map(({ title, desc }) => (
                  <TabsContent key={title} value={title} className="mt-6">
                    <p className="text-white/80">{desc}</p>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
          <div className="w-full lg:w-auto lg:max-w-md">
            <img
              src="https://v3.material-tailwind.com/dark-bg-preview-3.png"
              alt="Elegant Suite"
              className="rounded-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
