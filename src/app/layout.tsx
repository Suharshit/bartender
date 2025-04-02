import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Bartender",
  description: "Generate cocktail recipes using AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} min-h-screen bg-zinc-900 text-white relative`}>
          <header className="flex justify-end items-center p-4 gap-4 h-16">
            <Navbar/>
          </header>
          {children}
          <footer className="absolute bottom-0 inset-x-0">
            <Footer/>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}