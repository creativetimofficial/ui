"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/creative-tim-ui/ui/avatar"
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="grid grid-cols-12 items-end border-0 bg-transparent shadow-none">
          <div className="col-span-full md:col-span-4">
            <img
              src="https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987"
              alt="user profile"
              className="h-full max-h-96 w-full max-w-96 rounded-xl object-cover lg:max-h-[30rem] lg:max-w-full"
            />
          </div>
          <CardContent className="col-span-full px-0 py-6 md:col-span-8 md:px-8 lg:px-12">
            <p className="text-primary mb-2 text-lg font-semibold lg:mb-4">
              Customer Story
            </p>
            <h2 className="mb-4 text-4xl font-bold">
              Revolutionary component library for modern design
            </h2>
            <blockquote className="text-muted-foreground mb-8 text-xl font-normal lg:mb-12">
              &quot;This component library has transformed how our design team
              works. The attention to detail, seamless integration, and
              production-ready components have accelerated our development
              workflow by 10x. Truly exceptional quality.&quot;
            </blockquote>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12">
                <AvatarImage
                  alt="spotify"
                  src="https://v3.material-tailwind.com/icon/spotify.svg"
                />
                <AvatarFallback>SP</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-lg font-semibold">Sarah Johnson</p>
                <p className="text-muted-foreground text-sm">
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
