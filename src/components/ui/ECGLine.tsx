import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ECGLineProps {
  className?: string;
  variant?: 'hero' | 'divider' | 'compact';
}

export const ECGLine: React.FC<ECGLineProps> = ({ className = '', variant = 'divider' }) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Distinct cardiac wave paths: baseline -> P-wave -> QRS complex -> T-wave -> baseline
  const pathD = "M0,25 L120,25 L135,18 L145,25 L160,25 L170,36 L180,4 L192,44 L202,25 L225,25 L240,14 L255,25 L380,25 L395,18 L405,25 L420,25 L430,36 L440,4 L452,44 L462,25 L485,25 L500,14 L515,25 L650,25";

  if (variant === 'divider') {
    return (
      <div className={`relative flex items-center justify-center my-8 select-none ${className}`} aria-hidden="true">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-crimson/20 to-transparent" />
        <div className="absolute px-4 bg-ivory-bg">
          <svg
            width="120"
            height="24"
            viewBox="0 0 240 50"
            fill="none"
            className="text-crimson overflow-visible"
          >
            <path
              d="M0,25 L60,25 L75,18 L85,25 L100,25 L110,36 L120,4 L132,44 L142,25 L165,25 L180,14 L195,25 L240,25"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    );
  }

  if (prefersReducedMotion) {
    return (
      <div className={`overflow-hidden select-none ${className}`} aria-hidden="true">
        <svg
          viewBox="0 0 650 50"
          fill="none"
          className="w-full h-8 sm:h-12 text-crimson opacity-80"
          preserveAspectRatio="none"
        >
          <path
            d={pathD}
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 650 50"
        fill="none"
        className="w-full h-8 sm:h-12 text-crimson"
        preserveAspectRatio="none"
      >
        {/* Subtle background faint trace */}
        <path
          d={pathD}
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="opacity-15"
        />

        {/* Animated active heartbeat trace */}
        <motion.path
          d={pathD}
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1],
            opacity: [0, 1, 0.8],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut"
          }}
        />
      </svg>
    </div>
  );
};
