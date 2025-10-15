import { existsSync, readFileSync } from "fs"
import path from "path"
import { NextRequest, NextResponse } from "next/server"

const PRIVATE_COMPONENTS = ["testimonials-03", "testimonials-04"]

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  const { name: componentName } = await params

  if (!PRIVATE_COMPONENTS.includes(componentName)) {
    return NextResponse.json(
      { error: "Component not found or not private" },
      { status: 404 }
    )
  }

  const authHeader = request.headers.get("authorization")
  const token = authHeader?.replace("Bearer ", "")

  const queryToken = request.nextUrl.searchParams.get("token")
  const apiKey = request.headers.get("x-api-key")

  const providedToken = token || queryToken || apiKey

  if (!isValidToken(providedToken)) {
    return NextResponse.json(
      {
        error: "Unauthorized",
        message:
          "Authentication required for private components. Set API_KEY in your .env.local file or provide it via Authorization header, X-API-Key header, or ?token= query parameter.",
      },
      { status: 401 }
    )
  }

  try {
    const componentPath = path.join(
      process.cwd(),
      "public",
      "r",
      `${componentName}.json`
    )

    if (!existsSync(componentPath)) {
      return NextResponse.json(
        { error: "Component not found" },
        { status: 404 }
      )
    }

    const componentData = readFileSync(componentPath, "utf-8")
    const component = JSON.parse(componentData)

    return NextResponse.json(component, {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "private, max-age=3600",
      },
    })
  } catch (error) {
    console.error(`Error serving private component ${componentName}:`, error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}

function isValidToken(token: string | null): boolean {
  if (!token) {
    return false
  }

  const validApiKey = process.env.API_KEY

  if (!validApiKey) {
    console.warn(
      "API_KEY not set in environment variables. Private components will be inaccessible."
    )
    return false
  }

  return token === validApiKey
}
