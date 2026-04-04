"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRightIcon, GithubLogoIcon, StarIcon, ArrowLeftIcon } from "@phosphor-icons/react";
import { repoToCard } from "@/lib/github";
import type { GithubRepo, ProjectCard } from "@/lib/github";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function DynamicProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<ProjectCard | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(({ slug }) => {
      fetch(`/api/github/${slug}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((repo: GithubRepo | null) => {
          setProject(repo ? repoToCard(repo) : null);
          setLoading(false);
        });
    });
  }, [params]);

  useGSAP(
    () => {
      if (!project) return;
      gsap.fromTo(
        ".project-title",
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 1.2, ease: "expo.out" },
      );
      gsap.fromTo(
        ".project-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.2, ease: "expo.out" },
      );
      gsap.fromTo(
        ".project-meta",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          delay: 0.3,
          ease: "expo.out",
        },
      );
      gsap.fromTo(
        ".project-hero",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: "expo.out" },
      );
    },
    { scope: containerRef, dependencies: [project] },
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-6 h-6 rounded-full border-2 border-gray-300 border-t-gray-900 animate-spin" />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Project not found.</p>
        <Link href="/projects" className="text-sm underline text-gray-700">
          Back to projects
        </Link>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gray-400 hover:text-gray-700 transition-colors mb-8"
          >
            <ArrowLeftIcon size={12} weight="bold" /> All projects
          </Link>

          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
            Selected work
          </p>
          <h1 className="project-title mt-4 text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900 font-serif italic">
            {project.title}
          </h1>
          <p className="project-description mt-4 max-w-3xl text-lg sm:text-xl text-gray-600">
            {project.description}
          </p>

          <div className="project-meta mt-6 flex flex-wrap items-center gap-4">
            {project.language && (
              <span className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
                {project.language}
              </span>
            )}
            {project.stars > 0 && (
              <span className="flex items-center gap-1.5 text-sm text-gray-500">
                <StarIcon size={14} weight="fill" />
                {project.stars} stars
              </span>
            )}
            {project.topics.map((t) => (
              <span
                key={t}
                className="rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-600"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="project-meta mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              <GithubLogoIcon size={16} weight="fill" />
              View on GitHub
            </a>
          </div>

          <div className="project-hero relative mt-10 h-72 sm:h-80 lg:h-96 overflow-hidden rounded-lg border border-gray-200">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 70vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
          </div>
        </div>
      </header>
    </div>
  );
}
