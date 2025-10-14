"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Lucian Eurel",
    date: "Posted on 27 February",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    rating: 4,
    isHighlighted: false,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Lucian Eurel",
    date: "Posted on 28 February",
    quote:
      "If you have the opportunity to play this game of life you need to appreciate every moment.",
    rating: 4,
    isHighlighted: true,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Mathew Glock",
    date: "Posted on 29 February",
    quote:
      "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    rating: 5,
    isHighlighted: false,
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Think about us
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-lg mx-auto">
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
                <CardContent className="p-4">
                  <Avatar className="mb-4 w-16 h-16 rounded-lg">
                    <AvatarImage src={image} alt={`${name} image`} />
                    <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <p className={`text-lg font-semibold ${isHighlighted ? 'text-primary-foreground' : ''}`}>
                    {name}
                  </p>
                  <p className={`text-sm ${isHighlighted ? 'opacity-80' : 'text-muted-foreground'}`}>
                    {date}
                  </p>
                  <blockquote className={`max-w-lg my-4 ${isHighlighted ? 'opacity-80' : 'text-muted-foreground'}`}>
                    &quot;{quote}&quot;
                  </blockquote>
                  <div className="flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < rating
                            ? "fill-yellow-500 text-yellow-500"
                            : isHighlighted ? "fill-white/30 text-white/30" : "fill-gray-300 text-gray-300"
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
  );
}
