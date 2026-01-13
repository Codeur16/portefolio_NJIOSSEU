import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Njiosseu Charles Loic - Full-Stack Developer & AI Integrator',
  description: 'Professional CV of Njiosseu Charles Loic - Full-Stack Developer, UI/UX Designer, AI Integrator, and Junior AI Researcher specializing in React, Next.js, Node.js, and AI automation.',
  keywords: 'Full-Stack Developer, AI Integrator, UI/UX Designer, React, Next.js, Node.js, n8n, AI Researcher',
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