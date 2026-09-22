import React from 'react';
import { Link } from 'react-router-dom';
import { Seal } from './ui/Seal';
import { clinicData } from '@/data/clinic';
import { Phone, MapPin, Instagram, Mail, HeartPulse, ShieldAlert, ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [isDisclaimerExpanded, setIsDisclaimerExpanded] = React.useState(false);

  return (
    <footer className="relative bg-white border-t border-ivory-sand pt-16 pb-24 sm:pb-16 overflow-hidden">
      {/* Background Seal Watermark */}
      <Seal
        size={600}
        variant="ornament"
        className="-bottom-32 -right-32 hidden xl:block"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-ivory-sand">
          {/* Brand Column with Large 120px Wax-Seal Stamp (ASSET B) */}
          <div className="md:col-span-5 space-y-6">
            <div className="flex items-start gap-5">
              {/* ASSET B: logo-seal.png - Real PNG logo image */}
              <div className="shrink-0 relative group">
                <img
                  src="/logo-seal.png"
                  alt="YES Day Care Clinic Official Seal"
                  className="w-[120px] h-[120px] object-contain transition-all duration-300 
                             rotate-[-4deg] group-hover:rotate-0 drop-shadow-md
                             hover:drop-shadow-lg"
                  style={{
                    filter: 'drop-shadow(0 2px 4px rgba(122, 21, 18, 0.15))'
                  }}
                />
              </div>

              <div>
                <span className="font-display font-bold text-xl sm:text-2xl text-maroon block leading-tight">
                  YES DAY CARE CLINIC
                </span>
                <span className="text-sm font-semibold text-crimson block mt-0.5">
                  Kudal, Sindhudurg, Maharashtra
                </span>
                <p className="text-xs text-ink/70 mt-1 font-medium italic">
                  "{clinicData.identity.tagline}"
                </p>
              </div>
            </div>

            <p className="font-body text-xs sm:text-sm text-ink/75 leading-relaxed max-w-md">
              A community-centered polyclinic, day care centre, cardiology evaluation suite, and dermatology clinic providing transparent, reliable medical consultations in Kudal, Sindhudurg.
            </p>

            {/* Social Link */}
            <div className="pt-1">
              <a
                href={clinicData.contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-maroon/20 bg-ivory-bg px-4 py-2 text-xs font-bold text-maroon hover:border-crimson hover:text-crimson transition-all"
              >
                <Instagram className="h-4 w-4 text-crimson" />
                <span>Follow {clinicData.contact.instagram.handle} ({clinicData.contact.instagram.followersCount.toLocaleString('en-IN')} followers)</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon/80 block">
              Quick Navigation
            </span>
            <ul className="space-y-2.5 text-xs sm:text-sm font-medium">
              <li>
                <Link to="/" className="text-ink/80 hover:text-crimson transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-ink/80 hover:text-crimson transition-colors">
                  About the Clinic
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="text-ink/80 hover:text-crimson transition-colors">
                  Dr. Digambar Naik (Cardiologist)
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-ink/80 hover:text-crimson transition-colors">
                  Clinical Pillars & OPD
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-ink/80 hover:text-crimson transition-colors">
                  Clinic Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-ink/80 hover:text-crimson transition-colors">
                  Contact & Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Direct Contact Numbers & Location */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-maroon/80 block">
              Direct Inquiries
            </span>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-crimson shrink-0 mt-1" />
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    Mobile & WhatsApp
                  </span>
                  <a
                    href={`tel:${clinicData.contact.mobile}`}
                    className="font-display font-bold text-maroon hover:text-crimson transition-colors"
                  >
                    {clinicData.contact.mobileFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-maroon shrink-0 mt-1" />
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    Clinic Landline
                  </span>
                  <a
                    href={`tel:${clinicData.contact.landline}`}
                    className="font-display font-bold text-maroon hover:text-crimson transition-colors"
                  >
                    {clinicData.contact.landlineFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-crimson shrink-0 mt-1" />
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-wider text-ink/50">
                    Location
                  </span>
                  <p className="text-ink/80 leading-relaxed">
                    {clinicData.location.fullFormatted}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Medical & Statutory Compliance Disclaimer - Accordion on mobile, always visible on desktop */}
        <div className="py-6 border-b border-ivory-sand">
          {/* Mobile Accordion View */}
          <div className="block sm:hidden">
            <button
              onClick={() => setIsDisclaimerExpanded(!isDisclaimerExpanded)}
              className="w-full flex items-center justify-between text-left text-xs font-semibold text-maroon hover:text-crimson transition-colors"
              aria-expanded={isDisclaimerExpanded}
              aria-controls="disclaimer-content"
            >
              <span className="flex items-center gap-2">
                <ShieldAlert className="h-3.5 w-3.5 text-crimson shrink-0" />
                <span>Statutory Compliance & Medical Disclaimer</span>
              </span>
              {isDisclaimerExpanded ? (
                <ChevronUp className="h-4 w-4 shrink-0" />
              ) : (
                <ChevronDown className="h-4 w-4 shrink-0" />
              )}
            </button>
            
            {isDisclaimerExpanded && (
              <div 
                id="disclaimer-content"
                className="mt-3 space-y-2 text-[11px] text-ink/65 leading-relaxed animate-in slide-in-from-top-2 duration-300"
              >
                <p className="break-words overflow-wrap-anywhere">
                  <strong className="font-bold text-ink/80">Statutory Compliance:</strong> {clinicData.legal.statutoryComplianceNote}
                </p>
                <p className="break-words overflow-wrap-anywhere">
                  <strong className="font-bold text-ink/80">Medical Disclaimer:</strong> {clinicData.legal.disclaimer}
                </p>
              </div>
            )}
          </div>

          {/* Desktop Always Visible View */}
          <div className="hidden sm:block space-y-2 text-[11px] text-ink/65 leading-relaxed max-w-full">
            <p className="break-words overflow-wrap-anywhere">
              <strong className="font-bold text-ink/80">Statutory Compliance:</strong> {clinicData.legal.statutoryComplianceNote}
            </p>
            <p className="break-words overflow-wrap-anywhere">
              <strong className="font-bold text-ink/80">Medical Disclaimer:</strong> {clinicData.legal.disclaimer}
            </p>
          </div>
        </div>

        {/* Bottom Legal Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/60">
          <p>{clinicData.legal.copyrightText}</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-maroon underline underline-offset-2">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-maroon underline underline-offset-2">
              Terms of Medical Enquiry
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
