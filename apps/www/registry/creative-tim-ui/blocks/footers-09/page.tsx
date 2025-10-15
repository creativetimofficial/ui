"use client"

import { Button } from "@/registry/creative-tim-ui/ui/button"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Contact Information", href: "#" },
  { title: "Privacy Policy", href: "#" },
]

export default function Footers09() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center !justify-between gap-8">
          <div className="space-y-2">
            <p className="font-semibold">
              New Features available! Upgrade to v3.0.0
            </p>
            <Button size="sm">Upgrade</Button>
          </div>
          <div className="grid gap-2">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
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
            <p className="text-foreground text-sm font-medium">
              All rights reserved. Copyright &copy; {YEAR} Creative Tim
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
