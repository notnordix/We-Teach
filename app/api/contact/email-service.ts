import nodemailer from "nodemailer"
import { Resend } from "resend"

// Initialize Resend if API key is available
const resendApiKey = process.env.RESEND_API_KEY
const resend = resendApiKey ? new Resend(resendApiKey) : null

// Fallback to Nodemailer with SMTP if needed
const smtpConfig = {
  host: process.env.SMTP_HOST || "smtp.example.com",
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER || "",
    pass: process.env.SMTP_PASSWORD || "",
  },
}

export interface EmailData {
  to: string[]
  from: string
  replyTo?: string
  subject: string
  html: string
}

export async function sendEmail(data: EmailData) {
  // Try to use Resend if available
  if (resend) {
    try {
      const { data: resendData, error } = await resend.emails.send({
        from: data.from,
        to: data.to,
        reply_to: data.replyTo,
        subject: data.subject,
        html: data.html,
      })

      if (error) {
        throw new Error(`Resend error: ${error.message}`)
      }

      return { success: true, id: resendData?.id }
    } catch (error) {
      console.error("Resend failed, falling back to SMTP:", error)
      // Fall through to SMTP if Resend fails
    }
  }

  // Fallback to SMTP
  if (process.env.SMTP_USER && process.env.SMTP_PASSWORD) {
    const transporter = nodemailer.createTransport(smtpConfig)

    const info = await transporter.sendMail({
      from: data.from,
      to: data.to.join(", "),
      replyTo: data.replyTo,
      subject: data.subject,
      html: data.html,
    })

    return { success: true, id: info.messageId }
  }

  // If we get here, we couldn't send the email
  throw new Error("No email service configured. Please set up Resend or SMTP credentials.")
}

