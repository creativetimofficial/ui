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

export default function Footers15() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="mb-4 flex flex-col justify-between gap-4 md:flex-row">
          <div>
            <h6 className="text-xl font-semibold">Creative Tim</h6>
            <ul className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-foreground hover:text-primary font-medium"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:text-right">
            <p className="font-semibold">
              The reward for getting on the stage is fame.
            </p>
            <p className="mb-4 font-semibold">
              The price of fame is you can&apos;t get off the stage.
            </p>
            <div className="flex gap-1 md:justify-end">
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <p className="text-foreground">
          All rights reserved. &copy; {YEAR} Creative Tim
        </p>
      </div>
    </footer>
  )
}
