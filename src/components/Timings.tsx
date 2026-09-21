import React from 'react';
import { Clock, AlertCircle, Phone, Calendar } from 'lucide-react';
import { ContentChip } from './ui/ContentChip';
import { clinicData } from '@/data/clinic';

export const Timings: React.FC = () => {
  const { timings } = clinicData;

  return (
    <div className="rounded-3xl border border-ivory-sand bg-white p-7 sm:p-9 shadow-elevated flex flex-col justify-between h-full space-y-6" id="timings">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
              <Clock className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-maroon">
                Clinic Timings & OPD
              </h3>

            </div>
          </div>

          {!timings.confirmed && <ContentChip compact label="Pending Sign-Off" />}
        </div>

        {/* Schedule List */}
        <div className="space-y-3 pt-2">
          {timings.schedule.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-ivory-sand bg-ivory-bg/60 p-4 space-y-1.5"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-sm text-maroon">
                  {item.days}
                </span>

              </div>
              <p className="text-xs sm:text-sm font-semibold text-ink/90">
                {item.hours}
              </p>
              {item.note && (
                <p className="text-[11px] text-ink/65 italic pt-0.5">
                  {item.note}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Unconfirmed notice chip banner */}
        <div className="rounded-2xl border border-amber-500/20 bg-amber-50/60 p-3.5 text-xs text-ink/80 flex items-start gap-2.5">
          <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
          <p>
            {timings.statusNote} Doctor visiting hours change based on appointment volume.
          </p>
        </div>
      </div>

      {/* Call Ahead Recommendation */}
      <div className="pt-4 border-t border-ivory-sand flex flex-wrap items-center justify-between gap-3 text-xs">
        <span className="text-ink/70 font-medium">To confirm current day availability:</span>
        <a
          href={`tel:${clinicData.contact.mobile}`}
          className="inline-flex items-center gap-1.5 font-display font-bold uppercase tracking-wider text-crimson hover:text-maroon transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          <span>Call: {clinicData.contact.mobileFormatted}</span>
        </a>
      </div>
    </div>
  );
};
