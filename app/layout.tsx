import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// Portfolio metadata configuration
export const metadata: Metadata = {
  title: "Vinicius Ferreira - Senior Full Stack Engineer",
  description: "Senior Full Stack Engineer with 8+ years of experience building production web applications. Specializing in TypeScript, React, Node.js, and Python.",
  keywords: "Full Stack Engineer, TypeScript, React, Node.js, Python, Senior Developer",
  authors: [{ name: "Vinicius Ferreira" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
        suppressHydrationWarning={true}
      >
        {/* Navbar */}
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-gray-900">
              VF
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/#about" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="/#skills" className="text-gray-600 hover:text-gray-900 transition-colors">
                Skills
              </Link>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">
                Projects
              </Link>
              <Link href="/#experience" className="text-gray-600 hover:text-gray-900 transition-colors">
                Experience
              </Link>
              <Link href="mailto:the.vinicius.creative@gmail.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Vinicius Ferreira</h3>
                <p className="text-gray-400">Senior Full Stack Engineer</p>
              </div>
              <div className="flex gap-6">
                <a
                  href="mailto:the.vinicius.creative@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/the-vinicius-creative"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>© 2025 Vinicius Ferreira. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
