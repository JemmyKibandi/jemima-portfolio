"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  useGSAP(() => {
    // Hero animations
    gsap.fromTo(
      ".hero-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
    );

    gsap.fromTo(
      ".hero-description",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power2.out" },
    );
    // Section animations on scroll
    gsap.fromTo(
      ".about-content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: ".about-content",
      },
    );

    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: ".skills-grid",
      },
    );

    gsap.fromTo(
      ".project-card",
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: ".projects-grid",
      },
    );

    gsap.fromTo(
      ".experience-header",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: ".experience-header",
      },
    );

    gsap.fromTo(
      ".experience-entry",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: ".experience-entry",
      },
    );
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen bg-white flex items-center justify-center px-6"
      >
        <div className="max-w-4xl mx-auto text-start space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Vinicius Ferreira —
            </h1>
            <p className="hero-description text-4xl sm:text-5xl lg:text-6xl">
              Building production web applications that translate complex data
              systems into fast, intuitive user experiences.
            </p>
          </div>
          <div>Curitiba, Brazil</div>
        </div>
      </section>

      <AboutSection ref={aboutRef} />

      <SkillsSection ref={skillsRef} />

      <ExperienceSection ref={experienceRef} />

      <ProjectsSection ref={projectsRef} />
    </div>
  );
}
