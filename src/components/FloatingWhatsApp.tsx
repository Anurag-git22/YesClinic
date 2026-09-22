import React from 'react';
import { MessageSquare } from 'lucide-react';
import { clinicData } from '@/data/clinic';
import { Magnetic } from './ui/Magnetic';

export const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefillMessage
  )}`;

  return (
    <div className="hidden lg:block fixed bottom-24 right-8 z-40">
      <Magnetic strength={0.4}>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Enquire via WhatsApp"
          className="group flex items-center gap-3 rounded-full bg-emerald-700 px-5 py-3.5 text-white shadow-lg hover:bg-emerald-800 hover:shadow-xl transition-all duration-300 focus-visible:ring-2 focus-visible:ring-emerald-500"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 text-white">
            <MessageSquare className="h-4 w-4" />
          </div>
          <div className="text-left">
            <span className="block text-[10px] font-bold uppercase tracking-wider text-emerald-100">
              Direct Enquiry
            </span>
            <span className="font-display text-xs font-bold tracking-wide">
              Chat on WhatsApp
            </span>
          </div>
        </a>
      </Magnetic>
    </div>
  );
};
