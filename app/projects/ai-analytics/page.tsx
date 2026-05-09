'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TECH_TAGS = [
  { label: "PHP", color: "bg-violet-600 text-white" },
  { label: "MediaWiki", color: "bg-purple-600 text-white" },
  { label: "Git", color: "bg-orange-500 text-white" },
  { label: "GitHub", color: "bg-gray-800 text-white" },
];

const GH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"/>
  </svg>
);

export default function MediaWikiContributionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.project-hero', { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' });
    gsap.fromTo('.project-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'expo.out' });
    gsap.fromTo('.project-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.1, delay: 0.3, ease: 'expo.out' });
    gsap.fromTo('.tech-tag', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, delay: 0.4, ease: 'expo.out' });
    gsap.fromTo('.content-section', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'expo.out', scrollTrigger: '.content-section' });
    gsap.fromTo('.feature-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out', scrollTrigger: '.features-grid' });
    gsap.fromTo('.metric-item', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out', scrollTrigger: '.metrics-grid' });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 font-serif italic">
            MediaWiki Contributions
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            Open source PHP contributions to the MediaWiki platform — the software powering Wikipedia — adopted by millions of users worldwide and maintained by a global developer community.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {TECH_TAGS.map(({ label, color }) => (
              <span key={label} className={`tech-tag rounded-full px-4 py-2 text-sm font-medium shadow-sm ${color}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="https://github.com/wikimedia/mediawiki"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-purple-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-violet-700 hover:to-purple-800 shadow-lg shadow-violet-500/30"
            >
              {GH_ICON}
              View on GitHub
            </a>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl shadow-violet-900/10">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
              alt="MediaWiki Contributions"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/40 via-purple-900/10 to-transparent" />
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Overview</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>Since June 2021, I have contributed to the MediaWiki open source platform — the software that powers Wikipedia and hundreds of other wikis worldwide. Contributions focus on enhancing the PHP codebase to improve performance, reliability, and the experience of the global user base.</p>
              <p>Working alongside an international developer community, I follow rigorous open-source best practices — peer review, thorough documentation, and backward-compatible changes — to ensure code quality in a codebase serving hundreds of millions of readers daily.</p>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Key Contributions</p>
            </div>
            <div className="features-grid grid gap-6 md:grid-cols-2">
              {[
                { title: "PHP Codebase Improvements", body: "Enhanced the MediaWiki PHP codebase with targeted improvements to functionality, performance, and code clarity — benefiting the global knowledge-sharing mission of the platform." },
                { title: "Open Source Best Practices", body: "Collaborated with international contributors to uphold rigorous code review standards, detailed commit messages, and documentation that makes contributions easy to understand and maintain." },
                { title: "Global Reach", body: "Delivered code improvements that were reviewed, merged, and adopted across the platform — reaching millions of users and wiki communities around the world." },
                { title: "Long-term Commitment", body: "Ongoing contributor since 2021, demonstrating sustained engagement with the open source community and a commitment to free knowledge beyond professional employment." },
              ].map(({ title, body }) => (
                <div key={title} className="feature-card rounded-2xl border-t-2 border-t-violet-400 bg-gradient-to-br from-violet-50 to-purple-50/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-violet-900">{title}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Technical Context</p>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Platform Scale</h3>
                <p className="mb-4">MediaWiki is one of the most widely deployed open source software projects in the world, running Wikipedia and thousands of wikis. Contributing to it means working within strict quality and compatibility standards at global scale.</p>
                <div className="rounded-xl border border-violet-200 bg-violet-50/60 p-4 text-sm text-violet-900 font-mono">
                  Stack: PHP → MediaWiki → Git → Gerrit / GitHub code review
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Collaboration Model</h3>
                <p>All contributions go through peer review by the Wikimedia Foundation's engineering team and community contributors, ensuring the highest standards of code quality and backward compatibility.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Community Impact</h3>
                <p>Beyond code, contributing to MediaWiki supports the infrastructure of free knowledge — a mission that aligns with a broader commitment to technology that serves people everywhere.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-violet-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-violet-400">Impact</p>
            </div>
            <div className="metrics-grid grid gap-4 md:grid-cols-3">
              {[
                { value: "Millions", label: "Users Worldwide" },
                { value: "3+ Years", label: "Active Contribution" },
                { value: "Global", label: "Developer Community" },
              ].map(({ value, label }) => (
                <div key={label} className="metric-item rounded-2xl bg-gradient-to-br from-violet-600 to-purple-700 p-6 text-center text-white shadow-lg shadow-violet-500/20">
                  <div className="text-3xl font-semibold mb-2">{value}</div>
                  <div className="text-violet-100 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
