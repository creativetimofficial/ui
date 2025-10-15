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
              src="https://v3.material-tailwind.com/woman-profile-1.jpg"
              alt="user profile"
              className="h-full max-h-96 w-full max-w-96 rounded-xl object-cover lg:max-h-[30rem] lg:max-w-full"
            />
          </div>
          <CardContent className="col-span-full px-0 py-6 md:col-span-8 md:px-8 lg:px-12">
            <p className="text-primary mb-2 text-lg font-semibold lg:mb-4">
              Customer Story
            </p>
            <h2 className="mb-4 text-4xl font-bold">
              Awesome services! Fast and secure.
            </h2>
            <blockquote className="text-muted-foreground mb-8 text-xl font-normal lg:mb-12">
              &quot;Wealth creation is an evolutionarily recent positive-sum
              game. Status is an old zero-sum game. Those attacking wealth
              creation are often just seeking status.&quot;
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
                <p className="text-lg font-semibold">Marcell Glock</p>
                <p className="text-muted-foreground text-sm">
                  Chief Executive, Spotify
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
