// /components/ScrollProgressIndicator.tsx
'use client';

import { motion, useScroll } from 'framer-motion';

const ScrollProgressIndicator = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-cyan-500 to-blue-500 origin-left z-50"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgressIndicator;