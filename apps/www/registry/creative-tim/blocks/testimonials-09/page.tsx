"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-4 md:py-6">
      <div className="container mx-auto px-4">
        <Card className="grid grid-cols-1 items-center gap-4 border-0 bg-transparent shadow-none md:grid-cols-12 md:gap-6">
          <div className="md:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400"
              alt="user profile"
              className="h-40 w-full rounded-lg object-cover md:h-56"
            />
          </div>
          <CardContent className="px-0 py-0 md:col-span-8 md:px-4 lg:px-8">
            <p className="text-primary mb-1.5 text-xs font-semibold md:text-sm">
              Customer Story
            </p>
            <h2 className="mb-2 text-lg font-bold md:text-xl lg:text-2xl">
              Revolutionary component library for modern design
            </h2>
            <blockquote className="text-muted-foreground mb-3 text-sm leading-relaxed font-normal md:text-base">
              &quot;This component library has transformed how our design team
              works. The attention to detail, seamless integration, and
              production-ready components have accelerated our development
              workflow by 10x.&quot;
            </blockquote>
            <div className="flex items-center gap-2.5">
              <Avatar className="h-9 w-9 md:h-10 md:w-10">
                <AvatarImage
                  alt="spotify"
                  src="https://v3.material-tailwind.com/icon/spotify.svg"
                />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-semibold md:text-base">
                  Sarah Johnson
                </p>
                <p className="text-muted-foreground text-xs">
                  Design Director, Spotify
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
