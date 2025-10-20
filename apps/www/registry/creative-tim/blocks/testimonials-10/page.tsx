"use client"

import { ArrowRight, Sparkles } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Alexandra Martinez",
    role: "Head of Design",
    quote:
      "This component library has revolutionized our design system. The quality and consistency have dramatically improved our product development workflow.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "David Kim",
    role: "Engineering Lead",
    quote:
      "Outstanding components with excellent TypeScript support. The documentation is thorough and implementation is seamless across our platforms.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "Marcus Johnson",
    role: "Product Director",
    quote:
      "A game-changer for our development team. These production-ready components have reduced our time-to-market by 50% while maintaining exceptional quality.",
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mx-auto mb-8 w-max">
            <Sparkles className="mr-2 h-4 w-4" />
            Testimonials
          </Badge>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            See how leading companies are building exceptional products with our
            component library
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, quote, role }, key) => (
            <Card key={key} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0 text-center">
                <img
                  src={image}
                  alt="company logo"
                  className="mx-auto mb-6 h-20"
                />
                <blockquote className="text-muted-foreground mx-auto mb-6 max-w-sm text-sm leading-relaxed">
                  &quot;{quote}&quot;
                </blockquote>
                <div className="mb-6">
                  <p className="font-semibold">{name}</p>
                  <p className="text-muted-foreground text-sm">{role}</p>
                </div>
                <Button variant="link" className="group">
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
