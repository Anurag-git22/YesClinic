import React from 'react';
import { Reveal } from './ui/Reveal';
import { clinicData } from '@/data/clinic';
import { Activity, HeartPulse, BedDouble, Thermometer, Accessibility, Wind } from 'lucide-react';

export const Facilities: React.FC = () => {
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Activity':
        return <Activity className="h-6 w-6 text-crimson" />;
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6 text-crimson" />;
      case 'BedDouble':
        return <BedDouble className="h-6 w-6 text-crimson" />;
      case 'Thermometer':
        return <Thermometer className="h-6 w-6 text-crimson" />;
      case 'Accessibility':
        return <Accessibility className="h-6 w-6 text-crimson" />;
      case 'Wind':
      default:
        return <Wind className="h-6 w-6 text-crimson" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="facilities">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <Activity className="h-3.5 w-3.5 text-crimson" />
              <span>Modern Infrastructure</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              Equipped for Safe & Prompt Care
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              Designed to ensure patient comfort, swift diagnostic triage, and short-stay clinical observation right in Kudal.
            </p>
          </div>
        </Reveal>

        {/* Desktop Grid / Mobile Horizontal Scrolling Rail */}
        <div className="flex overflow-x-auto pb-4 pt-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 scrollbar-none snap-x snap-mandatory">
          {clinicData.facilities.map((fac, idx) => (
            <div
              key={fac.id}
              className="min-w-[280px] sm:min-w-0 snap-center shrink-0 sm:shrink rounded-2xl border border-ivory-sand bg-ivory-bg/60 p-6 transition-all duration-200 hover:border-crimson/30 hover:bg-white hover:shadow-spotlight"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-ivory-sand shadow-2xs mb-4">
                {getFacilityIcon(fac.icon)}
              </div>
              <h3 className="font-display font-bold text-base text-maroon">
                {fac.title}
              </h3>
              <p className="font-body text-xs sm:text-sm text-ink/70 mt-2 leading-relaxed font-medium">
                {fac.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
