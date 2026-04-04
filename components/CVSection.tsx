"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { forwardRef } from "react";

const stats = [
  { value: "5+", label: "Years of experience" },
  { value: "4", label: "Roles across 3 companies" },
  { value: "2", label: "Countries worked in" },
  { value: "1", label: "AWS certification" },
];

const education = [
  {
    institution: "KCA University",
    tagline: "Bachelor of Business Information Technology",
    dates: "2020 — 2024",
    location: "Nairobi, Kenya",
    type: "Degree",
    detail:
      "Four-year undergraduate programme covering software engineering, database systems, business systems analysis, and IT project management.",
  },
  {
    institution: "Amazon Web Services",
    tagline: "AWS Certified AI Practitioner (AIF-C01)",
    dates: "2025",
    location: "Remote",
    type: "Certification",
    detail:
      "Industry-recognised certification validating knowledge of AI/ML concepts, AWS AI services, and responsible AI practices at the practitioner level.",
  },
];

const CVSection = forwardRef<HTMLElement>(function CVSection(_, ref) {
  return (
    <section ref={ref} id="cv" className="bg-gray-50 px-6 py-24 lg:py-32">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <header className="mb-14 experience-header">
          <h2 className="text-4xl sm:text-6xl text-gray-900 font-extralight">
            Cred<span className="font-serif italic">entials</span>
          </h2>
          <div className="mt-6 h-px w-full bg-gray-300" />
        </header>

        {/* Professional summary */}
        <div className="experience-entry">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-extralight text-gray-900 leading-snug max-w-4xl">
            Full-stack engineer with{" "}
            <span className="font-serif italic">5+ years</span> building
            scalable, secure applications across fintech and enterprise — from
            React frontends to Node.js APIs, cloud infrastructure, and AI/ML
            integrations.
          </p>
        </div>

        {/* Stats */}
        <div className="experience-entry mt-14 grid grid-cols-2 sm:grid-cols-4 gap-0 border border-gray-200 divide-x divide-gray-200">
          {stats.map((stat) => (
            <div key={stat.value} className="px-6 py-8">
              <p className="text-4xl sm:text-5xl font-extralight text-gray-900 font-serif italic">
                {stat.value}
              </p>
              <p className="mt-2 text-xs text-gray-500 leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 h-px w-full bg-gray-300" />

        {/* Education & certifications */}
        <div className="mt-16 space-y-16">
          {education.map((entry) => (
            <div key={entry.institution} className="experience-entry">
              <h3 className="text-3xl sm:text-4xl text-gray-900 font-extralight">
                <span className="font-serif italic">{entry.institution}</span>
              </h3>

              <div className="mt-6 grid gap-8 lg:grid-cols-[0.7fr_0.9fr_1.6fr]">
                <div className="space-y-3 text-sm text-gray-600">
                  <p className="text-sm text-gray-500">{entry.tagline}</p>
                  <p className="text-sm font-semibold tracking-wide text-gray-700">
                    {entry.dates}
                  </p>
                </div>

                <dl className="space-y-4">
                  <div>
                    <dt className="text-[10px] text-gray-400">Type</dt>
                    <dd className="text-sm text-gray-700">{entry.type}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] text-gray-400">Location</dt>
                    <dd className="text-sm text-gray-700">{entry.location}</dd>
                  </div>
                </dl>

                <p className="text-base sm:text-lg text-gray-700">
                  {entry.detail}
                </p>
              </div>

              <div className="mt-10 h-px w-full bg-gray-300" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="experience-entry mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <a
            href="mailto:jemimakibandi378@gmail.com"
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-gray-700"
          >
            Get in touch <ArrowUpRightIcon size={14} weight="bold" />
          </a>
          <a
            href="https://github.com/JemmyKibandi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            View GitHub profile <ArrowUpRightIcon size={13} weight="regular" />
          </a>
        </div>

      </div>
    </section>
  );
});

export default CVSection;
