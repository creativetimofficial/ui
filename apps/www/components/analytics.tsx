"use client"

import React, { useEffect, useState } from "react"
import Script from "next/script"
// import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  // GA measurement ID: prefer env var, fallback to the ID you provided
  const gaId = process.env.NEXT_PUBLIC_GA_AI_ID

  // Mode: 'ga' | 'gtm' | null (not decided yet)
  const [mode, setMode] = useState<null | "ga" | "gtm">(null)

  useEffect(() => {
    try {
      const path = window.location.pathname || ""
      const isR = path.includes("/r/")
      const isUiView = path.startsWith("/ui/view")

      if (isUiView) {
        // Disable analytics for /ui/view routes
        setMode(null)
        return
      }

      if (isR) {
        setMode("ga")
      } else {
        setMode("gtm")
      }
    } catch {
      // noop
      setMode("gtm")
    }
  }, [])

  // Not ready yet
  if (!mode) return null

  return (
    <>
      {mode === "gtm" && gtmId && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />

          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
        </>
      )}

      {mode === "ga" && gaId && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
            strategy="afterInteractive"
            data-ga
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
          </Script>
        </>
      )}

      {/* If you also want Vercel Analytics, uncomment the import above and
          add <VercelAnalytics /> here. */}
    </>
  )
}
