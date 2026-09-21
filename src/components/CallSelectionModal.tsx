import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Smartphone, PhoneCall, X } from 'lucide-react';
import { clinicData } from '@/data/clinic';

interface CallSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallSelectionModal: React.FC<CallSelectionModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on ESC key and trap focus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          {/* Backdrop blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/50 backdrop-blur-sm"
            aria-hidden="true"
          />

          {/* Modal / Bottom Sheet */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="call-modal-title"
            initial={{ y: '100%', opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 280 }}
            className="relative z-10 w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl bg-white p-6 shadow-2xl border border-ivory-sand"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-ivory-sand">
              <div className="flex items-center gap-2.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-crimson/10 text-crimson">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <h3 id="call-modal-title" className="font-display font-bold text-lg text-maroon">
                    Call YES Day Care Clinic
                  </h3>
                  <p className="text-xs text-ink/70">Connect directly with the reception desk</p>
                </div>
              </div>
              <button
                onClick={onClose}
                aria-label="Close dialog"
                className="rounded-full p-2 text-ink/60 hover:bg-ivory-blush hover:text-maroon transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Options */}
            <div className="mt-5 space-y-3">
              {/* Mobile Phone Option */}
              <a
                href={`tel:${clinicData.contact.mobile}`}
                className="group flex items-center justify-between rounded-2xl border border-ivory-sand bg-ivory-bg/50 p-4 transition-all duration-200 hover:border-crimson hover:bg-crimson/5 hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-crimson text-white group-hover:scale-105 transition-transform">
                    <Smartphone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-crimson">
                      Primary Mobile / WhatsApp
                    </span>
                    <span className="font-display font-bold text-base text-maroon">
                      {clinicData.contact.mobileFormatted}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-maroon shadow-xs border border-ivory-sand group-hover:border-crimson/40">
                  Call Now
                </span>
              </a>

              {/* Landline Option */}
              <a
                href={`tel:${clinicData.contact.landline}`}
                className="group flex items-center justify-between rounded-2xl border border-ivory-sand bg-ivory-bg/50 p-4 transition-all duration-200 hover:border-crimson hover:bg-crimson/5 hover:shadow-sm"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-maroon text-white group-hover:scale-105 transition-transform">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-maroon/70">
                      Clinic Landline
                    </span>
                    <span className="font-display font-bold text-base text-maroon">
                      {clinicData.contact.landlineFormatted}
                    </span>
                  </div>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-maroon shadow-xs border border-ivory-sand group-hover:border-crimson/40">
                  Call Now
                </span>
              </a>
            </div>

            {/* Note */}
            <p className="mt-4 text-center text-xs text-ink/60">
              Reception open during clinic hours. For off-hours, leave a WhatsApp message.
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
