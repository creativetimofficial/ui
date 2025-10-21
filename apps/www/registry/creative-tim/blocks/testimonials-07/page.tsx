"use client"

import * as React from "react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const TESTIMONIALS = [
  {
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Sarah Johnson",
    role: "Product Designer",
    quote:
      "The attention to detail and component quality is outstanding. These UI blocks have significantly accelerated our design workflow and improved consistency across our products.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Michael Chen",
    role: "Tech Lead at Stripe",
    quote:
      "Exceptional component library with excellent documentation. The customization options and TypeScript support make it perfect for enterprise applications. Highly recommend!",
  },
  {
    image:
      "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Emma Rodriguez",
    role: "Frontend Developer",
    quote:
      "A game-changer for rapid prototyping and production. The components are production-ready, well-tested, and the design system is incredibly cohesive. Love it!",
  },
]

export default function TestimonialsBlock() {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(0)

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-12 items-center gap-y-8 px-4">
        <div className="col-span-full row-start-2 md:col-span-8 md:row-start-auto">
          <h2 className="text-3xl font-bold">What Developers Say</h2>
          <p className="text-muted-foreground my-4 max-w-lg">
            {TESTIMONIALS[selectedTestimonial].quote}
          </p>
          <div>
            <p className="font-semibold">
              {TESTIMONIALS[selectedTestimonial].name}
            </p>
            <p className="text-muted-foreground text-sm">
              {TESTIMONIALS[selectedTestimonial].role}
            </p>
          </div>
          <div className="divide-border mt-8 flex items-center divide-x">
            {TESTIMONIALS.map((testimonial, index) => (
              <div className={index !== 0 ? "px-4" : "pr-4"} key={index}>
                <Avatar
                  role="button"
                  className="h-12 w-12 cursor-pointer rounded-lg"
                  onClick={() => setSelectedTestimonial(index)}
                >
                  <AvatarImage src={testimonial.image} />
                  <AvatarFallback>
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-full md:col-span-4">
          <img
            src={TESTIMONIALS[selectedTestimonial].image}
            alt="user profile"
            className="h-full max-h-96 w-full max-w-96 rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  )
}
