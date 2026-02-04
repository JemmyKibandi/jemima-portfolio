"use client";

import { forwardRef, JSX } from "react";
import {
  CheckCircleIcon,
  CloudIcon,
  DatabaseIcon,
  DesktopIcon,
  ComputerTowerIcon,
  ArrowUpRightIcon
} from "@phosphor-icons/react";

type SkillCategory = {
  title: string;
  accent: string;
  iconBg: string;
  iconBgHover: string;
  accentBorder: string;
  skills: string[];
  icon: JSX.Element;
};

const tokenPalette = [
  "bg-blue-500/75 hover:bg-blue-600/75",
  "bg-sky-500/75 hover:bg-sky-600/75",
  "bg-emerald-500/75 hover:bg-emerald-600/75",
  "bg-teal-500/75 hover:bg-teal-600/75",
  "bg-violet-500/75 hover:bg-violet-600/75",
  "bg-purple-500/75 hover:bg-purple-600/75",
  "bg-yellow-400/80 hover:bg-yellow-500/80",
  "bg-yellow-500/80 hover:bg-yellow-600/80",
  "bg-yellow-600/80 hover:bg-yellow-700/80",
  "bg-pink-500/75 hover:bg-pink-600/75",
  "bg-rose-500/75 hover:bg-rose-600/75",
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
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
    icon: <DesktopIcon size={20} weight="regular" />,
  },
  {
    title: "Backend",
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
    icon: <ComputerTowerIcon size={20} weight="regular" />,
  },
  {
    title: "Databases",
    accent: "text-indigo-600",
    iconBg: "bg-indigo-100",
    iconBgHover: "group-hover:bg-indigo-200/80",
    accentBorder: "border-t-indigo-200",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    icon: <DatabaseIcon size={20} weight="regular" />,
  },
  {
    title: "Infrastructure & DevOps",
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
    icon: <CloudIcon size={20} weight="regular" />,
  },
  {
    title: "Testing & Tooling",
    accent: "text-rose-600",
    iconBg: "bg-rose-100",
    iconBgHover: "group-hover:bg-rose-200/80",
    accentBorder: "border-t-rose-200",
    skills: ["Pytest", "Jest", "Cypress", "Git", "GitHub"],
    icon: <CheckCircleIcon size={20} weight="regular" />,
  },
];

const hashSkill = (value: string) => {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
};

const SkillsSection = forwardRef<HTMLElement>(function SkillsSection(_, ref) {
  return (
    <section ref={ref} id="skills" className="px-6 py-24 lg:py-32 bg-white">
      <div className="max-w-5xl mx-auto">
        <header className="relative max-w-3xl">
          <div className="flex items-start gap-4">
            <div>
              <h2 className="mt-3 text-4xl sm:text-5xl font-semibold leading-[1.05] tracking-tight text-gray-900">
                Skills
              </h2>
            </div>
          </div>
        </header>

        <div className="skills-grid mt-12 columns-1 md:columns-2 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`skill-card group relative mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-gray-200 ${category.accentBorder} border-t-2 bg-white p-7 hover:border-gray-300`}
            >
              <div className="absolute right-6 top-6 text-gray-400/70">
                <ArrowUpRightIcon size={20} weight="regular" />
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${category.iconBg} ${category.iconBgHover} ${category.accent}`}
                >
                  {category.icon}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => {
                  const tokenClass =
                    tokenPalette[hashSkill(skill) % tokenPalette.length];

                  return (
                    <li
                      key={skill}
                      className={`rounded-full px-5 py-2.5 text-xl sm:text-2xl leading-tight text-white transition-colors ${tokenClass}`}
                    >
                      {skill}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default SkillsSection;

