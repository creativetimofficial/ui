"use client";

import * as React from "react";

// @components
import {
  Card,
  Input,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

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

const YEAR = new Date().getFullYear();

export default function Footer10() {
  return (
    <section className="pt-16 pb-8">
      <div className="container mx-auto text-center">
        <Card
          color="primary"
          className="py-12 px-6 grid shadow-none justify-center text-center"
        >
          <Typography as="h2" type="h4" color="secondary">
            Be the first who see the news
          </Typography>
          <Typography
            color="secondary"
            className="mt-4 max-w-lg [text-wrap:_balance]"
          >
            Your company may not be in the software business, but eventually, a
            software company will be in your business.
          </Typography>
          <div className="flex flex-col sm:flex-row max-w-sm w-full gap-x-2 gap-y-4 mt-10 mx-auto">
            <Input
              size="lg"
              color="secondary"
              type="email"
              id="email"
              placeholder="someone@example.com"
              className="placeholder:text-white/60 text-white"
            />
            <Button size="lg" color="secondary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </Card>
        <div className="mt-16 mb-6 flex flex-col lg:flex-row items-center !justify-center gap-x-10 gap-y-3 lg:!justify-between">
          <Typography className="font-semibold">Material Tailwind</Typography>
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
          <div className="flex gap-1">
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <X className="h-5 w-5" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Youtube className="h-5 w-5" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Instagram className="h-5 w-5" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Github className="h-5 w-5" />
            </IconButton>
          </div>
        </div>
        <Typography type="small" className="text-foreground font-medium">
          All rights reserved. Copyright &copy; {YEAR} Material Tailwind
        </Typography>
      </div>
    </section>
  );
}
