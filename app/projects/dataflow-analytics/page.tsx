'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function DataFlowAnalyticsPage() {
  const containerRef = useRef();

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
          <div className="project-hero w-full h-64 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-8 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">DataFlow</span>
          </div>
          <h1 className="project-title text-4xl font-bold mb-4">DataFlow Analytics</h1>
          <p className="project-description text-xl text-gray-600 mb-6">
            A real-time data processing platform designed to handle massive datasets with predictive insights and automated reporting capabilities.
          </p>
          <div className="flex flex-wrap gap-3">
            <span className="tech-tag px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full">Python</span>
            <span className="tech-tag px-4 py-2 bg-red-100 text-red-800 rounded-full">FastAPI</span>
            <span className="tech-tag px-4 py-2 bg-blue-100 text-blue-800 rounded-full">React</span>
            <span className="tech-tag px-4 py-2 bg-gray-100 text-gray-800 rounded-full">Redis</span>
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
                DataFlow Analytics is a comprehensive data processing platform capable of handling over 10TB of data daily. 
                The system combines machine learning algorithms with real-time stream processing to provide predictive 
                insights and automated recommendations for enterprise clients.
              </p>
              <p>
                The platform serves Fortune 500 companies across various industries, enabling data-driven decision making 
                through advanced analytics, pattern recognition, and predictive modeling. The system processes structured 
                and unstructured data from multiple sources to generate actionable business intelligence.
              </p>
            </div>
          </section>

          {/* Key Features */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <div className="features-grid grid md:grid-cols-2 gap-6">
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Real-time Stream Processing</h3>
                <p className="text-gray-700">
                  High-throughput data ingestion and processing pipeline handling millions of events per second 
                  with sub-second latency for time-critical insights.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Predictive Analytics</h3>
                <p className="text-gray-700">
                  Advanced machine learning models for forecasting trends, customer behavior, 
                  and market dynamics with 95% accuracy rates.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Interactive Dashboards</h3>
                <p className="text-gray-700">
                  Dynamic visualization platform with customizable dashboards, 
                  drill-down capabilities, and automated report generation.
                </p>
              </div>
              <div className="feature-card bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Automated Insights</h3>
                <p className="text-gray-700">
                  AI-driven anomaly detection and pattern recognition that automatically 
                  identifies trends and generates actionable recommendations.
                </p>
              </div>
            </div>
          </section>

          {/* Technical Implementation */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Data Processing Pipeline</h3>
                <p className="text-gray-700 mb-4">
                  Built using Python with Apache Kafka for stream processing and Apache Spark for batch processing. 
                  Implemented MLOps practices with automated model training, validation, and deployment pipelines.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm text-gray-800">
                    Pipeline: Data Ingestion → Stream Processing → ML Models → Analytics → Visualization
                  </code>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">API Architecture</h3>
                <p className="text-gray-700 mb-4">
                  FastAPI-based REST API with async processing capabilities. Implemented caching strategies 
                  using Redis for frequently accessed data and query optimization.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Frontend Dashboard</h3>
                <p className="text-gray-700 mb-4">
                  React-based dashboard with D3.js for advanced data visualizations. Features real-time 
                  updates via WebSocket connections and responsive design for mobile access.
                </p>
              </div>
            </div>
          </section>

          {/* Results */}
          <section className="content-section">
            <h2 className="text-2xl font-bold mb-6">Results & Impact</h2>
            <div className="metrics-grid grid md:grid-cols-3 gap-6">
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">10TB+</div>
                <div className="text-gray-700">Daily Data Processing</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
                <div className="text-gray-700">Prediction Accuracy</div>
              </div>
              <div className="metric-item text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">60%</div>
                <div className="text-gray-700">Faster Decision Making</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}