import React, { useState } from 'react';
import { clinicData } from '@/data/clinic';
import { Megaphone, Calendar, Phone, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const AnnouncementBar: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const announcement = clinicData.announcement;

  if (!announcement || !announcement.enabled || dismissed) {
    return null;
  }

  return (
    <AnimatePresence>
      <motion.aside
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Important Announcement"
        className="relative z-40 bg-crimson text-white px-4 py-2.5 text-xs sm:text-sm font-medium shadow-sm overflow-hidden"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <div className="flex flex-1 flex-wrap items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white">
              <Megaphone className="h-3 w-3" />
              {announcement.badge}
            </span>

            <span className="font-medium text-white/95">
              {announcement.title}
            </span>

            <div className="hidden lg:flex items-center gap-3 text-white/80">
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                {announcement.date}
              </span>
              <span>•</span>
              <a
                href={`tel:${clinicData.contact.mobile}`}
                className="inline-flex items-center gap-1 text-white font-semibold underline underline-offset-2 hover:text-white/80"
              >
                <Phone className="h-3 w-3" />
                Book: {announcement.bookingNumber}
              </a>
            </div>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss announcement banner"
            className="shrink-0 rounded-full p-1 text-white/70 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};
