"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <Card className="grid grid-cols-1 md:grid-cols-12 items-start md:items-end gap-4 md:gap-0 border-0 bg-transparent shadow-none">
          <div className="md:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
              alt="user profile"
              className="h-48 w-full rounded-xl object-cover sm:h-56 md:h-full md:max-h-64 lg:max-h-96"
            />
          </div>
          <CardContent className="md:col-span-8 px-0 py-0 md:px-6 lg:px-12">
            <p className="text-primary mb-2 text-sm font-semibold sm:text-base lg:text-lg">
              Customer Story
            </p>
            <h2 className="mb-3 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl lg:mb-4">
              Revolutionary component library for modern design
            </h2>
            <blockquote className="text-muted-foreground mb-4 text-base font-normal sm:text-lg md:text-xl lg:mb-8">
              &quot;This component library has transformed how our design team
              works. The attention to detail, seamless integration, and
              production-ready components have accelerated our development
              workflow by 10x. Truly exceptional quality.&quot;
            </blockquote>
            <div className="flex items-center gap-3 md:gap-4">
              <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                <AvatarImage
                  alt="spotify"
                  src="https://v3.material-tailwind.com/icon/spotify.svg"
                />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold sm:text-lg">Sarah Johnson</p>
                <p className="text-muted-foreground text-xs sm:text-sm">
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
