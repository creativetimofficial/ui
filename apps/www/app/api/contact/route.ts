import { NextRequest, NextResponse } from "next/server"

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, number>()

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
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
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

    // In production, integrate with Resend, SendGrid, or similar:
    // await resend.emails.send({
    //   from: 'noreply@threadmeditation.com',
    //   to: 'hello@threadmeditation.com',
    //   subject: `[Contact] ${subject} from ${name}`,
    //   text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    // })

    // For now, log the contact submission
    console.log("Contact form submission:", { name, email, subject, message })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    )
  }
}
