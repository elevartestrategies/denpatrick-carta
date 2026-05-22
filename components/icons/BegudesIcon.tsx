export function BegudesIcon({ size = 64, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Steam — 3 elegant organic S-wisps */}
      <path d="M33 23 C31 18 35 13 32 8 C29 3 33 -1 31 -4" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M50 21 C48 16 52 11 49 6 C46 1 50 -3 48 -6" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M67 23 C65 18 69 13 66 8 C63 3 67 -1 65 -4" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>

      {/* Cup rim — ellipse at top */}
      <ellipse cx="50" cy="27" rx="22" ry="5.5" stroke="#3D1F0D" strokeWidth="1.5"/>

      {/* Cup body — trapezoid, wider at top (slight conical perspective) */}
      <path d="M28 27 L23 72 Q23 73 50 73 Q77 73 77 72 L72 27" stroke="#3D1F0D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>

      {/* Inner rim arc for depth */}
      <path d="M30 29 Q50 33 70 29" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.35"/>

      {/* Handle — two parallel curves giving thickness */}
      <path d="M72 37 C88 37 90 58 72 59" stroke="#3D1F0D" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M72 40 C85 40 87 57 72 57" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.35"/>

      {/* Golden decorative band */}
      <path d="M25 49 Q50 47 75 49" stroke="#C4A44A" strokeWidth="1.4" opacity="0.85" strokeLinecap="round"/>
      <path d="M24 52 Q50 50 76 52" stroke="#C4A44A" strokeWidth="0.6" opacity="0.4" strokeLinecap="round"/>

      {/* Saucer — main ellipse in perspective */}
      <ellipse cx="50" cy="77" rx="33" ry="7" stroke="#3D1F0D" strokeWidth="1.6"/>
      {/* Saucer inner ellipse */}
      <ellipse cx="50" cy="77" rx="20" ry="4" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.5"/>

      {/* Coffee surface — small circle inside cup top */}
      <ellipse cx="50" cy="27" rx="14" ry="3.5" stroke="#3D1F0D" strokeWidth="0.6" opacity="0.3"/>
    </svg>
  )
}
