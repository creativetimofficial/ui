"use client"

import { Settings } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const YEAR = new Date().getFullYear()

const LINKS = [
  { title: "About Us", href: "#" },
  { title: "Contact Information", href: "#" },
  { title: "Privacy Policy", href: "#" },
]

const COUNTRIES = [
  { name: "United States", flag: "🇺🇸" },
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Germany", flag: "🇩🇪" },
  { name: "France", flag: "🇫🇷" },
  { name: "Japan", flag: "🇯🇵" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "Spain", flag: "🇪🇸" },
]

export default function Footers07() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-start justify-center gap-4 md:justify-between">
          <div className="grid gap-3">
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
            <p className="text-foreground text-center text-sm font-medium md:text-left">
              All rights reserved. Copyright &copy; {YEAR} Creative Tim
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Select>
              <SelectTrigger className="w-64">
                <SelectValue placeholder="Select Country" />
              </SelectTrigger>
              <SelectContent className="max-h-72">
                {COUNTRIES.map(({ name, flag }) => (
                  <SelectItem key={name} value={name}>
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{flag}</span>
                      <span className="text-sm">{name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </footer>
  )
}
