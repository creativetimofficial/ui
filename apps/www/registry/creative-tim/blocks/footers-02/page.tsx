"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
]

const YEAR = new Date().getFullYear()

export default function Footers02() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 justify-between gap-10 md:grid-cols-2">
          <div className="grid grid-cols-3 justify-between gap-x-6 gap-y-4">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <p className="mb-2 font-semibold">{title}</p>
                {items.map(({ title, href }) => (
                  <li key={title} className="mb-1">
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
          <div className="lg:ml-auto">
            <p className="mb-2 font-semibold">Subscribe</p>
            <p className="text-foreground max-w-sm [text-wrap:_balance]">
              Get access to subscriber exclusive deals and be the first who gets
              informed about fresh sales.
            </p>
            <div className="mt-4 flex w-full max-w-sm items-end gap-2">
              <div className="w-full">
                <Label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm font-semibold"
                >
                  Your Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="someone@example.com"
                />
              </div>
              <Button className="shrink-0">Subscribe</Button>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <Checkbox id="checkbox-link" />
              <Label
                htmlFor="checkbox-link"
                className="text-foreground flex gap-1 select-none"
              >
                I agree with the
                <a href="#" className="text-primary">
                  terms and conditions
                </a>
              </Label>
            </div>
          </div>
        </div>
        <p className="text-foreground mt-10 text-center">
          &copy; {YEAR} Creative Tim. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
