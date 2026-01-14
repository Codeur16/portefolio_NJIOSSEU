'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Mail } from 'lucide-react';
import Link from 'next/link';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Effet de scroll pour changer le style de la navbar
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

  // Animation de l'opacité et du blur au scroll
  const opacity = useTransform(scrollY, [0, 100], [0.9, 1]);
  const blur = useTransform(scrollY, [0, 100], [8, 16]);

  return (
    <>
      <motion.nav
        style={{ 
          backdropFilter: `blur(${blur}px)`,
          opacity
        }}
        className="fixed top-4 left-0 right-0 z-50 mx-auto w-[95%] max-w-6xl rounded-2xl"
      >
        {/* Effet de bordure néon */}
        <div className="relative">
          {/* Fond avec effet glassmorphism amélioré */}
          <div className={`relative rounded-2xl overflow-hidden ${
            scrolled 
              ? 'bg-gradient-to-r from-gray-900/70 via-gray-950/80 to-gray-900/70' 
              : 'bg-gradient-to-r from-gray-900/50 via-gray-950/60 to-gray-900/50'
          } backdrop-blur-xl border border-white/10`}>
            
            {/* Effet de lumière animée sur la bordure */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/5 via-cyan-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Ligne de scan animée */}
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
              animate={{
                x: ['-100%', '100%']
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
            
            <div className="container mx-auto px-6">
              <div className="flex items-center justify-between h-20">
                {/* Logo avec effet néon */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <Link href="#home" className="flex items-center gap-2">
                    {/* Élément décoratif */}
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                      <div className="relative px-3 py-1.5 bg-gray-900/80 rounded-lg border border-gray-700/50">
                        <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                          NCL
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onMouseEnter={() => setHoveredItem(item.href)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="relative"
                    >
                      {/* Effet de fond au survol */}
                      {hoveredItem === item.href && (
                        <motion.div
                          layoutId="nav-hover-bg"
                          className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-xl"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Point indicateur actif */}
                      <motion.div
                        className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${
                          hoveredItem === item.href ? 'bg-cyan-400' : 'bg-gray-600'
                        }`}
                        animate={{
                          scale: hoveredItem === item.href ? [1, 1.5, 1] : 1
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      <Link
                        href={item.href}
                        className="relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium group"
                      >
                        <span className={`transition-all duration-300 ${
                          hoveredItem === item.href 
                            ? 'text-white font-semibold' 
                            : 'text-gray-300'
                        }`}>
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Bouton Contact avec effet spécial */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ml-2"
                  >
                    <a
                      href="#contact"
                      className="relative px-6 py-2.5 rounded-xl overflow-hidden group"
                    >
                      {/* Fond animé */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute inset-0.5 bg-gray-900 rounded-xl"></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500"></div>
                      
                      {/* Contenu */}
                      <div className="relative flex items-center gap-2">
                        <Mail className="w-4 h-4 text-white" />
                        <span className="text-white font-semibold text-sm">
                          Contact Me
                        </span>
                      </div>
                      
                      {/* Effet de particules au survol */}
                      <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-white rounded-full"
                            initial={{ y: '100%', x: `${20 + i * 30}%` }}
                            animate={{
                              y: ['100%', '-100%'],
                              opacity: [0, 1, 0]
                            }}
                            transition={{
                              duration: 1,
                              delay: i * 0.2,
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          />
                        ))}
                      </div>
                    </a>
                  </motion.div>
                </div>

                {/* Mobile Menu Button */}
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  whileTap={{ scale: 0.9 }}
                  className="md:hidden relative p-3 rounded-xl bg-gray-800/30 border border-gray-700/50 group"
                >
                  {/* Effet de bordure */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon animé */}
                  <div className="relative">
                    {isOpen ? (
                      <X className="w-5 h-5 text-cyan-400" />
                    ) : (
                      <Menu className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-28 md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/95 via-gray-950/90 to-gray-950 backdrop-blur-xl">
              {/* Effet de scan mobile */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
                animate={{
                  y: ['0%', '100vh']
                }}
                transition={{
                  duration: 2,
                  ease: 'linear'
                }}
              />
            </div>
            
            {/* Menu mobile */}
            <div className="relative z-10 container mx-auto px-6">
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="bg-gradient-to-b from-gray-900/50 to-gray-950/50 backdrop-blur-2xl rounded-2xl border border-white/10 p-6"
              >
                <div className="grid gap-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="relative group"
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 p-4 rounded-xl bg-gray-800/20 hover:bg-gray-800/40 border border-gray-700/30 hover:border-cyan-500/30 transition-all duration-300"
                      >
                        {/* Texte */}
                        <span className="text-gray-200 font-medium group-hover:text-white transition-colors duration-300">
                          {item.label}
                        </span>
                        
                        {/* Indicateur */}
                        <div className="ml-auto">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Bouton Contact mobile */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <a
                      href="#contact"
                      onClick={() => setIsOpen(false)}
                      className="block p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 border border-cyan-500/30 text-center group"
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Mail className="w-5 h-5 text-cyan-400" />
                        <span className="text-white font-semibold">
                          Me Contacter
                        </span>
                      </div>
                      <p className="text-cyan-300/70 text-sm mt-1">
                        Disponible pour de nouvelles opportunités
                      </p>
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;