import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSkills } from "@/components/AboutSkills";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ResearchSection } from "@/components/ResearchSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#05070e] relative overflow-hidden">
      {/* Persistent global subtle background ambience */}
      <div className="fixed inset-0 bg-circuit-pattern opacity-40 pointer-events-none z-0" />
      
      {/* Sticky Glassmorphic Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow z-10">
        <Hero />
        <AboutSkills />
        <ExperienceTimeline />
        <ProjectsSection />
        <ResearchSection />
        <ContactSection />
      </main>

      {/* Clean Modern Footer */}
      <Footer />
    </div>
  );
}
