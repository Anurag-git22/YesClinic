import React from 'react';
import { SEO } from '@/components/SEO';
import { Gallery } from '@/components/Gallery';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Seal } from '@/components/ui/Seal';
import { ContentChip } from '@/components/ui/ContentChip';
import { Images } from 'lucide-react';

export const GalleryPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Photo Gallery | YES Day Care Clinic Kudal Sindhudurg"
        description="View photos of YES Day Care Clinic in Kudal, including our consultation suites, day care observation beds, and cardiac evaluation equipment."
        canonicalPath="/gallery"
      />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-ivory-blush/40 border-b border-ivory-sand relative overflow-hidden">
        <Seal size={400} variant="ornament" className="-top-12 -right-12 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-crimson/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson">
              Visual Tour
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon tracking-tight">
              Inside YES Day Care Clinic
            </h1>

            <p className="font-body text-base text-ink/80 leading-relaxed">
              Step inside our patient-centered clinic located opposite Kudal Police Station. Designed with wheelchair accessibility, hygienic day-care recovery bays, and quiet physician consultation rooms.
            </p>
          </div>
        </div>
      </section>

      {/* Full Gallery Section */}
      <Gallery isPage={true} />

      {/* Appointment Enquiry Form */}
      <AppointmentForm />
    </>
  );
};
