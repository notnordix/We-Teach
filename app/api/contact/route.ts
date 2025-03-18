import { NextResponse } from "next/server"
import { sendEmail } from "./email-service"

// Rate limiting setup
const RATE_LIMIT_DURATION = 60 * 1000 // 1 minute
const MAX_REQUESTS_PER_IP = 3
const ipRequestCounts = new Map<string, { count: number; timestamp: number }>()

export async function POST(request: Request) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"

    // Check rate limit
    const now = Date.now()
    const ipData = ipRequestCounts.get(ip)

    if (ipData && now - ipData.timestamp < RATE_LIMIT_DURATION) {
      if (ipData.count >= MAX_REQUESTS_PER_IP) {
        return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 })
      }
      ipRequestCounts.set(ip, { count: ipData.count + 1, timestamp: ipData.timestamp })
    } else {
      ipRequestCounts.set(ip, { count: 1, timestamp: now })
    }

    // Parse request body
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Name, email, and message are required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email address" }, { status: 400 })
    }

    // Prepare email content
    const emailSubject = subject ? `Contact Form: ${subject}` : "New Contact Form Submission"
    const emailContent = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `

    // Send email
    try {
      const result = await sendEmail({
        from: "Contact Form <contact@we-teach.fr>",
        to: ["contact@we-teach.fr"],
        replyTo: email,
        subject: emailSubject,
        html: emailContent,
      })

      // Return success response
      return NextResponse.json({ success: true, messageId: result.id })
    } catch (emailError) {
      console.error("Email sending failed:", emailError)
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json({ error: "An unexpected error occurred. Please try again later." }, { status: 500 })
  }
}

