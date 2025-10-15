"use client";

// @components
import { Typography } from "@material-tailwind/react";

const YEAR = new Date().getFullYear();

const LINKS = [
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact Information",
    href: "#",
  },
  {
    title: "Privacy Policy",
    href: "#",
  },
  {
    title: "Terms & Conditions",
    href: "#",
  },
  {
    title: "FAQ",
    href: "#",
  },
];

export default function Footer11() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-row flex-wrap items-center !justify-center gap-6 lg:!justify-between">
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
          <Typography type="small" className="text-foreground font-medium">
            All rights reserved. Copyright &copy; {YEAR} Material Tailwind
          </Typography>
        </div>
      </div>
    </footer>
  );
}
