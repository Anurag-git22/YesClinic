import React from 'react';
import { Link } from 'react-router-dom';
import { Spotlight } from './ui/Spotlight';
import { clinicData } from '@/data/clinic';
import { HeartPulse, Stethoscope, Clock, MapPin, ArrowRight } from 'lucide-react';

export const QuickCards: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse':
        return <HeartPulse className="h-6 w-6 text-crimson" />;
      case 'Stethoscope':
        return <Stethoscope className="h-6 w-6 text-crimson" />;
      case 'Clock':
        return <Clock className="h-6 w-6 text-crimson" />;
      case 'MapPin':
      default:
        return <MapPin className="h-6 w-6 text-crimson" />;
    }
  };

  const handleScroll = (target: string) => {
    if (target.startsWith('#')) {
      const el = document.querySelector(target);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-12 bg-ivory-bg relative z-10" aria-label="Quick Access Cards">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {clinicData.quickCards.map((card) => {
            const isRoute = card.actionType === 'route';

            const cardInner = (
              <Spotlight key={card.id} className="h-full p-6 bg-white group cursor-pointer">
                <div className="flex flex-col justify-between h-full space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-2xl bg-crimson/8 flex items-center justify-center border border-crimson/20 group-hover:scale-105 group-hover:bg-crimson/15 transition-all duration-300">
                      {getIcon(card.icon)}
                    </div>
                    <ArrowRight className="h-4 w-4 text-maroon/30 group-hover:text-crimson group-hover:translate-x-1 transition-all duration-200" />
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-maroon group-hover:text-crimson transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-ink/70 mt-1 font-medium">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
              </Spotlight>
            );

            if (isRoute) {
              return (
                <Link key={card.id} to={card.target} className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-2xl">
                  {cardInner}
                </Link>
              );
            }

            return (
              <div
                key={card.id}
                onClick={() => handleScroll(card.target)}
                className="block h-full outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-2xl"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleScroll(card.target);
                  }
                }}
              >
                {cardInner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
