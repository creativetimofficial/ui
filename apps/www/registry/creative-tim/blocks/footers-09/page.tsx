"use client"

import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Contact Information", href: "#" },
  { title: "Privacy Policy", href: "#" },
]

export default function Footers09() {
  return (
    <footer className="pt-20 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-3">
            <p className="text-lg font-semibold">
              New Features available! Upgrade to v3.0.0
            </p>
            <Button size="default" className="w-full md:w-auto">
              Upgrade Now
            </Button>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              {LINKS.map(({ title, href }, key) => (
                <li key={key}>
                  <a
                    href={href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="text-muted-foreground text-sm">
              &copy; {YEAR} Creative Tim. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
