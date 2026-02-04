'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FinTechPlatformPage() {
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
            PayCore Enterprise
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            A comprehensive microservices-based financial platform designed to handle high-volume transactions with enterprise-grade security and compliance.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Node.js
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              PostgreSQL
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              AWS
            </span>
            <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
              Kubernetes
            </span>
          </div>
          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src="/project-fintech.jpg"
              alt="PayCore Enterprise"
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
                Built a comprehensive financial technology platform capable of processing over $50 million in monthly transactions.
                The system features real-time fraud detection, regulatory compliance automation, and a microservices architecture
                designed for high availability and scalability.
              </p>
              <p>
                The platform serves multiple financial institutions and handles critical operations including payment processing,
                account management, transaction monitoring, and regulatory reporting. All components are designed with security-first
                principles and meet industry compliance standards including PCI DSS and SOX.
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
                <h3 className="text-lg font-semibold mb-3">Real-time Fraud Detection</h3>
                <p className="text-gray-700">
                  Machine learning-powered fraud detection system analyzing transaction patterns in real-time,
                  reducing false positives by 40% while maintaining 99.9% accuracy.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Microservices Architecture</h3>
                <p className="text-gray-700">
                  Scalable microservices design with independent deployment capabilities,
                  enabling rapid feature development and system resilience.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  Automated compliance reporting and audit trails meeting PCI DSS, SOX,
                  and regional financial regulations across multiple jurisdictions.
                </p>
              </div>
              <div className="feature-card rounded-lg border border-gray-200 bg-white p-6">
                <h3 className="text-lg font-semibold mb-3">High Availability</h3>
                <p className="text-gray-700">
                  99.99% uptime with multi-region deployment, automated failover,
                  and disaster recovery capabilities ensuring continuous operations.
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
                  Built using Node.js with TypeScript for type safety and maintainability. The system employs
                  a microservices architecture with API Gateway for routing, service discovery, and load balancing.
                </p>
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                  <code>
                    Services: Authentication, Payment Processing, Fraud Detection, Compliance, Reporting, Notifications
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Database Design</h3>
                <p className="mb-4">
                  PostgreSQL with read replicas for high-performance queries. Implemented database sharding
                  for horizontal scaling and optimized indexing strategies for transaction processing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">Infrastructure</h3>
                <p className="mb-4">
                  Deployed on AWS using EKS (Kubernetes) for container orchestration. Utilizes RDS for managed
                  databases, ElastiCache for caching, and CloudFront for global content delivery.
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
                <div className="text-3xl font-semibold text-gray-900 mb-2">$50M+</div>
                <div className="text-gray-600">Monthly Transaction Volume</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">99.99%</div>
                <div className="text-gray-600">System Uptime</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <div className="text-3xl font-semibold text-gray-900 mb-2">40%</div>
                <div className="text-gray-600">Reduction in False Positives</div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
