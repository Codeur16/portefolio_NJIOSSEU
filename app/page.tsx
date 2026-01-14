// import Navigation from '@/components/Navigation';
// import HeroPortfolio from '@/components/HeroPortfolio';
// import ServicesSection from '@/components/ServicesSection';
// import ProjectsGallery from '@/components/ProjectsGallery';
// import Skills from '@/components/Skills';
// import Experience from '@/components/Experience';
// import Publications from '@/components/Publications';
// import Contact from '@/components/Contact';

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-slate-950">
//       <Navigation />
//       <HeroPortfolio />
//       <ServicesSection />
//       <ProjectsGallery />
//       <Skills />
//       <Experience />
//       <Publications />
//       <Contact />
//     </main>
//   );
// }


// /app/page.tsx
'use client';

import { useRef } from 'react';
import Navigation from '@/components/Navigation';
import HeroPortfolio from '@/components/HeroPortfolio';
import ServicesSection from '@/components/ServicesSection';
import ProjectsGallery from '@/components/ProjectsGallery';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';
import Education from '@/components/Education';
import BackgroundEffect from '@/components/BackgroundEffect';
import ScrollProgressIndicator from '@/components/ScrollProgressIndicator';
import SectionWrapper from '@/components/SectionWrapper';
import ParallaxBackground from '@/components/ParallaxBackground';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative min-h-screen bg-transparent overflow-hidden  " ref={containerRef}>
      {/* Arrière-plan global */}
      <BackgroundEffect />
      
      {/* Indicateur de progression */}
      <ScrollProgressIndicator />
      
      {/* Navigation */}
      
        <Navigation />
   
      
      
      {/* Hero Section */}
      <div className="relative z-10">
        <HeroPortfolio />
      </div>

      {/* Contenu avec effets de parallaxe */}
      <div className="relative z-10">
        {/* Services avec effet parallaxe */}
        <ParallaxBackground speed={0.2}>
          <SectionWrapper id="services" delay={0.1}>
            <ServicesSection />
          </SectionWrapper>
        </ParallaxBackground>

        {/* Projets avec effet parallaxe plus fort */}
        <ParallaxBackground speed={0.3}>
          <SectionWrapper id="projects" delay={0.2}>
            <ProjectsGallery />
          </SectionWrapper>
        </ParallaxBackground>

        {/* Compétences */}
        <SectionWrapper id="skills" delay={0.3}>
          <Skills />
        </SectionWrapper>

        {/* Expérience avec effet parallaxe inversé */}
        <ParallaxBackground speed={-0.1}>
          <SectionWrapper id="experience" delay={0.4}>
            <Experience />
          </SectionWrapper>
        </ParallaxBackground>

        {/* Formation */}
        <ParallaxBackground speed={0.15}>
          <SectionWrapper id="education" delay={0.45}>
            <Education />
          </SectionWrapper>
        </ParallaxBackground>

        {/* Publications */}
        <SectionWrapper id="publications" delay={0.5}>
          <Publications />
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper id="contact" delay={0.6}>
          <Contact />
        </SectionWrapper>
      </div>

      {/* Étoiles flottantes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Effets CSS globaux */}
      <style jsx global>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Masquer la scrollbar mais permettre le scroll */
        body {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        
        body::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  );
}