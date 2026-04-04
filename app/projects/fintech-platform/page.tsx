'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function SwanFinancialAPIPage() {
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
            Swan Financial API
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            Secure and scalable Node.js REST APIs and backend services for a financial services provider in Mauritius, with optimised database integrations and automated CI/CD pipelines.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Node.js
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              MySQL
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              MariaDB
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              React
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Docker
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              GitHub Actions
            </span>
          </div>
          <div className="mt-6">
            <a
              href="https://github.com/JemmyKibandi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256"><path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"/></svg>
              View on GitHub
            </a>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/project-fintech.jpg"
              alt="Swan Financial API"
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
                As Lead Software Engineer at Swan Mauritius (through Cybernaptics Mauritius), I developed and maintained
                the core backend infrastructure for a financial services platform. The system handles critical financial
                operations through secure, high-availability REST APIs built on Node.js.
              </p>
              <p>
                The project involved close collaboration with cross-functional teams — including designers, QA engineers,
                and product owners — to deliver reliable applications. All work is carried out with meticulous technical
                documentation, supporting English and French-speaking stakeholders across multilingual teams.
              </p>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Key Features
              </p>
            </div>
            <div className="features-grid grid gap-6 md:grid-cols-2">
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Secure REST APIs</h3>
                <p className="text-gray-700">
                  Designed and maintained security-first Node.js REST APIs for financial data exchange,
                  ensuring data integrity and compliance across all endpoints.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Optimised Database Integrations</h3>
                <p className="text-gray-700">
                  Wrote optimised SQL queries and managed MySQL and MariaDB integrations,
                  improving query performance and reducing database bottlenecks.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">CI/CD Pipeline</h3>
                <p className="text-gray-700">
                  Implemented GitHub Actions workflows for automated testing and deployment,
                  with Docker containerisation ensuring consistent and reliable releases.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Responsive Frontend Integration</h3>
                <p className="text-gray-700">
                  Contributed to front-end integration using React, HTML, and CSS,
                  ensuring responsive and accessible designs across all device types.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Technical Implementation
              </p>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Backend Architecture</h3>
                <p className="mb-4">
                  Built on Node.js with a RESTful API design pattern, ensuring modularity and maintainability.
                  Services are structured to support independent scaling and isolated deployment.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <code>
                    Stack: Node.js → REST APIs → MySQL / MariaDB → Docker → GitHub Actions CI/CD
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Database Layer</h3>
                <p className="mb-4">
                  MySQL and MariaDB are used as the primary data stores, with carefully optimised SQL queries
                  and indexing strategies to support high-throughput financial operations reliably.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Deployment & Tooling</h3>
                <p className="mb-4">
                  Docker containers are used for consistent environment management, with GitHub Actions
                  automating the build, test, and deployment lifecycle for every code change.
                </p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Results
              </p>
            </div>
            <div className="metrics-grid grid gap-6 md:grid-cols-3">
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">API Uptime</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">2</div>
                <div className="text-gray-600">Languages Supported</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">100%</div>
                <div className="text-gray-600">Documented Services</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
