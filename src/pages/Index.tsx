import Navigation from "@/components/Navigation";
import HeroEnhanced from "@/components/HeroEnhanced";
import About from "@/components/About";
import ProjectsEnhanced from "@/components/ProjectsEnhanced";
import SkillsEnhanced from "@/components/SkillsEnhanced";
import TimelineEnhanced from "@/components/TimelineEnhanced";
import ContactEnhanced from "@/components/ContactEnhanced";
import FooterEnhanced from "@/components/FooterEnhanced";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <Navigation />
      <HeroEnhanced />
      <About />
      <ProjectsEnhanced />
      <SkillsEnhanced />
      <TimelineEnhanced />
      <ContactEnhanced />
      <FooterEnhanced />
    </div>
  );
};

export default Index;
