import React from 'react';
import { SEO } from '@/components/SEO';
import { About } from '@/components/About';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Facilities } from '@/components/Facilities';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Seal } from '@/components/ui/Seal';
import { ECGLine } from '@/components/ui/ECGLine';
import { clinicData } from '@/data/clinic';
import { ShieldCheck, HeartPulse, Building2, MapPin } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us | YES Day Care Clinic Kudal Sindhudurg"
        description="Learn about YES Day Care Clinic in Kudal, Sindhudurg. Discover our commitment to ethical healthcare, modern day care observation, and accessible specialist cardiology."
        canonicalPath="/about"
      />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-ivory-blush/40 border-b border-ivory-sand relative overflow-hidden">
        <Seal size={400} variant="ornament" className="-top-12 -right-12 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-crimson/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson">
              About Our Medical Practice
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon tracking-tight">
              Rooted in Kudal. Dedicated to Lifelong Health.
            </h1>

            <p className="font-body text-base text-ink/80 leading-relaxed">
              YES DAY CARE CLINIC was conceived to solve a critical regional challenge: providing dependable, specialist diagnostic and outpatient care for the residents of Sindhudurg without requiring frequent, tiring journeys across district and state borders.
            </p>
          </div>
        </div>
      </section>

      {/* About Main Component */}
      <About />

      {/* Clinical Philosophy & Statutory Integrity */}
      <section className="py-16 bg-white border-y border-ivory-sand">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="rounded-3xl border border-ivory-sand bg-ivory-bg p-8 sm:p-12 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-crimson/10 text-crimson flex items-center justify-center">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="font-display text-2xl font-bold text-maroon">
                Our Ethical & Clinical Code
              </h2>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-ink/85 leading-relaxed">
              <p>
                At YES DAY CARE CLINIC, medical ethics come first. Healthcare is not a transactional market—it is a sacred trust between physician and patient.
              </p>
              <p>
                <strong>No Unscientific Guarantees:</strong> In strict compliance with India’s <em>Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954</em> and standard medical ethics, we do not make promises or claims regarding surgery-free reversals of chronic disease. We provide individualized diagnostics, lifestyle guidance, evidence-based medication, and transparent referrals when surgery or tertiary hospital care is clinically required.
              </p>
              <p>
                <strong>Transparent Consultations:</strong> Every patient receives a comprehensive, unhurried assessment. Whether you are consulting for cardiovascular checkups, diabetes control, acute skin issues, or day care observation, our team ensures you thoroughly understand your diagnosis and care pathway.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities and Why Choose Us */}
      <Facilities />
      <WhyChooseUs />

      {/* Appointment Enquiry */}
      <AppointmentForm />
    </>
  );
};
