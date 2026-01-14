// /components/BackgroundEffect.tsx
'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

const BackgroundEffect = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Transformations pour les animations au scroll
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 10]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{ opacity }}
    >
      {/* Arrière-plan de base */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-gray-950">
        {/* Grille holographique avec animation au scroll */}
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(rgba(120,119,198,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(120,119,198,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          style={{
            scale,
            filter: `blur(${blur}px)`,
          }}
        />
        
        {/* Orbes énergétiques */}
        <motion.div
          className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-gradient-to-r from-purple-600/30 to-blue-600/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Lignes de données animées */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
              style={{
                top: `${Math.random() * 100}%`,
                left: '-100px',
                width: '200px',
                opacity: 0.05 + Math.random() * 0.15,
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

        {/* Particules flottantes */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[1px] h-[1px] bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        {/* Effet de scan au scroll */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          style={{
            y: useTransform(scrollYProgress, [0, 1], ['0%', '100vh']),
          }}
        />
      </div>
    </motion.div>
  );
};

export default BackgroundEffect;