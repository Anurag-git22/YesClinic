import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  verified: boolean;
}

interface LightboxProps {
  items: GalleryItem[];
  selectedIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  selectedIndex,
  onClose,
  onNavigate,
}) => {
  const isOpen = selectedIndex !== null;
  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate((selectedIndex - 1 + items.length) % items.length);
  }, [selectedIndex, items.length, onNavigate]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    onNavigate((selectedIndex + 1) % items.length);
  }, [selectedIndex, items.length, onNavigate]);

  // Keyboard controls: ESC to close, Arrow keys to navigate
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, handlePrev, handleNext]);

  return (
    <AnimatePresence>
      {isOpen && currentItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={currentItem.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col rounded-3xl overflow-hidden bg-white shadow-2xl border border-ivory-sand"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-ivory-sand bg-ivory-bg/80">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-crimson">
                  {currentItem.category} • {selectedIndex + 1} of {items.length}
                </span>
                <h3 className="font-display font-bold text-lg text-maroon">
                  {currentItem.title}
                </h3>
              </div>
              <button
                onClick={onClose}
                aria-label="Close image viewer"
                className="rounded-full p-2 text-ink/70 hover:bg-ivory-blush hover:text-maroon transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Main Image Area */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[440px] bg-ivory-sand/30 flex items-center justify-center p-4">
              <img
                src={currentItem.src}
                alt={currentItem.alt}
                className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain drop-shadow-md"
              />

              {/* Prev / Next Navigation Buttons */}
              <button
                onClick={handlePrev}
                aria-label="Previous image"
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-maroon shadow-md hover:bg-white hover:text-crimson transition-all focus-visible:ring-2 focus-visible:ring-crimson"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next image"
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-3 text-maroon shadow-md hover:bg-white hover:text-crimson transition-all focus-visible:ring-2 focus-visible:ring-crimson"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Bottom Details Bar */}
            <div className="px-6 py-3 bg-white text-xs text-ink/70 border-t border-ivory-sand flex items-center justify-between">
              <span>{currentItem.alt}</span>
              <span className="text-[11px] font-medium text-maroon/60">
                Use Left / Right arrow keys to browse
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
