"use client"

import { Settings } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const YEAR = new Date().getFullYear()

export default function Footers08() {
  return (
    <footer className="pt-20 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-muted-foreground text-center text-sm md:text-left">
            &copy; {YEAR} Creative Tim. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="px-3 py-1">
              v3.0.0
            </Badge>
            <Button variant="ghost" size="icon" aria-label="Settings">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
