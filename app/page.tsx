import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Publications from '@/components/Publications';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Publications />
      <Contact />
    </main>
  );
}