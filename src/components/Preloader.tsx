'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = 'hidden';

    let current = 0;
    const interval = setInterval(() => {
      // Organic-looking loading speed variation
      const increment = Math.floor(Math.random() * 8) + 2; 
      current = Math.min(current + increment, 100);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          // Restore body scrolling after animation finishes
          document.body.style.overflow = '';
        }, 800); // Settle time at 100%
      }
    }, 45 + Math.random() * 30); // Random delay to mimic loading chunks

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[99999] bg-[#050505] flex flex-col justify-between p-8 lg:p-16 select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ 
            y: '-100%',
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } 
          }}
        >
          {/* Top Row: Brand Label */}
          <div className="flex justify-between items-center w-full">
            <motion.div 
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Pixel & Grid <span className="text-gold">·</span> studio
            </motion.div>
            <motion.div 
              className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/30"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              EST. MMXXIV
            </motion.div>
          </div>

          {/* Center Row: Logo & Editorial Percentage Number */}
          <div className="flex flex-col items-center justify-center relative">
            <motion.div 
              className="mb-6 w-16 h-16 relative flex items-center justify-center pointer-events-none select-none"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 0.7, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <img 
                src="/logo.png" 
                alt="Pixel & Grid Logo" 
                className="w-full h-full object-contain filter invert brightness-200" 
              />
            </motion.div>

            <motion.div 
              className="font-display text-[clamp(6rem,15vw,14rem)] font-light leading-none text-white tracking-tight flex items-baseline select-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {progress}
              <span className="font-mono text-sm lg:text-lg text-gold ml-2 uppercase tracking-widest font-light select-none">
                % loaded
              </span>
            </motion.div>
            
            {/* Subtle sub-label */}
            <motion.div
              className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold/50 mt-4 h-4"
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              {progress < 40 ? 'analyzing grid structures...' : progress < 80 ? 'rendering visual layers...' : 'synthesizing performance...'}
            </motion.div>
          </div>

          {/* Bottom Row: Organic Fine Progress Line & Coordinates */}
          <div className="w-full space-y-6">
            <div className="flex justify-between font-mono text-[8px] uppercase tracking-[0.15em] text-white/30">
              <div>LAT: 28.6139° N</div>
              <div>LON: 77.2090° E</div>
            </div>

            {/* Horizontal Line Progress Bar */}
            <div className="w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div 
                className="h-full bg-gold origin-left"
                style={{ scaleX: progress / 100 }}
                transition={{ type: 'spring', damping: 20, stiffness: 80 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
