"use client"

import { Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    role: "Product Designer",
    quote:
      "The attention to detail and component quality is outstanding. These UI blocks have significantly accelerated our design workflow and improved consistency across our products.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    role: "Tech Lead at Stripe",
    quote:
      "Exceptional component library with excellent documentation. The customization options and TypeScript support make it perfect for enterprise applications. Highly recommend!",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    quote:
      "A game-changer for rapid prototyping and production. The components are production-ready, well-tested, and the design system is incredibly cohesive. Love it!",
    rating: 5,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Our Users Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Trusted by thousands of developers and designers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card
              key={key}
              className="group border-border/50 hover:border-border transition-all hover:shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mx-auto mb-6 inline-block">
                  <img
                    src={image}
                    alt={`${name} profile`}
                    className="border-border mx-auto h-24 w-24 rounded-full border-4 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="bg-background absolute -right-2 -bottom-2 rounded-full p-2 shadow-md">
                    <Quote className="text-primary h-4 w-4" />
                  </div>
                </div>

                <h3 className="mb-1 text-xl font-semibold">{name}</h3>
                <p className="text-muted-foreground mb-6 text-sm">{role}</p>

                <div className="mb-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-foreground/80 text-sm leading-relaxed">
                  &quot;{quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
