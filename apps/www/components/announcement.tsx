import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Badge } from "@/registry/creative-tim/ui/badge"

export function Announcement() {
  return (
    <Badge asChild variant="secondary" className="rounded-full">
      <Link href="/docs/changelog">
        Insert Announcement here <ArrowRightIcon />
      </Link>
    </Badge>
  )
}
