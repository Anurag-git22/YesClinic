import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { useMediaQuery } from '@/hooks/useMediaQuery';

/**
 * WARM AURORA
 * 3 faint radial blobs (crimson 8% opacity, blush, sand) drifting on a slow 20s loop,
 * parallaxed slightly by scroll.
 * Deliberately subtle so the ivory canvas stays warm and legible.
 * Reduces to 2 static/gentle blobs on mobile for optimal GPU performance.
 */
export const WarmAurora: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (prefersReducedMotion) {
    return (
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 -left-20 h-[450px] w-[450px] rounded-full bg-crimson/5 blur-[100px]" />
        <div className="absolute top-[30%] -right-20 h-[500px] w-[500px] rounded-full bg-ivory-blush/60 blur-[120px]" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden select-none">
      {/* Blob 1: Crimson brand glow (extremely soft 8% opacity) */}
      <motion.div
        animate={{
          x: [0, 45, -30, 0],
          y: [0, -35, 25, 0],
          scale: [1, 1.08, 0.96, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute -top-24 -left-24 rounded-full bg-crimson/8 ${
          isMobile ? 'h-[320px] w-[320px] blur-[60px]' : 'h-[580px] w-[580px] blur-[120px]'
        }`}
      />

      {/* Blob 2: Warm blush band */}
      <motion.div
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.94, 1.06, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className={`absolute top-[35%] -right-28 rounded-full bg-ivory-blush/80 ${
          isMobile ? 'h-[360px] w-[360px] blur-[70px]' : 'h-[640px] w-[640px] blur-[140px]'
        }`}
      />

      {/* Blob 3: Sand warm neutral - omitted on mobile to preserve 60fps paint cost */}
      {!isMobile && (
        <motion.div
          animate={{
            x: [0, 30, -45, 0],
            y: [0, -40, 35, 0],
            scale: [0.95, 1.05, 0.92, 0.95],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-[10%] left-[20%] h-[520px] w-[520px] rounded-full bg-ivory-sand/70 blur-[130px]"
        />
      )}
    </div>
  );
};
