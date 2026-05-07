interface IconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  className?: string;
}

const defaults = { size: 24, color: "currentColor", strokeWidth: 1.6 };

export function Compass({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

export function Paddle({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M8 6 Q12 3 16 6 Q12 9 8 6Z" fill={color} stroke="none" opacity="0.8" />
      <path d="M8 18 Q12 15 16 18 Q12 21 8 18Z" fill={color} stroke="none" opacity="0.8" />
    </svg>
  );
}

export function Wave({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12 Q5 8 8 12 Q11 16 14 12 Q17 8 20 12 Q21.5 14 22 12" />
      <path d="M2 17 Q5 13 8 17 Q11 21 14 17 Q17 13 20 17" opacity="0.5" />
    </svg>
  );
}

export function Leaf({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}

export function Droplet({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
    </svg>
  );
}

export function Binoculars({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="6" cy="14" r="4" />
      <circle cx="18" cy="14" r="4" />
      <path d="M10 14h4" />
      <path d="M2 14V9l4-5" />
      <path d="M22 14V9l-4-5" />
    </svg>
  );
}

export function Star({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export function Shield({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

export function Award({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

export function MapPin({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function Mail({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export function CheckCircle({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Fish({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6z" />
      <path d="M18 12v.5" />
      <path d="M16 17.93a9.77 9.77 0 0 1 0-11.86" />
      <path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 6 4 10.5 6.27 10.5" />
      <path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4" />
      <path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H8c1.133-1.144 2.2-2.844 2.46-4.26" />
    </svg>
  );
}

export function Bird({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 7h.01" />
      <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
      <path d="m20 7 2 .5-2 .5" />
      <path d="M10 18v3" />
      <path d="M14 17.75V21" />
      <path d="M7 18a6 6 0 0 0 3.84-10.61" />
    </svg>
  );
}

export function Turtle({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 11c-1 1-2 2-2 4a4 4 0 0 0 8 0c0-2-1-3-2-4" />
      <path d="M10 11V7a2 2 0 1 1 4 0v4" />
      <path d="M6 15H4a2 2 0 0 1 0-4h2" />
      <path d="M18 15h2a2 2 0 0 0 0-4h-2" />
      <path d="M9 19l-1 2" />
      <path d="M15 19l1 2" />
    </svg>
  );
}

export function Gator({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  // Simplified reptile / scale icon
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M2 12h2l2-3h12l2 3h2" />
      <path d="M4 12v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3" />
      <path d="M8 9V7" />
      <path d="M16 9V7" />
      <path d="M5 16l-1 3" />
      <path d="M19 16l1 3" />
      <path d="M9 16v3" />
      <path d="M15 16v3" />
    </svg>
  );
}

export function Otter({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  // Playful animal silhouette — uses a paw-like shape
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="9" r="5" />
      <path d="M8.5 8.5c-.5-1-1.5-1-2-.5" />
      <path d="M15.5 8.5c.5-1 1.5-1 2-.5" />
      <path d="M10 11.5c.5.5 1 .7 2 .7s1.5-.2 2-.7" />
      <path d="M7 14c-1.5 1-2 3-1 4.5" />
      <path d="M17 14c1.5 1 2 3 1 4.5" />
      <path d="M9 18.5c1 1 4 1 6 0" />
    </svg>
  );
}

export function Butterfly({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 2C6 2 2 6 2 10c0 2 2 4 4 3s4-3 6-3 4 2 6 3 4-1 4-3c0-4-4-8-10-8z" />
      <path d="M12 22c-6 0-10-4-10-8 0-2 2-4 4-3s4 3 6 3 4-2 6-3 4 1 4 3c0 4-4 8-10 8z" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

export function Snorkel({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* mask lens */}
      <rect x="3" y="8" width="13" height="7" rx="3" />
      {/* snorkel tube up and over */}
      <path d="M16 10 Q20 10 20 6 Q20 3 18 3" />
      {/* mouthpiece */}
      <line x1="18" y1="3" x2="18" y2="6" />
      {/* mask strap */}
      <path d="M16 11.5 Q19 11.5 19 14 Q19 16 16 16" opacity="0.5" />
    </svg>
  );
}

export function SUP({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      {/* board */}
      <path d="M3 18 Q12 16 21 18" />
      {/* paddle shaft */}
      <line x1="13" y1="4" x2="10" y2="17" />
      {/* paddle blade */}
      <path d="M11 4 Q13 2 15 4 Q13 7 11 4Z" fill={color} stroke="none" opacity="0.8" />
      {/* person standing */}
      <circle cx="12" cy="11" r="1.5" fill={color} stroke="none" />
      <line x1="12" y1="12.5" x2="12" y2="16" />
      <line x1="10" y1="14" x2="14" y2="14" />
    </svg>
  );
}

export function Manatee({ size = defaults.size, color = defaults.color, strokeWidth = defaults.strokeWidth, className }: IconProps) {
  // Simplified rounded sea-creature silhouette
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 12c0-4 3-7 7-7h4c3 0 7 2 7 5 0 4-3 6-7 6H8" />
      <path d="M8 16c-2 1-4 1-5 0" />
      <path d="M17 10c1.5-1 3-1 4 0" />
      <path d="M6 12c0 1.5-.5 3-1.5 3" />
    </svg>
  );
}
