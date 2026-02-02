'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function FinTechPlatformPage() {
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
          <div className="project-hero w-full h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">PayCore</span>
          </div>
          <h1 className="project-title text-4xl font-bold mb-4">PayCore Enterprise</h1>
          <p className="project-description text-xl text-gray-600 mb-6">
            A comprehensive microservices-based financial platform designed to handle high-volume transactions with enterprise-grade security and compliance.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tech-tag px-4 py-2 bg-blue-100 text-blue-800 rounded-full">Node.js</span>
            <span className="tech-tag px-4 py-2 bg-green-100 text-green-800 rounded-full">PostgreSQL</span>
            <span className="tech-tag px-4 py-2 bg-orange-100 text-orange-800 rounded-full">AWS</span>
            <span className="tech-tag px-4 py-2 bg-purple-100 text-purple-800 rounded-full">Kubernetes</span>
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

          {/* Key Features */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="features-grid grid md:grid-cols-2 gap-6">
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Real-time Fraud Detection</h3>
                <p className="text-gray-700">
                  Machine learning-powered fraud detection system analyzing transaction patterns in real-time, 
                  reducing false positives by 40% while maintaining 99.9% accuracy.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Microservices Architecture</h3>
                <p className="text-gray-700">
                  Scalable microservices design with independent deployment capabilities, 
                  enabling rapid feature development and system resilience.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Regulatory Compliance</h3>
                <p className="text-gray-700">
                  Automated compliance reporting and audit trails meeting PCI DSS, SOX, 
                  and regional financial regulations across multiple jurisdictions.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">High Availability</h3>
                <p className="text-gray-700">
                  99.99% uptime with multi-region deployment, automated failover, 
                  and disaster recovery capabilities ensuring continuous operations.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Backend Architecture</h3>
                <p className="text-gray-700 mb-4">
                  Built using Node.js with TypeScript for type safety and maintainability. The system employs 
                  a microservices architecture with API Gateway for routing, service discovery, and load balancing.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-800">
                    Services: Authentication, Payment Processing, Fraud Detection, Compliance, Reporting, Notifications
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Database Design</h3>
                <p className="text-gray-700 mb-4">
                  PostgreSQL with read replicas for high-performance queries. Implemented database sharding 
                  for horizontal scaling and optimized indexing strategies for transaction processing.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Infrastructure</h3>
                <p className="text-gray-700 mb-4">
                  Deployed on AWS using EKS (Kubernetes) for container orchestration. Utilizes RDS for managed 
                  databases, ElastiCache for caching, and CloudFront for global content delivery.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="metrics-grid grid md:grid-cols-3 gap-6">
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$50M+</div>
                <div className="text-gray-700">Monthly Transaction Volume</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">99.99%</div>
                <div className="text-gray-700">System Uptime</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
                <div className="text-gray-700">Reduction in False Positives</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}