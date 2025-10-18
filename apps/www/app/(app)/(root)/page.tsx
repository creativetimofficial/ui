import { Metadata } from "next"
import Link from "next/link"
import { Download, Package, Star, Users } from "lucide-react"

import { ExamplesNav } from "@/components/examples-nav"
import { ExamplesPreview } from "@/components/examples-preview"
import { ShowcaseMasonry } from "@/components/showcase-masonry"
import { TestimonialsSection } from "@/components/testimonials-section"
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
  "Open-source components, blocks, and AI agents designed to speed up your workflow. Import them seamlessly into your favorite tools through Registry and MCPs."

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

  const assetPrefix = process.env.NEXT_PUBLIC_ASSET_PREFIX 

  return (
    <div className="bg-stone-50 dark:bg-stone-950 flex flex-1 flex-col">
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
            <Button asChild size="sm" variant="outline">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </PageActions>

          {/* Logo Section */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-8">
              {/* OpenAI */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-open-ai.png`}
                  alt="OpenAI"
                  className="h-7 w-auto"
                />
              </div>

              {/* Claude */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-claude.png`}
                  alt="Claude"
                  className="h-7 w-auto"
                />
              </div>

              {/* v0 */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-v0.png`}
                  alt="v0"
                  className="h-7 w-auto"
                />
              </div>

              {/* Replit */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-replit.png`}
                  alt="Replit"
                  className="h-7 w-auto"
                />  
              </div>

              {/* Bolt */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-bolt.png`}
                  alt="Bolt"
                  className="h-7 w-auto"
                />
              </div>

              {/* Lovable */}
              <div className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert dark:opacity-60 dark:hover:invert-0">
                <img
                  src={`${assetPrefix}/logo-lovable.png`}
                  alt="Lovable"
                  className="h-7 w-auto"
                />
              </div>
            </div>
          </div>
        </PageHeader>
      </div>

      <ShowcaseMasonry />
      

      {/* Achievements Section */}
      <section className="container py-12 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Remarkable Achievements
          </h2>
          <p className="text-muted-foreground mx-auto mb-12 max-w-3xl text-base sm:text-lg">
            Discover how our UI Tools have transformed web development. These
            achievements showcase our dedication to innovation and our
            community&apos;s growth.
          </p>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="p-6 text-left">
              <Users className="text-muted-foreground mb-4 h-8 w-8" />
              <div className="mb-1 text-3xl font-bold">2.6M+</div>
              <div className="mb-3 text-sm font-medium">Community Members</div>
              <p className="text-muted-foreground text-sm">
                Join our community of developers and designers
              </p>
            </Card>

            <Card className="p-6 text-left">
              <Download className="text-muted-foreground mb-4 h-8 w-8" />
              <div className="mb-1 text-3xl font-bold">8.6M+</div>
              <div className="mb-3 text-sm font-medium">
                Cumulative Downloads
              </div>
              <p className="text-muted-foreground text-sm">
                Based on Material Tailwind and Creative Tim Products
              </p>
            </Card>

            <Card className="p-6 text-left">
              <Star className="text-muted-foreground mb-4 h-8 w-8" />
              <div className="mb-1 text-3xl font-bold">48,000+</div>
              <div className="mb-3 text-sm font-medium">
                Github Cumulative Stars
              </div>
              <p className="text-muted-foreground text-sm">
                On 100+ Open Source Repositories and Projects
              </p>
            </Card>

            <Card className="p-6 text-left">
              <Package className="text-muted-foreground mb-4 h-8 w-8" />
              <div className="mb-1 text-3xl font-bold">280,000+</div>
              <div className="mb-3 text-sm font-medium">
                Monthly NPM Downloads
              </div>
              <p className="text-muted-foreground text-sm">
                Including React, HTML, Tailwind CSS and more.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Examples Preview Section */}
      <ExamplesPreview />

      {/* Testimonials Section */}
      <TestimonialsSection />

      <PageNav className="hidden md:flex">
        <ExamplesNav className="[&>a:first-child]:text-primary flex-1 overflow-hidden" />
        <ThemeSelector className="mr-4 hidden md:flex" />
      </PageNav>
    </div>
  )
}
