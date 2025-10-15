"use client";

// @components
import { Card, Typography, Rating } from "@material-tailwind/react";
import { Plus } from "iconoir-react";

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

export default function TestimonialSection5() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
          <Card key={key} variant="ghost" className="bg-transparent">
            <Card.Body className="p-0 text-center">
              <img
                src={image}
                alt={`${name} image`}
                className="w-full h-full mx-auto max-w-16 max-h-16 object-cover object-center rounded-xl mb-4"
              />
              <Typography className="font-semibold">{name}</Typography>
              <Typography as="p" type="small" className="text-foreground ">
                {role}
              </Typography>
              <Typography
                as="blockquote"
                className="mt-4 mb-6 mx-auto max-w-lg text-foreground"
              >
                &quot;{quote}&quot;
              </Typography>
              <Rating
                value={rating}
                color="warning"
                className="[&_svg]:w-5 [&_svg]:h-5"
                readonly
              />
            </Card.Body>
          </Card>
        ))}
        <Card variant="outline" color="secondary">
          <Card.Body className="grid place-items-center w-full h-full">
            <Plus className="w-10 h-10" />
          </Card.Body>
        </Card>
      </div>
    </section>
  );
}
