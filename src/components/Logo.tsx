export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C4953C" />
          <stop offset="100%" stopColor="#A67F2F" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" fill="url(#logo-grad)" rx="10" />
      <path d="M10 30 Q10 38 18 38 L30 38 Q38 38 38 30" stroke="#FFFBF7" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <path d="M8 20 Q8 12 16 12 L32 12 Q40 12 40 20" stroke="#FFFBF7" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.9" />
      <line x1="16" y1="12" x2="16" y2="38" stroke="#FFFBF7" strokeWidth="1.4" opacity="0.7" />
      <line x1="24" y1="12" x2="24" y2="38" stroke="#FFFBF7" strokeWidth="1.4" opacity="0.7" />
      <line x1="32" y1="12" x2="32" y2="38" stroke="#FFFBF7" strokeWidth="1.4" opacity="0.7" />
      <circle cx="24" cy="8" r="1.8" fill="#FFFBF7" opacity="0.85" />
    </svg>
  );
}
