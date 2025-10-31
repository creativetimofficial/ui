import Link from "next/link"

import { siteConfig } from "@/lib/config"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"

type GitHubLinkProps = {
  /**
   * When true, applies white text / hover styles for dark backgrounds.
   * Default: true
   */
  needWhiteSvg?: boolean
}

export function GitHubLink({ needWhiteSvg = true }: GitHubLinkProps) {
  const colorClasses = needWhiteSvg
    ? "text-white/70 hover:bg-white/10 hover:text-white"
    : ""

  return (
    <Button
      asChild
      size="sm"
      variant="ghost"
      className={`h-8 shadow-none ${colorClasses}`}
    >
      <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
        <Icons.gitHub />
        {/* 
        <React.Suspense fallback={<Skeleton className="h-4 w-8" />}>
          <StarsCount />
        </React.Suspense> 
        */}
      </Link>
    </Button>
  )
}
