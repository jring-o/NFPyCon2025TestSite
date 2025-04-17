
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ScheduleSection from "@/components/ScheduleSection";
import CTASection from "@/components/CTASection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "NumFOCUS at PyCon 2025";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <div id="about">
          <AboutSection />
        </div>
        <div id="projects">
          <ProjectsSection />
        </div>
        <div id="schedule">
          <ScheduleSection />
        </div>
        <div id="sponsors">
          <CTASection />
        </div>
      </main>
      <div id="contact">
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
