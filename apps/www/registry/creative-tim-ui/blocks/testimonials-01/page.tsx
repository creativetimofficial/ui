"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Badge } from "@/registry/creative-tim-ui/ui/badge";
import { Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    role: "CEO @ Marketing Digital LTD",
    quote:
      "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Mary Joshiash",
    role: "Marketing @ Apple INC",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
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
          <h2 className="text-3xl font-bold mb-4">What Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote }, key) => (
            <Card key={key} className="bg-transparent border-0 shadow-none">
              <CardContent className="p-0 text-center">
                <Avatar className="mx-auto mb-4 w-20 h-20">
                  <AvatarImage src={image} alt={`${name} image`} />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <p className="text-lg font-semibold mb-1">{name}</p>
                <p className="text-sm text-muted-foreground mb-4">{role}</p>
                <blockquote className="text-muted-foreground max-w-lg mx-auto">
                  &quot;{quote}&quot;
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
