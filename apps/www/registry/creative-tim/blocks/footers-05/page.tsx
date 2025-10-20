"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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

export default function Footers05() {
  return (
    <footer className="bg-primary pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-10 sm:grid-cols-2">
          <div className="row-start-2 grid grid-cols-2 justify-between gap-6 sm:row-auto lg:grid-cols-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title} className="space-y-2">
                <p className="text-secondary mb-2 font-semibold">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title}>
                    <a
                      href={href}
                      className="text-secondary hover:text-secondary"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="lg:ml-auto">
            <p className="text-secondary mb-4 flex font-semibold lg:justify-end">
              Language & Currency
            </p>
            <Select>
              <SelectTrigger className="mb-4 border-white/20 bg-white/10 text-white placeholder:text-white/60 lg:w-72">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">English</SelectItem>
                <SelectItem value="spanish">Spanish</SelectItem>
                <SelectItem value="hindi">Hindi</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="border-white/20 bg-white/10 text-white placeholder:text-white/60 lg:w-72">
                <SelectValue placeholder="Select Currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="usd">USD</SelectItem>
                <SelectItem value="euro">Euro</SelectItem>
                <SelectItem value="rupee">Rupee</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="border-surface/50 mt-10 flex flex-col justify-between gap-4 border-t border-b pt-6 pb-8 md:flex-row lg:items-end">
          <div>
            <p className="text-secondary mb-2 font-semibold">
              Subscribe to our newsletters
            </p>
            <p className="text-secondary">
              The latest news, articles and resources sent to your inbox weekly.
            </p>
          </div>
          <div className="flex w-full items-end gap-2 md:max-w-sm">
            <div className="w-full">
              <Label
                htmlFor="email"
                className="text-secondary mb-2 inline-block text-sm font-semibold"
              >
                Your Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="someone@example.com"
                className="border-white/20 bg-white/10 text-white placeholder:text-white/60"
              />
            </div>
            <Button variant="secondary" className="shrink-0">
              subscribe
            </Button>
          </div>
        </div>
        <p className="text-secondary mt-8">
          All rights reserved. &copy; {YEAR} Creative Tim
        </p>
      </div>
    </footer>
  )
}
