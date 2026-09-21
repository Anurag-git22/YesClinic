import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { ArrowUp } from 'lucide-react';

interface SealProps {
  size?: number | string;
  variant?: 'mark' | 'full' | 'ornament' | 'stamp' | 'badge';
  className?: string;
  withGlow?: boolean;
}

export const Seal: React.FC<SealProps> = ({
  size = 44,
  variant = 'mark',
  className = '',
  withGlow = false,
}) => {
  const prefersReducedMotion = usePrefersReducedMotion();

  // Watermark ornament variant spinning slowly behind headings - PNG ONLY
  if (variant === 'ornament') {
    return (
      <div
        className={`absolute pointer-events-none select-none -z-10 ${className}`}
        aria-hidden="true"
        style={{ width: size, height: size }}
      >
        <motion.div
          animate={prefersReducedMotion ? undefined : { rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="w-full h-full opacity-[0.06]"
        >
          <img
            src="/logo-seal.png"
            alt=""
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    );
  }

  // Full stamp variant - PNG ONLY
  if (variant === 'full' || variant === 'stamp') {
    return (
      <div
        className={`relative inline-block transition-transform duration-300 ${
          variant === 'stamp' ? 'rotate-[-4deg] hover:rotate-0' : ''
        } ${className}`}
        style={{ width: size, height: size }}
      >
        <img
          src="/logo-seal.png"
          alt=""
          className="w-full h-full object-contain drop-shadow-md"
        />
      </div>
    );
  }

  // Mark variant - PNG ONLY
  return (
    <div
      className={`relative inline-flex items-center justify-center transition-all duration-300 ${
        withGlow ? 'hover:shadow-crimson-soft' : ''
      } ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo-horizontal.png"
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
};

/**
 * Scroll to top button shaped as the interactive circular seal
 */
export const ScrollToTopSeal: React.FC = () => {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      aria-label="Scroll to top of page"
      className="hidden md:flex fixed bottom-8 right-8 z-40 h-14 w-14 items-center justify-center rounded-full bg-white shadow-wax-seal border-2 border-crimson/80 text-crimson group transition-colors duration-200 hover:border-crimson"
    >
      <div className="relative flex items-center justify-center w-full h-full">
        {/* Subtle rotating circular border text / ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-crimson/40" />
        <ArrowUp className="w-5 h-5 text-crimson group-hover:-translate-y-0.5 transition-transform duration-200" />
      </div>
    </motion.button>
  );
};
