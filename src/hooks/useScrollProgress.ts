import { useState, useEffect } from 'react';

/**
 * Tracks the window scroll progress as a percentage from 0 to 1,
 * plus current scrollY in pixels.
 */
export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const calculated = scrollHeight > 0 ? Math.min(Math.max(currentY / scrollHeight, 0), 1) : 0;
      setProgress(calculated);
      setScrollY(currentY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { progress, scrollY };
}
