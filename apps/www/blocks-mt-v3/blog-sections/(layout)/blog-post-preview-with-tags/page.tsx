"use client";

// @components
import { Card, Chip, Button, Typography } from "@material-tailwind/react";

const POSTS = [
  {
    img: "https://v3.material-tailwind.com/3d-obj-1.jpg",
    category: "Otto Gonzalez",
    title: "Autodesk looks to future of 3D printing with Project",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    tags: ["Product", "Design", "UX"],
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-2.jpg",
    category: "Ryan Samuel",
    title: "Lyft launching cross-platform service this week",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    tags: ["Product", "Design", "UX"],
  },
  {
    img: "https://v3.material-tailwind.com/3d-obj-3.jpg",
    category: "Nora Hazel",
    title: "6 insights into the French Fashion landscape",
    desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens bed design but the back is too high for the beams and angle of the ceiling I also wanted to point out.",
    tags: ["Product", "Design", "UX"],
  },
];

export default function BlogSection3() {
  return (
    <section className="py-16">
      <div className="container mx-auto mb-16 text-center">
        <Typography
          type="small"
          color="primary"
          className="block font-semibold"
        >
          Latest Blog Posts
        </Typography>
        <Typography as="h2" type="h3" color="default" className="my-4">
          Explore Our Places
        </Typography>
        <Typography
          type="lead"
          className="mx-auto max-w-3xl [text-wrap:balance] text-foreground"
        >
          This is the paragraph where you can write more details about blogs.
          Keep you user engaged by providing meaningful information.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 items-start gap-16 md:grid-cols-2 lg:grid-cols-3">
        {POSTS.map(({ img, category, title, desc, tags }) => (
          <Card key={title} variant="ghost" className="bg-transparent">
            <Card.Header className="w-full mx-0 mt-0 mb-6 h-56 shadow-lg">
              <img
                src={img}
                alt={title}
                className="h-full w-full object-cover rounded-lg"
              />
            </Card.Header>
            <Card.Body className="p-0 mb-6">
              <Typography
                type="small"
                color="primary"
                className="block font-semibold"
              >
                {category}
              </Typography>
              <Typography type="h5" color="default" className="my-4">
                {title}
              </Typography>
              <Typography className="text-foreground">{desc}</Typography>
            </Card.Body>
            <Card.Footer className="flex p-0 gap-2 items-center flex-wrap">
              {tags.map((tag) => (
                <Chip key={tag} size="sm">
                  <Chip.Label>{tag}</Chip.Label>
                </Chip>
              ))}
            </Card.Footer>
          </Card>
        ))}
      </div>
      <div className="text-center mt-24">
        <Button>View More</Button>
      </div>
    </section>
  );
}
