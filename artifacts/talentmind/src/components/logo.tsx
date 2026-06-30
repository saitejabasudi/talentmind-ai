interface LogoProps {
  size?: number;
  className?: string;
}

export function TalentMindLogo({ size = 32, className = "" }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="tmBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38BDF8"/>
          <stop offset="100%" stopColor="#1E3A8A"/>
        </linearGradient>
        <linearGradient id="tmNode" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7DD3FC"/>
          <stop offset="100%" stopColor="#BFDBFE"/>
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#tmBg)"/>
      <line x1="32" y1="16" x2="18" y2="38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="32" y1="16" x2="46" y2="38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="18" y1="38" x2="46" y2="38" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="32" y1="16" x2="32" y2="50" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" strokeDasharray="2 3"/>
      <circle cx="32" cy="16" r="5" fill="url(#tmNode)" opacity="0.95"/>
      <circle cx="18" cy="38" r="4" fill="url(#tmNode)" opacity="0.85"/>
      <circle cx="46" cy="38" r="4" fill="url(#tmNode)" opacity="0.85"/>
      <circle cx="32" cy="50" r="3.5" fill="white" opacity="0.7"/>
      <circle cx="32" cy="32" r="2.5" fill="white" opacity="0.6"/>
    </svg>
  );
}
