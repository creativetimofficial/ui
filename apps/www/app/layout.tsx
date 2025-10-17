import type { Metadata } from "next"

import { META_THEME_COLORS, siteConfig } from "@/lib/config"
import { fontVariables } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { LayoutProvider } from "@/hooks/use-layout"
import { ActiveThemeProvider } from "@/components/active-theme"
import { Analytics } from "@/components/analytics"
import { AuthProvider } from "@/components/auth/AuthProvider"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/registry/creative-tim-ui/ui/sonner"

import "@/styles/globals.css"

import Script from "next/script"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL!),
  description: siteConfig.description,
  keywords: ["Creative Tim", "UI", "shadcn", "Components", "audio", "agents"],
  authors: [
    {
      name: "Creative Tim",
      url: "https://creative-tim.com",
    },
  ],
  creator: "creative-tim",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL! + process.env.NEXT_PUBLIC_ASSET_PREFIX,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/opengraph-image.png`],
    creator: "@creativetim",
  },
  icons: {
    icon: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon.ico`,
    shortcut: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/favicon-16x16.png`,
    apple: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/apple-touch-icon.png`,
  },
  manifest: `${process.env.NEXT_PUBLIC_APP_URL}${process.env.NEXT_PUBLIC_ASSET_PREFIX}/site.webmanifest`,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || ((!('theme' in localStorage) || localStorage.theme === 'system') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.querySelector('meta[name="theme-color"]').setAttribute('content', '${META_THEME_COLORS.dark}')
                }
                if (localStorage.layout) {
                  document.documentElement.classList.add('layout-' + localStorage.layout)
                }
              } catch (_) {}
            `,
          }}
        />
        <meta name="theme-color" content={META_THEME_COLORS.light} />
      </head>
      <body
        className={cn(
          "text-foreground group/body overscroll-none font-sans antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]",
          fontVariables
        )}
      >
        <AuthProvider>
          <ThemeProvider>
            <LayoutProvider>
              <ActiveThemeProvider>
                {children}
                <TailwindIndicator />
                <Toaster position="top-center" />
                <Analytics />
              </ActiveThemeProvider>
            </LayoutProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
