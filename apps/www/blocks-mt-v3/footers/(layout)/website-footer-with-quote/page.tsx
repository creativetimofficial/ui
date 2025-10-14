"use client";

// @components
import { Typography, IconButton } from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Careers",
    href: "#",
  },
  {
    title: "Press",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
];

export default function Footer8() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
          <div>
            <Typography type="h6">Material Tailwind</Typography>
            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <Typography
                    as="a"
                    href={href}
                    className="hover:text-primary text-foreground font-medium"
                  >
                    {title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <Typography className="font-semibold">
              The reward for getting on the stage is fame.
            </Typography>
            <Typography className="mb-4 font-semibold">
              The price of fame is you can&apos;t get off the stage.
            </Typography>
            <div className="flex md:justify-end gap-1">
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <X className="h-5 w-5" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Youtube className="h-5 w-5" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Instagram className="h-5 w-5" />
              </IconButton>
              <IconButton as="a" href="#" color="secondary" variant="ghost">
                <Github className="h-5 w-5" />
              </IconButton>
            </div>
          </div>
        </div>
        <Typography className="text-foreground">
          All rights reserved. &copy; {YEAR} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
