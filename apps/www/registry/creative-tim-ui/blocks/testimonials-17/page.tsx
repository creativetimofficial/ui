"use client";

import * as React from "react";
import { Card, CardContent } from "@/registry/creative-tim-ui/ui/card";
import { Button } from "@/registry/creative-tim-ui/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Louis Miriam",
    role: "COO @ Netflix",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "John Down",
    role: "CEO @ Coinbase",
    quote:
      "Knowledge is either from direct experience or from verifiable, falsifiable science. There is knowledge that is transmitted but not verifiable / falsifiable. They're slowed down by their perception of themselves.",
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <Card className="rounded-xl p-4 bg-[url('/earth-outer-space.jpg')] bg-cover bg-center relative">
          <span className="absolute inset-0 bg-black/75 w-full h-full rounded-xl" />
          <CardContent className="relative px-4 sm:px-12 pt-4 sm:pt-16 md:pt-24 pb-24 items-center w-full grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="col-span-full text-left md:col-span-8 pl-4 md:row-start-auto row-start-2">
              <blockquote className="text-xl text-white font-medium mb-8">
                &quot;{SLIDES[currentSlide].quote}&quot;
              </blockquote>
              <div className="flex items-center gap-2">
                <p className="text-white font-medium">
                  {SLIDES[currentSlide].name}
                </p>
                <p className="text-sm text-white/80">
                  {SLIDES[currentSlide].role}
                </p>
              </div>
            </div>
            <div className="col-span-full md:col-span-4 grid justify-items-start md:justify-items-end">
              <img
                src={SLIDES[currentSlide].image}
                alt="company logo"
                className="h-20 md:h-24 md:mx-auto md:mb-8"
              />
            </div>
          </CardContent>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-opacity ${
                  index === currentSlide
                    ? "opacity-100 bg-white"
                    : "opacity-50 bg-white"
                }`}
              />
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
        </Card>
      </div>
    </section>
  );
}
