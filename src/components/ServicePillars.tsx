import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './ui/Reveal';
import { ContentChip } from './ui/ContentChip';
import { clinicData, ServicePillar } from '@/data/clinic';
import { Bed, Stethoscope, HeartPulse, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicePillars: React.FC = () => {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const pillars = clinicData.pillars;
  const currentPillar = pillars[activePillarIndex];

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
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <Stethoscope className="h-3.5 w-3.5 text-crimson" />
              <span>Four Clinical Pillars</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              Comprehensive Care Across Key Specialties
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              Consultation and clinical management provided under certified ethical standards, focused on patient well-being without false guarantee claims.
            </p>
          </div>
        </Reveal>

        {/* Desktop Sticky Scroll Section: Left Navigation Pillars, Right Dynamic Detail View */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Pinned Selection Cards */}
          <div className="lg:col-span-5 space-y-3 sticky top-28">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon/60 block mb-2">
              Select Department
            </span>

            {pillars.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 border flex items-start gap-4 outline-none focus-visible:ring-2 focus-visible:ring-crimson ${
                    isActive
                      ? 'bg-ivory-bg border-crimson shadow-spotlight'
                      : 'bg-white border-ivory-sand hover:border-crimson/30 hover:bg-ivory-bg/50'
                  }`}
                >
                  <div
                    className={`h-12 w-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      isActive
                        ? 'bg-crimson text-white shadow-crimson-soft'
                        : 'bg-ivory-blush text-maroon'
                    }`}
                  >
                    {getPillarIcon(pillar.icon)}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3
                        className={`font-display font-bold text-lg leading-snug truncate ${
                          isActive ? 'text-crimson' : 'text-maroon'
                        }`}
                      >
                        {pillar.title}
                      </h3>

                    </div>
                    <p className="text-xs text-ink/75 mt-1 line-clamp-2 leading-relaxed font-medium">
                      {pillar.shortDesc}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Cross-fading Detail Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="rounded-3xl border border-ivory-sand bg-ivory-bg p-8 shadow-elevated space-y-6"
              >
                {/* Pillar Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-ivory-sand">
                  <div>
                    <span className="inline-block rounded-full bg-crimson/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wider text-crimson">
                      {currentPillar.badge}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-maroon mt-2">
                      {currentPillar.title}
                    </h3>

                  </div>

                  <Link
                    to="/contact#enquiry"
                    className="inline-flex items-center gap-1.5 rounded-full bg-maroon px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson transition-colors"
                  >
                    <span>Enquire OPD</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>

                <p className="font-body text-sm sm:text-base text-ink/85 leading-relaxed">
                  {currentPillar.fullDesc}
                </p>

                {/* Sub-Services & Conditions Handled */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-display font-bold text-sm text-maroon uppercase tracking-wider">
                      Consultation & Clinical Management For:
                    </h4>
                    <span className="text-[11px] text-ink/50 italic">
                      Pending final clinic sign-off
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPillar.subServices.map((sub) => (
                      <div
                        key={sub.id}
                        className="rounded-xl border border-ivory-sand bg-white p-3.5 space-y-1.5 shadow-2xs"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-crimson shrink-0" />
                            <span className="font-display font-bold text-xs text-maroon">
                              {sub.name}
                            </span>
                          </div>
                          {!sub.verified && <ContentChip compact label="Pending" />}
                        </div>
                        <p className="text-[11px] text-ink/70 leading-normal pl-6 font-medium">
                          {sub.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2 text-xs text-ink/60 bg-white/70 rounded-xl p-3 border border-ivory-sand/80">
                  <p>
                    <strong>Medical Note:</strong> Treatments and consultations are recommended based on professional diagnosis. In compliance with statutory regulations, no guarantees or claims of surgery-free heart disease cures are made.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View: Stacked Responsive Pillar Cards */}
        <div className="lg:hidden space-y-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl border border-ivory-sand bg-ivory-bg p-6 shadow-sm space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-crimson text-white flex items-center justify-center shrink-0">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-maroon">
                    {pillar.title}
                  </h3>

                </div>
              </div>

              <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                {pillar.shortDesc}
              </p>

              <div className="space-y-2 pt-2 border-t border-ivory-sand">
                <span className="text-[11px] font-bold uppercase tracking-wider text-maroon/70 block">
                  Common Consultations:
                </span>
                <div className="grid grid-cols-1 gap-2">
                  {pillar.subServices.map((sub) => (
                    <div key={sub.id} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-lg bg-white border border-ivory-sand">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-crimson shrink-0" />
                        <span className="font-medium text-ink/90">{sub.name}</span>
                      </div>
                      {!sub.verified && <ContentChip compact label="Pending" />}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact#enquiry"
                  className="block text-center rounded-xl bg-maroon py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-crimson transition-colors"
                >
                  Enquire About {pillar.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
