import { createMDX } from "fumadocs-mdx/next"

/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  outputFileTracingIncludes: {
    "/*": ["./registry/**/*"],
  },

  // Serve the app under /ui — set a base path and ensure assets are served from the same prefix.
  // You can override the asset prefix with NEXT_PUBLIC_ASSET_PREFIX if needed.
  basePath: '/ui',
  assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX || '/ui',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
  redirects() {
    return [
      {
        source: "/components",
        destination: "/docs/components",
        permanent: true,
      },
      {
        source: "/docs/primitives/:path*",
        destination: "/docs/components/:path*",
        permanent: true,
      },
      {
        source: "/figma",
        destination: "/docs/figma",
        permanent: true,
      },
      {
        source: "/docs/forms",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/docs/forms/react-hook-form",
        destination: "/docs/components/form",
        permanent: false,
      },
      {
        source: "/sidebar",
        destination: "/docs/components/sidebar",
        permanent: true,
      },
      {
        source: "/react-19",
        destination: "/docs/react-19",
        permanent: true,
      },
      {
        source: "/charts",
        destination: "/charts/area",
        permanent: true,
      },
      {
        source: "/view/styles/:style/:name",
        destination: "/view/:name",
        permanent: true,
      },
      {
        source: "/docs/:path*.mdx",
        destination: "/docs/:path*.md",
        permanent: true,
      },
      {
        source: "/mcp",
        destination: "/docs/mcp",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llm/:path*",
      },
      {
        source: '/api/:path*',
        destination: process.env.NEXT_PUBLIC_APP_URL + '/api/:path*', // Proxy to Rails API
      },
      {
        source: '/dashboard/:path*',
        destination: process.env.NEXT_PUBLIC_APP_URL + '/dashboard/:path*', // Proxy to Rails Dashboard
      },
      {
        source: '/downloads',
        destination: process.env.NEXT_PUBLIC_APP_URL + '/downloads', // Proxy to Rails Dashboard
      },
      {
        source: '/logout',
        destination: process.env.NEXT_PUBLIC_APP_URL + '/logout', // Proxy to Rails Dashboard
      },
    ]
  },
}

const withMDX = createMDX({})

export default withMDX(nextConfig)
