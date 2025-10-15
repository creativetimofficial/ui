"use client";

// @components
import { Typography, IconButton } from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "Company",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Team",
    href: "#",
  },
  {
    title: "Products",
    href: "#",
  },
  {
    title: "Blogs",
    href: "#",
  },
  {
    title: "Pricing",
    href: "#",
  },
];
export default function Footer6() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto grid place-items-center">
        <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
          {LINKS.map(({ title, href }, key) => (
            <li key={key}>
              <Typography
                as="a"
                href={href}
                className="hover:text-primary text-foreground font-semibold"
              >
                {title}
              </Typography>
            </li>
          ))}
        </ul>
        <div className="flex gap-1 my-8">
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
        <Typography className="text-foreground">
          Copyright &copy; {YEAR} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
