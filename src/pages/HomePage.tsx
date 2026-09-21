import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { SEO } from '@/components/SEO';
import { Hero } from '@/components/Hero';
import { MarqueeRibbon } from '@/components/ui/Marquee';
import { QuickCards } from '@/components/QuickCards';
import { Seal } from '@/components/ui/Seal';
import { Reveal } from '@/components/ui/Reveal';
import { ECGLine } from '@/components/ui/ECGLine';
import { Counter } from '@/components/ui/Counter';
import { CallSelectionModal } from '@/components/CallSelectionModal';
import { clinicData } from '@/data/clinic';
import { 
  ArrowRight, 
  HeartPulse, 
  Stethoscope, 
  Bed, 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  Star, 
  Phone, 
  Calendar 
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [callModalOpen, setCallModalOpen] = useState(false);

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bed':
        return <Bed className="h-6 w-6" />;
      case 'Stethoscope':
        return <Stethoscope className="h-6 w-6" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6" />;
      case 'Sparkles':
      default:
        return <Sparkles className="h-6 w-6" />;
    }
  };

  return (
    <>
      <SEO
        title="YES Day Care Clinic Kudal | Polyclinic, Diabetes & Heart Care"
        description="YES Day Care Clinic in Kudal, Sindhudurg offers expert clinical cardiology, 2D echocardiography, diabetes care, polyclinic OPD, and day care observation with Dr. Digambar Naik."
        canonicalPath="/"
      />

      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Bilingual Marquee Ribbon */}
      <MarqueeRibbon />

      {/* 3. Quick Navigation Cards linking to Multipage Routes */}
      <QuickCards />

      {/* 4. Concise Clinic Overview (Summary with Link to /about) */}
      <section className="py-16 sm:py-20 bg-white relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-5">
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
                  <ShieldCheck className="h-3.5 w-3.5 text-crimson" />
                  <span>Welcome to YES Day Care Clinic</span>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-maroon">
                  Accessible, Ethical Healthcare for Sindhudurg
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p className="font-body text-base text-ink/80 leading-relaxed">
                  Conveniently situated on the ground floor directly opposite Kudal Police Station, <strong>YES DAY CARE CLINIC</strong> unites specialist clinical cardiology, diabetes evaluation, day care observation, and general outpatient consultations under one roof—saving patients unnecessary, grueling travel to distant cities.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border border-ivory-sand bg-ivory-bg p-3.5 space-y-1">
                    <span className="font-display font-bold text-sm text-maroon block">Ground Floor</span>
                    <span className="text-xs text-ink/70">Wheelchair friendly, zero staircase struggle.</span>
                  </div>
                  <div className="rounded-xl border border-ivory-sand bg-ivory-bg p-3.5 space-y-1">
                    <span className="font-display font-bold text-sm text-maroon block">Specialist Echo</span>
                    <span className="text-xs text-ink/70">2D Echocardiography & ECG right in Kudal.</span>
                  </div>
                  <div className="rounded-xl border border-ivory-sand bg-ivory-bg p-3.5 space-y-1">
                    <span className="font-display font-bold text-sm text-maroon block">Day Care Comfort</span>
                    <span className="text-xs text-ink/70">Short-stay recovery without overnight stay.</span>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.25}>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-maroon/20 bg-white px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:border-crimson hover:text-crimson transition-all group"
                  >
                    <span>Read Full Clinic Story & Standards</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Badge Preview */}
            <div className="lg:col-span-5">
              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-ivory-sand bg-ivory-bg p-8 sm:p-10 shadow-elevated text-center space-y-5 relative overflow-hidden">
                  <Seal size={180} variant="stamp" className="mx-auto" />

                  <div className="pt-3 border-t border-ivory-sand/80 flex items-center justify-center gap-6 text-xs text-ink/70">
                    <div>
                      <span className="font-display font-bold text-base text-maroon block">5.0 ★</span>
                      <span>Google Rating</span>
                    </div>
                    <div className="h-6 w-px bg-ivory-sand" />
                    <div>
                      <span className="font-display font-bold text-base text-maroon block">3,185+</span>
                      <span>Community</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Cardiac ECG Divider */}
      <div className="max-w-4xl mx-auto px-4">
        <ECGLine variant="divider" />
      </div>

      {/* 5. Four Clinical Pillars Preview Grid (Links to /services) */}
      <section className="py-16 sm:py-20 bg-ivory-bg relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto space-y-2.5 mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
                <Stethoscope className="h-3.5 w-3.5 text-crimson" />
                <span>Specialized Outpatient Care</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-maroon">
                Our Four Clinical Pillars
              </h2>

            </div>
          </Reveal>

          {/* 4 Pillars Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {clinicData.pillars.map((pillar, idx) => (
              <Reveal key={pillar.id} delay={0.06 * idx}>
                <div className="h-full rounded-2xl border border-ivory-sand bg-white p-6 flex flex-col justify-between space-y-4 hover:shadow-spotlight hover:border-crimson/30 transition-all duration-300">
                  <div className="space-y-3">
                    <div className="h-12 w-12 rounded-xl bg-ivory-blush text-maroon flex items-center justify-center">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-maroon">
                        {pillar.title}
                      </h3>

                    </div>
                    <p className="text-xs text-ink/75 leading-relaxed font-medium">
                      {pillar.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-ivory-sand/60">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson hover:text-maroon transition-colors group"
                    >
                      <span>Explore Pillar</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full bg-maroon px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-sm hover:bg-crimson transition-all"
              >
                <span>View All Services, Tests & Consultation Details</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. Doctor Spotlight Card (Links to /doctors) */}
      <section className="py-16 sm:py-20 bg-white relative">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="rounded-3xl border border-ivory-sand bg-ivory-bg p-8 sm:p-12 shadow-elevated grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4 text-center space-y-3">
                <div className="h-32 w-32 rounded-full border-4 border-white bg-ivory-blush p-1 mx-auto overflow-hidden shadow-md">
                  <img 
                    src="/Dr.png" 
                    alt="Dr. Digambar Naik"
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <div>
                  <span className="inline-block rounded-full bg-ivory-blush px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-maroon">
                    Visiting Specialist
                  </span>
                  <h3 className="font-display text-2xl font-bold text-maroon mt-1">
                    {clinicData.doctor.name}
                  </h3>

                </div>
              </div>

              <div className="md:col-span-8 space-y-4">
                <h4 className="font-display text-xl font-bold text-maroon">
                  Cardiology & 2D Echocardiography Consultation
                </h4>
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                  Specialist cardiac evaluations, 2D echocardiography, and blood pressure titration conducted by Dr. Digambar Naik on scheduled camp and visiting clinic dates.
                </p>

                {/* Qualifications */}
                <div className="flex flex-wrap gap-1.5">
                  {clinicData.doctor.qualifications.map((q) => (
                    <span
                      key={q}
                      className="rounded-md border border-maroon/20 bg-white px-2 py-0.5 font-mono text-[11px] font-bold text-maroon"
                    >
                      {q}
                    </span>
                  ))}
                </div>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <Link
                    to="/doctors"
                    className="inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-display text-xs font-bold uppercase tracking-wider text-white shadow-crimson-soft hover:bg-crimson-lit transition-all"
                  >
                    <Calendar className="h-3.5 w-3.5" />
                    <span>View Profile & Camp Schedule</span>
                  </Link>

                  <button
                    onClick={() => setCallModalOpen(true)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-maroon hover:text-crimson transition-colors"
                  >
                    <Phone className="h-3.5 w-3.5 text-crimson" />
                    <span>Inquire Next Camp Date</span>
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Community Trust & Google Review Strip */}
      <section className="py-14 bg-ivory-blush/60 border-y border-ivory-sand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-600 shrink-0">
                <Star className="h-6 w-6 fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <span className="font-display font-bold text-2xl text-maroon">5.0 / 5.0</span>
                  <span className="text-xs font-semibold text-ink/70">Google Verified</span>
                </div>
                <p className="text-xs text-ink/70">
                  Backed by ~<Counter target={clinicData.contact.google.reviewsCount} /> genuine patient reviews in Kudal.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={clinicData.contact.google.reviewUrl || "https://maps.google.com/?q=YES+DAY+CARE+CLINIC+Kudal"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white border border-ivory-sand px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:border-crimson hover:text-crimson transition-all shadow-2xs"
              >
                <span>Read Google Reviews</span>
                <ArrowRight className="h-3 w-3" />
              </a>

              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-transparent px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:bg-white transition-all"
              >
                <span>Tour Clinic Gallery</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Visit & Appointment Next Step Strip */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-ivory-sand bg-gradient-to-br from-ivory-bg to-ivory-blush/40 p-8 sm:p-12 text-center space-y-6">
            <div className="space-y-2 max-w-xl mx-auto">
              <span className="inline-block rounded-full bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-crimson border border-ivory-sand">
                Visit or Book In Advance
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-maroon">
                Ready to Schedule a Consultation?
              </h2>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                Reach us directly for doctor appointment confirmation, timings, or driving directions to our ground-floor clinic opposite Kudal Police Station.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact#enquiry"
                className="inline-flex items-center gap-2 rounded-full bg-crimson px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-crimson-soft hover:bg-crimson-lit transition-all"
              >
                <Calendar className="h-4 w-4" />
                <span>Go to Appointment Form</span>
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-maroon/25 bg-white px-7 py-3.5 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:border-crimson hover:text-crimson transition-all"
              >
                <MapPin className="h-4 w-4 text-crimson" />
                <span>View Location & Hours</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallSelectionModal
        isOpen={callModalOpen}
        onClose={() => setCallModalOpen(false)}
      />
    </>
  );
};
