import React from 'react';
import { MapPin, Navigation, ExternalLink, AlertTriangle } from 'lucide-react';
import { clinicData } from '@/data/clinic';

/**
 * ⚠️ // TODO: ADDRESS CONFLICT
 * Note: Two addresses exist in local directory listings:
 * 1) "Kumbharwadi, beside Shreeram Hospital, Opposite Police Station"
 * 2) "Matoshree Building, Opposite Police Station"
 * Displayed dynamically from clinicData.location config.
 */
export const MapSection: React.FC = () => {
  const { location } = clinicData;

  return (
    <div className="rounded-3xl border border-ivory-sand bg-white p-7 sm:p-9 shadow-elevated flex flex-col justify-between h-full space-y-6" id="location">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-crimson/10 text-crimson">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-maroon">
                Clinic Location & Directions
              </h3>

            </div>
          </div>

          <span className="rounded-full bg-sage/20 px-3 py-1 text-xs font-bold text-emerald-800">
            Ground Floor Access
          </span>
        </div>

        {/* Address Card */}
        <div className="rounded-2xl border border-ivory-sand bg-ivory-bg/60 p-4 space-y-2">
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-crimson shrink-0 mt-1" />
            <div>
              <p className="font-display font-bold text-sm text-maroon">
                {clinicData.identity.englishDisplay}
              </p>
              <p className="text-xs sm:text-sm text-ink/85 mt-0.5 leading-relaxed">
                {location.fullFormatted}
              </p>

            </div>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-ivory-sand bg-ivory-sand/40">
          <iframe
            title="YES Day Care Clinic Location Map"
            src="https://maps.google.com/maps?q=16.0104,73.6894&hl=en&z=15&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-4 border-t border-ivory-sand flex flex-wrap items-center justify-between gap-3">
        <span className="text-xs text-ink/65 font-medium">
          Opposite Police Station, Kudal 416520
        </span>
        <a
          href={location.mapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-crimson px-5 py-2.5 font-display text-xs font-bold uppercase tracking-wider text-white shadow-crimson-soft hover:bg-crimson-lit transition-all"
        >
          <Navigation className="h-3.5 w-3.5" />
          <span>Get Directions</span>
        </a>
      </div>
    </div>
  );
};
