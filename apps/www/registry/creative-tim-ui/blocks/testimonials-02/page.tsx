"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/registry/creative-tim-ui/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/registry/creative-tim-ui/ui/card";
import { BadgeCheck } from "lucide-react";
import { Twitter } from "lucide-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    username: "@jessicadevis",
    quote:
      "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉",
    date: "Jan 17, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Lucian Eurel",
    username: "@lucianeurel",
    quote:
      "It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.",
    date: "Jan 18, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Marcell Glock",
    username: "@marcelglock",
    quote:
      "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 😍",
    date: "Jan 19, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Linde Michele",
    username: "@lindemichele",
    quote:
      "With its clear and concise classes, I can easily communicate design intentions to my colleagues. It's a must-have tool for any web developer. 👨🏻‍💻",
    date: "Jan 20, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-3.jpg",
    name: "Mary Joshiash",
    username: "@maryjoshiash",
    quote:
      "I've tried several CSS frameworks, but this is on a whole different level. It strikes the perfect balance between flexibility and design.",
    date: "Jan 21, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Misha Stam",
    username: "@mishastam",
    quote:
      "Active community support make it easy to get started. It's the ideal framework for achieving design excellence in web applications.",
    date: "Jan 22, 2024",
  },
];

export default function TestimonialsBlock() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <p className="text-sm font-semibold uppercase tracking-wide mb-2">Testimonials</p>
          <h2 className="text-3xl font-bold mb-4">Think about us</h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, username, quote, date }, key) => (
            <Card key={key}>
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <Avatar>
                  <AvatarImage src={image} alt={`${name} image`} />
                  <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5 mb-1">
                    <p className="font-semibold">{name}</p>
                    <BadgeCheck className="w-4 h-4 text-blue-500" />
                  </div>
                  <p className="text-sm text-muted-foreground">{username}</p>
                </div>
              </CardHeader>
              <CardContent className="px-6">
                <blockquote className="text-muted-foreground">
                  {quote}
                </blockquote>
              </CardContent>
              <CardFooter className="flex items-center justify-between gap-4 p-6">
                <a
                  href="#"
                  className="text-sm font-semibold flex items-center gap-1.5 hover:underline"
                >
                  See on <Twitter className="w-3.5 h-3.5" />
                </a>
                <p className="text-sm text-muted-foreground">{date}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
