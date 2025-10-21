"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="rounded-xl bg-black text-white">
          <CardContent className="grid w-full grid-cols-1 items-center gap-8 p-10 md:grid-cols-12">
            <div className="col-span-full text-center md:col-span-8 md:pl-4 md:text-left">
              <img
                src="https://v3.material-tailwind.com/logo/spotify.svg"
                alt="spotify logo"
                className="mr-auto mb-2 ml-auto w-32 md:mr-0 md:-ml-3"
              />
              <blockquote className="mb-12 text-2xl !leading-snug">
                &quot;We&apos;re not always in the position that we want to be
                at. We&apos;re constantly growing. We&apos;re constantly making
                mistakes. We&apos;re constantly trying to express ourselves and
                actualize our dreams. &quot;
              </blockquote>
              <div>
                <p className="mb-1 text-xl font-semibold">Marcell Glock</p>
                <p className="text-white/80">Chief Executive, Spotify</p>
              </div>
            </div>
            <div className="col-span-full grid justify-items-center md:col-span-4 md:justify-items-end">
              <Avatar className="h-24 w-24 md:h-64 md:w-64">
                <AvatarImage
                  src="https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400"
                  alt="user profile"
                />
                <AvatarFallback>MG</AvatarFallback>
              </Avatar>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
