import { Metadata } from "next"
import Link from "next/link"
import { Download, Package, Star, Users } from "lucide-react"

import { CardsDemo } from "@/components/cards"
import { ExamplesNav } from "@/components/examples-nav"
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import { PageNav } from "@/components/page-nav"
import { ThemeSelector } from "@/components/theme-selector"
import { Button } from "@/registry/creative-tim-ui/ui/button"
import { Card } from "@/registry/creative-tim-ui/ui/card"

const title = "Creative Tim UI"
const description =
  "A collection of Open Source agent and audio components that you can customize and extend."

export const dynamic = "force-static"
export const revalidate = false

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: `/og?title=${encodeURIComponent(
          title
        )}&description=${encodeURIComponent(description)}`,
      },
    ],
  },
}

export default function IndexPage() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="relative overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, transparent 25%, hsl(var(--background) / 0.5) 50%, hsl(var(--background) / 0.8) 70%, hsl(var(--background) / 0.95) 85%, hsl(var(--background)) 95%)",
          }}
        />
        <PageHeader className="relative z-10">
          <PageHeaderHeading className="max-w-4xl">
            <span className="flex items-baseline gap-2 sm:gap-3">
              <span className="font-geist-bold leading-[0.95] font-bold tracking-[-0.03em]">
                Creative Tim
              </span>
              <span className="font-geist font-normal tracking-[-0.02em] opacity-90">
                UI
              </span>
            </span>
          </PageHeaderHeading>
          <PageHeaderDescription>{description}</PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link href="/docs">Get Started</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </PageActions>
        </PageHeader>
      </div>
      
      {/* Achievements Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Remarkable Achievements
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl mx-auto mb-12">
            Discover how our UI Tools have transformed web development. These achievements showcase our dedication to innovation and our community&apos;s growth.
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-left">
              <Users className="h-8 w-8 mb-4 text-muted-foreground" />
              <div className="text-3xl font-bold mb-1">2.6M+</div>
              <div className="text-sm font-medium mb-3">Community Members</div>
              <p className="text-sm text-muted-foreground">
                Join our community of developers and designers
              </p>
            </Card>
            
            <Card className="p-6 text-left">
              <Download className="h-8 w-8 mb-4 text-muted-foreground" />
              <div className="text-3xl font-bold mb-1">8.6M+</div>
              <div className="text-sm font-medium mb-3">Cumulative Downloads</div>
              <p className="text-sm text-muted-foreground">
                Based on Material Tailwind and Creative Tim Products
              </p>
            </Card>
            
            <Card className="p-6 text-left">
              <Star className="h-8 w-8 mb-4 text-muted-foreground" />
              <div className="text-3xl font-bold mb-1">48,000+</div>
              <div className="text-sm font-medium mb-3">Github Cumulative Stars</div>
              <p className="text-sm text-muted-foreground">
                On 100+ Open Source Repositories and Projects
              </p>
            </Card>
            
            <Card className="p-6 text-left">
              <Package className="h-8 w-8 mb-4 text-muted-foreground" />
              <div className="text-3xl font-bold mb-1">280,000+</div>
              <div className="text-sm font-medium mb-3">Monthly NPM Downloads</div>
              <p className="text-sm text-muted-foreground">
                Including React, HTML, Tailwind CSS and more.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <PageNav className="hidden md:flex">
        <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
      <div className="container-wrapper section-soft flex-1 pb-6">
        <div className="container overflow-hidden">
          <section className="theme-container">
            <CardsDemo />
          </section>
        </div>
      </div>
    </div>
  )
}
