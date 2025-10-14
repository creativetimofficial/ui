"use client";

// @components

import { Typography, IconButton } from "@material-tailwind/react";

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
    ],
  },
];

const YEAR = new Date().getFullYear();

export default function Footer2() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="mb-6 grid grid-cols-1 justify-between gap-4 sm:grid-cols-2">
          <Typography type="h6" className="mb-4">
            Material Tailwind
          </Typography>
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography className="mb-2 font-semibold">{title}</Typography>
                {items.map(({ title, href }) => (
                  <li key={title} className="mb-1">
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
        <div className="pt-6 flex flex-row flex-wrap items-end gap-x-12 gap-y-3 border-t border-surface justify-between">
          <div className="text-left">
            <Typography type="lead" className="mb-2 font-semibold">
              The reward for getting on the stage is fame.
            </Typography>
            <Typography className="text-foreground">
              The price of fame is you can&apos;t get off the stage.
            </Typography>
          </div>
          <Typography className="text-foreground">
            &copy; {YEAR} Material Tailwind. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
}
