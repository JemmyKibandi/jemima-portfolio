'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsPage() {
  const containerRef = useRef();

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

  const { contextSafe } = useGSAP({ scope: containerRef });

  const handleProjectHover = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  });

  const handleProjectLeave = contextSafe((e) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });

  const projects = [
    {
      id: 'fintech-platform',
      title: 'PayCore Enterprise',
      description: 'Microservices-based financial platform processing $50M+ monthly transactions with real-time fraud detection and regulatory compliance.',
      image: 'from-blue-500 to-purple-600',
      imageText: 'PayCore',
      technologies: ['Node.js', 'PostgreSQL', 'AWS', 'Kubernetes']
    },
    {
      id: 'dataflow-analytics',
      title: 'DataFlow Analytics',
      description: 'Real-time data processing platform handling 10TB+ daily data with predictive insights and automated reporting for enterprise clients.',
      image: 'from-green-500 to-teal-600',
      imageText: 'DataFlow',
      technologies: ['Python', 'FastAPI', 'React', 'Redis']
    },
    {
      id: 'streamhub-platform',
      title: 'StreamHub Platform',
      description: 'Scalable video streaming infrastructure serving 1M+ concurrent users with adaptive bitrate and global CDN distribution.',
      image: 'from-purple-500 to-pink-600',
      imageText: 'StreamHub',
      technologies: ['TypeScript', 'AWS', 'Redis', 'Docker']
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="page-header text-4xl font-bold mb-4">All Projects</h1>
          <p className="page-header text-xl text-gray-600 max-w-2xl">
            A collection of enterprise-level projects showcasing full-stack development, system architecture, and scalable solutions.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="project-grid-item bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
                onMouseEnter={handleProjectHover}
                onMouseLeave={handleProjectLeave}
              >
                <div className={`w-full h-48 bg-gradient-to-br ${project.image} rounded-lg mb-4 flex items-center justify-center`}>
                  <span className="text-white text-xl font-bold">{project.imageText}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}