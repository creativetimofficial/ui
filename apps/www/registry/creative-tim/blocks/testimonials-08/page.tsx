"use client"

import { Quote, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    role: "Product Designer",
    quote:
      "These components have transformed our design workflow. The quality and attention to detail are exceptional, making it easy to build beautiful interfaces quickly.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    role: "Tech Lead at Stripe",
    quote:
      "Outstanding component library with excellent TypeScript support. The documentation is clear and the components integrate seamlessly into our enterprise applications.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    quote:
      "Production-ready components that save countless hours. The customization options are fantastic and the design system is incredibly cohesive. Highly recommend!",
    rating: 5,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            What Developers Say
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join thousands of developers building exceptional products with our
            component library
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card
              key={key}
              className="group border-0 bg-transparent shadow-none"
            >
              <CardContent className="p-0 text-center">
                <div className="relative mx-auto mb-6 inline-block">
                  <Avatar className="border-border h-24 w-24 border-4 transition-transform group-hover:scale-105">
                    <AvatarImage src={image} alt={`${name} profile`} />
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary absolute -right-2 -bottom-2 rounded-full p-2 shadow-lg">
                    <Quote className="text-primary-foreground h-3 w-3" />
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-semibold">{name}</h3>
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

                <blockquote className="text-muted-foreground mx-auto max-w-sm text-sm leading-relaxed">
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
