import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Njiosseu Charles Loic - Portfolio | Full-Stack Developer & AI Integrator',
  description: 'Portfolio professionnel de Njiosseu Charles Loic - Développeur Full-Stack, Designer UI/UX, Intégrateur IA et Chercheur IA Junior. Découvrez mes projets et compétences en React, Next.js, Node.js et automatisation IA.',
  keywords: 'Portfolio, Full-Stack Developer, AI Integrator, UI/UX Designer, React, Next.js, Node.js, n8n, AI Researcher, Cameroun, Yaoundé',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}