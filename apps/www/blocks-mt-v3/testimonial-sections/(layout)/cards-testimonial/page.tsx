"use client";

// @components
import { Card, Typography, Avatar } from "@material-tailwind/react";

// @icons
import { X } from "iconoir-react";

const TESTIMONIALS = [
  {
    image: "https://v3.material-tailwind.com/woman-profile-2.jpg",
    name: "Jessica Devis",
    username: "@jessicadevis",
    quote:
      "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 🎉",
    date: "Jan 17, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-1.jpg",
    name: "Lucian Eurel",
    username: "@lucianeurel",
    quote:
      "It's like having a superpower in your toolkit. The ability to craft custom designs quickly and efficiently with simple classes is unparalleled.",
    date: "Jan 18, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-1.jpg",
    name: "Marcell Glock",
    username: "@marcelglock",
    quote:
      "The utility-first approach and extensive component library make it a breeze to create beautiful and responsive interfaces. 😍",
    date: "Jan 19, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-2.jpg",
    name: "Linde Michele",
    username: "@lindemichele",
    quote:
      "With its clear and concise classes, I can easily communicate design intentions to my colleagues. It's a must-have tool for any web developer. 👨🏻‍💻",
    date: "Jan 20, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/man-profile-3.jpg",
    name: "Mary Joshiash",
    username: "@maryjoshiash",
    quote:
      "I've tried several CSS frameworks, but @MaterialTailwind is on a whole different level. It strikes the perfect balance between flexibility and design.",
    date: "Jan 21, 2024",
  },
  {
    image: "https://v3.material-tailwind.com/woman-profile-3.jpg",
    name: "Misha Stam",
    username: "@mishastam",
    quote:
      "Active community support make it easy to get started. It's the ideal framework for achieving @Material Design excellence in web applications.",
    date: "Jan 22, 2024",
  },
];

export default function TestimonialSection16() {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <div className="mb-16">
          <Typography className="font-semibold">Testimonials</Typography>
          <Typography as="h2" type="h3" className="my-4">
            Think about us
          </Typography>
          <Typography
            type="lead"
            className="text-foreground max-w-lg [text-wrap:_balance]"
          >
            That&apos;s the main thing people are controlled by! Thoughts -
            their perception of themselves!
          </Typography>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map(({ name, image, username, quote, date }, key) => (
            <Card key={key}>
              <Card.Header className="m-0 flex items-center gap-4 p-6">
                <Avatar src={image} alt={`${name} image`} />
                <div>
                  <Typography className="font-semibold mb-0.5 flex items-center gap-1">
                    {name}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      data-slot="icon"
                      className="w-4 h-4 text-info-light"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </Typography>
                  <Typography as="p" type="small" className="text-foreground">
                    {username}
                  </Typography>
                </div>
              </Card.Header>
              <Card.Body className="px-6">
                <Typography
                  as="blockquote"
                  className="text-foreground max-w-lg"
                >
                  {quote}
                </Typography>
              </Card.Body>
              <Card.Footer className="flex items-center justify-between gap-4 p-6">
                <Typography
                  as="a"
                  href="#"
                  type="small"
                  className="flex items-center gap-1.5 font-semibold"
                >
                  See on <X className="w-3.5 h-3.5" />
                </Typography>
                <Typography as="p" type="small" className="text-foreground">
                  {date}
                </Typography>
              </Card.Footer>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
