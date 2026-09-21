import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Phone, Star, MapPin, ArrowRight, ShieldCheck, HeartPulse } from 'lucide-react';
import { Magnetic } from './ui/Magnetic';
import { ShimmerText } from './ui/ShimmerText';
import { ECGLine } from './ui/ECGLine';
import { Counter } from './ui/Counter';
import { Seal } from './ui/Seal';
import { CallSelectionModal } from './CallSelectionModal';
import { clinicData } from '@/data/clinic';

export const Hero: React.FC = () => {
  const [callModalOpen, setCallModalOpen] = useState(false);

  return (
    <section className="relative pt-32 sm:pt-40 lg:pt-44 pb-16 sm:pb-24 overflow-hidden">
      {/* Slow spinning seal watermark ornament in hero background */}
      <Seal
        size={520}
        variant="ornament"
        className="-top-12 -right-24 hidden lg:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Left Content Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Top Verification & Location Pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-maroon/15 bg-white/80 backdrop-blur-xs px-3.5 py-1.5 shadow-xs"
            >
              <span className="flex h-2 w-2 rounded-full bg-sage animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-maroon">
                Opposite Police Station, Kudal
              </span>
              <span className="text-maroon/40">•</span>
              <span className="text-xs font-semibold text-crimson">
                Sindhudurg, Maharashtra
              </span>
            </motion.div>

            {/* Headline with Text Shimmer */}
            <div className="space-y-3">
              <h1 className="font-display text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-maroon leading-[1.08]">
                <ShimmerText text="Trusted Healthcare," as="span" className="block" />
                <span className="block text-maroon">Close to Home.</span>
              </h1>
              <p className="text-base sm:text-lg text-ink/80 font-medium leading-relaxed">
                Quality medical care for your family in Kudal
              </p>
            </div>

            {/* Sub-intro copy */}
            <p className="font-body text-base sm:text-lg text-ink/85 leading-relaxed max-w-2xl">
              YES DAY CARE CLINIC brings comprehensive multispecialty care to Sindhudurg. Featuring specialist cardiology consultation and 2D echocardiography with <strong>Dr. Digambar Naik</strong>, dedicated diabetes monitoring, day care observation, and clinical dermatology in Kudal.
            </p>

            {/* Cardiac ECG Rhythm Motif Line */}
            <div className="max-w-md py-1">
              <ECGLine variant="compact" />
            </div>

            {/* Call to Actions (CTAs) */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Magnetic>
                <Link
                  to="/contact#enquiry"
                  className="inline-flex items-center justify-center gap-2.5 rounded-full bg-crimson px-7 py-4 font-body text-sm font-bold uppercase tracking-wider text-white shadow-crimson-soft transition-all duration-200 hover:bg-crimson-lit hover:shadow-lg focus-visible:ring-2 focus-visible:ring-crimson min-h-[48px]"
                >
                  <Calendar className="h-4 w-4 text-white" />
                  <span>Book an Appointment</span>
                </Link>
              </Magnetic>

              <button
                onClick={() => setCallModalOpen(true)}
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-maroon/25 bg-white/60 px-6 py-3.5 font-body text-sm font-bold uppercase tracking-wider text-maroon transition-all duration-200 hover:border-crimson hover:text-crimson hover:bg-white focus-visible:ring-2 focus-visible:ring-crimson min-h-[48px]"
              >
                <Phone className="h-4 w-4 text-crimson" />
                <span>Call Clinic</span>
              </button>
            </div>

            {/* Mini Trust Indicators Strip */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-xs font-semibold text-ink/75 border-t border-ivory-sand/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-sage" />
                <span>Zero Advance Booking Fee</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartPulse className="h-4 w-4 text-crimson" />
                <span>Cardiology & 2D Echo</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-maroon" />
                <span>Ground Floor Accessibility</span>
              </div>
            </div>
          </div>

          {/* Right Floating Visual Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Central Clinical Focus Card */}
              <div className="relative overflow-hidden rounded-3xl bg-white p-7 sm:p-9 shadow-elevated border border-ivory-sand/80">
                {/* Background hairline seal */}
                <div className="absolute -right-8 -bottom-8 opacity-10 pointer-events-none">
                  <Seal size={240} variant="mark" />
                </div>

                {/* Doctor Visiting Spotlight Card */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Doctor Photo */}
                      <div className="relative shrink-0">
                        <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-crimson/30 bg-ivory-bg">
                          <img 
                            src="/Dr.png" 
                            alt="Dr. Digambar Naik"
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white bg-crimson/10 flex items-center justify-center">
                          <HeartPulse className="h-3.5 w-3.5 text-crimson" />
                        </div>
                      </div>

                      <div>
                        <span className="inline-block rounded-full bg-ivory-blush px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-maroon">
                          Visiting Consultant
                        </span>
                        <h3 className="font-display text-2xl font-bold text-maroon mt-2">
                          {clinicData.doctor.name}
                        </h3>
                        <p className="text-xs font-semibold text-crimson">
                          {clinicData.doctor.title}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs font-medium text-ink/80 leading-relaxed">
                    {clinicData.doctor.title} specializing in echocardiography and clinical cardiology evaluations.
                  </p>

                  {/* Qualifications chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {clinicData.doctor.qualifications.map((q) => (
                      <span
                        key={q}
                        className="rounded-md border border-maroon/15 bg-ivory-bg px-2 py-0.5 font-mono text-[10px] font-semibold text-maroon"
                      >
                        {q}
                      </span>
                    ))}
                  </div>

                  {/* Honest availability reminder */}
                  <div className="rounded-xl border border-ivory-sand bg-ivory-bg/80 p-3 text-xs text-ink/80">
                    <span className="font-bold text-maroon">Consultation Schedule: </span>
                    {clinicData.doctor.visitingScheduleNotice}
                  </div>

                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-2 font-display text-xs font-bold uppercase tracking-wider text-crimson hover:text-maroon transition-colors group"
                  >
                    <span>View Doctor Credentials</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Floating Stat Card: 5.0 Google Rating & Follower Count */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-6 rounded-2xl bg-white p-4 shadow-spotlight border border-ivory-sand flex items-center gap-4 relative z-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600 shrink-0">
                  <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <Counter target={5.0} decimals={1} className="text-xl font-bold text-maroon" />
                    <span className="text-xs font-semibold text-ink/70">/ 5.0 Rating</span>
                  </div>
                  <p className="text-[11px] text-ink/60">
                    ~<Counter target={clinicData.contact.google.reviewsCount} /> Google Reviews • Verified Local Care
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <CallSelectionModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </section>
  );
};
