"use client"

import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

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
    <footer className="bg-primary pt-20 pb-8">
      <div className="container mx-auto">
        <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h6 className="text-2xl font-semibold text-white">Creative Tim</h6>
            <p className="text-secondary mt-3 max-w-md">
              The reward for getting on the stage is fame.
            </p>
            <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-secondary transition-colors hover:text-white"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:ml-auto">
            <p className="mb-6 text-lg font-semibold text-white">Get the App</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <Button
                variant="outline"
                className="h-auto gap-4 rounded-xl border-0 bg-black px-6 py-4 text-start text-white transition-all hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  viewBox="0 0 16 16"
                  className="h-14 w-14 shrink-0"
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
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-normal tracking-wide uppercase">
                    GET IT ON
                  </span>
                  <span className="text-xl leading-tight font-semibold">
                    Google Play
                  </span>
                </div>
              </Button>
              <Button
                variant="outline"
                className="h-auto gap-4 rounded-xl border-0 bg-black px-6 py-4 text-start text-white transition-all hover:bg-white/10"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 22.185 27"
                  viewBox="0 0 22.185 27"
                  className="h-14 w-14 shrink-0 fill-white"
                >
                  <path d="M18.436 14.271c0-2.225 1.216-4.166 3.02-5.194-.942-1.156-2.359-2.192-3.921-2.496-2.13-.415-3.345.276-4.131.553-.786.277-1.83.526-1.83.526s-1.043-.249-1.83-.526C8.959 6.857 7.744 6.165 5.614 6.58s-3.99 2.192-4.746 3.776c-1.458 3.057-.858 6.903.172 9.669 1.029 2.767 3.75 6.633 5.86 6.944 1.501.221 2.43-.816 4.674-1.079 2.244.263 3.173 1.3 4.674 1.079 2.11-.311 4.831-4.177 5.86-6.944.025-.068.051-.138.076-.208C19.987 18.935 18.436 16.784 18.436 14.271zM11.041 6.075c0 0 2.087.277 3.982-1.875s1.356-4.188 1.356-4.188-2.087-.277-3.982 1.875S11.041 6.075 11.041 6.075z" />
                </svg>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-normal tracking-wide uppercase">
                    Download on the
                  </span>
                  <span className="text-xl leading-tight font-semibold">
                    App Store
                  </span>
                </div>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-surface/50 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-secondary order-2 md:order-1">
            &copy; {YEAR} Creative Tim. All Rights Reserved.
          </p>
          <div className="order-1 flex gap-1 md:order-2">
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
