import React from 'react';
import { SEO } from '@/components/SEO';
import { clinicData } from '@/data/clinic';
import { AlertCircle } from 'lucide-react';

export const TermsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms of Medical Enquiry | YES Day Care Clinic Kudal"
        description="Terms of enquiry and legal medical disclaimer for YES Day Care Clinic, Kudal."
        canonicalPath="/terms"
      />

      <div className="pt-36 pb-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 border-b border-ivory-sand pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson">
              <AlertCircle className="h-4 w-4" />
              <span>Legal Advisory & Medical Notice</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-maroon">
              Terms of Medical Enquiry & Service
            </h1>
            <p className="text-xs text-ink/60">
              Last updated: September 2026 • YES DAY CARE CLINIC, Kudal
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-ink/80 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">1. Not an Emergency Service</h2>
              <p className="bg-red-50 p-4 rounded-xl border border-red-200 text-red-900 font-medium">
                This website and the online appointment enquiry form are not intended for acute medical emergencies. If you or a loved one are experiencing acute chest pain, sudden breathlessness, collapse, severe bleeding, or stroke-like symptoms, please immediately proceed to the nearest emergency tertiary hospital or contact emergency ambulance services.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">2. Enquiry System Nature</h2>
              <p>
                Submitting an appointment enquiry on this site does not constitute a guaranteed booking or confirmed appointment until the YES DAY CARE CLINIC reception staff contacts you and confirms the consultation slot and doctor availability.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">3. Statutory Non-Guarantee Notice</h2>
              <p>
                In strict compliance with the <em>Drugs and Magic Remedies (Objectionable Advertisements) Act, 1954</em>, no information on this website constitutes a promise, guarantee, or representation that chronic or acute cardiovascular, metabolic, or dermatological diseases can be cured without proper clinical diagnosis and individualized medical therapy.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">4. Visiting Consultant Notice</h2>
              <p>
                Specialist physicians, including Dr. Digambar Naik, consult at YES DAY CARE CLINIC on scheduled dates and camps. Availability is subject to change without prior notice based on clinical scheduling.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
