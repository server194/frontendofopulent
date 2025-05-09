import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"
import { CustomerSupportChatAdvanced } from "@/components/customer-support-chat-advanced"
import { TouchDeviceDetector } from "@/components/touch-device-detector"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Opulent Group of Companies | Textile Trading & Sourcing Agency",
  description:
    "Opulent Group of Companies - Traders & Sourcing Agency of Textiles, Yarn, Fabric, and Garments since 1992.",
  keywords: [
    "textile trading",
    "textile sourcing",
    "yarn supplier",
    "fabric exporter",
    "garment manufacturer",
    "Pakistan textiles",
    "textile agency",
    "Opulent Group",
    "textile procurement",
    "Asian textiles",
  ],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TouchDeviceDetector />
          <CustomCursor />
          <Header />
          {children}
          <Footer />
          <CustomerSupportChatAdvanced />
        </ThemeProvider>
      </body>
    </html>
  )
}
