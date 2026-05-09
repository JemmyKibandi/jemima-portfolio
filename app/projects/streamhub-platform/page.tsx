"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const TECH_TAGS = [
  { label: "React", color: "bg-sky-500 text-white" },
  { label: "JavaScript", color: "bg-yellow-500 text-black" },
  { label: "CSS3", color: "bg-rose-500 text-white" },
  { label: "WordPress", color: "bg-blue-600 text-white" },
  { label: "CPanel", color: "bg-pink-600 text-white" },
];

const GH_ICON = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 256 256">
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"/>
  </svg>
);

export default function EmeraldWebPlatformPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.project-hero', { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 1, ease: "power2.out" });
    gsap.fromTo('.project-title', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: "power2.out" });
    gsap.fromTo('.project-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, delay: 0.35, ease: "power2.out" });
    gsap.fromTo('.tech-tag', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.45, ease: "power2.out" });
    gsap.fromTo('.content-section', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out", scrollTrigger: ".content-section" });
    gsap.fromTo('.feature-card', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", scrollTrigger: ".features-grid" });
    gsap.fromTo('.metric-item', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power2.out", scrollTrigger: ".metrics-grid" });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <header className="bg-gradient-to-br from-rose-50 via-pink-50 to-fuchsia-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 font-serif italic">
            Emerald Web Platform
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            Engaging front-end web systems with multimedia integration and WordPress deployments, delivering polished digital experiences for agency clients.
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
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-500 to-pink-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-rose-600 hover:to-pink-700 shadow-lg shadow-rose-500/30"
            >
              {GH_ICON}
              View on GitHub
            </a>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-2xl shadow-2xl shadow-rose-900/10">
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80"
              alt="Emerald Web Platform"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/40 via-pink-900/10 to-transparent" />
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">Overview</p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>At Emerald Designers, I built and deployed front-end systems for a range of client projects, focusing on delivering engaging, responsive user interfaces using React, JavaScript, and modern CSS. The work spanned custom-built web applications and CMS solutions for diverse client needs.</p>
              <p>A key focus was maintainability and scalability — enhancing existing codebases, integrating multimedia features to boost engagement, and ensuring all deployments were stable and easy to manage via WordPress and CPanel.</p>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">Key Features</p>
            </div>
            <div className="features-grid grid gap-6 md:grid-cols-2">
              {[
                { title: "Responsive UI Development", body: "Built pixel-perfect, responsive interfaces using React, JavaScript, and CSS3 — ensuring a smooth, accessible experience across all screen sizes." },
                { title: "Multimedia Integration", body: "Integrated rich multimedia features — including video, audio, and interactive elements — to increase user engagement and time on site for client brands." },
                { title: "Codebase Enhancement", body: "Refactored and improved existing codebases for long-term maintainability, reducing technical debt and making future feature additions faster and safer." },
                { title: "WordPress & CPanel Deployments", body: "Deployed and maintained web solutions using WordPress and CPanel, providing clients with easy-to-manage sites backed by a stable and reliable hosting setup." },
              ].map(({ title, body }) => (
                <div key={title} className="feature-card rounded-2xl border-t-2 border-t-rose-400 bg-gradient-to-br from-rose-50 to-pink-50/60 p-6 shadow-sm">
                  <h3 className="text-lg font-semibold mb-3 text-rose-900">{title}</h3>
                  <p className="text-gray-700">{body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">Technical Implementation</p>
            </div>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Frontend Stack</h3>
                <p className="mb-4">Projects were built using React for component-driven UIs, with vanilla JavaScript for interactive features and CSS3 for styling, animations, and responsive layouts.</p>
                <div className="rounded-xl border border-rose-200 bg-rose-50/60 p-4 text-sm text-rose-900 font-mono">
                  Stack: React / JavaScript → CSS3 → WordPress → CPanel Deployment
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">CMS & Deployment</h3>
                <p>WordPress was used for content-driven client sites, with custom theme development and plugin configuration managed through CPanel for straightforward, reliable hosting.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Maintainability Focus</h3>
                <p>Code quality was a priority throughout — refactoring sessions were built into the workflow to ensure ongoing scalability and to reduce the cost of future changes.</p>
              </div>
            </div>
          </section>

          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-rose-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-400">Results</p>
            </div>
            <div className="metrics-grid grid gap-4 md:grid-cols-3">
              {[
                { value: "Multiple", label: "Client Projects Delivered" },
                { value: "Higher", label: "User Engagement" },
                { value: "2 Years", label: "Stable Production Record" },
              ].map(({ value, label }) => (
                <div key={label} className="metric-item rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 p-6 text-center text-white shadow-lg shadow-rose-500/20">
                  <div className="text-3xl font-semibold mb-2">{value}</div>
                  <div className="text-rose-100 text-sm">{label}</div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
