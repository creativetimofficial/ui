"use client"

import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

const LINKS = [
  {
    title: "Company",
    items: [
      { title: "About Us", href: "#" },
      { title: "Careers", href: "#" },
      { title: "Premium Tools", href: "#" },
      { title: "Blogs", href: "#" },
    ],
  },
  {
    title: "Pages",
    items: [
      { title: "Login", href: "#" },
      { title: "Register", href: "#" },
      { title: "Add List", href: "#" },
      { title: "Contact", href: "#" },
    ],
  },
  {
    title: "Legal",
    items: [
      { title: "Terms", href: "#" },
      { title: "Privacy", href: "#" },
      { title: "Teams", href: "#" },
      { title: "About Us", href: "#" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "Blog", href: "#" },
      { title: "Services", href: "#" },
      { title: "Products", href: "#" },
      { title: "Pricing", href: "#" },
    ],
  },
]

const YEAR = new Date().getFullYear()

export default function Footers06() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-4 md:grid-cols-2">
          <div>
            <h6 className="text-xl font-semibold">Creative Tim</h6>
            <p className="text-foreground my-4">
              The next generation of design systems.
            </p>
            <div className="flex gap-1">
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Twitter">
                  <Twitter className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="YouTube">
                  <Youtube className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="Instagram">
                  <Instagram className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href="#" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 justify-between gap-6 lg:grid-cols-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-2">
                <p className="mb-2 font-semibold">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="text-foreground hover:text-primary"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <p className="text-foreground mt-20 text-center">
          &copy; {YEAR} Creative Tim. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
