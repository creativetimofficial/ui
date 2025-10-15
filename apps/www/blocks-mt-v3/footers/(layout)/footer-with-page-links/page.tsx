"use client";

// @components
import { Typography } from "@material-tailwind/react";

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
export default function Footer16() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto grid place-items-center">
        <ul className="mb-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
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
        <Typography className="text-foreground">
          Copyright &copy; {YEAR} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
