"use client"

import { ArrowRight, Quote } from "lucide-react"

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden rounded-2xl bg-black text-white">
          <CardContent className="grid w-full grid-cols-1 gap-6 p-6 md:grid-cols-12 md:gap-8 md:p-8">
            <div className="col-span-full md:col-span-4">
              <img
                src="https://images.unsplash.com/photo-1712068944613-1ff36db16612?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
                alt="Michael - Writer"
                className="h-full max-h-[400px] w-full rounded-xl object-cover object-center"
              />
            </div>
            <div className="col-span-full flex flex-col justify-center space-y-6 md:col-span-5 md:space-y-8">
              <div className="relative">
                <Quote className="mb-4 h-10 w-10 text-white/20" />
                <blockquote className="text-lg leading-relaxed text-white/90">
                  &quot;Decisions: If you can&apos;t decide, the answer is no.
                  If two equally difficult paths, choose the one more painful in
                  the short term (pain avoidance is creating an illusion of
                  equality). Choose the path that leaves you more equanimous in
                  the long term.&quot;
                </blockquote>
              </div>
              <div>
                <p className="text-lg font-semibold">Michael</p>
                <p className="text-sm text-white/60">Writer</p>
              </div>
            </div>
            <div className="col-span-full flex flex-col justify-center space-y-6 md:col-span-3">
              <div>
                <h3 className="mb-3 text-5xl leading-none font-bold">
                  1,679,700+
                </h3>
                <p className="text-sm leading-relaxed text-white/70">
                  Developers and Companies around the world using our products.
                </p>
              </div>
              <a
                href="#"
                className="group inline-flex items-center gap-2 font-medium text-white transition-colors hover:text-white/80"
              >
                See all products
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
