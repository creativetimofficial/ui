"use client";

// @components
import { Button, Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Blog",
    href: "#",
  },
  {
    title: "Service",
    href: "#",
  },
];

export default function Footer7() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="pt-8 flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-3 border-t border-surface text-center md:!justify-between">
          <Typography className="text-foreground">
            Copyright &copy; {YEAR} Material Tailwind
          </Typography>
          <ul className="flex flex-wrap justify-center items-center gap-6">
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
            <Button className="sm:max-w-fit w-full">Sign in</Button>
          </ul>
        </div>
      </div>
    </footer>
  );
}
