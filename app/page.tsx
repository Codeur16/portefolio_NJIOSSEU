import Navigation from '@/components/Navigation';
import HeroPortfolio from '@/components/HeroPortfolio';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Navigation />
      <HeroPortfolio />
      <ServicesSection />
      <ProjectsGallery />
      <Skills />
      <Experience />
      <Publications />
      <Contact />
    </main>
  );
}
