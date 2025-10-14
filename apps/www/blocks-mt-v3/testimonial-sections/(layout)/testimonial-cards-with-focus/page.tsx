"use client";

// @components
import { Card, Typography, Avatar, Rating } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Lucian Eurel",
    date: "Posted on 27 February",
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    rating: 4,
    isHighlighted: false,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Lucian Eurel",
    date: "Posted on 28 February",
    quote:
      "If you have the opportunity to play this game of life you need to appreciate every moment.",
    rating: 4,
    isHighlighted: true,
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Mathew Glock",
    date: "Posted on 29 February",
    quote:
      "Artist is a term applied to a person who engages in an activity deemed to be an art.",
    rating: 5,
    isHighlighted: false,
  },
];

export default function TestimonialSection7() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <Typography as="h2" type="h3" className="text-center mb-4">
            Think about us
          </Typography>
          <Typography
            type="lead"
            className="text-center text-foreground max-w-lg [text-wrap:_balance] mx-auto"
          >
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(
            ({ name, image, date, quote, rating, isHighlighted }, key) => (
              <Card
                key={key}
                variant={isHighlighted ? "solid" : "ghost"}
                color={isHighlighted ? "primary" : "default"}
                className={
                  isHighlighted
                    ? "text-white"
                    : "bg-transparent text-black dark:text-white"
                }
              >
                <Card.Body className="p-4">
                  <Avatar
                    src={image}
                    alt={`${name} image`}
                    size="lg"
                    shape="rounded"
                    className="mb-4"
                  />
                  <Typography
                    type="lead"
                    color="inherit"
                    className="font-semibold"
                  >
                    {name}
                  </Typography>
                  <Typography className="opacity-80" color="inherit">
                    {date}
                  </Typography>
                  <Typography
                    as="blockquote"
                    color="inherit"
                    className="opacity-80 max-w-lg my-4"
                  >
                    &quot;{quote}&quot;
                  </Typography>
                  <Rating
                    readonly
                    value={rating}
                    color="warning"
                    className="[&_svg]:w-5 [&_svg]:h-5"
                  />
                </Card.Body>
              </Card>
            )
          )}
        </div>
      </div>
    </section>
  );
}
