import type { Metadata } from "next";
import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";
import { Inter as FontSans } from "next/font/google"
 
import { cn } from "@/lib/utils"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Givys",
  description: "AI gifting Platform",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#FFF7F0] font-sans antialiased",
          fontSans.variable
        )}
      >
        <EdgeStoreProvider>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
