"use client";

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Lucian Eurel",
    role: "CEO Discord",
    quote:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Linde Michel",
    role: "CFO Slack",
    quote:
      "Don't be scared of the truth because we need to restart the human foundation in truth. That's why I love you like Kanye loves Kanye I love Rick Owens• bed design but the back is not so attractive.",
    rating: 4,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Misha Stam",
    role: "COO Dribbble",
    quote:
      "Your products, all the kits that I have downloaded from your site and worked with are sooo cool! I love the color mixtures, cards... everything. Keep up the great work!",
    rating: 5,
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} className="bg-transparent border-0 shadow-none">
            <CardContent className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="w-full h-full mx-auto max-w-40 max-h-40 object-cover object-center rounded-xl mb-4"
              />
              <p className="text-lg font-semibold mb-1">{name}</p>
              <p className="text-sm text-muted-foreground mb-4">{role}</p>
              <blockquote className="text-lg mb-6 mx-auto max-w-lg">
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
    </section>
  );
}
