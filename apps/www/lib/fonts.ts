import {
  Geist_Mono as FontMono,
  Geist as FontSans,
  Inter,
} from "next/font/google"
import localFont from "next/font/local"

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

const fontWaldenburg = localFont({
  src: [
    {
      path: "../public/fonts/waldenburg/Waldenburg-Regular.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/waldenburg/Waldenburg-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-waldenburg",
})

const fontWaldenburgHF = localFont({
  src: [
    {
      path: "../public/fonts/waldenburg-semi-condensed/Waldenburg-Bold-SemiCondensed.woff2",
      weight: "700",
    },
  ],
  variable: "--font-waldenburg-ht",
  weight: "700",
})

export const fontVariables = cn(
  fontSans.variable,
  fontMono.variable,
  fontInter.variable,
  fontWaldenburg.variable,
  fontWaldenburgHF.variable
)
