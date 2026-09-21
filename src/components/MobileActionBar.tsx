import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { CallSelectionModal } from './CallSelectionModal';
import { clinicData } from '@/data/clinic';

export const MobileActionBar: React.FC = () => {
  const [callModalOpen, setCallModalOpen] = useState(false);
  const location = useLocation();

  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefillMessage
  )}`;

  const isAppointmentActive = location.hash === '#enquiry' || location.pathname === '/contact';

  return (
    <>
      {/* Mobile Fixed Action Bar (Hidden on desktop lg+) */}
      <nav
        aria-label="Mobile patient quick actions"
        className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-crimson/25 bg-white/95 backdrop-blur-md shadow-2xl pb-[env(safe-area-inset-bottom)]"
      >
        <div className="grid grid-cols-3 h-16 max-w-md mx-auto">
          {/* Action 1: Call Phone Numbers Sheet */}
          <button
            onClick={() => setCallModalOpen(true)}
            aria-label="Call clinic phone numbers"
            className="flex flex-col items-center justify-center gap-1 text-maroon hover:bg-ivory-blush active:bg-crimson/10 transition-colors min-h-[48px]"
          >
            <Phone className="h-5 w-5 text-crimson" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Call
            </span>
          </button>

          {/* Action 2: WhatsApp Pre-filled Chat */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="flex flex-col items-center justify-center gap-1 text-emerald-800 hover:bg-emerald-50 active:bg-emerald-100 transition-colors min-h-[48px]"
          >
            <MessageSquare className="h-5 w-5 text-emerald-700" />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              WhatsApp
            </span>
          </a>

          {/* Action 3: Appointment Booking Enquiry */}
          <Link
            to="/contact#enquiry"
            aria-label="Book an appointment enquiry"
            className={`flex flex-col items-center justify-center gap-1 transition-colors min-h-[48px] ${
              isAppointmentActive
                ? 'bg-crimson text-white'
                : 'text-maroon hover:bg-ivory-blush active:bg-crimson/10'
            }`}
          >
            <Calendar className={`h-5 w-5 ${isAppointmentActive ? 'text-white' : 'text-crimson'}`} />
            <span className="text-[11px] font-bold uppercase tracking-wider">
              Appointment
            </span>
          </Link>
        </div>
      </nav>

      {/* Call Selection Bottom Sheet */}
      <CallSelectionModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </>
  );
};
