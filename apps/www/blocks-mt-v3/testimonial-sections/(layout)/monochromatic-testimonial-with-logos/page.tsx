"use client";

// @components
import { Card, Typography, Button } from "@material-tailwind/react";

// @icons
import { BrightStar } from "iconoir-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/logo/spotify.svg",
    name: "Jessica Devis",
    quote:
      "Don't walk behind me; I may not lead. Don't walk in front of me; I may not follow. Just walk beside me and be my friend.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/netflix.svg",
    name: "Mary Joshiash",
    quote:
      "The pessimist complains about the wind; the optimist expects it to change; the realist adjusts the sails.",
  },
  {
    image: "https://v3.material-tailwind.com/logo/coinbase.svg",
    name: "Marcell Glock",
    role: "CFO @ Apple INC",
    quote:
      "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  },
];

export default function TestimonialSection12() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-20">
          <Card
            color="primary"
            variant="ghost"
            className="p-2 mx-auto w-max mb-8"
          >
            <BrightStar className="text-primary" />
          </Card>
          <Typography as="h2" type="h3" className="text-center mb-4">
            What Clients Say
          </Typography>
          <Typography
            type="lead"
            className="text-center text-foreground max-w-lg [text-wrap:_balance] mx-auto"
          >
            We&apos;re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play.
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, quote }, key) => (
            <Card key={key} variant="ghost" className="bg-transparent">
              <Card.Body className="p-0 text-center">
                <img
                  src={image}
                  alt="company logo"
                  className="mx-auto h-20 mb-4"
                />
                <Typography
                  as="blockquote"
                  className="mx-auto text-foreground max-w-lg"
                >
                  &quot;{quote}&quot;
                </Typography>
                <Typography className="font-semibold my-6">{name}</Typography>
                <Button variant="outline" color="secondary">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
