"use client"

import { Plus, Quote, Star } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const TESTIMONIALS = [
  {
    image: "https://images.unsplash.com/photo-1641906840000-4b88f1d44de6?auto=format&fit=crop&q=80&w=400&h=400",
    name: "Lucian Eurel",
    role: "CEO Discord",
    quote:
      "Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.",
    rating: 4,
  },
  {
    image: "https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e?auto=format&fit=crop&q=80&w=400&h=400",
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card
              key={key}
              className="group border-border/50 hover:border-border transition-all hover:shadow-lg"
            >
              <CardContent className="p-6 text-center">
                <div className="relative mx-auto mb-4 inline-block">
                  <img
                    src={image}
                    alt={`${name} profile`}
                    className="border-border mx-auto h-20 w-20 rounded-full border-4 object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="bg-primary absolute -right-1 -bottom-1 rounded-full p-1.5 shadow-lg">
                    <Quote className="text-primary-foreground h-3 w-3" />
                  </div>
                </div>

                <h3 className="mb-1 text-lg font-semibold">{name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{role}</p>

                <blockquote className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  &quot;{quote}&quot;
                </blockquote>

                <div className="flex items-center justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
          <Card className="group border-border/50 hover:border-border hover:bg-muted/50 cursor-pointer border-2 border-dashed transition-all">
            <CardContent className="grid h-full min-h-[280px] w-full place-items-center p-6">
              <div className="text-center">
                <div className="bg-muted group-hover:bg-muted/80 mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                  <Plus className="text-muted-foreground h-8 w-8" />
                </div>
                <p className="text-muted-foreground text-sm font-medium">
                  Add Testimonial
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
