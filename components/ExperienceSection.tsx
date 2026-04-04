"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { forwardRef } from "react";

const experiences = [
  {
    company: "Swan Mauritius",
    tagline: "Financial services through Cybernaptics Mauritius",
    dates: "Jul 2024 — Present",
    position: "Lead Software Engineer",
    location: "Port Louis, Mauritius",
    industry: "Financial Technology",
    website: "https://swan.mu",
    description: [
      "Develop and maintain secure, scalable Node.js backend services and REST APIs for financial systems, working with MySQL and MariaDB with optimised SQL queries.",
      "Contribute to front-end integration using React, HTML, and CSS, while managing CI/CD pipelines with GitHub Actions and Docker deployments across multilingual cross-functional teams.",
    ],
  },
  {
    company: "Optiven Limited",
    tagline: "Real estate and investment solutions",
    dates: "May 2023 — Jul 2024",
    position: "Software Engineer",
    location: "Nairobi, Kenya",
    industry: "Real Estate Tech",
    website: "https://optiven.co.ke",
    description: [
      "Designed and maintained responsive internal systems with React, Node.js, and PostgreSQL, enabling seamless real-time data synchronisation across departments.",
      "Implemented real-time API integrations and conducted performance optimisations and code refactoring, significantly reducing system bottlenecks and improving long-term scalability.",
    ],
  },
  {
    company: "Emerald Designers",
    tagline: "Digital design and web development agency",
    dates: "Sep 2021 — Sep 2023",
    position: "Software Engineer",
    location: "Remote, Kenya",
    industry: "Digital Agency",
    website: "https://emeralddesigners.com",
    description: [
      "Built and deployed front-end systems with React, JavaScript, and CSS, delivering engaging and responsive user interfaces for a range of client projects.",
      "Integrated multimedia features to boost user engagement, and deployed and maintained web solutions using WordPress and CPanel.",
    ],
  },
  {
    company: "Wikimedia",
    tagline: "Free knowledge for the world",
    dates: "Jun 2021 — Present",
    position: "Open Source Contributor",
    location: "Remote",
    industry: "Open Source",
    website: "https://wikimedia.org",
    description: [
      "Contributed to the MediaWiki platform, enhancing the PHP codebase that powers Wikipedia and serves millions of users worldwide.",
      "Collaborated with an international developer community, strengthening open-source best practices and delivering code improvements adopted at global scale.",
    ],
  },
];

const ExperienceSection = forwardRef<HTMLElement>(
  function ExperienceSection(_, ref) {
    return (
      <section
        ref={ref}
        id="experience"
        className="bg-gray-50 px-6 py-24 lg:py-32"
      >
        <div className="max-w-6xl mx-auto">
          <header className="mb-14 experience-header">
            <h2 className="text-4xl sm:text-6xl text-gray-900 font-extralight">
              Exper<span className="font-serif italic">ience</span>
            </h2>
            <div className="mt-6 h-px w-full bg-gray-300" />
          </header>

          <div className="space-y-16">
            {experiences.map((experience, index) => (
              <div
                key={experience.company}
                className="experience-entry pt-10 first:pt-0"
              >
                {index !== 0 && (
                  <div className="mb-10 h-px w-full bg-gray-300" />
                )}
                <h3 className="text-3xl sm:text-4xl text-gray-900 font-extralight">
                  <span className="font-serif italic">{experience.company}</span>
                </h3>

                <div className="mt-6 grid gap-8 lg:grid-cols-[0.7fr_0.9fr_1.6fr]">
                  <div className="experience-meta space-y-3 text-sm text-gray-600">
                    <p className="text-sm text-gray-500">
                      {experience.tagline}
                    </p>
                    <p className="text-sm font-semibold tracking-wide text-gray-700">
                      {experience.dates}
                    </p>
                  </div>

                  <dl className="space-y-4">
                    <div>
                      <dt className="text-[10px] text-gray-400">Position</dt>
                      <dd className="text-sm text-gray-700">
                        {experience.position}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-gray-400">Location</dt>
                      <dd className="text-sm text-gray-700">
                        {experience.location}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-gray-400">Industry</dt>
                      <dd className="text-sm text-gray-700">
                        {experience.industry}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[10px] text-gray-400">Website</dt>
                      <dd>
                        <a
                          href={experience.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900"
                        >
                          {experience.website
                            .replace("https://", "")
                            .replace("www.", "")}
                          <ArrowUpRightIcon size={16} weight="regular" />
                        </a>
                      </dd>
                    </div>
                  </dl>

                  <div className="experience-description space-y-5 text-base sm:text-lg text-gray-700">
                    {experience.description.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },
);

export default ExperienceSection;
