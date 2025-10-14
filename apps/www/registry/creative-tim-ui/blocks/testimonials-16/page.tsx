"use client";

import * as React from "react";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Linde Michel",
    role: "Social Media Executive, Netflix",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "Visionary, Coinbase",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    companyLogo: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Marcell Glock",
    role: "Chief Executive, Spotify",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
];

export default function TestimonialsBlock() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <section className="py-16 bg-black grid place-items-center min-h-screen">
      <div className="container mx-auto px-4 relative">
        <div className="pb-16">
          <img
            src={SLIDES[currentSlide].companyLogo}
            alt="company logo"
            className="h-24 mx-auto mb-8"
          />
          <blockquote className="text-xl text-white font-medium mb-16 text-center max-w-2xl mx-auto">
            &quot;{SLIDES[currentSlide].quote}&quot;
          </blockquote>
          <p className="text-white font-medium text-center">
            {SLIDES[currentSlide].name}
          </p>
          <p className="text-sm text-white/80 text-center">
            {SLIDES[currentSlide].role}
          </p>
        </div>
        
        <div className="flex items-center justify-center gap-2 mt-8">
          {SLIDES.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-8 h-8 rounded object-cover object-center transition-opacity ${
                index === currentSlide ? "opacity-100" : "opacity-50"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.name}
                className="w-full h-full rounded object-cover"
              />
            </button>
          ))}
        </div>

        <Button
          size="icon"
          variant="ghost"
          onClick={prevSlide}
          className="!absolute text-white left-2 top-1/2 z-10 -translate-y-1/2 hidden sm:inline-flex"
        >
          <ChevronLeft className="h-7 w-7" />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          onClick={nextSlide}
          className="!absolute text-white right-2 top-1/2 z-10 -translate-y-1/2 hidden sm:inline-flex"
        >
          <ChevronRight className="h-7 w-7" />
        </Button>
      </div>
    </section>
  );
}
