"use client";

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Star } from "lucide-react";
import { Plus } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Lucian Eurel",
    role: "CEO Discord",
    quote:
      "Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.",
    rating: 4,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Linde Michel",
    role: "CFO Slack",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail. You will succeed on it.",
    rating: 4,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    role: "COO Dribbble",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    rating: 5,
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="w-full h-full mx-auto max-w-16 max-h-16 object-cover object-center rounded-xl mb-4"
              />
              <p className="font-semibold mb-1">{name}</p>
              <p className="text-sm text-muted-foreground mb-4">{role}</p>
              <blockquote className="mt-4 mb-6 mx-auto max-w-lg text-muted-foreground">
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
        <Card className="border-2 border-dashed">
          <CardContent className="grid place-items-center w-full h-full p-6">
            <Plus className="w-10 h-10" />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
