"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    role: "CEO @ Marketing Digital LTD",
    quote:
      "The connections you make at Web Summit are unparalleled, we met users all over the world.",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Mary Joshiash",
    role: "Marketing @ Apple INC",
    quote:
      "Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    rating: 5,
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-center mb-4">Think about us</h2>
          <p className="text-lg text-center text-muted-foreground max-w-lg mx-auto">
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card key={key} className="bg-transparent border-0 shadow-none">
              <CardContent className="p-0">
                <Avatar className="mx-auto mb-6 w-24 h-24">
                  <AvatarImage src={image} alt={`${name} image`} />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-lg font-semibold mb-1">{name}</p>
                <p className="text-sm text-muted-foreground mb-4">{role}</p>
                <blockquote className="text-muted-foreground mx-auto max-w-lg mb-4">
                  &quot;{quote}&quot;
                </blockquote>
                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < rating
                          ? "fill-yellow-500 text-yellow-500"
                          : "fill-gray-300 text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
