"use client"

import { Star } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Lucian Eurel",
    date: "Posted on 27 February",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    rating: 4,
    isHighlighted: false,
  },
  {
    image: "https://images.unsplash.com/photo-1623853434105-8e7a72898180?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Lucian Eurel",
    date: "Posted on 28 February",
    quote:
      "If you have the opportunity to play this game of life you need to appreciate every moment.",
    rating: 4,
    isHighlighted: true,
  },
  {
    image: "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Mathew Glock",
    date: "Posted on 29 February",
    quote:
      "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    rating: 5,
    isHighlighted: false,
  },
]

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-center text-3xl font-bold">
            Think about us
          </h2>
          <p className="text-muted-foreground mx-auto max-w-lg text-center text-lg">
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(
            ({ name, image, date, quote, rating, isHighlighted }, key) => (
              <Card
                key={key}
                className={
                  isHighlighted
                    ? "bg-primary text-primary-foreground"
                    : "bg-transparent"
                }
              >
                <CardContent className="px-6">
                  <Avatar className="mb-4 h-16 w-16 rounded-lg">
                    <AvatarImage src={image} alt={`${name} image`} />
                    <AvatarFallback>
                      {name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <p
                    className={`text-lg font-semibold ${isHighlighted ? "text-primary-foreground" : ""}`}
                  >
                    {name}
                  </p>
                  <p
                    className={`text-sm ${isHighlighted ? "opacity-80" : "text-muted-foreground"}`}
                  >
                    {date}
                  </p>
                  <blockquote
                    className={`my-4 max-w-lg ${isHighlighted ? "opacity-80" : "text-muted-foreground"}`}
                  >
                    &quot;{quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < rating
                            ? "fill-yellow-500 text-yellow-500"
                            : isHighlighted
                              ? "fill-white/30 text-white/30"
                              : "fill-gray-300 text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  )
}
