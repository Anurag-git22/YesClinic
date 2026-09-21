import React from 'react';
import { SEO } from '@/components/SEO';
import { Timings } from '@/components/Timings';
import { MapSection } from '@/components/MapSection';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Seal } from '@/components/ui/Seal';
import { clinicData } from '@/data/clinic';
import { Phone, Smartphone, MapPin, Instagram, Clock, MessageSquare } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const whatsappUrl = `https://wa.me/${clinicData.contact.whatsappNumber}?text=${encodeURIComponent(
    clinicData.contact.whatsappPrefillMessage
  )}`;

  return (
    <>
      <SEO
        title="Contact & Location | YES Day Care Clinic Kudal Sindhudurg"
        description="Contact YES Day Care Clinic in Kudal, Sindhudurg. Phone: +91 80106 67696, Landline: 02362 299002. Located Ground Floor, Opposite Kudal Police Station."
        canonicalPath="/contact"
      />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-ivory-blush/40 border-b border-ivory-sand relative overflow-hidden">
        <Seal size={400} variant="ornament" className="-top-12 -right-12 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-crimson/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson">
              Connect With Us
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon tracking-tight">
              Get in Touch & Visit the Clinic
            </h1>

            <p className="font-body text-base text-ink/80 leading-relaxed">
              We are conveniently situated on the ground floor directly opposite Kudal Police Station. Reach us via phone, WhatsApp, or the enquiry form below.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-white border-b border-ivory-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Mobile Card */}
            <a
              href={`tel:${clinicData.contact.mobile}`}
              className="group rounded-3xl border border-ivory-sand bg-ivory-bg/60 p-6 transition-all duration-300 hover:border-crimson hover:bg-white hover:shadow-spotlight"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-crimson text-white mb-4 group-hover:scale-105 transition-transform">
                <Smartphone className="h-6 w-6" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-crimson">
                Mobile & WhatsApp
              </span>
              <p className="font-display font-bold text-xl text-maroon mt-1">
                {clinicData.contact.mobileFormatted}
              </p>
              <p className="text-xs text-ink/65 mt-1">
                Direct OPD enquiries and doctor slot confirmation.
              </p>
            </a>

            {/* Landline Card */}
            <a
              href={`tel:${clinicData.contact.landline}`}
              className="group rounded-3xl border border-ivory-sand bg-ivory-bg/60 p-6 transition-all duration-300 hover:border-crimson hover:bg-white hover:shadow-spotlight"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-maroon text-white mb-4 group-hover:scale-105 transition-transform">
                <Phone className="h-6 w-6" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-maroon/70">
                Clinic Landline
              </span>
              <p className="font-display font-bold text-xl text-maroon mt-1">
                {clinicData.contact.landlineFormatted}
              </p>
              <p className="text-xs text-ink/65 mt-1">
                Reception desk during regular clinic hours.
              </p>
            </a>

            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-ivory-sand bg-ivory-bg/60 p-6 transition-all duration-300 hover:border-emerald-600 hover:bg-white hover:shadow-spotlight"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700 text-white mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="h-6 w-6" />
              </div>
              <span className="block text-xs font-bold uppercase tracking-wider text-emerald-800">
                Instant WhatsApp Chat
              </span>
              <p className="font-display font-bold text-xl text-maroon mt-1">
                {clinicData.contact.mobileFormatted}
              </p>
              <p className="text-xs text-ink/65 mt-1">
                Click to send an instant prefilled WhatsApp enquiry.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Timings & Map Section */}
      <section className="py-20 lg:py-28 bg-ivory-bg relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <Timings />
            <MapSection />
          </div>
        </div>
      </section>

      {/* Appointment Enquiry Form */}
      <AppointmentForm />
    </>
  );
};
