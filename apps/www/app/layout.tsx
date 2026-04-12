import type { Metadata } from "next"

import { siteConfig } from "@/lib/config"
import { fontVariables } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import { JsonLd } from "@/components/seo/json-ld"

import "@/styles/globals.css"

export const metadata: Metadata = {
  title: {
    default: "Thread Meditation | Handmade Crochet Born from Stillness",
    template: `%s | ${siteConfig.name}`,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://threadmeditation.com"
  ),
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: "Thread Meditation" }],
  creator: "Thread Meditation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://threadmeditation.com",
    title: "Thread Meditation | Handmade Crochet Born from Stillness",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Thread Meditation - Handmade Crochet Art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thread Meditation | Handmade Crochet Born from Stillness",
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
    creator: "@threadmeditation",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={cn("min-h-svh font-sans antialiased", fontVariables)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
