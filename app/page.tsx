import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CVSection from "@/components/CVSection";
import PageAnimations from "@/components/PageAnimations";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <PageAnimations />

      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-rose-100 flex items-center justify-center px-6 overflow-hidden">
        {/* Ambient gradient orbs */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 -left-40 h-[30rem] w-[30rem] rounded-full bg-violet-400/20 blur-[130px]" />
          <div className="absolute bottom-1/4 -right-40 h-[35rem] w-[35rem] rounded-full bg-rose-400/20 blur-[150px]" />
          <div className="absolute top-2/3 left-1/3 h-64 w-64 rounded-full bg-fuchsia-300/15 blur-[100px]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-start space-y-8">
          <div className="space-y-4">
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-extralight tracking-tight text-gray-900">
              Jemima Kibandi{" "}
              <span className="font-serif italic text-violet-600">—</span>
            </h1>
            <p className="hero-description text-4xl sm:text-5xl lg:text-6xl font-extralight text-gray-800">
              Designing and delivering{" "}
              <span className="font-serif italic text-violet-700">scalable, secure,</span>{" "}
              and user-friendly applications from frontend to cloud.
            </p>
          </div>
          <div className="text-violet-500 tracking-widest text-sm font-medium uppercase">
            Mauritius
          </div>
        </div>
      </section>

      <AboutSection />

      <SkillsSection />

      <CVSection />

      <ProjectsSection />
    </div>
  );
}
