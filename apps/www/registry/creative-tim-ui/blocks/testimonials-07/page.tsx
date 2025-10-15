"use client"

import * as React from "react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    role: "CEO @ Marketing Digital LTD",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Mary Joshiash",
    role: "Marketing @ Apple INC",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous in the long term.",
  },
]

export default function TestimonialsBlock() {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(0)

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-12 items-center gap-y-8 px-4">
        <div className="col-span-full row-start-2 md:col-span-8 md:row-start-auto">
          <h2 className="text-3xl font-bold">Work with us</h2>
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
