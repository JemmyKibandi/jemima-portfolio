'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function StreamHubPlatformPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.project-hero', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo('.project-title', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power2.out' }
    );

    gsap.fromTo('.project-description', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: 'power2.out' }
    );

    gsap.fromTo('.tech-tag', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, delay: 0.7, ease: 'power2.out' }
    );

    gsap.fromTo('.content-section', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out', scrollTrigger: '.content-section' }
    );

    gsap.fromTo('.feature-card', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.features-grid' }
    );

    gsap.fromTo('.metric-item', 
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.metrics-grid' }
    );
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="project-hero w-full h-64 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">StreamHub</span>
          </div>
          <h1 className="project-title text-4xl font-bold mb-4">StreamHub Platform</h1>
          <p className="project-description text-xl text-gray-600 mb-6">
            A scalable video streaming infrastructure designed to serve millions of concurrent users with adaptive bitrate streaming and global CDN distribution.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tech-tag px-4 py-2 bg-blue-100 text-blue-800 rounded-full">TypeScript</span>
            <span className="tech-tag px-4 py-2 bg-orange-100 text-orange-800 rounded-full">AWS</span>
            <span className="tech-tag px-4 py-2 bg-red-100 text-red-800 rounded-full">Redis</span>
            <span className="tech-tag px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Docker</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* Overview */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
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

          {/* Key Features */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="features-grid grid md:grid-cols-2 gap-6">
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Adaptive Bitrate Streaming</h3>
                <p className="text-gray-700">
                  Dynamic quality adjustment based on network conditions and device capabilities, 
                  ensuring optimal viewing experience with minimal buffering.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Global CDN Distribution</h3>
                <p className="text-gray-700">
                  Multi-region content delivery network with edge caching, 
                  reducing latency and improving streaming performance worldwide.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Real-time Analytics</h3>
                <p className="text-gray-700">
                  Comprehensive monitoring and analytics dashboard tracking viewer engagement, 
                  performance metrics, and content popularity in real-time.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Auto-scaling Infrastructure</h3>
                <p className="text-gray-700">
                  Kubernetes-based auto-scaling that dynamically adjusts resources based on demand, 
                  ensuring cost efficiency and optimal performance.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Streaming Architecture</h3>
                <p className="text-gray-700 mb-4">
                  Built using TypeScript with Node.js for the backend services and React for the admin dashboard. 
                  Implemented HLS and DASH protocols for adaptive streaming with FFmpeg for video transcoding.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-800">
                    Flow: Video Upload → Transcoding → CDN Distribution → Adaptive Streaming → Analytics
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Infrastructure & Scaling</h3>
                <p className="text-gray-700 mb-4">
                  Deployed on AWS using EKS for container orchestration, S3 for video storage, and CloudFront for CDN. 
                  Redis is used for session management and real-time data caching.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Monitoring & Analytics</h3>
                <p className="text-gray-700 mb-4">
                  Real-time monitoring with custom metrics tracking, automated alerting, and comprehensive 
                  analytics dashboard for content performance and user engagement insights.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="metrics-grid grid md:grid-cols-3 gap-6">
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">1M+</div>
                <div className="text-gray-700">Concurrent Users</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.9%</div>
                <div className="text-gray-700">Uptime</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">50%</div>
                <div className="text-gray-700">Reduced Buffering</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}