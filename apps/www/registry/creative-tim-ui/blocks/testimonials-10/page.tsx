"use client"

import { Sparkles } from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Jessica Devis",
    quote:
      "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Mary Joshiash",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-20 text-center">
          <Badge variant="outline" className="mx-auto mb-8 w-max">
            <Sparkles className="mr-2 h-4 w-4" />
            Testimonials
          </Badge>
          <h2 className="mb-4 text-center text-3xl font-bold">
            What Clients Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-center text-lg">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, quote }, key) => (
            <Card key={key} className="border-0 bg-transparent shadow-none">
              <CardContent className="p-0 text-center">
                <img
                  src={image}
                  alt="company logo"
                  className="mx-auto mb-4 h-20"
                />
                <blockquote className="text-muted-foreground mx-auto max-w-lg">
                  &quot;{quote}&quot;
                </blockquote>
                <p className="my-6 font-semibold">{name}</p>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
