"use client"

import { Quote, Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    quote:
      "The attention to detail and user experience is exceptional. This has transformed how we approach design decisions in our team.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Tech Lead",
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    quote:
      "Outstanding component library that saves us countless hours. The quality and customization options are exactly what we needed.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    quote:
      "A game-changer for rapid prototyping and production builds. The documentation is clear and the components are production-ready.",
    rating: 5,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Loved by Developers & Designers
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join thousands of professionals who trust our components for their
            projects
          </p>
        </div>

        <div className="mb-12 flex flex-wrap items-center justify-center gap-8 text-center md:gap-12">
          <div>
            <p className="text-3xl font-bold">1,679,700+</p>
            <p className="text-muted-foreground text-sm">Active Users</p>
          </div>
          <div className="bg-border hidden h-12 w-px md:block"></div>
          <div>
            <p className="text-3xl font-bold">4.9/5</p>
            <p className="text-muted-foreground text-sm">Average Rating</p>
          </div>
          <div className="bg-border hidden h-12 w-px md:block"></div>
          <div>
            <p className="text-3xl font-bold">50K+</p>
            <p className="text-muted-foreground text-sm">Companies</p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-border transition-all hover:shadow-lg"
            >
              <CardContent className="px-6">
                <div className="mb-4 flex items-center gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <Quote className="text-muted-foreground/30 mb-3 h-8 w-8" />

                <blockquote className="text-foreground/90 mb-6 text-sm leading-relaxed">
                  {testimonial.quote}
                </blockquote>

                <div className="flex items-center gap-3">
                  <Avatar className="border-border h-12 w-12 border-2">
                    <AvatarImage
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-foreground font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
