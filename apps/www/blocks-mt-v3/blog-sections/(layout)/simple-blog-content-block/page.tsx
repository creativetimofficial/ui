"use client";

// @components
import { Card, Avatar, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    tag: "House",
    title: "Shared Coworking",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 26 May",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-1.jpg",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    tag: "Office",
    title: "Really Housekeeping",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 03 May",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-2.jpg",
      name: "Chriss Smahos",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    tag: "Hub",
    title: "Coworking Office",
    desc: "Use border utilities to quickly style the border and border-radius of an element. Great for images, buttons.",
    date: "Posted on 12 April",
    author: {
      img: "https://v3.material-tailwind.com/woman-profile-1.jpg",
      name: "Elijah Miller",
    },
  },
];

export default function BlogSection11() {
  return (
    <section className="py-16">
      <div className="container mx-auto grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
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
            <Card.Footer className="flex items-center gap-3 p-6">
              <Avatar src={author.img} alt={author.name} />
              <div className="space-y-0.5">
                <Typography color="default" className="font-semibold">
                  {author.name}
                </Typography>
                <Typography type="small" className="block text-foreground">
                  {date}
                </Typography>
              </div>
            </Card.Footer>
          </Card>
        ))}
      </div>
    </section>
  );
}
