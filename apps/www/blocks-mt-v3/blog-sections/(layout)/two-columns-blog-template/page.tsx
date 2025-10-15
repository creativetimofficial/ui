"use client";

// @components
import { Card, Button, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/house-1.png",
    tag: "Entire Apartment • 3 Guests • 2 Beds",
    title: "Lovely and cozy apartment",
    desc: "Siri's latest trick is offering a hands-free TV viewing experience, that will allow consumers to turn on or off their television, change inputs, fast forward.",
  },
  {
    img: "https://v3.material-tailwind.com/house-2.png",
    tag: "Private Room • 1 Guests • 1 Sofa",
    title: "Single room in the center of city",
    desc: "As Uber works through a huge amount of internal management turmoil, the company is also consolidating more of its international business.",
  },
  {
    img: "https://v3.material-tailwind.com/house-3.png",
    tag: "Entire Apartment • 4 Guests • 2 Beds",
    title: "Independent house bedroom",
    desc: "Music is something that every person has his or her own specific opinion about. Different people have different taste, and various types of music.",
  },
  {
    img: "https://v3.material-tailwind.com/house-4.jpeg",
    tag: "Entire Apartment • 2 Guests • 1 Bed",
    title: "Zen Gateway with pool and garden",
    desc: "Fast forward, rewind and more, without having to first invoke a specific skill, or even press a button on their remote.",
  },
  {
    img: "https://v3.material-tailwind.com/house-5.jpeg",
    tag: "Entire Flat • 8 Guests • 3 Rooms",
    title: "Cheapest hotels for a luxury vacation",
    desc: "Today, the company announced it will be combining its rides-on-demand business and UberEATS.",
  },
  {
    img: "https://v3.material-tailwind.com/house-6.jpeg",
    tag: "Entire Apartment • 4 Guests • 2 Beds",
    title: "Cozy Double Room Near Station",
    desc: "Different people have different taste, and various types of music have many ways of leaving an impact on someone.",
  },
];

export default function BlogSection14() {
  return (
    <section className="py-16">
      <div className="mb-16 grid place-items-center text-center">
        <Typography as="h2" type="h3" color="default" className="my-4">
          Book your next trip
        </Typography>
        <Typography className="mx-auto max-w-xl [text-wrap:balance] text-foreground">
          An arrangement you make to have a hotel room, tickets, etc. at a
          particular time in the future.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc }) => (
          <Card key={title}>
            <Card.Header className="h-60 m-0 p-4 w-full rounded-none">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover object-center rounded shadow-lg"
              />
            </Card.Header>
            <Card.Body className="px-6 pb-0 pt-2">
              <Typography
                type="small"
                color="primary"
                className="mb-2 block font-semibold"
              >
                {tag}
              </Typography>
              <Typography type="h6" color="default" className="mb-2">
                {title}
              </Typography>
              <Typography className="text-foreground">{desc}</Typography>
            </Card.Body>
            <Card.Footer className="p-6">
              <Button size="sm">From / Night</Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
