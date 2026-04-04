"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRightIcon,
  ArrowLeftIcon,
  StarIcon,
  GitForkIcon,
  CodeIcon,
  ClockIcon,
} from "@phosphor-icons/react";
import { repoToCard } from "@/lib/github";
import type { GithubRepo, ProjectCard } from "@/lib/github";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const GH_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z" />
  </svg>
);

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function DynamicProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [project, setProject] = useState<ProjectCard | null>(null);
  const [repo, setRepo] = useState<GithubRepo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then(({ slug }) => {
      fetch(`/api/github/${slug}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((data: GithubRepo | null) => {
          if (data) {
            setRepo(data);
            setProject(repoToCard(data));
          }
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
        ".tech-tag",
        { opacity: 0, y: 10 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.08,
          delay: 0.3,
          ease: "expo.out",
        },
      );
      gsap.fromTo(
        ".project-hero",
        { opacity: 0, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.2, ease: "expo.out" },
      );
      gsap.fromTo(
        ".content-section",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.18,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".content-section",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".feature-card",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".features-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".metric-item",
        { opacity: 0, y: 16 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".metrics-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        },
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

  if (!project || !repo) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">Project not found.</p>
        <Link href="/projects" className="text-sm underline text-gray-700">
          Back to projects
        </Link>
      </div>
    );
  }

  const topicFeatures = project.topics.slice(0, 4);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900">
      {/* Header */}
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

          <div className="mt-6 flex flex-wrap gap-2">
            {project.language && (
              <span className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700">
                {project.language}
              </span>
            )}
            {project.topics.map((t) => (
              <span
                key={t}
                className="tech-tag rounded-full border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              {GH_ICON}
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

      {/* Content */}
      <main className="py-20">
        <div className="max-w-5xl mx-auto px-6 space-y-16">

          {/* Overview */}
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Overview
              </p>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                {project.description !== "No description provided."
                  ? project.description
                  : `${project.title} is a public repository by Jemima Kibandi, showcasing work in ${project.language ?? "software development"}.`}
              </p>
              {repo.homepage && (
                <p>
                  A live version of this project is available at{" "}
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 underline underline-offset-2"
                  >
                    {repo.homepage}
                  </a>
                  .
                </p>
              )}
            </div>
          </section>

          {/* Topics as features */}
          {topicFeatures.length > 0 && (
            <section className="content-section">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-gray-200" />
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                  Key Topics
                </p>
              </div>
              <div className="features-grid grid gap-6 md:grid-cols-2">
                {topicFeatures.map((topic) => (
                  <div
                    key={topic}
                    className="feature-card rounded-lg border border-gray-200 bg-white p-6"
                  >
                    <h3 className="text-lg font-semibold mb-2 capitalize">
                      {topic.replace(/-/g, " ")}
                    </h3>
                    <p className="text-gray-700 text-sm">
                      This project makes use of{" "}
                      <span className="font-medium">
                        {topic.replace(/-/g, " ")}
                      </span>{" "}
                      as a core part of its technical approach.
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Technical details */}
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Technical Details
              </p>
            </div>
            <div className="space-y-6 text-gray-700">
              {project.language && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    Primary Language
                  </h3>
                  <p className="mb-3">
                    This repository is primarily written in{" "}
                    <span className="font-medium">{project.language}</span>.
                  </p>
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-4 text-sm text-gray-800">
                    <code>Primary: {project.language}</code>
                    {project.topics.length > 0 && (
                      <>
                        {" · "}
                        <code>Topics: {project.topics.join(", ")}</code>
                      </>
                    )}
                  </div>
                </div>
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  Repository
                </h3>
                <p>
                  Available publicly on GitHub at{" "}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-900 underline underline-offset-2"
                  >
                    {repo.full_name}
                  </a>
                  . Last updated {formatDate(repo.pushed_at)}.
                </p>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="content-section">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-gray-200" />
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
                Repository Stats
              </p>
            </div>
            <div className="metrics-grid grid gap-6 md:grid-cols-3">
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <StarIcon
                  size={20}
                  weight="fill"
                  className="mx-auto mb-2 text-gray-400"
                />
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {project.stars}
                </div>
                <div className="text-gray-600 text-sm">Stars</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <CodeIcon
                  size={20}
                  weight="regular"
                  className="mx-auto mb-2 text-gray-400"
                />
                <div className="text-3xl font-semibold text-gray-900 mb-1">
                  {project.language ?? "—"}
                </div>
                <div className="text-gray-600 text-sm">Language</div>
              </div>
              <div className="metric-item rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                <ClockIcon
                  size={20}
                  weight="regular"
                  className="mx-auto mb-2 text-gray-400"
                />
                <div className="text-xl font-semibold text-gray-900 mb-1">
                  {formatDate(repo.pushed_at)}
                </div>
                <div className="text-gray-600 text-sm">Last pushed</div>
              </div>
            </div>
          </section>

          {/* GitHub CTA */}
          <section className="content-section">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
            >
              {GH_ICON}
              View on GitHub{" "}
              <ArrowUpRightIcon size={14} weight="bold" />
            </a>
          </section>

        </div>
      </main>
    </div>
  );
}
