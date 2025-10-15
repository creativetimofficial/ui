"use client";

// @components
import { Card, Typography, Button } from "@material-tailwind/react";

// @icons
import { Heart, Globe, Puzzle, Microphone } from "iconoir-react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/nature-1.jpg",
    icon: Heart,
    title: "Cultural",
    desc: "257 spots",
  },
  {
    img: "https://v3.material-tailwind.com/nature-2.jpg",
    icon: Puzzle,
    title: "Modern Life",
    desc: "117 spots",
  },
  {
    img: "https://v3.material-tailwind.com/nature-3.jpg",
    icon: Globe,
    title: "Popularity",
    desc: "363 spots",
  },
  {
    img: "https://v3.material-tailwind.com/nature-4.jpg",
    icon: Microphone,
    title: "Good Vibes",
    desc: "215 spots",
  },
];

export default function BlogSection4() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-16 grid place-items-center text-center">
        <Typography as="h2" type="h3" color="default" className="my-4">
          Check out what&apos;s new
        </Typography>
        <Typography className="mx-auto max-w-xl [text-wrap:balance] text-foreground">
          We get insulted by others, lose trust for those others. We get back
          freezes every winter
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-y-6 gap-x-0 md:gap-x-6 md:grid-cols-3">
        <Card color="primary" className="flex flex-col justify-between">
          <Card.Header className="m-0 p-6 sm:p-8">
            <Typography className="block font-semibold text-center text-white/80">
              Landscape
            </Typography>
          </Card.Header>
          <Card.Body className="p-6 sm:p-8">
            <Typography type="h5" className="text-white text-center">
              Nature&apos;s Light
            </Typography>
            <Typography className="py-6 text-white/80 text-center">
              It really matters and then like it really doesn&apos;t matter.
              What matters is the people who are sparked by it.
            </Typography>
          </Card.Body>
          <Card.Footer className="p-6 sm:p-8 text-center">
            <Button
              size="sm"
              className="bg-white border-white text-black hover:bg-white hover:border-white"
            >
              Read More
            </Button>
          </Card.Footer>
        </Card>
        <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {POSTS.map(({ img, icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="relative grid min-h-48 w-full overflow-hidden"
            >
              <img
                src={img}
                alt={title}
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 h-full w-full bg-black/60" />
              <Card.Body className="relative flex flex-col p-6 h-full justify-between">
                <Icon className="w-8 h-8 stroke-2 text-white" />
                <div className="space-y-0.5">
                  <Typography type="h6" className="text-white">
                    {title}
                  </Typography>
                  <Typography className="text-white/80">{desc}</Typography>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
