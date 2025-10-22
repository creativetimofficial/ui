"use client"

import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "Company", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Team", href: "#" },
  { title: "Products", href: "#" },
  { title: "Blogs", href: "#" },
  { title: "Pricing", href: "#" },
]

export default function Footers13() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto grid place-items-center">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {LINKS.map(({ title, href }, key) => (
            <li key={key}>
              <a
                href={href}
                className="text-foreground hover:text-primary font-semibold"
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
        <div className="my-8 flex gap-1">
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
        <p className="text-foreground">Copyright &copy; {YEAR} Creative Tim</p>
      </div>
    </footer>
  )
}
