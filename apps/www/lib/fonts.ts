import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
} from "next/font/google"

import { cn } from "@/lib/utils"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400"],
})

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Using Geist as replacement for Waldenburg
const fontGeist = FontSans({
  subsets: ["latin"],
  variable: "--font-geist",
})

const fontGeistBold = FontSans({
  subsets: ["latin"],
  variable: "--font-geist-bold",
  weight: ["700"],
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable,
  fontGeist.variable,
  fontGeistBold.variable
)
