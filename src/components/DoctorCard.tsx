import React from 'react';
import { Link } from 'react-router-dom';
import { TiltCard } from './ui/TiltCard';
import { Reveal } from './ui/Reveal';
import { Seal } from './ui/Seal';
import { clinicData } from '@/data/clinic';
import { HeartPulse, Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

export const DoctorCard: React.FC = () => {
  const doctor = clinicData.doctor;

  return (
    <section className="py-20 lg:py-28 bg-ivory-bg relative overflow-hidden" id="doctor">
      {/* Watermark seal behind section */}
      <Seal
        size={500}
        variant="ornament"
        className="top-10 -right-20 hidden lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <HeartPulse className="h-3.5 w-3.5 text-crimson" />
              <span>Cardiology & Specialist Consultation</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              Consult with Dr. Digambar Naik
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              Leading clinical evaluations, diagnostic 2D echocardiography, and cardiovascular disease management for Kudal and Sindhudurg.
            </p>
          </div>
        </Reveal>

        {/* 3D Tilt Doctor Card */}
        <div className="max-w-4xl mx-auto">
          <TiltCard maxTilt={6}>
            <div className="rounded-3xl bg-white p-7 sm:p-10 lg:p-12 shadow-elevated border border-ivory-sand/80 relative overflow-hidden">
              {/* Top Accent Bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-crimson via-maroon to-crimson-lit" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                {/* Doctor Avatar with Real Photo */}
                <div className="md:col-span-4 flex flex-col items-center text-center space-y-4">
                  <div className="relative h-44 w-44 rounded-full border-4 border-ivory-sand bg-ivory-blush p-1 shadow-md overflow-hidden">
                    {/* Doctor Photo */}
                    <img 
                      src="/Dr.png" 
                      alt="Dr. Digambar Naik"
                      className="h-full w-full object-cover rounded-full"
                    />
                    {/* Decorative ring overlay */}
                    <div className="absolute inset-0 rounded-full border-2 border-white/30" />
                  </div>

                  <div>
                    <h3 className="font-display text-2xl font-bold text-maroon">
                      {doctor.name}
                    </h3>

                    <p className="text-xs font-semibold uppercase tracking-wider text-ink/60 mt-1">
                      {doctor.expertise}
                    </p>
                  </div>

                  {/* Experience is rendered ONLY if verified in config; null omits it completely */}
                  {doctor.experienceYears !== null && (
                    <span className="inline-block rounded-full bg-ivory-blush px-3 py-1 text-xs font-bold text-maroon">
                      {doctor.experienceYears}+ Years Clinical Experience
                    </span>
                  )}
                </div>

                {/* Doctor Details & Qualifications */}
                <div className="md:col-span-8 space-y-6">
                  {/* Stated Qualifications exactly as printed on clinic poster */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-maroon/70 mb-2.5">
                      Medical Qualifications & Fellowships
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {doctor.qualifications.map((qual) => (
                        <span
                          key={qual}
                          className="rounded-lg border border-maroon/20 bg-ivory-bg px-3 py-1.5 font-mono text-xs font-bold text-maroon shadow-2xs"
                        >
                          {qual}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Specialty Focus Areas */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-maroon/70 mb-2.5">
                      Clinical Focus & Expertise
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-ink/80">
                      {doctor.specialties.map((spec) => (
                        <li key={spec} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 text-crimson shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Honest Visiting Consultant Notice */}
                  <div className="rounded-2xl border border-amber-500/25 bg-amber-50/70 p-4 text-xs leading-relaxed text-ink/85">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-maroon">
                          Visiting Consultant Availability:
                        </p>
                        <p className="mt-0.5 text-ink/80">
                          {doctor.visitingScheduleNotice}
                        </p>

                      </div>
                    </div>
                  </div>

                  {/* CTA Booking Button */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Link
                      to="/contact#enquiry"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-crimson px-6 py-3 font-body text-xs font-bold uppercase tracking-wider text-white shadow-crimson-soft transition-all duration-200 hover:bg-crimson-lit focus-visible:ring-2 focus-visible:ring-crimson min-h-[44px]"
                    >
                      <Calendar className="h-4 w-4 text-white" />
                      <span>Book Consultation With Dr. Naik</span>
                    </Link>

                    <a
                      href={`tel:${clinicData.contact.mobile}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-maroon hover:text-crimson transition-colors"
                    >
                      <span>Inquire Next Camp Date</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
};
