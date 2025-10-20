"use client"

import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "Home", href: "#" },
  { title: "About Us", href: "#" },
  { title: "Blog", href: "#" },
  { title: "Service", href: "#" },
]

export default function Footers03() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="border-surface flex flex-row flex-wrap items-center !justify-center gap-x-10 gap-y-3 border-t pt-8 text-center md:!justify-between">
          <p className="text-foreground">
            Copyright &copy; {YEAR} Creative Tim
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {LINKS.map(({ title, href }, key) => (
              <li key={key}>
                <a href={href} className="text-foreground hover:text-primary">
                  {title}
                </a>
              </li>
            ))}
            <Button className="w-full sm:max-w-fit">Sign in</Button>
          </ul>
        </div>
      </div>
    </footer>
  )
}
