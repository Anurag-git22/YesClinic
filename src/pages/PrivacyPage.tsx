import React from 'react';
import { SEO } from '@/components/SEO';
import { clinicData } from '@/data/clinic';
import { ShieldCheck } from 'lucide-react';

export const PrivacyPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | YES Day Care Clinic Kudal"
        description="Privacy policy and patient data confidentiality guidelines for YES Day Care Clinic, Kudal."
        canonicalPath="/privacy"
      />

      <div className="pt-36 pb-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 border-b border-ivory-sand pb-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-crimson">
              <ShieldCheck className="h-4 w-4" />
              <span>Confidentiality & Compliance</span>
            </div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-maroon">
              Privacy & Patient Data Policy
            </h1>
            <p className="text-xs text-ink/60">
              Last updated: September 2026 • YES DAY CARE CLINIC, Kudal
            </p>
          </div>

          <div className="prose prose-stone max-w-none text-xs sm:text-sm text-ink/80 space-y-6 leading-relaxed">
            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">1. Information We Collect</h2>
              <p>
                When you use our website enquiry portal or contact YES DAY CARE CLINIC via phone or WhatsApp, we collect only the minimal necessary contact information: your name, telephone number, optional email address, preferred appointment time, and the general clinical department you wish to consult.
              </p>
              <p>
                We strictly advise visitors <strong>not</strong> to submit sensitive medical records, detailed test reports, or confidential diagnostic history through public contact forms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">2. Use of Information</h2>
              <p>
                Contact details are utilized exclusively by YES DAY CARE CLINIC administration for:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Scheduling and confirming outpatient clinic appointments</li>
                <li>Informing patients of visiting consultant camp dates and slot timings</li>
                <li>Direct communication regarding clinic directions and timings</li>
              </ul>
              <p>
                We do not sell, rent, or share personal contact information with third-party marketers or advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">3. Clinical Data Security</h2>
              <p>
                In-person patient medical records and diagnostic files generated during clinic visits (such as 2D Echocardiography reports, blood pressure logs, and prescriptions) are maintained securely in accordance with standard Indian medical confidentiality laws and guidelines.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-display text-xl font-bold text-maroon">4. Contact For Privacy Enquiries</h2>
              <p>
                If you have questions regarding your contact records, you may contact the clinic manager at {clinicData.contact.mobileFormatted} or write to our reception desk at {clinicData.location.fullFormatted}.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
