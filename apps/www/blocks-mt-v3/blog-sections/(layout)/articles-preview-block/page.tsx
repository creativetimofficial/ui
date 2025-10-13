"use client";

// @components
import { Card, Button, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
    desc: "Finding temporary housing for your dog should be as easy as renting an Airbnb. That's the idea behind Rover",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    tag: "Startups",
    title: "Lyft launching cross-platform service this week",
    desc: "If you've ever wanted to train a machine learning model and integrate it with IFTTT, you now can ",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    tag: "Business",
    title: "6 insights into the French Fashion landscape",
    desc: "Insticator is announcing that it has raised $5.2 million in Series A funding. The startup allows online ",
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    tag: "Enterprise",
    title: "6 insights into the French Fashion landscape",
    desc: "Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large,",
  },
];

export default function BlogSection12() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {POSTS.map(({ img, tag, title, desc }) => (
          <Card key={title} variant="ghost" className="bg-transparent">
            <Card.Header className="h-48 w-full m-0 rounded-none">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover object-center rounded-lg shadow-lg"
              />
            </Card.Header>
            <Card.Body className="px-2 py-4">
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
            <Card.Footer className="py-0 px-2">
              <Button size="sm" variant="outline">
                Read More
              </Button>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
