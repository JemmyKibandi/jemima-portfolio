"use client";

import { EnvelopeSimple, GithubLogo } from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-[#eeeaf8] via-[#a8a6e8] to-[#3a3890] text-gray-900">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-white/20 blur-[120px]" />
        <div className="absolute -bottom-40 right-0 h-[28rem] w-[28rem] rounded-full bg-indigo-400/20 blur-[140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-tight text-gray-900 font-extralight">
              Ready to start{" "}
              <span className="font-serif italic">building something real?</span>
            </h2>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-900/10 pt-6">
          <div className="flex flex-col justify-center items-center">
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/JemmyKibandi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/10 text-gray-800 transition-colors hover:bg-gray-900/20 hover:text-gray-900"
                aria-label="GitHub"
              >
                <GithubLogo size={20} weight="regular" />
              </a>
              <a
                href="mailto:jemimakibandi378@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-900/10 text-gray-800 transition-colors hover:bg-gray-900/20 hover:text-gray-900"
                aria-label="Email"
              >
                <EnvelopeSimple size={20} weight="regular" />
              </a>
            </div>
            <p className="text-sm text-gray-700/70 mt-2">© 2026 JK</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
