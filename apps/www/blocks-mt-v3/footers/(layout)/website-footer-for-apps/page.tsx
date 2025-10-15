"use client";

// @components
import { Button, IconButton, Typography } from "@material-tailwind/react";

// @icons
import { Instagram, X, Github, Youtube } from "iconoir-react";

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

export default function Footer3() {
  return (
    <footer className="pt-16 pb-8 bg-primary">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-wrap justify-between items-center gap-8">
          <div>
            <Typography type="lead" className="font-semibold text-white">
              Material Tailwind
            </Typography>
            <Typography color="secondary" className="mt-2">
              The reward for getting on the stage is fame.
            </Typography>
            <ul className="md:mt-24 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <Typography
                    as="a"
                    href={href}
                    color="secondary"
                    className="hover:text-white font-semibold"
                  >
                    {title}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Typography
              as="a"
              color="secondary"
              className="hover:text-white font-semibold"
            >
              Get the App
            </Typography>
            <div className="grid gap-4 mt-4">
              <Button
                color="secondary"
                className="text-start gap-4 w-full sm:w-auto bg-secondary-light border-secondary-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 16 16"
                  id="google-play"
                  className="h-9 w-9"
                >
                  <path
                    fill="#2196F3"
                    d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                  ></path>
                  <path
                    fill="#FFC107"
                    d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                  ></path>
                  <path
                    fill="#F44336"
                    d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                  ></path>
                </svg>
                <div className="flex justify-start flex-col">
                  <Typography type="small">Download on</Typography>
                  <Typography className="font-semibold">Google Play</Typography>
                </div>
              </Button>
              <Button
                color="secondary"
                className="text-start gap-4 w-full sm:w-auto bg-secondary-light border-secondary-light"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 22.185 27"
                  viewBox="0 0 22.185 27"
                  id="apple"
                  className="w-9 h-9"
                >
                  <path d="M18.436 14.271c0-2.225 1.216-4.166 3.02-5.194-.942-1.156-2.359-2.192-3.921-2.496-2.13-.415-3.345.276-4.131.553-.786.277-1.83.526-1.83.526s-1.043-.249-1.83-.526C8.959 6.857 7.744 6.165 5.614 6.58s-3.99 2.192-4.746 3.776c-1.458 3.057-.858 6.903.172 9.669 1.029 2.767 3.75 6.633 5.86 6.944 1.501.221 2.43-.816 4.674-1.079 2.244.263 3.173 1.3 4.674 1.079 2.11-.311 4.831-4.177 5.86-6.944.025-.068.051-.138.076-.208C19.987 18.935 18.436 16.784 18.436 14.271zM11.041 6.075c0 0 2.087.277 3.982-1.875s1.356-4.188 1.356-4.188-2.087-.277-3.982 1.875S11.041 6.075 11.041 6.075z"></path>
                </svg>
                <div className="flex justify-start flex-col">
                  <Typography type="small">Download on</Typography>
                  <Typography className="font-semibold">App Store</Typography>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-row flex-wrap-reverse items-center !justify-center gap-x-12 gap-y-3 border-t border-surface/50 text-center md:justify-between">
          <Typography color="secondary">
            &copy; {YEAR} Material Tailwind. All Rights Reserved.
          </Typography>
          <div className="flex gap-1 sm:justify-center">
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <X className="h-5 w-5 text-white" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Youtube className="h-5 w-5 text-white" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Instagram className="h-5 w-5 text-white" />
            </IconButton>
            <IconButton
              as="a"
              href="#"
              color="secondary"
              variant="ghost"
              size="sm"
            >
              <Github className="h-5 w-5 text-white" />
            </IconButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
