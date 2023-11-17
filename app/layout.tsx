import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { Toaster } from "@/components/ui/toaster"
import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'

import "./globals.css"
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Givy',
  description: 'AI gifting Platform',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        {/* <CrispProvider /> */}
        <body  className={cn(
          "min-h-screen bg-[#FFF7F0] font-sans antialiased",
          fontSans.variable
        )} >
          <ToasterProvider />

          <ModalProvider />
          {children}
        </body>
        <Toaster />
      </html>
    </ClerkProvider>
  )
}
