"use client"

import { Quote, Star } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    name: "Sarah Johnson",
    role: "Product Designer",
    quote:
      "The component library has transformed our design process. The quality and attention to detail in every component is exceptional.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1062",
    name: "Michael Chen",
    role: "Tech Lead at Stripe",
    quote:
      "Outstanding documentation and TypeScript support. These components integrate seamlessly into our enterprise applications.",
    rating: 5,
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    quote:
      "Production-ready components with excellent customization. The design system is cohesive and well-thought-out.",
    rating: 5,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Trusted by Professionals
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            Hear what developers and designers say about our component library
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card
              key={key}
              className="border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-white/20 hover:bg-white/10"
            >
              <CardContent className="p-8 text-center">
                <div className="relative mx-auto mb-6 inline-block">
                  <Avatar className="h-20 w-20 border-4 border-white/20">
                    <AvatarImage src={image} alt={`${name} profile`} />
                    <AvatarFallback className="bg-white/10 text-white">
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-primary absolute -right-1 -bottom-1 rounded-full p-1.5 shadow-lg">
                    <Quote className="text-primary-foreground h-3 w-3" />
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-semibold text-white">
                  {name}
                </h3>
                <p className="mb-6 text-sm text-white/60">{role}</p>

                <div className="mb-6 flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-white/20 text-white/20"
                      }`}
                    />
                  ))}
                </div>

                <blockquote className="text-sm leading-relaxed text-white/80">
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
