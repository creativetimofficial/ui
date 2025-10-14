"use client";

import { Badge } from "@/registry/creative-tim-ui/ui/badge";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Jessica Devis",
    quote:
      "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Mary Joshiash",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-8 mx-auto w-max">
            <Sparkles className="w-4 h-4 mr-2" />
            Testimonials
          </Badge>
          <h2 className="text-3xl font-bold text-center mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-center text-muted-foreground max-w-lg mx-auto">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, quote }, key) => (
            <Card key={key} className="bg-transparent border-0 shadow-none">
              <CardContent className="p-0 text-center">
                <img
                  src={image}
                  alt="company logo"
                  className="mx-auto h-20 mb-4"
                />
                <blockquote className="mx-auto text-muted-foreground max-w-lg">
                  &quot;{quote}&quot;
                </blockquote>
                <p className="font-semibold my-6">{name}</p>
                <Button variant="outline">Read More</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
