import React, { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from 'lenis';

import { Grain } from './components/ui/Grain';
import { WarmAurora } from './components/ui/GradientBlob';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ScrollToTopSeal } from './components/ui/Seal';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

// Lazy-loaded routes for optimal performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const DoctorsPage = lazy(() => import('./pages/DoctorsPage').then(m => ({ default: m.DoctorsPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then(m => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

export const App: React.FC = () => {
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Initialize Lenis smooth scroll
  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const animId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  // Scroll to top or anchor on route change
  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-ivory-bg text-ink selection:bg-crimson/15 selection:text-maroon font-body flex flex-col justify-between">
      {/* 3% SVG Grain Texture */}
      <Grain />

      {/* Warm Aurora Background Blobs */}
      <WarmAurora />

      {/* Morphing Navbar with Integrated Top Announcement Bar */}
      <Navbar />

      {/* Page Content with AnimatePresence Transitions (250ms fade + 8px rise. No sliding) */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <Suspense
              fallback={
                <div className="flex h-[70vh] w-full items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-crimson border-t-transparent" />
                </div>
              }
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/doctors" element={<DoctorsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/gallery" element={<GalleryPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer with 120px Wax-Seal Stamp */}
      <Footer />

      {/* Fixed Bottom Mobile Action Bar (Call Sheet, WhatsApp, Appointment) */}
      <MobileActionBar />

      {/* Desktop-Only Floating WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Scroll To Top Button (Seal Motivated) */}
      <ScrollToTopSeal />
    </div>
  );
};
export default App;
