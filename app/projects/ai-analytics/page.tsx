'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function MediaWikiContributionsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.project-hero',
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' }
    );

    gsap.fromTo('.project-title',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'expo.out' }
    );

    gsap.fromTo('.project-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.1, delay: 0.3, ease: 'expo.out' }
    );

    gsap.fromTo('.tech-tag',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, delay: 0.4, ease: 'expo.out' }
    );

    gsap.fromTo('.content-section',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.18, ease: 'expo.out', scrollTrigger: '.content-section' }
    );

    gsap.fromTo('.feature-card',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out', scrollTrigger: '.features-grid' }
    );

    gsap.fromTo('.metric-item',
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'expo.out', scrollTrigger: '.metrics-grid' }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 font-serif italic">
            MediaWiki Contributions
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            Open source PHP contributions to the MediaWiki platform — the software
            powering Wikipedia — adopted by millions of users worldwide and
            maintained by a global developer community.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              PHP
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              MediaWiki
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Git
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              GitHub
            </span>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/project-ai.jpg"
              alt="MediaWiki Contributions"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Overview
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Since June 2021, I have contributed to the MediaWiki open source platform — the
                software that powers Wikipedia and hundreds of other wikis worldwide. Contributions
                focus on enhancing the PHP codebase to improve performance, reliability, and the
                experience of the global user base.
              </p>
              <p>
                Working alongside an international developer community, I follow rigorous open-source
                best practices — peer review, thorough documentation, and backward-compatible
                changes — to ensure code quality in a codebase serving hundreds of millions of
                readers daily.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Key Contributions
              </p>
            </div>
            <div className="features-grid grid gap-6 md:grid-cols-2">
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">PHP Codebase Improvements</h3>
                <p className="text-gray-700">
                  Enhanced the MediaWiki PHP codebase with targeted improvements to
                  functionality, performance, and code clarity — benefiting the global
                  knowledge-sharing mission of the platform.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Open Source Best Practices</h3>
                <p className="text-gray-700">
                  Collaborated with international contributors to uphold rigorous
                  code review standards, detailed commit messages, and documentation
                  that makes contributions easy to understand and maintain.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Global Reach</h3>
                <p className="text-gray-700">
                  Delivered code improvements that were reviewed, merged, and adopted
                  across the platform — reaching millions of users and wiki communities
                  around the world.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Long-term Commitment</h3>
                <p className="text-gray-700">
                  Ongoing contributor since 2021, demonstrating sustained engagement
                  with the open source community and a commitment to free knowledge
                  beyond professional employment.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Technical Context
              </p>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Platform Scale</h3>
                <p className="mb-4">
                  MediaWiki is one of the most widely deployed open source software projects in
                  the world, running Wikipedia and thousands of wikis. Contributing to it means
                  working within strict quality and compatibility standards at global scale.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <code>
                    Stack: PHP → MediaWiki → Git → Gerrit / GitHub code review
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Collaboration Model</h3>
                <p className="mb-4">
                  All contributions go through peer review by the Wikimedia Foundation's
                  engineering team and community contributors, ensuring the highest standards
                  of code quality and backward compatibility.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Community Impact</h3>
                <p className="mb-4">
                  Beyond code, contributing to MediaWiki supports the infrastructure of free
                  knowledge — a mission that aligns with a broader commitment to technology
                  that serves people everywhere.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Impact
              </p>
            </div>
            <div className="metrics-grid grid gap-6 md:grid-cols-3">
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">Millions</div>
                <div className="text-gray-600">Users Worldwide</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">3+ Years</div>
                <div className="text-gray-600">Active Contribution</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">Global</div>
                <div className="text-gray-600">Developer Community</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
