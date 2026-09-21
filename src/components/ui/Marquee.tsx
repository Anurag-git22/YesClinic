import React from 'react';
import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { clinicData } from '@/data/clinic';

export const MarqueeRibbon: React.FC = () => {
  const prefersReducedMotion = usePrefersReducedMotion();

  const items = [
    { en: 'Day Care Centre', mr: 'डे केअर सेंटर' },
    { en: 'Polyclinic', mr: 'पॉलीक्लिनिक' },
    { en: 'Diabetes & Heart Care', mr: 'मधुमेह आणि हृदयाची काळजी' },
    { en: 'Derma Clinic', mr: 'त्वचा क्लिनिक' },
    { en: '2D Echocardiography', mr: '२डी इकोकार्डियोग्राफी' },
    { en: 'Clinical Cardiology', mr: 'हृदयरोग सल्ला' },
  ];

  // Repeat items for seamless infinite scroll
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <div
      className="relative w-full overflow-hidden border-y border-crimson/15 bg-ivory-blush/60 py-3.5 select-none"
      aria-hidden="true"
    >
      {/* Side gradient fade masks */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-r from-ivory-bg to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-32 bg-gradient-to-l from-ivory-bg to-transparent" />

      <motion.div
        animate={
          prefersReducedMotion
            ? undefined
            : {
                x: ['0%', '-50%'],
              }
        }
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'linear',
        }}
        className="flex w-max items-center gap-6"
      >
        {marqueeItems.map((item, index) => (
          <div key={index} className="flex items-center gap-6 whitespace-nowrap">
            <span className="font-display font-medium text-sm md:text-base tracking-wide text-maroon uppercase">
              {item.en}
            </span>

            {/* Circular seal glyph separator */}
            <div className="h-2.5 w-2.5 rounded-full border border-crimson/40 bg-crimson/10 flex items-center justify-center">
              <div className="h-1 w-1 rounded-full bg-crimson" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
