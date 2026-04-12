import Link from "next/link"
import { Instagram } from "lucide-react"

import { siteConfig } from "@/lib/config"

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl font-semibold tracking-tight">
                thread{" "}
                <span className="font-sans text-lg font-normal tracking-wide">
                  meditation
                </span>
              </span>
            </Link>
            <p className="text-background/70 max-w-xs text-sm leading-relaxed">
              Handmade crochet pieces born from stillness. Every stitch is a
              breath, every piece a meditation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {[
                { href: "/about", label: "About" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
                { href: "/privacy", label: "Privacy Policy" },
                { href: "/terms", label: "Terms of Service" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-background/70 hover:text-background text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-4">
              {[
                {
                  href: siteConfig.links.instagram,
                  label: "Instagram",
                  icon: Instagram,
                },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-background/10 hover:bg-background/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            <p className="text-background/70 text-sm">
              {siteConfig.contact.email}
            </p>
          </div>
        </div>

        <div className="border-background/10 mt-12 border-t pt-8 text-center">
          <p className="text-background/50 text-xs">
            &copy; {new Date().getFullYear()} Thread Meditation. All rights
            reserved. Handcrafted with love.
          </p>
        </div>
      </div>
    </footer>
  )
}
