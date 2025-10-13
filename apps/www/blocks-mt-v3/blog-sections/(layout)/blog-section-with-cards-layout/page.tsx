"use client";

// @components
import { Card, Avatar, Button, Typography } from "@material-tailwind/react";

// @icons
import { ArrowDown } from "iconoir-react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
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
    tag: "Enterprise",
    title: "Autodesk looks to future of 3D printing with Project Escher",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-2.jpg",
      name: "Ryan Samuel",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-5.jpg",
    tag: "Lifestyle",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "18 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/woman-profile-3.jpg",
      name: "Nora Hazel",
    },
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-6.jpg",
    tag: "Startups",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    date: "22 September 2022",
    author: {
      img: "https://v3.material-tailwind.com/man-profile-3.jpg",
      name: "Otto Gonzalez",
    },
  },
];

export default function BlogSection1() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-12 text-center">
        <Typography
          type="small"
          color="primary"
          className="block font-semibold"
        >
          Latest Blog Posts
        </Typography>
        <Typography as="h2" type="h3" color="default" className="my-4">
          Blog Posts
        </Typography>
        <Typography
          type="lead"
          className="mx-auto max-w-3xl [text-wrap:balance] text-foreground"
        >
          This is the paragraph where you can write more details about blogs.
          Keep you user engaged by providing meaningful information.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, tag, title, desc, date, author }) => (
          <Card key={title}>
            <Card.Header
              as="img"
              src={img}
              alt={title}
              className="h-56 mb-0 mx-3 mt-3 w-[calc(100%-24px)] object-cover object-center"
            />
            <Card.Body className="p-6">
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
            <Card.Footer className="flex items-center gap-3 px-6 pb-6 pt-0">
              <Avatar size="sm" src={author.img} alt={author.name} />
              <div className="flex flex-col">
                <Typography
                  type="small"
                  color="default"
                  className="font-semibold block"
                >
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
      <div className="text-center mt-12">
        <Button variant="ghost" color="secondary">
          <ArrowDown className="mr-2 h-4 w-4 stroke-2" />
          View More
        </Button>
      </div>
    </section>
  );
}
