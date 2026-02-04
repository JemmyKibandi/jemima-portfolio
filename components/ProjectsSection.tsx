import { ArrowUpRightIcon } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

const projects = [
  {
    slug: "fintech-platform",
    title: "PayCore Enterprise",
    description: "Microservices-based financial platform for secure global payments.",
    image: "/project-fintech.jpg",
  },
  {
    slug: "dataflow-analytics",
    title: "DataFlow Analytics",
    description: "Real-time data intelligence for high-volume operational teams.",
    image: "/project-dataflow.jpg",
  },
  {
    slug: "streamhub-platform",
    title: "StreamHub Platform",
    description: "Scalable streaming infrastructure built for millions of viewers.",
    image: "/project-streamhub.jpg",
  },
  {
    slug: "ai-analytics",
    title: "MiraiCore Insights",
    description: "AI-driven forecasting and reporting for enterprise decision makers.",
    image: "/project-ai.jpg",
  },
];

const ProjectsSection = forwardRef<HTMLElement>(function ProjectsSection(_, ref) {
  return (
    <section ref={ref} id="projects" className="px-6 py-24 lg:py-32 bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="max-w-3xl">
          <h2 className="mt-3 text-4xl sm:text-5xl tracking-tight text-gray-900">
            Projects and case studies.
          </h2>
        </header>

        <div className="projects-grid mt-12 grid gap-10 md:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="project-card group relative block"
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden border border-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2">
                  <div className="flex items-center justify-between gap-4  bg-white px-4 py-3 backdrop-blur-md transition-colors group-hover:bg-white/95">
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
    </section>
  );
});

export default ProjectsSection;
