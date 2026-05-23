'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a') ||
        target.dataset.interactive
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  // Pixel map for a classic arrow pointer shape
  const pointerPixels = [
    [0, 0],
    [0, 1], [1, 1],
    [0, 2], [1, 2], [2, 2],
    [0, 3], [1, 3], [2, 3], [3, 3],
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4],
    [0, 5], [1, 5], [2, 5], [3, 5], [4, 5], [5, 5],
    [0, 6], [1, 6], [2, 6],
    [0, 7], [3, 7], [4, 7],
    [4, 8], [5, 8],
  ];

  const PIXEL_SIZE = 3;

  return (
    <motion.div
      className="cursor-pixel fixed top-0 left-0 pointer-events-none z-[10000] mix-blend-difference"
      style={{
        x: mouseX,
        y: mouseY,
        // Small offset to align the tip of the arrow with the actual mouse coordinate
        translateX: -1.5,
        translateY: -1.5,
        willChange: 'transform',
      }}
    >
      <div className="relative">
        {pointerPixels.map(([x, y], i) => (
          <motion.div
            key={i}
            className="absolute bg-white"
            style={{
              width: PIXEL_SIZE,
              height: PIXEL_SIZE,
              left: 0,
              top: 0,
              x: x * PIXEL_SIZE,
              y: y * PIXEL_SIZE,
              willChange: 'transform',
            }}
            animate={{
              scale: isHovering ? 1.2 : 1,
            }}
            transition={{ 
              type: 'spring', 
              stiffness: 300, 
              damping: 20,
              delay: i * 0.002
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default CustomCursor;
