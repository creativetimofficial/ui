"use client"

import Script from "next/script"
// import { Analytics as VercelAnalytics } from "@vercel/analytics/react"

export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID

  // If you set NEXT_PUBLIC_GTM_ID in your environment, this will inject
  // the GTM script and the noscript iframe for browsers without JS.
  if (!gtmId) return null

  return (
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

      {/* If you also want Vercel Analytics, uncomment the import above and
          add <VercelAnalytics /> here. */}
    </>
  )
}
