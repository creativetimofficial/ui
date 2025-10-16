"use client"

import { Quote, Star } from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="border-border/50 overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12 md:gap-0">
            <div className="md:col-span-5">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=988"
                alt="Professional workspace"
                className="h-full w-full object-cover md:min-h-[500px]"
              />
            </div>
            <CardContent className="p-8 md:col-span-7 md:p-12 lg:p-16">
              <div className="bg-primary/10 mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5">
                <Quote className="text-primary h-4 w-4" />
                <span className="text-primary text-sm font-semibold tracking-wide uppercase">
                  Client Testimonial
                </span>
              </div>

              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Trusted by Industry Leaders
              </h2>

              <blockquote className="text-foreground/80 mb-8 text-lg leading-relaxed">
                &quot;This component library has revolutionized our development
                workflow. The quality, flexibility, and attention to detail in
                every component is exceptional. It's become an essential part of
                our tech stack.&quot;
              </blockquote>

              <div className="mb-8 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Avatar className="border-border h-14 w-14 border-2">
                  <AvatarImage
                    alt="Sarah Mitchell"
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=100"
                  />
                  <AvatarFallback>SM</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">Sarah Mitchell</p>
                  <p className="text-muted-foreground text-sm">
                    VP of Engineering, TechCorp
                  </p>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>
      </div>
    </section>
  )
}
