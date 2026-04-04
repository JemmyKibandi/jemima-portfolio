import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import PageAnimations from "@/components/PageAnimations";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageAnimations />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-white flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-start space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight">
              Jemima Kibandi{" "}
              <span className="font-serif italic">—</span>
            </h1>
            <p className="hero-description text-4xl sm:text-5xl lg:text-6xl font-extralight">
              Designing and delivering{" "}
              <span className="font-serif italic">scalable, secure,</span>{" "}
              and user-friendly applications from frontend to cloud.
            </p>
          </div>
          <div>Mauritius</div>
        </div>
      </section>

      <AboutSection />

      <SkillsSection />

      <ExperienceSection />

      <ProjectsSection />
    </div>
  );
}
