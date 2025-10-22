import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
//import { track } from "@vercel/analytics/server"

const PRIVATE_COMPONENTS = ["testimonials-03", "testimonials-04"]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith("/r/") && pathname.endsWith(".json")) {
    const componentName = pathname.replace("/r/", "").replace(".json", "")

    // const userAgent = request.headers.get("user-agent") || "unknown"
    // const referer = request.headers.get("referer") || "direct"

    // await track("registry_component_request", {
    //   component: componentName,
    //   path: pathname,
    //   userAgent,
    //   referer,
    //   timestamp: new Date().toISOString(),
    // })

    if (PRIVATE_COMPONENTS.includes(componentName)) {
      const url = request.nextUrl.clone()
      url.pathname = `/api/r/${componentName}`

      return NextResponse.rewrite(url)
    }
  }

  // Only guard dashboard routes
  if (!pathname.startsWith("/dashboard")) return NextResponse.next();

  // Use a non-sensitive marker
  const hasSessionMarker = request.cookies.get("rt_present")?.value === "1";

  if (!hasSessionMarker) {
    const url = request.nextUrl.clone();
    url.pathname = "/login";
    url.searchParams.set("next", pathname); // optional: for post-login redirect
    return NextResponse.redirect(url);
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/r/:path*.json", "/dashboard/:path*"],
}
