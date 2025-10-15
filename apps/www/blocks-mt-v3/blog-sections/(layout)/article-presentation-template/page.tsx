"use client";

// @components
import { Typography, Button } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/nature-1.jpg",
    tag: "Enterprise",
    title: "Siri brings hands-free TV to more devices",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.",
  },
  {
    img: "https://v3.material-tailwind.com/nature-3.jpg",
    tag: "Music",
    title: "Shark Week: How to Watch It Scientist",
    desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating and rationalizing more of its international business. Today, the company announced it will be combining its rides-on-demand business and UberEATS.",
  },
];

export default function BlogSection5() {
  return (
    <section className="container mx-auto py-16 gap-16 justify-center grid items-center">
      {POSTS.map(({ img, tag, title, desc }) => (
        <div key={title} className="grid place-items-center max-w-2xl">
          <img
            src={img}
            alt={title}
            className="h-full max-h-96 w-full rounded-lg object-cover object-center shadow-lg"
          />
          <div className="px-2 py-6 sm:px-6 grid place-items-center text-center">
            <Typography color="primary" className="block font-semibold">
              {tag}
            </Typography>
            <Typography type="h5" color="default" className="my-3">
              {title}
            </Typography>
            <Typography className="mb-6 text-foreground">{desc}</Typography>
            <Button>Read More</Button>
          </div>
        </div>
      ))}
    </section>
  );
}
