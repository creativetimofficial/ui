"use client";

// @components
import { Typography, IconButton, Select } from "@material-tailwind/react";

// @icons
import { Settings } from "iconoir-react";

import { useCountries } from "use-react-countries";

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

export default function Footer14() {
  const { countries } = useCountries();

  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap justify-center items-start gap-4 md:justify-between">
          <div className="grid gap-3">
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
            <Typography
              type="small"
              className="text-foreground font-medium md:text-left text-center"
            >
              All rights reserved. Copyright &copy; {YEAR} Material Tailwind
            </Typography>
          </div>
          <div className="flex gap-2 items-center">
            <IconButton variant="ghost">
              <Settings className="h-5 w-5" />
            </IconButton>
            <Select placement="bottom-start">
              <Select.Trigger placeholder="Select Country" className="w-64" />
              <Select.List className="overflow-y-scroll h-72 w-max">
                {countries.map(({ name, flags }) => (
                  <Select.Option key={name} value={name}>
                    <div className="flex items-start gap-2 text-start">
                      <img
                        src={flags.svg}
                        alt={name}
                        className="object-cover w-5 h-5 rounded-full"
                      />
                      <Typography type="small">{name}</Typography>
                    </div>
                  </Select.Option>
                ))}
              </Select.List>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  );
}
