import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function DocsSidebarCta({ className }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "group bg-surface text-surface-foreground relative flex flex-col gap-2 overflow-hidden rounded-lg p-6 text-sm",
        className
      )}
    >
      <div className="bg-surface/80 absolute inset-0" />

      <div className="relative z-10 text-base leading-tight font-semibold text-balance group-hover:underline">
        Integrate the blocks in your application or use them in v0, Lovable, Claude, etc.
      </div>
      <div className="text-muted-foreground relative z-10">
        Speed up your workflow with modular, open-source components and blocksthat
        integrate effortlessly through Registries and MCPs.
      </div>
      <Button size="sm" className="relative z-10 mt-2 w-fit">
        View Blocks
      </Button>
      <Link
        href={siteConfig.utm.blocks}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-20"
      >
        <span className="sr-only">Talk to an expert</span>
      </Link>
    </div>
  )
}
