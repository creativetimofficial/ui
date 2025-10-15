"use client";

import * as React from "react";

// @components
import { Avatar, Typography } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    role: "CEO @ Marketing Digital LTD",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Mary Joshiash",
    role: "Marketing @ Apple INC",
    quote:
      "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality). Choose the path that leaves you more equanimous in the long term.",
  },
];

export default function TestimonialSection14() {
  const [selectedTestimonial, setSelectedTestimonial] = React.useState(0);

  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-12 gap-y-8 items-center">
        <div className="col-span-full md:col-span-8 row-start-2 md:row-start-auto">
          <Typography as="h2" type="h3">
            Work with us
          </Typography>
          <Typography className="text-foreground my-4 [text-wrap:balance] max-w-lg">
            {TESTIMONIALS[selectedTestimonial].quote}
          </Typography>
          <div>
            <Typography className="font-semibold">
              {TESTIMONIALS[selectedTestimonial].name}
            </Typography>
            <Typography as="p" type="small" className="text-foreground">
              {TESTIMONIALS[selectedTestimonial].role}
            </Typography>
          </div>
          <div className="flex mt-8 divide-x divide-surface items-center">
            {TESTIMONIALS.map((testimonial, index) => (
              <div className={index !== 0 ? "px-4" : "pr-4"} key={index}>
                <Avatar
                  role="button"
                  shape="rounded"
                  src={testimonial.image}
                  onClick={() => setSelectedTestimonial(index)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-full md:col-span-4">
          <img
            src={TESTIMONIALS[selectedTestimonial].image}
            alt="user profile"
            className="w-full h-full max-h-96 max-w-96 rounded-xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
