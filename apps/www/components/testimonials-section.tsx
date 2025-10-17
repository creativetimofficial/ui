"use client"

import { Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "Stripe",
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    content:
      "Creative Tim UI has completely transformed how we build interfaces. The components are beautifully designed and incredibly easy to customize.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Frontend Lead",
    company: "Vercel",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    content:
      "The quality of these components is outstanding. They've saved us countless hours and our product looks better than ever.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "Figma",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    content:
      "Finally, a component library that doesn't compromise on design or flexibility. The attention to detail is exceptional.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "CTO",
    company: "Linear",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    content:
      "Our development velocity has increased significantly. The documentation is clear and the components are production-ready.",
    rating: 5,
  },
  {
    name: "Jessica Martinez",
    role: "Design Systems Lead",
    company: "Shopify",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    content:
      "This is the component library we've been waiting for. Accessible, beautiful, and built with modern best practices.",
    rating: 5,
  },
  {
    name: "Alex Thompson",
    role: "Senior Developer",
    company: "GitHub",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    content:
      "The TypeScript support is excellent and the components integrate seamlessly with our existing stack. Highly recommended!",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="container py-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Developers & Designers
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base sm:text-lg">
            Join thousands of professionals who trust Creative Tim UI to build
            beautiful, modern interfaces faster.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="group border-border/50 hover:border-border transition-all hover:shadow-lg"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative shrink-0">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.name} profile`}
                        className="border-border h-12 w-12 rounded-full border-2 object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="bg-background absolute -right-1 -bottom-1 rounded-full p-1 shadow-md">
                        <Quote className="text-primary h-2.5 w-2.5" />
                      </div>
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold leading-tight">
                        {testimonial.name}
                      </h3>
                      <p className="text-muted-foreground text-xs">
                        {testimonial.role}
                      </p>
                      <p className="text-muted-foreground text-xs font-medium">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
