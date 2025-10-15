"use client";

// @components
import { Typography, IconButton } from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

const LINKS = [
  {
    title: "Company",
    items: [
      {
        title: "About Us",
        href: "#",
      },
      {
        title: "Careers",
        href: "#",
      },
      {
        title: "Premium Tools",
        href: "#",
      },
      {
        title: "Blogs",
        href: "#",
      },
    ],
  },
  {
    title: "Pages",
    items: [
      {
        title: "Login",
        href: "#",
      },
      {
        title: "Register",
        href: "#",
      },
      {
        title: "Add List",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ],
  },
  {
    title: "Legal",
    items: [
      {
        title: "Terms",
        href: "#",
      },
      {
        title: "Privacy",
        href: "#",
      },
      {
        title: "Teams",
        href: "#",
      },
      {
        title: "About Us",
        href: "#",
      },
    ],
  },
  {
    title: "Resourced",
    items: [
      {
        title: "Blog",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Products",
        href: "#",
      },
      {
        title: "Pricings",
        href: "#",
      },
    ],
  },
];

const YEAR = new Date().getFullYear();

export default function Footer4() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <Typography type="h6">Material Tailwind</Typography>
            <Typography className="text-foreground my-4">
              The next generation of design systems.
            </Typography>
            <div className="flex gap-1">
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <X className="h-4 w-4" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Youtube className="h-4 w-4" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Instagram className="h-4 w-4" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Github className="h-4 w-4" />
              </IconButton>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 justify-between gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-2">
                <Typography className="mb-2 font-semibold">{title}</Typography>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <Typography
                      as="a"
                      href={href}
                      className="hover:text-primary font-medium text-foreground"
                    >
                      {title}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <Typography className="text-foreground text-center mt-20">
          &copy; {YEAR} Material Tailwind. All Rights Reserved.
        </Typography>
      </div>
    </footer>
  );
}
