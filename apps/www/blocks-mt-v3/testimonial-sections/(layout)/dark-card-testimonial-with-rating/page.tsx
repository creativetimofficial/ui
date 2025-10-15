"use client";

// @components
import { Card, Typography, Avatar, Rating } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    role: "CEO @ Marketing Digital LTD",
    quote:
      "The connections you make at Web Summit are unparalleled, we met users all over the world.",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Mary Joshiash",
    role: "Marketing @ Apple INC",
    quote:
      "Web Summit will increase your appetite, your inspiration, your skills, your motivation and your network.",
    rating: 5,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
    rating: 5,
  },
];

export default function TestimonialSection11() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Typography as="h2" type="h3" className="text-center mb-4 text-white">
            Think about us
          </Typography>
          <Typography
            type="lead"
            className="text-center text-white/80 max-w-lg [text-wrap:_balance] mx-auto"
          >
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, role, quote, rating }, key) => (
            <Card key={key} className="">
              <Card.Body className="p-6 text-center">
                <Avatar
                  src={image}
                  alt={`${name} image`}
                  size="xxl"
                  className="mx-auto mb-6"
                />
                <Typography type="lead" className="font-semibold">
                  {name}
                </Typography>
                <Typography className="text-foreground mb-4">{role}</Typography>
                <Typography
                  as="blockquote"
                  className="text-foreground mx-auto max-w-lg mb-4"
                >
                  &quot;{quote}&quot;
                </Typography>
                <Rating
                  value={rating}
                  color="warning"
                  className="[&_svg]:w-5 [&_svg]:h-5"
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
