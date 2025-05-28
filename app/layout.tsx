import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ScrollToTop } from "@/components/scroll-to-top"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StreamNation - Premium OTT Subscriptions & Apps at Best Prices",
  description:
    "Get premium OTT subscriptions like Netflix, Spotify, Adobe Creative Suite and more at competitive prices. Instant delivery via WhatsApp.",
  keywords: "OTT subscriptions, streaming services, premium apps, Netflix, Spotify, Adobe, LinkedIn Premium",
  authors: [{ name: "StreamNation" }],
  creator: "StreamNation",
  openGraph: {
    title: "StreamNation - Premium OTT Subscriptions & Apps",
    description: "Get premium subscriptions at best prices with instant WhatsApp delivery",
    url: "https://streamnation.com",
    siteName: "StreamNation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "StreamNation - Premium OTT Subscriptions",
    description: "Get premium subscriptions at best prices",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ScrollToTop />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
