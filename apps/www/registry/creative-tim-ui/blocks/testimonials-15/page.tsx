"use client"

import { Plus, Star } from "lucide-react"

import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card"

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
]

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-12 px-4 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} className="border-0 bg-transparent shadow-none">
            <CardContent className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="mx-auto mb-4 h-full max-h-16 w-full max-w-16 rounded-xl object-cover object-center"
              />
              <p className="mb-1 font-semibold">{name}</p>
              <p className="text-muted-foreground mb-4 text-sm">{role}</p>
              <blockquote className="text-muted-foreground mx-auto mt-4 mb-6 max-w-lg">
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
        <Card className="border-2 border-dashed">
          <CardContent className="grid h-full w-full place-items-center p-6">
            <Plus className="h-10 w-10" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
