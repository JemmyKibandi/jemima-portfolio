"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, StarIcon } from "@phosphor-icons/react";
import type { ProjectCard } from "@/lib/github";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ProjectsPageClient({
  projects,
}: {
  projects: ProjectCard[];
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".page-header",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" },
      );

      gsap.fromTo(
        ".project-grid-item",
        { opacity: 0, y: 36, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.12,
          ease: "expo.out",
          delay: 0.25,
        },
      );
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <div className="bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="page-header text-4xl font-extralight mb-1">
            All <span className="font-serif italic">Projects</span>
          </h1>
          <p className="text-sm text-gray-500">
            {projects.length} most recent public repositories from GitHub
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.url}
                href={`/projects/${project.name}`}
                className="project-grid-item group relative block"
              >
                <div className="relative h-56 overflow-hidden rounded-lg border border-gray-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                  <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2">
                    <div className="flex items-center justify-between gap-4 bg-white px-4 py-3 transition-colors group-hover:bg-white/95">
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center text-gray-800">
                        <ArrowUpRightIcon size={20} weight="regular" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-3 px-1">
                  {project.language && (
                    <span className="text-xs text-gray-500">
                      {project.language}
                    </span>
                  )}
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <StarIcon size={12} weight="fill" />
                      {project.stars}
                    </span>
                  )}
                  {project.topics.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
