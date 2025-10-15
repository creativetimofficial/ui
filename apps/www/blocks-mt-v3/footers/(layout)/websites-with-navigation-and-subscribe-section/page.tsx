"use client";

// @components
import { Input, Button, Typography } from "@material-tailwind/react";

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

export default function Footer1() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col md:flex-row justify-between lg:items-end gap-4">
          <div>
            <Typography type="h6" className="text-center md:text-left mb-6">
              Material Tailwind
            </Typography>
            <ul className="flex flex-wrap justify-center md:justify-start items-center gap-x-6 gap-y-2">
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
          <div className="flex md:max-w-sm w-full items-end gap-2">
            <div className="w-full">
              <Typography
                as="label"
                htmlFor="email"
                type="small"
                className="inline-block font-semibold mb-2"
              >
                Your Email
              </Typography>
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
              />
            </div>
            <Button className="shrink-0">subscribe</Button>
          </div>
        </div>
        <div className="pt-8 flex flex-row flex-wrap-reverse items-center !justify-center gap-x-12 gap-y-3 border-t border-surface text-center md:!justify-between">
          <Typography>
            &copy; {YEAR} Material Tailwind. All Rights Reserved.
          </Typography>
          <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
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
      </div>
    </footer>
  );
}
