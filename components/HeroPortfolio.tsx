'use client';

import { motion, useAnimation } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Cpu, CircuitBoard, Zap, Download } from 'lucide-react';
import { personalInfo, stats } from '@/data/portfolio-data';
import { useEffect, useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const HeroPortfolio = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      controls.start({
        x: (x - 0.5) * 30,
        y: (y - 0.5) * 30,
        transition: { duration: 0.3 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  return (
    <SectionWrapper id="heroPortfolio" delay={0.3}>
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 lg:pt-32">
        {/* Background futuriste avec particules */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/40 to-gray-950">
          {/* Grille holographique */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"></div>
          
          {/* Lignes de données animées */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: '-100px',
                  width: '200px',
                  opacity: 0.1 + Math.random() * 0.2,
                }}
                animate={{
                  x: ['0vw', '100vw'],
                }}
                transition={{
                  duration: 10 + Math.random() * 20,
                  repeat: Infinity,
                  ease: 'linear',
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>
        </div>

        {/* Orbes énergétiques */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-[80px] lg:blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] lg:w-[600px] lg:h-[600px] bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-[90px] lg:blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <div ref={containerRef} className="relative z-10 container mx-auto px-4 md:px-6">
          {/* Grille principale réorganisée pour mobile/tablette */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Contenu gauche - Toujours en premier sur mobile */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative order-2 lg:order-1"
            >
              {/* Badge holographique */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-flex items-center gap-3 mb-6 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm border border-purple-500/30"
              >
                <span className="text-purple-400 text-xs md:text-sm font-mono uppercase tracking-wider">
                  Welcome to my portfolio
                </span>
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-ping"></div>
              </motion.div>

              {/* Titre avec effet néon */}
              <div className="relative mb-6">
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-none mb-4 lg:mb-6"
                >
                  <span className="bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    {personalInfo.name}
                  </span>
                  <motion.span
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-cyan-400 ml-2"
                  >
                    _
                  </motion.span>
                </motion.h1>

                {/* Sous-titre */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="relative"
                >
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {personalInfo.title}
                  </h2>
                </motion.div>
              </div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 1 }}
                className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-10 leading-relaxed max-w-2xl bg-gradient-to-r from-white/5 to-transparent p-4 md:p-6 rounded-2xl border-l-4 border-cyan-500/50"
              >
                {personalInfo.tagline}
              </motion.p>

              {/* Sous-titre secondaire */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-base text-gray-400 mb-8 max-w-2xl"
              >
                {personalInfo.subtitle || 'Full Stack Developer & AI Enthusiast'}
              </motion.p>

              {/* Boutons CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12"
              >
                <a
                  href="#contact"
                  className="group relative px-6 py-4 sm:px-10 sm:py-5 rounded-xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 group-hover:from-purple-500 group-hover:to-blue-500 transition-all duration-300"></div>
                  <div className="absolute inset-0.5 bg-gray-950 rounded-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 text-white font-bold text-base sm:text-lg">
                    <span>Me Contacter</span>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </a>

                {/* <a
                  href="#projects"
                  className="group relative px-6 py-4 sm:px-10 sm:py-5 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 text-cyan-300 font-bold text-base sm:text-lg">
                    <span>Voir mes projets</span>
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                </a> */}
              <a
                  href="/Njiosseu-CV.pdf"
                  download="Njiosseu-Charles-Loic-CV.pdf"
                  className="group relative px-6 py-4 sm:px-10 sm:py-5 rounded-xl border-2 border-cyan-500/30 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors duration-300"></div>
                  <div className="relative flex items-center justify-center gap-3 text-cyan-300 font-bold text-base sm:text-lg">
                    <span>Download CV</span>
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-xs text-cyan-400/70">PDF</span>
                  </div>
                </a>
              </motion.div>

              {/* Liens sociaux */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="flex gap-4"
              >
                {[
                  { icon: Github, href: personalInfo.github, color: 'from-gray-800 to-gray-900', hover: 'hover:from-gray-700 hover:to-gray-800' },
                  { icon: Linkedin, href: personalInfo.linkedin, color: 'from-blue-700 to-blue-800', hover: 'hover:from-blue-600 hover:to-blue-700' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, color: 'from-purple-700 to-purple-800', hover: 'hover:from-purple-600 hover:to-purple-700' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 sm:p-4 rounded-xl bg-gradient-to-br ${social.color} ${social.hover} transition-all duration-300 border border-gray-700/50 hover:border-white/30`}
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 rounded-xl"></div>
                    <social.icon className="relative w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    <div className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent group-hover:w-12 sm:group-hover:w-16 transition-all duration-300"></div>
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Image de profil - Visible sur toutes les tailles */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative order-1 lg:order-2 mb-12 lg:mb-0"
            >
              {/* Version mobile/tablette simplifiée */}
              <div className="lg:hidden relative w-full max-w-md mx-auto">
                <div className="relative rounded-2xl overflow-hidden p-4 bg-gradient-to-br from-gray-900/40 to-gray-950/40 backdrop-blur-lg border border-gray-700/20 shadow-xl">
                  {/* Effet de bordure */}
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-sm"></div>
                  
                  {/* Conteneur d'image */}
                  <div className="relative z-20 h-[350px] sm:h-[400px] rounded-xl overflow-hidden mb-6">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm">
                      {/* Image responsive */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <div className="relative w-full h-full max-w-[300px] max-h-[350px] mx-auto">
                          <img
                            src="/images/Loico5.png"
                            alt="Profile"
                            className="absolute inset-0 w-full h-full object-cover rounded-lg"
                            style={{
                              filter: 'brightness(1.05) contrast(1.05)',
                            }}
                          />
                          
                          <div className="absolute inset-0 rounded-lg shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"></div>
                          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
                        </div>
                      </div>
                      
                      {/* Informations */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/90 to-transparent p-4 pt-12">
                        <div className="flex flex-col items-center">
                          <h3 className="text-lg font-bold text-white text-center">
                            {personalInfo.title.split('|')[0]}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1 text-center">
                            {personalInfo.subtitle}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-green-300 text-xs font-medium tracking-wide">DISPONIBLE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats responsive */}
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="text-center p-3 rounded-lg bg-gray-800/20 border border-gray-700/10"
                      >
                        <h3 className="text-xl font-bold text-white mb-1">
                          {stat.value}
                        </h3>
                        <p className="text-gray-400 text-xs font-medium">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Version desktop (cachée sur mobile) */}
              <div className="hidden lg:block relative w-full max-w-lg mx-auto">
                <div className="relative rounded-3xl overflow-hidden p-6 bg-gradient-to-br from-gray-900/30 to-gray-950/30 backdrop-blur-lg border border-gray-700/20 shadow-2xl">
                  <div className="absolute -inset-0.5 rounded-[1.6rem] bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-blue-500/10 blur-sm"></div>
                  
                  <div className="relative z-20 h-[480px] rounded-2xl overflow-hidden mb-6">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-gray-800/10 to-gray-900/10 backdrop-blur-sm">
                      <motion.div
                        animate={controls}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div className="relative w-[85%] h-[90%] flex items-center justify-center">
                          <div className="relative w-full h-full">
                            <img
                              src="/images/Loico5.png"
                              alt="Profile"
                              className="absolute inset-0 w-full h-full object-cover rounded-xl"
                              style={{
                                filter: 'brightness(1.05) contrast(1.05)',
                              }}
                            />
                            <div className="absolute inset-0 rounded-xl shadow-[inset_0_2px_8px_rgba(0,0,0,0.3)]"></div>
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                          </div>
                          <div className="absolute -inset-2 rounded-2xl border border-cyan-500/10 pointer-events-none"></div>
                        </div>
                      </motion.div>
                      
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-950/95 to-transparent p-4 pt-10">
                        <div className="flex flex-col items-center">
                          <h3 className="text-xl font-bold text-white text-center">
                            {personalInfo.title.split('|')[0]}
                          </h3>
                          <p className="text-gray-300 text-sm mt-1 text-center">
                            {personalInfo.subtitle}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                            <span className="text-green-300 text-xs font-medium tracking-wide">DISPONIBLE</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((stat, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="text-center p-3 rounded-lg bg-gray-800/20 border border-gray-700/10 hover:border-cyan-500/20 transition-all duration-200"
                      >
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {stat.value}
                        </h3>
                        <p className="text-gray-400 text-xs font-medium">
                          {stat.label}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Indicateur de défilement (seulement sur desktop) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
          >
            <div className="flex flex-col items-center gap-4">
              <span className="text-gray-500 text-sm font-mono tracking-widest">SCROLL</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-6 h-10 rounded-full border-2 border-cyan-500/50 p-1"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mx-auto"></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </SectionWrapper>
  );
};

export default HeroPortfolio;