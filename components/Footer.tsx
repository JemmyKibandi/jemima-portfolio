"use client";

import { EnvelopeSimple, LinkedinLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#f6efe2] via-[#2c2a7c] to-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight text-white">
              Ready to start building something real?
            </h2>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-4 sm:grid sm:grid-cols-[1fr_auto_1fr] sm:items-center">
            <div className="hidden sm:block" />
            <p className="text-center text-sm text-white/70">© 2026 VF</p>
            <div className="flex items-center justify-center gap-4 sm:justify-end">
              <a
                href="https://linkedin.com/in/the-vinicius-creative"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="LinkedIn"
              >
                <LinkedinLogo size={20} weight="regular" />
              </a>
              <a
                href="mailto:the.vinicius.creative@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="regular" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
