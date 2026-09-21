import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';

interface ShimmerTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'span' | 'p';
  className?: string;
}

export const ShimmerText: React.FC<ShimmerTextProps> = ({
  text,
  as: Component = 'span',
  className = '',
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (prefersReducedMotion) {
    return <Component className={`text-maroon font-display ${className}`}>{text}</Component>;
  }

  return (
    <Component
      className={`relative inline-block font-display text-transparent bg-clip-text ${className}`}
      style={{
        backgroundImage: 'linear-gradient(110deg, #7A1512 0%, #7A1512 35%, #D42B24 50%, #7A1512 65%, #7A1512 100%)',
        backgroundSize: '250% 100%',
      }}
    >
      <motion.span
        initial={{ backgroundPosition: '100% 0' }}
        animate={{ backgroundPosition: '-100% 0' }}
        transition={{
          duration: 3.2,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2,
        }}
        className="block text-transparent bg-clip-text"
        style={{
          backgroundImage: 'linear-gradient(110deg, #7A1512 0%, #7A1512 38%, #F04438 50%, #7A1512 62%, #7A1512 100%)',
          backgroundSize: '250% 100%',
        }}
      >
        {text}
      </motion.span>
    </Component>
  );
};
