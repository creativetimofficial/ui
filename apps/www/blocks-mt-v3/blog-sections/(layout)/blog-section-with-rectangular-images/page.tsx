"use client";

// @components
import { Card, Avatar, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "10 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/woman-profile-1.jpg",
      name: "Ryan Samuel",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    tag: "Startups",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "12 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/woman-profile-2.jpg",
      name: "Nora Hazel",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    tag: "Trending",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "16 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-1.jpg",
      name: "Otto Gonzalez",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-4.jpg",
    tag: "Lifestyle",
    title: "Autodesk looks to future of 3D printing with Project",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-2.jpg",
      name: "Ryan Samuel",
    },
  },
];

export default function BlogSection2() {
  return (
    <section className="py-16">
      <div className="container my-auto grid grid-cols-1 gap-8 lg:grid-cols-2">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <Card
            key={title}
            variant="ghost"
            className="bg-transparent grid gap-4 items-center sm:grid-cols-2"
          >
            <Card.Header
              as="img"
              src={img}
              alt={title}
              className="h-full max-h-72 lg:max-h-full object-cover w-full object-center m-0"
            />
            <Card.Body className="p-2">
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
              <div className="flex items-center gap-3 mt-6 md:mt-8">
                <Avatar src={author.img} alt={author.name} />
                <div className="flex flex-col">
                  <Typography color="default" className="font-semibold mb-1">
                    {author.name}
                  </Typography>
                  <Typography type="small" className="block text-foreground">
                    {date}
                  </Typography>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
      </div>
    </section>
  );
}
