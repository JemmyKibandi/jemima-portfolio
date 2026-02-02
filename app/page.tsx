'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  Browser, 
  HardDrive, 
  Database, 
  Cloud, 
  TestTube,
} from '@phosphor-icons/react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const workHighlightsRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    // Hero animations
    gsap.fromTo('.hero-title', 
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power2.out' }
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

    gsap.fromTo('.highlight-item', 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power2.out', scrollTrigger: '.highlights-grid' }
    );
  });

  const { contextSafe } = useGSAP();

  const handleProjectHover = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
  });

  const handleProjectLeave = contextSafe((e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.3, ease: 'power2.out' });
  });

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-5xl font-bold tracking-tight">
              Vinicius Ferreira
            </h1>
            <h2 className="hero-subtitle text-2xl text-gray-600">
              Senior Full Stack Engineer
            </h2>
            <p className="hero-description text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Building production web applications that translate complex data systems into fast, intuitive user experiences.
            </p>
          </div>
          <div className="hero-buttons flex gap-4 justify-center">
            <a
              href="mailto:the.vinicius.creative@gmail.com"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Contact
            </a>
            <a
              href="#experience"
              className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Experience
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">About</h2>
          <div className="about-content prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed">
              I&apos;m a Senior Full Stack Engineer with over 8 years of experience building and owning full-stack production web applications in fast-moving startup environments. I specialize in TypeScript, React, Node.js, and Python, with a strong focus on designing scalable APIs and backend workflows.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              Throughout my career, I&apos;ve shipped full-stack features end-to-end and collaborated closely with product, design, and engineering teams. I work daily with AI-assisted development tools to improve development speed, code quality, and performance, always focusing on delivering reliable and intuitive user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} id="skills" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="skills-grid grid md:grid-cols-2 gap-6">
            <div className="skill-card bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-3">
                <Browser size={24} color="#3B82F6" weight="duotone" />
                Frontend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">React</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Next.js</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">TypeScript</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">JavaScript</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">HTML</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">CSS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Tailwind CSS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Zustand</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Redux Toolkit</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Material UI</span>
              </div>
            </div>
            <div className="skill-card bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-3">
                <HardDrive size={24} color="#10B981" weight="duotone" />
                Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Node.js</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Python</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">FastAPI</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Pydantic</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">REST APIs</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">GraphQL</span>
              </div>
            </div>
            <div className="skill-card bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-3">
                <Database size={24} color="#8B5CF6" weight="duotone" />
                Databases
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">PostgreSQL</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">MongoDB</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Redis</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Prisma</span>
              </div>
            </div>
            <div className="skill-card bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-3">
                <Cloud size={24} color="#F59E0B" weight="duotone" />
                Infrastructure & DevOps
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">AWS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">EC2</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">S3</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">RDS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">CloudFront</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">ECS</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Docker</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Kubernetes</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">CI/CD</span>
              </div>
            </div>
            <div className="skill-card bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-gray-900 flex items-center gap-3">
                <TestTube size={24} color="#EF4444" weight="duotone" />
                Testing & Tooling
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Pytest</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Jest</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Cypress</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">Git</span>
                <span className="bg-white px-3 py-1 rounded-full text-sm border border-gray-200">GitHub</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="projects-grid grid md:grid-cols-2 gap-8 mb-8">
            <a 
              href="/projects/fintech-platform" 
              className="project-card bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
              onMouseEnter={handleProjectHover}
              onMouseLeave={handleProjectLeave}
            >
              <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">PayCore</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">PayCore Enterprise</h3>
              <p className="text-gray-600 mb-4">Microservices-based financial platform processing $50M+ monthly transactions with real-time fraud detection and regulatory compliance.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">PostgreSQL</span>
                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">AWS</span>
                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Kubernetes</span>
              </div>
            </a>
            <a 
              href="/projects/dataflow-analytics" 
              className="project-card bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow group"
              onMouseEnter={handleProjectHover}
              onMouseLeave={handleProjectLeave}
            >
              <div className="w-full h-48 bg-gradient-to-br from-green-500 to-teal-600 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">DataFlow</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">DataFlow Analytics</h3>
              <p className="text-gray-600 mb-4">Real-time data processing platform handling 10TB+ daily data with predictive insights and automated reporting for enterprise clients.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">Python</span>
                <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">FastAPI</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">Redis</span>
              </div>
            </a>
          </div>
          <div className="text-center">
            <a
              href="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              View All Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Work Highlights Section */}
      <section ref={workHighlightsRef} className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Work Highlights</h2>
          <div className="highlights-grid grid md:grid-cols-2 gap-8">
            <div className="highlight-item space-y-4">
              <h3 className="text-lg font-semibold">Scalable Web Applications</h3>
              <p className="text-gray-700">
                Built production-grade full-stack applications serving thousands of users with React, Node.js, and cloud infrastructure.
              </p>
            </div>
            <div className="highlight-item space-y-4">
              <h3 className="text-lg font-semibold">API Design & Backend Systems</h3>
              <p className="text-gray-700">
                Designed and implemented RESTful and GraphQL APIs with Python FastAPI and Node.js, focusing on performance and scalability.
              </p>
            </div>
            <div className="highlight-item space-y-4">
              <h3 className="text-lg font-semibold">Data-Driven Platforms</h3>
              <p className="text-gray-700">
                Developed complex data processing systems and intuitive user interfaces that transform backend complexity into seamless user experiences.
              </p>
            </div>
            <div className="highlight-item space-y-4">
              <h3 className="text-lg font-semibold">Cross-Functional Collaboration</h3>
              <p className="text-gray-700">
                Collaborated with product, design, and engineering teams in fast-paced startup environments to deliver features end-to-end.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
