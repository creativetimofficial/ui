"use client";

// @components
import { Typography, Card } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/nature-1.jpg",
    title: "Search and Discovery",
    desc: "Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards we tend to offer.",
  },
  {
    img: "https://v3.material-tailwind.com/nature-2.jpg",
    title: "Last visits in US",
    desc: "Wealth creation is an evolutionarily recent positive-sum game. Status is an old zero-sum game. Those attacking wealth creation are often just seeking status.",
  },
  {
    img: "https://v3.material-tailwind.com/nature-3.jpg",
    title: "Grow in a beautiful area",
    desc: "Free people make free choices. Free choices mean you get unequal outcomes. You can have freedom, or you can have equal outcomes. You can't have both.",
  },
];

export default function BlogSection15() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-12">
        <Typography as="h2" type="h3" color="default" className="mb-2">
          Build something great
        </Typography>
        <Typography type="lead" className="max-w-lg text-foreground">
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play this game of life you need
          to appreciate every moment.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, title, desc }) => (
          <Card
            key={title}
            className="relative grid min-h-[30rem] items-end overflow-hidden rounded-lg border-0"
          >
            <img
              src={img}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/70" />
            <Card.Body className="p-6 relative flex flex-col justify-end">
              <Typography type="h5" className="text-white mb-2">
                {title}
              </Typography>
              <Typography className="text-white/80">{desc}</Typography>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
