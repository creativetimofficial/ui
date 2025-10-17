"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/registry/creative-tim-ui/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Designer",
    company: "Stripe",
    image:
      "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
    quote:
      "Creative Tim UI has completely transformed how we build interfaces. The components are beautifully designed and incredibly easy to customize.",
  },
  {
    name: "Michael Chen",
    role: "Frontend Lead",
    company: "Vercel",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    quote:
      "The quality of these components is outstanding. They've saved us countless hours and our product looks better than ever.",
  },
  {
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    company: "Figma",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    quote:
      "Finally, a component library that doesn't compromise on design or flexibility. The attention to detail is exceptional.",
  },
  {
    name: "David Park",
    role: "CTO",
    company: "Linear",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    quote:
      "Our development velocity has increased significantly. The documentation is clear and the components are production-ready.",
  },
  {
    name: "Jessica Martinez",
    role: "Design Systems Lead",
    company: "Shopify",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    quote:
      "This is the component library we've been waiting for. Accessible, beautiful, and built with modern best practices.",
  },
  {
    name: "Alex Thompson",
    role: "Senior Developer",
    company: "GitHub",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987",
    quote:
      "The TypeScript support is excellent and the components integrate seamlessly with our existing stack. Highly recommended!",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    )
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="container py-12 md:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Loved by Developers & Designers
          </h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-base sm:text-lg">
            Join thousands of professionals who trust Creative Tim UI to build
            beautiful, modern interfaces faster.
          </p>
        </div>

        <div className="relative">
          <div className="border-border/50 bg-muted/30 relative overflow-hidden rounded-3xl border backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />
            
            <div className="relative px-8 py-12 md:px-16 md:py-20">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="bg-primary/10 mb-8 rounded-full p-4"
                  >
                    <Quote className="text-primary h-8 w-8 md:h-10 md:w-10" />
                  </motion.div>

                  <motion.blockquote
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mb-10 text-2xl font-medium leading-relaxed md:text-3xl lg:text-4xl"
                  >
                    {currentTestimonial.quote}
                  </motion.blockquote>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex flex-col items-center gap-4 sm:flex-row"
                  >
                    <img
                      src={currentTestimonial.image}
                      alt={currentTestimonial.name}
                      className="border-border h-16 w-16 rounded-full border-2 object-cover"
                    />
                    <div className="text-center sm:text-left">
                      <div className="text-lg font-semibold">
                        {currentTestimonial.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {currentTestimonial.role} at {currentTestimonial.company}
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="hover:bg-primary/10 h-10 w-10 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="hover:bg-primary/10 h-10 w-10 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
