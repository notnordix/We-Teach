import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactButtons } from "@/components/contact-buttons"
import { LogoCarousel } from "@/components/logo-carousel"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WeTeach - Centre de formation pour apprentis",
  description: "WeTeach est un centre de formation pour apprentis spécialisé dans les métiers du tertiaire.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-tomato flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <LogoCarousel />
        <ContactButtons />
      </body>
    </html>
  );
}

