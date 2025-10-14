"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Github, Instagram, Twitter, Youtube } from "lucide-react"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Careers", href: "#" },
  { title: "Press", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Pricing", href: "#" },
]

export default function Footers14() {
  return (
    <footer className="bg-primary pb-8 pt-16">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="text-lg font-semibold text-white">Creative Tim</p>
            <p className="text-secondary mt-2">
              The reward for getting on the stage is fame.
            </p>
            <ul className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 md:mt-24">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-secondary hover:text-white font-semibold"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-secondary hover:text-white font-semibold">
              Get the App
            </p>
            <div className="mt-4 grid gap-4">
              <Button
                variant="secondary"
                className="bg-secondary-light border-secondary-light w-full gap-4 text-start sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 16 16"
                  className="h-9 w-9"
                >
                  <path
                    fill="#2196F3"
                    d="M8.32 7.68.58 15.42c-.37-.35-.57-.83-.57-1.35V1.93C.01 1.4.22.92.6.56l7.72 7.12z"
                  />
                  <path
                    fill="#FFC107"
                    d="M15.01 8c0 .7-.38 1.32-1.01 1.67l-2.2 1.22-2.73-2.52-.75-.69 2.89-2.89L14 6.33c.63.35 1.01.97 1.01 1.67z"
                  />
                  <path
                    fill="#4CAF50"
                    d="M8.32 7.68.6.56C.7.46.83.37.96.29 1.59-.09 2.35-.1 3 .26l8.21 4.53-2.89 2.89z"
                  />
                  <path
                    fill="#F44336"
                    d="M11.8 10.89 3 15.74c-.31.18-.66.26-1 .26-.36 0-.72-.09-1.04-.29a1.82 1.82 0 0 1-.38-.29l7.74-7.74.75.69 2.73 2.52z"
                  />
                </svg>
                <div className="flex flex-col justify-start">
                  <span className="text-sm">Download on</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </Button>
              <Button
                variant="secondary"
                className="bg-secondary-light border-secondary-light w-full gap-4 text-start sm:w-auto"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 22.185 27"
                  viewBox="0 0 22.185 27"
                  className="h-9 w-9"
                >
                  <path d="M18.436 14.271c0-2.225 1.216-4.166 3.02-5.194-.942-1.156-2.359-2.192-3.921-2.496-2.13-.415-3.345.276-4.131.553-.786.277-1.83.526-1.83.526s-1.043-.249-1.83-.526C8.959 6.857 7.744 6.165 5.614 6.58s-3.99 2.192-4.746 3.776c-1.458 3.057-.858 6.903.172 9.669 1.029 2.767 3.75 6.633 5.86 6.944 1.501.221 2.43-.816 4.674-1.079 2.244.263 3.173 1.3 4.674 1.079 2.11-.311 4.831-4.177 5.86-6.944.025-.068.051-.138.076-.208C19.987 18.935 18.436 16.784 18.436 14.271zM11.041 6.075c0 0 2.087.277 3.982-1.875s1.356-4.188 1.356-4.188-2.087-.277-3.982 1.875S11.041 6.075 11.041 6.075z" />
                </svg>
                <div className="flex flex-col justify-start">
                  <span className="text-sm">Download on</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-surface/50 flex flex-row flex-wrap-reverse items-center !justify-center gap-x-12 gap-y-3 border-t pt-8 text-center md:justify-between">
          <p className="text-secondary">
            &copy; {YEAR} Creative Tim. All Rights Reserved.
          </p>
          <div className="flex gap-1 sm:justify-center">
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white"
            >
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white"
            >
              <a href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white"
            >
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="sm"
              className="text-white hover:text-white"
            >
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
