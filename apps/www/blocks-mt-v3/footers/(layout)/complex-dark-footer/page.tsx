"use client";

// @components
import { Typography, Select, Input, Button } from "@material-tailwind/react";

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

export default function Footer5() {
  return (
    <footer className="pt-16 pb-8 bg-primary">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-10 sm:grid-cols-2">
          <div className="sm:row-auto row-start-2 grid grid-cols-2 lg:grid-cols-4 justify-between gap-6">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-2">
                <Typography color="secondary" className="mb-2 font-semibold">
                  {title}
                </Typography>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <Typography
                      as="a"
                      href={href}
                      color="secondary"
                      className="hover:text-secondary font-medium"
                    >
                      {title}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="lg:ml-auto">
            <Typography
              color="secondary"
              className="font-semibold mb-4 flex lg:justify-end"
            >
              Language & Currency
            </Typography>
            <Select size="lg" color="secondary">
              <Select.Trigger
                className="lg:w-72 placeholder:text-white/60 text-white mb-4"
                placeholder="Select Version"
              />
              <Select.List>
                <Select.Option>English</Select.Option>
                <Select.Option>Spanish</Select.Option>
                <Select.Option>Hindi</Select.Option>
              </Select.List>
            </Select>
            <Select size="lg" color="secondary">
              <Select.Trigger
                className="lg:w-72 placeholder:text-white/60 text-white"
                placeholder="Select Currency"
              />
              <Select.List>
                <Select.Option>USD</Select.Option>
                <Select.Option>Euro</Select.Option>
                <Select.Option>Rupee</Select.Option>
              </Select.List>
            </Select>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:flex-row justify-between lg:items-end gap-4 pt-6 pb-8 border-b border-t border-surface/50">
          <div>
            <Typography color="secondary" className="mb-2 font-semibold">
              Subscribe to our newsletters
            </Typography>
            <Typography color="secondary">
              The latest news, articles and resources sent to your inbox
              weekely.
            </Typography>
          </div>
          <div className="flex md:max-w-sm w-full items-end gap-2">
            <div className="w-full">
              <Typography
                as="label"
                htmlFor="email"
                type="small"
                color="secondary"
                className="inline-block font-semibold mb-2"
              >
                Your Email
              </Typography>
              <Input
                color="secondary"
                type="email"
                id="email"
                placeholder="someone@example.com"
                className=" placeholder:text-white/60 text-white"
              />
            </div>
            <Button color="secondary" className="shrink-0">
              subscribe
            </Button>
          </div>
        </div>
        <Typography color="secondary" className="mt-8">
          All rights reserved. &copy; {YEAR} Material Tailwind
        </Typography>
      </div>
    </footer>
  );
}
