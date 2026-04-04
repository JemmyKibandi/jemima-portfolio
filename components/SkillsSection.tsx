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
  "bg-rose-100 hover:bg-rose-200 text-rose-900",
  "bg-pink-100 hover:bg-pink-200 text-pink-900",
  "bg-sky-100 hover:bg-sky-200 text-sky-900",
  "bg-blue-100 hover:bg-blue-200 text-blue-900",
  "bg-yellow-100 hover:bg-yellow-200 text-yellow-900",
  "bg-emerald-100 hover:bg-emerald-200 text-emerald-900",
  "bg-green-100 hover:bg-green-200 text-green-900",
  "bg-violet-100 hover:bg-violet-200 text-violet-900",
  "bg-purple-100 hover:bg-purple-200 text-purple-900",
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
      "TypeScript",
      "JavaScript (ES6+)",
      "Redux",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "Shadcn",
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
      "Java",
      "Python",
      "PHP (Laravel)",
      "Next.js",
      "REST APIs",
      "API Integration",
      "SnapLogic",
    ],
    icon: <ComputerTowerIcon size={20} weight="regular" />,
  },
  {
    title: "Databases",
    accent: "text-indigo-600",
    iconBg: "bg-indigo-100",
    iconBgHover: "group-hover:bg-indigo-200/80",
    accentBorder: "border-t-indigo-200",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "SQL"],
    icon: <DatabaseIcon size={20} weight="regular" />,
  },
  {
    title: "DevOps & Cloud",
    accent: "text-amber-600",
    iconBg: "bg-amber-100",
    iconBgHover: "group-hover:bg-amber-200/80",
    accentBorder: "border-t-amber-200",
    skills: [
      "AWS",
      "Azure",
      "Azure DevOps",
      "Docker",
      "Kubernetes",
      "DigitalOcean",
      "GitHub Actions",
      "CI/CD",
    ],
    icon: <CloudIcon size={20} weight="regular" />,
  },
  {
    title: "AI / Data & Tools",
    accent: "text-rose-600",
    iconBg: "bg-rose-100",
    iconBgHover: "group-hover:bg-rose-200/80",
    accentBorder: "border-t-rose-200",
    skills: [
      "Python (AI/ML)",
      "AI/ML Integration",
      "BPM Development",
      "Git",
      "GitHub",
      "GitLab",
      "Agile",
    ],
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
              <h2 className="mt-3 text-4xl sm:text-5xl font-extralight leading-[1.05] tracking-tight text-gray-900">
                Sk<span className="font-serif italic">ills</span>
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
                      className={`rounded-full px-5 py-2.5 text-xl sm:text-2xl leading-tight transition-colors ${tokenClass}`}
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
