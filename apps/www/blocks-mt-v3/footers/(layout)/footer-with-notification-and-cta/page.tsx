"use client";

// @components
import { Typography, Button } from "@material-tailwind/react";

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
];

export default function Footer13() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center gap-8 !justify-between">
          <div className="space-y-2">
            <Typography className="font-semibold">
              New Features available! Upgrade to v3.0.0
            </Typography>
            <Button size="sm">Upgrade</Button>
          </div>
          <div className="grid gap-2">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
      </div>
    </footer>
  );
}
