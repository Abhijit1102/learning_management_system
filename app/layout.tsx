import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import ToasterClient from "@/app/components/ToasterClient"; 

const monaSans = Mona_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for mock Interviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>
        {children}
        <ToasterClient /> {/* ✅ Now it's safe */}
      </body>
    </html>
  );
}
