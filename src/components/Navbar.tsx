import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar, Phone, Megaphone } from 'lucide-react';
import { Logo } from './Logo';
import { Seal } from './ui/Seal';
import { Magnetic } from './ui/Magnetic';
import { useScrollProgress } from '@/hooks/useScrollProgress';
import { usePrefersReducedMotion } from '@/hooks/usePrefersReducedMotion';
import { CallSelectionModal } from './CallSelectionModal';
import { clinicData } from '@/data/clinic';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Dr. Digambar Naik', path: '/doctors' },
  { name: 'Services & Pillars', path: '/services' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar: React.FC = () => {
  const { progress, scrollY } = useScrollProgress();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [callModalOpen, setCallModalOpen] = useState(false);
  const [announcementDismissed, setAnnouncementDismissed] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = usePrefersReducedMotion();

  // Morphing trigger on scroll
  const isScrolled = scrollY > 40;
  const announcement = clinicData.announcement;
  const showAnnouncement = announcement && announcement.enabled && !announcementDismissed && !isScrolled;

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* 1. Progress Bar pinned to top of viewport */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent" aria-hidden="true">
        <div
          className="h-full bg-gradient-to-r from-crimson via-crimson-lit to-maroon transition-all duration-75 origin-left"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* 2. Unified Header: Announcement Bar stacked neatly ABOVE Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 flex flex-col pointer-events-none">
        {/* Config-driven Announcement Bar */}
        <AnimatePresence>
          {showAnnouncement && (
            <motion.aside
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              aria-label="Camp Announcement"
              className="pointer-events-auto bg-crimson text-white px-4 py-2 text-xs sm:text-sm font-medium shadow-sm overflow-hidden"
            >
              <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
                <div className="flex flex-1 flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-4 text-center sm:text-left">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-white">
                    <Megaphone className="h-3 w-3" />
                    {announcement.badge}
                  </span>

                  <span className="font-medium text-white/95 truncate max-w-xl">
                    {announcement.title}
                  </span>

                  <div className="hidden xl:flex items-center gap-3 text-white/80">
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {announcement.date}
                    </span>
                    <span>•</span>
                    <a
                      href={`tel:${clinicData.contact.mobile}`}
                      className="inline-flex items-center gap-1 text-white font-semibold underline underline-offset-2 hover:text-white/85"
                    >
                      <Phone className="h-3 w-3" />
                      Book: {announcement.bookingNumber}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => setAnnouncementDismissed(true)}
                  aria-label="Dismiss announcement banner"
                  className="shrink-0 rounded-full p-1 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </motion.aside>
          )}
        </AnimatePresence>

        {/* Main Navbar Bar (Placed neatly BELOW the announcement bar) */}
        <div
          className={`pointer-events-auto transition-all duration-400 ease-out ${
            isScrolled
              ? 'px-3 sm:px-6 pt-3'
              : 'px-4 sm:px-8 py-3 bg-white/95 backdrop-blur-md border-b border-ivory-sand/80 shadow-xs'
          }`}
        >
          <div
            className={`mx-auto flex items-center justify-between transition-all duration-400 ${
              isScrolled
                ? 'max-w-6xl rounded-full bg-white/95 backdrop-blur-md px-4 sm:px-6 py-2 shadow-elevated border border-crimson/20'
                : 'max-w-7xl'
            }`}
          >
            {/* Brand Logo: mark-only on mobile, full lockup on tablet+ */}
            <div className="flex items-center">
              {/* Mobile: mark-only */}
              <div className="block md:hidden">
                <Logo markSize={isScrolled ? 32 : 36} markOnly />
              </div>
              {/* Tablet+: full horizontal lockup */}
              <div className="hidden md:block">
                <Logo markSize={isScrolled ? 36 : 44} />
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-3.5 py-2 rounded-full font-body text-sm font-semibold transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-crimson ${
                      isActive
                        ? 'text-crimson'
                        : 'text-ink/80 hover:text-maroon hover:bg-ivory-blush/60'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className="absolute bottom-1 left-3.5 right-3.5 h-[2px] bg-crimson rounded-full"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-white/60 px-4 py-2 font-body text-xs font-bold uppercase tracking-wider text-maroon transition-all duration-200 hover:border-crimson hover:bg-crimson/5 hover:text-crimson"
                aria-label="Call clinic reception"
              >
                <Phone className="h-3.5 w-3.5 text-crimson" />
                <span>Call Clinic</span>
              </button>

              <Magnetic>
                <Link
                  to="/contact#enquiry"
                  className="inline-flex items-center gap-2 rounded-full bg-maroon px-5 py-2.5 font-body text-xs font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-200 hover:bg-crimson hover:shadow-crimson-soft focus-visible:ring-2 focus-visible:ring-crimson"
                >
                  <Calendar className="h-3.5 w-3.5 text-white" />
                  <span>Book Appointment</span>
                </Link>
              </Magnetic>
            </div>

            {/* Mobile Hamburger Controls */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setCallModalOpen(true)}
                className="rounded-full p-2 text-maroon hover:bg-ivory-blush"
                aria-label="Call clinic phone numbers"
              >
                <Phone className="h-5 w-5 text-crimson" />
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
                className="rounded-full p-2 text-maroon hover:bg-ivory-blush focus-visible:ring-2 focus-visible:ring-crimson min-h-[44px] min-w-[44px] flex items-center justify-center"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0.15 : 0.25 }}
            className="fixed inset-0 z-40 lg:hidden bg-ivory-bg/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-28 px-6 overflow-y-auto"
          >
            {/* Seal watermark in background */}
            <div className="absolute right-4 bottom-24 pointer-events-none opacity-[0.06] -z-10">
              <Seal size={300} variant="full" />
            </div>

            {/* Navigation Links */}
            <div className="space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-widest text-crimson">
                Navigation
              </span>

              <nav className="flex flex-col space-y-1">
                {navLinks.map((link, i) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <motion.div
                      key={link.path}
                      initial={prefersReducedMotion ? undefined : { opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <Link
                        to={link.path}
                        className={`flex items-center justify-between py-3 px-4 rounded-xl font-display text-xl font-bold transition-all min-h-[48px] ${
                          isActive
                            ? 'bg-crimson text-white shadow-crimson-soft'
                            : 'text-maroon hover:bg-ivory-blush'
                        }`}
                      >
                        <span>{link.name}</span>
                        {isActive && <span className="text-xs font-body font-normal">Active</span>}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Actions */}
            <div className="mt-8 space-y-4 pt-6 border-t border-ivory-sand">
              <div className="space-y-1">
                <p className="text-xs font-bold uppercase tracking-wider text-ink/60">
                  {clinicData.identity.englishDisplay}
                </p>
                <p className="text-sm font-semibold text-maroon">
                  Kudal, Sindhudurg, Maharashtra
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setCallModalOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 rounded-xl border border-maroon bg-white py-3.5 text-sm font-bold text-maroon shadow-xs"
                >
                  <Phone className="h-4 w-4 text-crimson" />
                  <span>Call Numbers</span>
                </button>

                <Link
                  to="/contact#enquiry"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-maroon py-3.5 text-sm font-bold text-white shadow-xs"
                >
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Book Visit</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call Selection Modal */}
      <CallSelectionModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </>
  );
};
