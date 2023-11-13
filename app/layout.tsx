import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ToasterProvider } from "@/components/toaster-provider";
import { ModalProvider } from "@/components/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

import "./globals.css";

const font = Inter({ subsets: ["latin"] });

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
      <body className={font.className}>
        <EdgeStoreProvider>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}
