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
  cardGradient: string;
  borderColor: string;
  skills: string[];
  icon: JSX.Element;
};

const tokenPalette = [
  "bg-rose-500 hover:bg-rose-600 text-white",
  "bg-fuchsia-500 hover:bg-fuchsia-600 text-white",
  "bg-sky-500 hover:bg-sky-600 text-white",
  "bg-blue-600 hover:bg-blue-700 text-white",
  "bg-amber-500 hover:bg-amber-600 text-white",
  "bg-emerald-500 hover:bg-emerald-600 text-white",
  "bg-teal-500 hover:bg-teal-600 text-white",
  "bg-violet-500 hover:bg-violet-600 text-white",
  "bg-indigo-600 hover:bg-indigo-700 text-white",
];

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    accent: "text-blue-600",
    iconBg: "bg-blue-100",
    iconBgHover: "group-hover:bg-blue-200/80",
    cardGradient: "bg-gradient-to-br from-white to-blue-50/60",
    borderColor: "border-t-blue-400",
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
    cardGradient: "bg-gradient-to-br from-white to-emerald-50/60",
    borderColor: "border-t-emerald-400",
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
    cardGradient: "bg-gradient-to-br from-white to-indigo-50/60",
    borderColor: "border-t-indigo-400",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "MariaDB", "SQL"],
    icon: <DatabaseIcon size={20} weight="regular" />,
  },
  {
    title: "DevOps & Cloud",
    accent: "text-amber-600",
    iconBg: "bg-amber-100",
    iconBgHover: "group-hover:bg-amber-200/80",
    cardGradient: "bg-gradient-to-br from-white to-amber-50/60",
    borderColor: "border-t-amber-400",
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
    cardGradient: "bg-gradient-to-br from-white to-rose-50/60",
    borderColor: "border-t-rose-400",
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
                Sk<span className="font-serif italic text-violet-700">ills</span>
              </h2>
            </div>
          </div>
        </header>

        <div className="skills-grid mt-12 columns-1 md:columns-2 gap-8 lg:gap-10">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className={`skill-card group relative mb-8 break-inside-avoid overflow-hidden rounded-2xl border border-gray-100 ${category.borderColor} border-t-2 ${category.cardGradient} p-7 shadow-sm hover:shadow-md transition-shadow duration-200`}
            >
              <div className="absolute right-6 top-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                <ArrowUpRightIcon size={20} weight="regular" />
              </div>

              <div className="flex items-center gap-4">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${category.iconBg} ${category.iconBgHover} ${category.accent} transition-colors`}
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
                      className={`rounded-full px-5 py-2.5 text-xl sm:text-2xl leading-tight font-medium transition-colors cursor-default shadow-sm ${tokenClass}`}
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
