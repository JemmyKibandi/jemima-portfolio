'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TECH_TAGS = [
  { label: "Node.js", color: "bg-yellow-500 text-black" },
  { label: "MySQL", color: "bg-blue-600 text-white" },
  { label: "MariaDB", color: "bg-blue-500 text-white" },
  { label: "React", color: "bg-sky-500 text-white" },
  { label: "Docker", color: "bg-cyan-600 text-white" },
  { label: "GitHub Actions", color: "bg-violet-600 text-white" },
];

const GH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"/>
  </svg>
);

export default function SwanFinancialAPIPage() {
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
      <header className="bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 font-serif italic">
            Swan Financial API
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            Secure and scalable Node.js REST APIs and backend services for a financial services provider in Mauritius, with optimised database integrations and automated CI/CD pipelines.
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
              href="https://github.com/JemmyKibandi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-blue-700 hover:to-indigo-800 shadow-lg shadow-blue-500/30"
            >
              {GH_ICON}
              View on GitHub
            </a>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl shadow-blue-900/10">
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
              alt="Swan Financial API"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-indigo-900/10 to-transparent" />
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
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
              <span className="h-px w-10 bg-blue-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Key Features
              </p>
            </div>
            <div className="features-grid grid gap-6 md:grid-cols-2">
              {[
                { title: "Secure REST APIs", body: "Designed and maintained security-first Node.js REST APIs for financial data exchange, ensuring data integrity and compliance across all endpoints." },
                { title: "Optimised Database Integrations", body: "Wrote optimised SQL queries and managed MySQL and MariaDB integrations, improving query performance and reducing database bottlenecks." },
                { title: "CI/CD Pipeline", body: "Implemented GitHub Actions workflows for automated testing and deployment, with Docker containerisation ensuring consistent and reliable releases." },
                { title: "Responsive Frontend Integration", body: "Contributed to front-end integration using React, HTML, and CSS, ensuring responsive and accessible designs across all device types." },
              ].map(({ title, body }) => (
                <div key={title} className="feature-card rounded-2xl border-t-2 border-t-blue-400 bg-gradient-to-br from-blue-50 to-indigo-50/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-blue-900">{title}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Technical Implementation
              </p>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Backend Architecture</h3>
                <p className="mb-4">Built on Node.js with a RESTful API design pattern, ensuring modularity and maintainability. Services are structured to support independent scaling and isolated deployment.</p>
                <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-sm text-blue-900 font-mono">
                  Stack: Node.js → REST APIs → MySQL / MariaDB → Docker → GitHub Actions CI/CD
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Database Layer</h3>
                <p>MySQL and MariaDB are used as the primary data stores, with carefully optimised SQL queries and indexing strategies to support high-throughput financial operations reliably.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Deployment & Tooling</h3>
                <p>Docker containers are used for consistent environment management, with GitHub Actions automating the build, test, and deployment lifecycle for every code change.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Results
              </p>
            </div>
            <div className="metrics-grid grid gap-4 md:grid-cols-3">
              {[
                { value: "99.9%", label: "API Uptime" },
                { value: "2", label: "Languages Supported" },
                { value: "100%", label: "Documented Services" },
              ].map(({ value, label }) => (
                <div key={label} className="metric-item rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-6 text-center text-white shadow-lg shadow-blue-500/20">
                  <div className="text-3xl font-semibold mb-2">{value}</div>
                  <div className="text-blue-100 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
