import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { CommandMenu } from "@/components/command-menu"
import { GitHubLink } from "@/components/github-link"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeSwitcher } from "@/components/mode-switcher"
import blocks from "@/registry/__blocks__.json"
import { Button } from "@/registry/creative-tim-ui/ui/button"

export function SiteHeader() {
  const pageTree = source.pageTree
  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX 

  return (
    <header className="sticky top-0 z-50 w-full pt-4">
      <div className="container px-6">
        <div className="bg-black/80 backdrop-blur-sm border border-white/10 rounded-full mx-auto">
          <div className="flex h-12 items-center justify-between px-2">
            {/* Left: Logo + Brand + Nav */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2">
                <img 
                  src={`${assetPrefix}/apple-touch-icon-square.jpg`} 
                  alt="Creative Tim UI" 
                  className="rounded-full w-8 h-8"
                />
                <span className="inline-block text-white font-semibold text-sm md:text-base">
                  {siteConfig.name}
                </span>
              </Link>
              
              {/* Vertical Line Separator */}
              <div className="hidden lg:block h-6 w-px bg-white/20" />
              
              {/* Navigation Links */}
              <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex">
                <CommandMenu
                  tree={pageTree}
                  navItems={siteConfig.navItems}
                  blocks={blocks}
                />
              </div>
              <GitHubLink />
              <ModeSwitcher />
              <Button
                asChild
                size="sm"
                className="hidden sm:inline-flex bg-white text-black hover:bg-white/90 rounded-full"
              >
                <Link href="/docs" className="flex items-center gap-1">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <MobileNav
                tree={pageTree}
                items={siteConfig.navItems}
                className="flex lg:hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
