import type { Metadata, Viewport } from "next";
import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
});

// Portfolio metadata configuration
export const metadata: Metadata = {
  title: "Jemima Kibandi - Full-Stack Software Engineer",
  description:
    "Full-Stack Software Engineer with 5+ years of experience designing and delivering scalable, secure, and user-friendly applications. Skilled in React, TypeScript, Node.js, Java, and cloud deployment on AWS and Azure.",
  keywords:
    "Full-Stack Engineer, React, TypeScript, Node.js, Java, Python, AWS, Azure, Fintech",
  authors: [{ name: "Jemima Kibandi" }],
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
        className={`${manrope.variable} ${instrumentSerif.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        <Navbar />

        <main className="pt-12">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
