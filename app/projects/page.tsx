'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.page-header', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo('.project-grid-item', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', delay: 0.3 }
    );
  }, { scope: containerRef });

  const projects = [
    {
      id: 'fintech-platform',
      title: 'PayCore Enterprise',
      description: 'Microservices-based financial platform processing $50M+ monthly transactions with real-time fraud detection and regulatory compliance.',
      image: '/project-fintech.jpg',
    },
    {
      id: 'dataflow-analytics',
      title: 'DataFlow Analytics',
      description: 'Real-time data processing platform handling 10TB+ daily data with predictive insights and automated reporting for enterprise clients.',
      image: '/project-dataflow.jpg',
    },
    {
      id: 'streamhub-platform',
      title: 'StreamHub Platform',
      description: 'Scalable video streaming infrastructure serving 1M+ concurrent users with adaptive bitrate and global CDN distribution.',
      image: '/project-streamhub.jpg',
    },
    {
      id: 'ai-analytics',
      title: 'MiraiCore Insights',
      description: 'AI-driven forecasting and reporting for enterprise decision makers.',
      image: '/project-ai.jpg',
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="page-header text-4xl mb-4">All Projects</h1>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-grid-item group relative block"
              >
                <div className="relative h-96 overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2">
                    <div className="flex items-center justify-between gap-4 bg-white px-4 py-3 backdrop-blur-md transition-colors group-hover:bg-white/95">
                      <div>
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                          {project.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-gray-600">
                          {project.description}
                        </p>
                      </div>
                      <span className="group/arrow relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-transparent text-gray-800 transition-colors duration-200">
                        <ArrowUpRightIcon size={20} weight="regular" />
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
