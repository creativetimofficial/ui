"use client"

import { Github, Instagram, Twitter, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Careers", href: "#" },
  { title: "Press", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Pricing", href: "#" },
]

const YEAR = new Date().getFullYear()

export default function Footers04() {
  return (
    <section className="pt-16 pb-8">
      <div className="container mx-auto text-center">
        <Card className="bg-primary border-primary grid justify-center px-6 py-12 text-center shadow-none">
          <h2 className="text-secondary text-2xl font-semibold">
            Be the first who see the news
          </h2>
          <p className="text-secondary mt-4 max-w-lg [text-wrap:_balance]">
            Your company may not be in the software business, but eventually, a
            software company will be in your business.
          </p>
          <div className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-x-2 gap-y-4 sm:flex-row">
            <Input
              type="email"
              id="email"
              placeholder="someone@example.com"
              className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
            />
            <Button variant="secondary" className="shrink-0">
              Subscribe
            </Button>
          </div>
        </Card>
        <div className="mt-16 mb-6 flex flex-col items-center !justify-center gap-x-10 gap-y-3 lg:flex-row lg:!justify-between">
          <p className="font-semibold">Creative Tim</p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map(({ title, href }, key) => (
              <li key={key}>
                <a href={href} className="text-foreground hover:text-primary">
                  {title}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-1">
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="h-8 w-8">
              <a href="#" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        <p className="text-foreground text-sm">
          All rights reserved. Copyright &copy; {YEAR} Creative Tim
        </p>
      </div>
    </section>
  )
}
