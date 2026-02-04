'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StreamHubPlatformPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.project-hero', 
      { opacity: 0, scale: 0.98 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo('.project-title', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
    );

    gsap.fromTo('.project-description', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.35, ease: 'power2.out' }
    );

    gsap.fromTo('.tech-tag', 
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, delay: 0.45, ease: 'power2.out' }
    );

    gsap.fromTo('.content-section', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: '.content-section' }
    );

    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: '.features-grid' }
    );

    gsap.fromTo('.metric-item', 
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out', scrollTrigger: '.metrics-grid' }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900">
            StreamHub Platform
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            A scalable video streaming infrastructure designed to serve millions of concurrent users with adaptive bitrate streaming and global CDN distribution.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              TypeScript
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              AWS
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Redis
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Docker
            </span>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/project-streamhub.jpg"
              alt="StreamHub Platform"
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
                StreamHub Platform is a comprehensive video streaming infrastructure capable of serving over 1 million concurrent users.
                The system features adaptive bitrate streaming, global CDN distribution, and real-time analytics to provide
                seamless video experiences across multiple devices and network conditions.
              </p>
              <p>
                The platform powers major streaming services and handles critical operations including video transcoding,
                content delivery, user authentication, and real-time monitoring. All components are designed for high availability
                and can scale dynamically based on demand patterns.
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
                <h3 className="text-lg font-semibold mb-3">Adaptive Bitrate Streaming</h3>
                <p className="text-gray-700">
                  Dynamic quality adjustment based on network conditions and device capabilities,
                  ensuring optimal viewing experience with minimal buffering.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Global CDN Distribution</h3>
                <p className="text-gray-700">
                  Multi-region content delivery network with edge caching,
                  reducing latency and improving streaming performance worldwide.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Real-time Analytics</h3>
                <p className="text-gray-700">
                  Comprehensive monitoring and analytics dashboard tracking viewer engagement,
                  performance metrics, and content popularity in real-time.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Auto-scaling Infrastructure</h3>
                <p className="text-gray-700">
                  Kubernetes-based auto-scaling that dynamically adjusts resources based on demand,
                  ensuring cost efficiency and optimal performance.
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
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Streaming Architecture</h3>
                <p className="mb-4">
                  Built using TypeScript with Node.js for the backend services and React for the admin dashboard.
                  Implemented HLS and DASH protocols for adaptive streaming with FFmpeg for video transcoding.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <code>
                    Flow: Video Upload -> Transcoding -> CDN Distribution -> Adaptive Streaming -> Analytics
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Infrastructure & Scaling</h3>
                <p className="mb-4">
                  Deployed on AWS using EKS for container orchestration, S3 for video storage, and CloudFront for CDN.
                  Redis is used for session management and real-time data caching.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Monitoring & Analytics</h3>
                <p className="mb-4">
                  Real-time monitoring with custom metrics tracking, automated alerting, and comprehensive
                  analytics dashboard for content performance and user engagement insights.
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
                <div className="text-3xl font-semibold text-gray-900 mb-2">1M+</div>
                <div className="text-gray-600">Concurrent Users</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">Uptime</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">50%</div>
                <div className="text-gray-600">Reduced Buffering</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
