"use client"

import * as React from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"

import { siteConfig } from "@/lib/config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileOpen, setIsMobileOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-semibold tracking-tight md:text-2xl">
            thread{" "}
            <span className="font-sans text-base font-normal tracking-wide md:text-lg">
              meditation
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {siteConfig.navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={siteConfig.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <Button asChild size="sm" className="rounded-full px-5">
            <a href="/#collection">Shop Now</a>
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="text-foreground md:hidden"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="bg-background/95 border-border animate-fade-in border-t backdrop-blur-md md:hidden">
          <div className="container flex flex-col gap-4 py-6">
            {siteConfig.navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileOpen(false)}
                className="text-foreground text-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
            <div className="border-border flex items-center gap-4 border-t pt-4">
              <a
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <Button asChild size="sm" className="rounded-full">
                <a href="/#collection">Shop Now</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
