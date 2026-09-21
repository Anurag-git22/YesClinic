import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ContentChipProps {
  label?: string;
  className?: string;
  compact?: boolean;
}

/**
 * Standard unconfirmed data indicator across the application.
 * Required per clinical integrity rules: unconfirmed fields must
 * render this blush/maroon chip rather than guessing or fabricating.
 */
export const ContentChip: React.FC<ContentChipProps> = ({
  label = "CONTENT REQUIRED FROM CLINIC",
  className = "",
  compact = false,
}) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-maroon/20 bg-ivory-blush px-2.5 py-0.5 font-medium text-maroon text-[11px] uppercase tracking-wider ${className}`}
      title="This detail is pending formal confirmation by YES Day Care Clinic administration."
    >
      <AlertCircle className={compact ? "w-3 h-3 text-crimson" : "w-3.5 h-3.5 text-crimson"} />
      <span>{label}</span>
    </span>
  );
};
