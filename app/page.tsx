'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    gsap.fromTo('.hero-description', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power2.out' }
    );
    gsap.fromTo('.hero-buttons', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power2.out' }
    );

    // Section animations on scroll
    gsap.fromTo('.about-content', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out', scrollTrigger: '.about-content' }
    );

    gsap.fromTo('.skill-card', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.skills-grid' }
    );

    gsap.fromTo('.experience-item', 
      { opacity: 0, x: -30 },
      { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.experience-list' }
    );

    gsap.fromTo('.project-card', 
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.projects-grid' }
    );

  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-start space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-6xl font-bold tracking-tight">
              Vinicius Ferreira —
            </h1>
            <p className="hero-description text-6xl">
              Building production web applications that translate complex data systems into fast, intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      <AboutSection ref={aboutRef} />

      <SkillsSection ref={skillsRef} />

      {/* Experience Section */}
      <section ref={experienceRef} id="experience" className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="experience-list space-y-8">
            <div className="experience-item border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold">MiraiCore JP</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
              <p className="text-gray-500">February 2025 to Present • Remote, Japan</p>
            </div>
            <div className="experience-item border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold">UrbanInfluence</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
              <p className="text-gray-500">January 2024 to January 2025 • Remote, USA</p>
            </div>
            <div className="experience-item border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold">Scaleflex</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
              <p className="text-gray-500">September 2021 to January 2024 • Remote, USA</p>
            </div>
            <div className="experience-item border-l-4 border-gray-300 pl-6">
              <h3 className="text-xl font-semibold">White Prompt</h3>
              <p className="text-gray-600">Full Stack Engineer</p>
              <p className="text-gray-500">June 2019 to August 2021 • On-site, Brazil</p>
            </div>
          </div>
        </div>
      </section>

      <ProjectsSection ref={projectsRef} />

    </div>
  );
}
