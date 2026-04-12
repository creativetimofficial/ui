import { NextRequest, NextResponse } from "next/server"

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number>()

// In-memory subscriber store (replace with database in production)
const subscribers = new Set<string>()

export async function POST(request: NextRequest) {
  // Rate limit: 1 request per IP per 60 seconds
  const ip = request.headers.get("x-forwarded-for") || "unknown"
  const now = Date.now()
  const lastRequest = rateLimitMap.get(ip) || 0

  if (now - lastRequest < 60000) {
    return NextResponse.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    )
  }
  rateLimitMap.set(ip, now)

  try {
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address." },
        { status: 400 }
      )
    }

    // In production, integrate with Mailchimp, ConvertKit, or Resend:
    // await mailchimp.lists.addListMember(listId, { email_address: email })

    subscribers.add(email)
    console.log("Newsletter subscription:", email, "Total:", subscribers.size)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    )
  }
}
