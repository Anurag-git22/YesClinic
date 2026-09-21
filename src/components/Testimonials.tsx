import React from 'react';
import { Reveal } from './ui/Reveal';
import { Counter } from './ui/Counter';
import { clinicData } from '@/data/clinic';
import { Star, ExternalLink, MessageSquareQuote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const reviews = clinicData.testimonials.items;
  const hasReviews = reviews && reviews.length > 0;

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden" id="reviews">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-ivory-blush px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-maroon">
              <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
              <span>Patient Feedback</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-maroon">
              What Our Community Says
            </h2>

            <p className="font-body text-sm sm:text-base text-ink/75 leading-relaxed">
              We uphold clinical ethics and patient privacy. All reviews originate from verified public Google reviews.
            </p>
          </div>
        </Reveal>

        {/* Google Ratings Hero Badge Card */}
        <div className="max-w-xl mx-auto mb-12 rounded-3xl border border-ivory-sand bg-ivory-bg/70 p-6 text-center shadow-xs flex flex-col items-center space-y-3">
          <div className="flex items-center gap-1.5 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-500 text-amber-500" />
            ))}
          </div>

          <div className="flex items-baseline justify-center gap-2">
            <span className="font-display text-3xl font-bold text-maroon">5.0</span>
            <span className="text-sm font-semibold text-ink/70">out of 5.0</span>
          </div>

          <p className="text-xs sm:text-sm text-ink/80 font-medium">
            Based on ~<Counter target={clinicData.contact.google.reviewsCount} /> verified reviews on Google Maps
          </p>

          <a
            href={clinicData.contact.google.reviewUrl || "https://maps.google.com/?q=YES+DAY+CARE+CLINIC+Kudal"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white border border-ivory-sand px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-maroon hover:border-crimson hover:text-crimson transition-all shadow-2xs group"
          >
            <span>{clinicData.testimonials.googleReviewsCta}</span>
            <ExternalLink className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* Reviews List or Graceful Empty State */}
        {hasReviews ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-2xl border border-ivory-sand bg-ivory-bg/50 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-ink/85 italic leading-relaxed">
                    "{rev.text}"
                  </p>
                </div>

                <div className="pt-3 border-t border-ivory-sand/60 flex items-center justify-between text-xs">
                  <span className="font-display font-bold text-maroon">{rev.author}</span>
                  <span className="text-ink/50">{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-dashed border-ivory-sand bg-ivory-bg/40 p-10 text-center max-w-2xl mx-auto space-y-4">
            <MessageSquareQuote className="h-10 w-10 text-maroon/30 mx-auto" />
            <div className="space-y-1">
              <h3 className="font-display font-bold text-base text-maroon">
                Consent-Verified Patient Reviews
              </h3>
              <p className="text-xs sm:text-sm text-ink/70 leading-relaxed max-w-md mx-auto">
                {clinicData.testimonials.emptyStateMessage}
              </p>
            </div>
            <div>
              <a
                href={clinicData.contact.google.reviewUrl || "https://maps.google.com/?q=YES+DAY+CARE+CLINIC+Kudal"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-crimson hover:text-maroon underline underline-offset-4"
              >
                <span>Read Live Reviews On Google Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
