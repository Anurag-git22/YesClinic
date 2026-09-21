import React from 'react';
import { Reveal } from './ui/Reveal';
import { clinicData } from '@/data/clinic';
import { Award, MapPin, Star, ShieldCheck, Heart, Home } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="h-6 w-6 text-crimson" />;
      case 'MapPin':
        return <MapPin className="h-6 w-6 text-crimson" />;
      case 'Star':
        return <Star className="h-6 w-6 text-amber-500 fill-amber-500/20" />;
      case 'ShieldCheck':
        return <ShieldCheck className="h-6 w-6 text-sage" />;
      case 'Heart':
        return <Heart className="h-6 w-6 text-crimson" />;
      case 'Home':
      default:
        return <Home className="h-6 w-6 text-maroon" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-ivory-bg relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <ShieldCheck className="h-3.5 w-3.5 text-crimson" />
              <span>Patient Trust & Quality Standards</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              Why Choose YES Day Care Clinic
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              We prioritize clinical accuracy, ethical transparency, and patient comfort above everything else.
            </p>
          </div>
        </Reveal>

        {/* 6 Cards Grid with Subtle Hover Lift */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinicData.whyChooseUs.map((item, idx) => (
            <Reveal key={item.id} delay={0.06 * idx}>
              <div className="h-full rounded-2xl border border-ivory-sand bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-spotlight hover:border-crimson/30 group">
                <div className="h-12 w-12 rounded-xl bg-ivory-blush flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-crimson/10 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <div className="space-y-1.5">
                  <h3 className="font-display font-bold text-lg text-maroon group-hover:text-crimson transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="font-body text-xs sm:text-sm text-ink/80 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
