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

const TAG_COLORS = [
  "bg-violet-500 text-white",
  "bg-sky-500 text-white",
  "bg-emerald-500 text-white",
  "bg-rose-500 text-white",
  "bg-amber-500 text-black",
  "bg-indigo-500 text-white",
  "bg-fuchsia-500 text-white",
  "bg-blue-600 text-white",
];

function tagColor(s: string) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h << 5) - h + s.charCodeAt(i); h |= 0; }
  return TAG_COLORS[Math.abs(h) % TAG_COLORS.length];
}

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
      <div className="bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="page-header text-4xl font-extralight mb-1">
            All <span className="font-serif italic text-violet-700">Projects</span>
          </h1>
          <p className="text-sm text-gray-500">
            {projects.length} most recent public repositories from GitHub
          </p>
        </div>
      </div>

      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.url}
                href={`/projects/${project.name}`}
                className="project-grid-item group relative block"
              >
                <div className="relative h-56 overflow-hidden rounded-2xl shadow-lg shadow-gray-900/10">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-violet-900/50 via-purple-900/10 to-transparent" />

                  <div className="absolute bottom-3 left-1/2 w-[calc(100%-1.5rem)] -translate-x-1/2">
                    <div className="flex items-center justify-between gap-3 bg-white/95 backdrop-blur-sm px-3 py-2.5 rounded-xl transition-colors group-hover:bg-white">
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-gray-900 truncate">
                          {project.title}
                        </h3>
                        <p className="text-xs text-gray-600 line-clamp-1">
                          {project.description}
                        </p>
                      </div>
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700 group-hover:bg-violet-600 group-hover:text-white transition-colors">
                        <ArrowUpRightIcon size={16} weight="bold" />
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center gap-2 px-1 flex-wrap">
                  {project.language && (
                    <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${tagColor(project.language)}`}>
                      {project.language}
                    </span>
                  )}
                  {project.stars > 0 && (
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <StarIcon size={12} weight="fill" className="text-amber-400" />
                      {project.stars}
                    </span>
                  )}
                  {project.topics.slice(0, 2).map((t) => (
                    <span
                      key={t}
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${tagColor(t)}`}
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
