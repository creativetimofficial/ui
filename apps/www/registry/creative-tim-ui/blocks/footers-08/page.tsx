"use client"

import { Settings } from "lucide-react"

import { Badge } from "@/registry/creative-tim-ui/ui/badge"
import { Button } from "@/registry/creative-tim-ui/ui/button"

const YEAR = new Date().getFullYear()

export default function Footers08() {
  return (
    <footer className="pt-16 pb-8">
      <div className="container mx-auto">
        <div className="flex flex-row flex-wrap items-center !justify-center gap-4 md:!justify-between">
          <p className="text-foreground text-center text-sm font-medium">
            All rights reserved. Copyright &copy; {YEAR} Creative Tim
          </p>
          <div className="flex items-center gap-4">
            <Badge variant="secondary">v3.0.0</Badge>
            <Button variant="ghost" size="sm">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
