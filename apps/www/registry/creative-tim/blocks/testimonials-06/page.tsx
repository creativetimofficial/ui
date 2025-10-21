"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="grid grid-cols-12 items-center border-0 bg-transparent shadow-none">
          <div className="col-span-full md:col-span-4">
            <img
              src="https://v3.material-tailwind.com/logo/spotify.svg"
              alt="user profile"
              className="h-full max-h-96 w-full max-w-96 rounded-xl object-cover lg:max-h-[30rem] lg:max-w-full"
            />
          </div>
          <CardContent className="col-span-full px-0 py-6 md:col-span-8 md:px-8 lg:px-12">
            <p className="mb-2 text-sm font-semibold tracking-wide uppercase lg:mb-4">
              Client Success Story
            </p>
            <h2 className="mb-6 text-3xl font-bold">
              Transforming Our Design System
            </h2>
            <blockquote className="text-muted-foreground mb-8 text-lg font-normal lg:mb-12">
              &quot;This component library has revolutionized how we build
              products at scale. The quality, consistency, and developer
              experience are exceptional. We've reduced our
              design-to-development time by 60% and our entire team loves
              working with these components.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  alt="Alexandra Martinez"
                  src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">Alexandra Martinez</p>
                <p className="text-muted-foreground text-sm">
                  Head of Design, Spotify
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
