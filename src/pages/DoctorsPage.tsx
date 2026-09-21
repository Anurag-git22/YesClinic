import React from 'react';
import { SEO } from '@/components/SEO';
import { DoctorCard } from '@/components/DoctorCard';
import { AppointmentForm } from '@/components/AppointmentForm';
import { Seal } from '@/components/ui/Seal';
import { clinicData } from '@/data/clinic';
import { HeartPulse, CheckCircle2, ShieldAlert, Award, Calendar } from 'lucide-react';

export const DoctorsPage: React.FC = () => {
  const { doctor } = clinicData;

  return (
    <>
      <SEO
        title="Dr. Digambar Naik | Cardiologist & Echo Specialist | YES Day Care Clinic Kudal"
        description="Meet Dr. Digambar Naik (MD, F.A.I.M.P Cardiology) at YES Day Care Clinic, Kudal. Offering specialist clinical cardiology evaluations, 2D echocardiography, and cardiovascular care."
        canonicalPath="/doctors"
      />

      {/* Header Banner */}
      <section className="pt-36 pb-16 bg-ivory-blush/40 border-b border-ivory-sand relative overflow-hidden">
        <Seal size={400} variant="ornament" className="-top-12 -right-12 hidden md:block" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="inline-block rounded-full bg-crimson/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson">
              Physician Profile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-maroon tracking-tight">
              Specialist Cardiology Consultation
            </h1>

            <p className="font-body text-base text-ink/80 leading-relaxed">
              Dr. Digambar Naik brings advanced clinical cardiology evaluations and non-invasive 2D echocardiography directly to Kudal, empowering patients across Sindhudurg with early diagnostic clarity and proactive cardiac protection.
            </p>
          </div>
        </div>
      </section>

      {/* Doctor Card Component */}
      <DoctorCard />

      {/* Comprehensive Medical Background Section */}
      <section className="py-16 bg-white border-t border-ivory-sand">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="rounded-3xl border border-ivory-sand bg-ivory-bg/60 p-8 sm:p-12 space-y-8">
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon">
                Clinical Focus & Diagnostic Scope
              </h2>
              <p className="text-xs sm:text-sm text-ink/70 mt-1">
                Consultations conducted during scheduled visiting clinic sessions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3 bg-white p-6 rounded-2xl border border-ivory-sand">
                <div className="flex items-center gap-2.5 text-crimson">
                  <HeartPulse className="h-5 w-5" />
                  <h3 className="font-display font-bold text-base text-maroon">
                    Cardiac Symptoms Evaluated
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/80 font-medium">
                  <li>• Unexplained chest discomfort, tightness, or pressure</li>
                  <li>• Shortness of breath during exertion or resting</li>
                  <li>• Irregular heartbeats, palpitations, or rapid fluttering</li>
                  <li>• Chronic hypertension and secondary blood pressure monitoring</li>
                  <li>• Swelling in feet, ankles, and signs of cardiac strain</li>
                  <li>• Post-procedure maintenance and second opinions</li>
                </ul>
              </div>

              <div className="space-y-3 bg-white p-6 rounded-2xl border border-ivory-sand">
                <div className="flex items-center gap-2.5 text-crimson">
                  <Award className="h-5 w-5" />
                  <h3 className="font-display font-bold text-base text-maroon">
                    Non-Invasive Diagnostic Tests
                  </h3>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-ink/80 font-medium">
                  <li>• <strong>2D Echocardiography:</strong> Real-time ultrasound imaging to assess heart chambers, valve function, and ejection fraction (EF%).</li>
                  <li>• <strong>12-Lead Diagnostic ECG:</strong> High-resolution electrical rhythm tracings for ischemic and arrhythmia detection.</li>
                  <li>• <strong>Cardiovascular Risk Stratification:</strong> Assessment of combined lipid profile, glycemic markers, and arterial health.</li>
                </ul>
              </div>
            </div>

            {/* Legal / Ethical Notice */}
            <div className="rounded-2xl border border-amber-500/20 bg-amber-50/70 p-5 text-xs text-ink/85 space-y-1.5">
              <span className="font-bold text-maroon block">
                Statutory Advisory Regarding Heart Disease Management:
              </span>
              <p>
                In strict adherence to the <em>Drugs and Magic Remedies (Objectionable Advertisements) Act</em> and medical ethical guidelines, YES DAY CARE CLINIC does not claim or advertise that heart conditions can be cured without necessary intervention. Consultation and management strategies are evidence-based, medically tailored, and prioritize safe outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Enquiry Form */}
      <AppointmentForm />
    </>
  );
};
