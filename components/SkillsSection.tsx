"use client";

import { forwardRef } from "react";

const skillCategories = [
  {
    title: "Frontend",
    description:
      "Modern UI engineering and state management for production apps.",
    accent: "text-blue-600",
    iconBg: "bg-blue-100",
    iconBgHover: "group-hover:bg-blue-200/80",
    accentBorder: "border-t-blue-200",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Zustand",
      "Redux Toolkit",
      "Material UI",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M4 5h16v10H4z" />
        <path d="M8 9l-2 2 2 2" />
        <path d="M16 9l2 2-2 2" />
      </svg>
    ),
  },
  {
    title: "Backend",
    description: "Resilient APIs and business logic built for scale and speed.",
    accent: "text-emerald-600",
    iconBg: "bg-emerald-100",
    iconBgHover: "group-hover:bg-emerald-200/80",
    accentBorder: "border-t-emerald-200",
    skills: [
      "Node.js",
      "Python",
      "FastAPI",
      "Pydantic",
      "REST APIs",
      "GraphQL",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M5 7h14v4H5z" />
        <path d="M5 13h14v4H5z" />
        <path d="M8 9h.01" />
        <path d="M8 15h.01" />
      </svg>
    ),
  },
  {
    title: "Databases",
    description: "Structured and unstructured data systems with fast access.",
    accent: "text-indigo-600",
    iconBg: "bg-indigo-100",
    iconBgHover: "group-hover:bg-indigo-200/80",
    accentBorder: "border-t-indigo-200",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <ellipse cx="12" cy="6" rx="7" ry="3" />
        <path d="M5 6v8c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
      </svg>
    ),
  },
  {
    title: "Infrastructure & DevOps",
    description:
      "Cloud infrastructure, deployment, and reliability foundations.",
    accent: "text-amber-600",
    iconBg: "bg-amber-100",
    iconBgHover: "group-hover:bg-amber-200/80",
    accentBorder: "border-t-amber-200",
    skills: [
      "AWS",
      "EC2",
      "S3",
      "RDS",
      "CloudFront",
      "ECS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M7 17h9a4 4 0 0 0 0-8 5 5 0 0 0-9.5 1.5A3.5 3.5 0 0 0 7 17z" />
      </svg>
    ),
  },
  {
    title: "Testing & Tooling",
    description: "Quality assurance and developer workflows that stay fast.",
    accent: "text-rose-600",
    iconBg: "bg-rose-100",
    iconBgHover: "group-hover:bg-rose-200/80",
    accentBorder: "border-t-rose-200",
    skills: ["Pytest", "Jest", "Cypress", "Git", "GitHub"],
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      >
        <path d="M9 12l2 2 4-4" />
        <circle cx="12" cy="12" r="8" />
      </svg>
    ),
  },
];

const SkillsSection = forwardRef<HTMLElement>(function SkillsSection(_, ref) {
  return (
    <section ref={ref} id="skills" className="px-6 py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="relative max-w-3xl">
          <div className="flex items-start gap-4">
            <div>
              <h2 className="mt-3 text-4xl sm:text-5xl leading-[1.05] tracking-tight text-gray-900">
                Skills
              </h2>
            </div>
          </div>
        </header>

        <div className="skills-grid mt-12 grid gap-8 lg:gap-10 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`skill-card group relative overflow-hidden rounded-2xl border border-gray-200 ${category.accentBorder} border-t-2 bg-white p-7 hover:border-gray-300`}
            >
              <div className="absolute right-6 top-6 text-gray-400/70">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M7 17L17 7" />
                  <path d="M9 7h8v8" />
                </svg>
              </div>

              <div className="flex items-start gap-4">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${category.iconBg} ${category.iconBgHover} ${category.accent}`}
                >
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>

              <ul className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-gray-700"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;

