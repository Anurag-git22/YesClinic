import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from './ui/Reveal';
import { Seal } from './ui/Seal';
import { Counter } from './ui/Counter';
import { clinicData } from '@/data/clinic';
import { ShieldCheck, HeartPulse, Building2, Users2, ArrowRight } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="about">
      {/* Background seal ornament watermark */}
      <Seal
        size={460}
        variant="ornament"
        className="-bottom-20 -left-20 hidden md:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Asymmetric Left Visual with Image Reveal Mask */}
          <div className="lg:col-span-5 relative">
            <Reveal duration={0.8}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame echoing the circular seal motif */}
                <div className="relative rounded-3xl overflow-hidden bg-ivory-sand/40 border border-ivory-sand p-2 shadow-elevated">
                  <div className="relative h-[380px] sm:h-[440px] w-full rounded-2xl overflow-hidden bg-gradient-to-br from-ivory-blush via-white to-ivory-sand flex items-center justify-center p-8">
                    {/* Clinic Seal/Logo centered */}
                    <div className="relative text-center">
                      <Seal size={200} variant="full" className="mx-auto drop-shadow-md" />
                    </div>

                    {/* Faint corner badge */}
                    <div className="absolute top-4 left-4 rounded-full bg-white/90 backdrop-blur-xs px-3 py-1 text-[11px] font-bold text-maroon border border-ivory-sand">
                      Sindhudurg, Maharashtra
                    </div>
                  </div>
                </div>

                {/* Overlapping Floating Metric Pill */}
                <div className="absolute -bottom-6 -right-4 sm:right-6 rounded-2xl bg-white p-4 sm:p-5 shadow-spotlight border border-ivory-sand max-w-[220px]">
                  <p className="font-display text-2xl font-bold text-crimson">
                    <Counter target={clinicData.contact.instagram.followersCount} suffix="+" />
                  </p>
                  <p className="text-xs font-semibold text-ink/80 mt-0.5">
                    Community Followers on Instagram
                  </p>
                  <p className="text-[10px] text-ink/50 mt-1">
                    {clinicData.contact.instagram.handle}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
                <Building2 className="h-3.5 w-3.5 text-crimson" />
                <span>About Our Polyclinic & Day Care</span>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon leading-tight">
                Quality Medical Consultations Without Distant Travel
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="font-body text-base sm:text-lg text-ink/85 leading-relaxed">
                Founded with a dedicated mission to serve the healthcare needs of Kudal and the wider Sindhudurg district, <strong>YES DAY CARE CLINIC</strong> operates as an accessible day care centre, polyclinic, cardiac & diabetes evaluation hub, and dermatology outpatient clinic.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
                For years, patients across South Konkan faced tiresome journeys to distant medical centers in Goa, Kolhapur, or Belagavi for clinical cardiology evaluations and specialized diabetes care. Our facility brings senior medical consultation and diagnostic technologies, like 2D echocardiography, right to your neighborhood.
              </p>
            </Reveal>

            {/* Key Highlights Grid */}
            <Reveal delay={0.3}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 rounded-2xl border border-ivory-sand bg-ivory-bg/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
                    <HeartPulse className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-maroon">Cardiac & Echo Expertise</h4>
                    <p className="text-xs text-ink/70 mt-0.5">Non-invasive cardiac evaluation & 2D echocardiography.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-ivory-sand bg-ivory-bg/50 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sage/20 text-sage">
                    <ShieldCheck className="h-5 w-5 text-emerald-800" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-maroon">Honest Clinical Ethics</h4>
                    <p className="text-xs text-ink/70 mt-0.5">Strict adherence to evidence-based healthcare with zero false cure claims.</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.35}>
              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 font-display text-sm font-bold uppercase tracking-wider text-crimson hover:text-maroon transition-colors group"
                >
                  <span>Learn More About Our Philosophy</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
