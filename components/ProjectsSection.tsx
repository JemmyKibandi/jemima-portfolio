"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const featured = [
  {
    slug: "fintech-platform",
    title: "Swan Financial API",
    description: "Secure Node.js REST APIs and backend services for financial systems.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    accent: "from-blue-600/80 to-indigo-800/60",
  },
  {
    slug: "dataflow-analytics",
    title: "Optiven Internal Portal",
    description: "Responsive internal management system with real-time data sync.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    accent: "from-emerald-600/80 to-teal-800/60",
  },
];

const ProjectsSection = forwardRef<HTMLElement>(function ProjectsSection(
  _,
  ref,
) {
  return (
    <section ref={ref} id="projects" className="px-6 py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="max-w-3xl flex items-end justify-between">
          <h2 className="mt-3 text-4xl sm:text-5xl tracking-tight text-gray-900 font-extralight">
            Projects and{" "}
            <span className="font-serif italic text-violet-700">case studies.</span>
          </h2>
          <Link
            href="/projects"
            className="hidden sm:inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors shrink-0 mb-1"
          >
            View all <ArrowUpRightIcon size={14} weight="regular" />
          </Link>
        </header>

        <div className="projects-grid mt-12 grid gap-10 md:grid-cols-2">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card group relative block"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden rounded-2xl shadow-xl shadow-gray-900/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.accent} opacity-70`} />

                <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2">
                  <div className="flex items-center justify-between gap-4 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-xl transition-colors group-hover:bg-white">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 line-clamp-1">
                        {project.description}
                      </p>
                    </div>
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                      <ArrowUpRightIcon size={18} weight="bold" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            View all projects <ArrowUpRightIcon size={14} weight="regular" />
          </Link>
        </div>
      </div>
    </section>
  );
});

export default ProjectsSection;
