import React from 'react';
import { SEO } from '@/components/SEO';
import { ServicePillars } from '@/components/ServicePillars';
import { Facilities } from '@/components/Facilities';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Seal } from '@/components/ui/Seal';
import { clinicData } from '@/data/clinic';
import { Stethoscope, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { ContentChip } from '@/components/ui/ContentChip';

export const ServicesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Services & Clinical Pillars | YES Day Care Clinic Kudal"
        description="Explore the clinical services at YES Day Care Clinic Kudal: Day Care Centre, Polyclinic consultations, Diabetes & Heart care with 2D Echo, and Dermatology clinic."
        canonicalPath="/services"
      />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-ivory-blush/40 border-b border-ivory-sand relative overflow-hidden">
        <Seal size={400} variant="ornament" className="-top-12 -right-12 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-crimson/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson">
              Clinical Departments & OPD
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon tracking-tight">
              Our Four Clinical Pillars
            </h1>

            <p className="font-body text-base text-ink/80 leading-relaxed">
              Serving the diverse healthcare needs of Kudal and Sindhudurg. Designed to provide accurate diagnostic triage, chronic disorder management, and same-day clinical stabilization under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Pillars Section */}
      <ServicePillars />

      {/* Conditions Consultation Matrix */}
      <section className="py-16 bg-ivory-bg border-t border-ivory-sand">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon">
              Conditions Evaluated at Our OPD
            </h2>
            <p className="text-xs sm:text-sm text-ink/70">
              Patients visit our clinic for consultation, diagnostic evaluation, and medical management of common and chronic symptoms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Cardiac & Metabolic */}
            <div className="rounded-3xl border border-ivory-sand bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-maroon">
                  Cardiovascular & Metabolic Consultations
                </h3>
                <ContentChip compact label="Pending Sign-Off" />
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Hypertension & High Blood Pressure Titration</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Type 2 Diabetes, High Blood Sugar & HbA1c Monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Chest Pain, Palpitations & Cardiac Arrhythmia Evaluation</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>High Cholesterol, Triglycerides & Atherosclerotic Risk</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Fatty Liver & Metabolic Syndrome Guidance</span>
                </li>
              </ul>
            </div>

            {/* General & Dermatological */}
            <div className="rounded-3xl border border-ivory-sand bg-white p-6 sm:p-8 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display font-bold text-lg text-maroon">
                  General Medicine & Dermatology OPD
                </h3>
                <ContentChip compact label="Pending Sign-Off" />
              </div>
              <ul className="space-y-2.5 text-xs sm:text-sm text-ink/80">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Thyroid Imbalances (Hypo & Hyperthyroidism)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>PCOD / Hormonal Irregularities in Women</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Chronic Eczema, Psoriasis & Allergic Rashes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Persistent Migraines, Tension Headaches & Vertigo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-crimson shrink-0 mt-0.5" />
                  <span>Arthritis, Spondylitis & Musculoskeletal Joint Discomfort</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="rounded-2xl border border-ivory-sand bg-ivory-blush/60 p-4 text-xs text-ink/75 leading-relaxed">
            <p>
              <strong>Notice:</strong> The symptoms and conditions listed above represent common areas for which consultations are sought. They do not constitute a diagnosis or guarantee of treatment without an in-person clinical assessment by our physicians.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <Facilities />

      {/* Appointment Enquiry */}
      <AppointmentForm />
    </>
  );
};
