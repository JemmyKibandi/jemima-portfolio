import { ArrowUpRightIcon } from "@phosphor-icons/react";
import { forwardRef } from "react";

const experiences = [
  {
    company: "MiraiCore JP",
    tagline: "Enterprise AI systems for regulated industries",
    dates: "2025 — Present",
    position: "Full Stack Engineer",
    location: "Remote, Japan",
    industry: "AI & Enterprise Software",
    website: "https://miraicore.jp",
    description: [
      "Lead full-stack delivery for AI-driven platforms, owning architecture decisions and implementation across product, data, and infrastructure layers.",
      "Partner closely with product and design to ship secure, compliant experiences for enterprise customers in regulated markets.",
    ],
  },
  {
    company: "UrbanInfluence",
    tagline: "Growth-focused digital platforms for modern brands",
    dates: "2024 — 2025",
    position: "Full Stack Engineer",
    location: "Remote, USA",
    industry: "Digital Products",
    website: "https://urbaninfluence.com",
    description: [
      "Built production-grade web applications and performance-critical APIs that supported high-traffic marketing and commerce campaigns.",
      "Improved delivery velocity by tightening CI workflows, raising test coverage, and introducing reusable frontend patterns.",
    ],
  },
  {
    company: "Scaleflex",
    tagline: "Media management and digital asset platforms",
    dates: "2021 — 2024",
    position: "Full Stack Engineer",
    location: "Remote, USA",
    industry: "Cloud Media",
    website: "https://www.scaleflex.com",
    description: [
      "Owned end-to-end feature delivery for asset management tooling, with a focus on reliability, performance, and scalable backend services.",
      "Collaborated across teams to evolve platform architecture and improve developer experience for internal product squads.",
    ],
  },
  {
    company: "White Prompt",
    tagline: "Boutique product studio for emerging startups",
    dates: "2019 — 2021",
    position: "Full Stack Engineer",
    location: "On-site, Brazil",
    industry: "Product Studio",
    website: "https://whiteprompt.com",
    description: [
      "Delivered full-stack MVPs and growth-stage features for early-stage founders, balancing speed with long-term maintainability.",
      "Shipped responsive interfaces and API integrations across multiple verticals, from fintech to marketplaces.",
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
            <h2 className="text-4xl sm:text-6xl text-gray-900">
              Experience
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
                <h3 className="text-3xl sm:text-4xl text-gray-900">
                  {experience.company}
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
