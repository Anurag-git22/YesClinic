import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  markSize?: number;
  showSubtitle?: boolean;
  markOnly?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  markSize = 44,
  showSubtitle = true,
  markOnly = false,
}) => {
  return (
    <Link
      to="/"
      aria-label="YES Day Care Clinic, Kudal - Home"
      className={`group inline-flex items-center gap-3 select-none outline-none focus-visible:ring-2 focus-visible:ring-crimson rounded-lg ${className}`}
    >
      {/* Logo Image - should be mark-only (circular icon without text) */}
      <img
        src="/logo-horizontal.png"
        alt="YES Day Care Clinic"
        className="transition-all duration-300 group-hover:scale-105 h-10 w-10 object-contain"
        style={{ 
          height: `${markSize}px`,
          width: `${markSize}px`
        }}
      />
      
      {/* Clinic Name Text beside the logo mark */}
      <div className="flex flex-col">
        <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-maroon group-hover:text-crimson transition-colors duration-200 leading-none">
          YES <span className="font-medium text-maroon/90">DAY CARE CLINIC</span>
        </span>
        {showSubtitle && (
          <span className="hidden sm:inline-block text-[11px] font-semibold text-crimson tracking-wider mt-1 leading-none">
            Kudal, Sindhudurg
          </span>
        )}
      </div>
    </Link>
  );
};
