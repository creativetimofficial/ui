"use client"

import { Star } from "lucide-react"

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

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
]

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-12 px-4 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="mx-auto mb-4 h-full max-h-40 w-full max-w-40 rounded-xl object-cover object-center"
              />
              <p className="mb-1 text-lg font-semibold">{name}</p>
              <p className="text-muted-foreground mb-4 text-sm">{role}</p>
              <blockquote className="mx-auto mb-6 max-w-lg text-lg">
                &quot;{quote}&quot;
              </blockquote>
              <div className="flex items-center justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
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
  )
}
