"use client";

// @components
import { Card, Button, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    title: "Siri brings hands-free",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    title: "More Comfort",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    title: "Train Your Brain",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    title: "Grow Your Business",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers",
  },
];

export default function BlogSection7() {
  return (
    <section className="py-16 bg-black">
      <div className="mb-16 grid place-items-center text-center">
        <Typography as="h2" type="h3" className="my-4 text-white">
          Check out what&apos;s new
        </Typography>
        <Typography className="mx-auto max-w-xl [text-wrap:balance] text-white/80">
          We get insulted by others, lose trust for those others. We get back
          freezes every winter
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-12 gap-x-8 md:grid-cols-2 lg:grid-cols-4">
        {POSTS.map(({ img, title, desc }) => (
          <Card key={title} variant="ghost" className="bg-transparent">
            <Card.Header className="w-full mx-0 mt-0 mb-6 shadow-lg h-48">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover object-center rounded-lg"
              />
            </Card.Header>
            <Card.Body className="p-0">
              <Typography type="h6" className="mb-2 text-white">
                {title}
              </Typography>
              <Typography className="text-white/80">{desc}</Typography>
            </Card.Body>
            <Card.Footer className="px-0 pb-0 pt-6">
              <Button
                size="sm"
                className="bg-white border-white text-black hover:bg-white hover:border-white"
              >
                Read More
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
