import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

// Portfolio metadata configuration
export const metadata: Metadata = {
  title: "Vinicius Ferreira - Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer with 8+ years of experience building production web applications. Specializing in TypeScript, React, Node.js, and Python.",
  keywords:
    "Full Stack Engineer, TypeScript, React, Node.js, Python, Senior Developer",
  authors: [{ name: "Vinicius Ferreira" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <Navbar />

        <main className="pt-12">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
