export function CrepesDolcesIcon({ size = 64, className }: { size?: number; className?: string }) {
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
      {/* Steam — 3 organic S-curve wisps */}
      <path d="M33 33 C31 28 35 23 32 18 C29 13 32 8 31 4" stroke="#3D1F0D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 30 C48 25 52 20 49 15 C46 10 50 5 48 2" stroke="#3D1F0D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M67 33 C65 28 69 23 66 18 C63 13 67 8 65 4" stroke="#3D1F0D" strokeWidth="1.5" strokeLinecap="round"/>

      {/* Crêpe body — triangle with slightly organic wavy base */}
      <path d="M12 89 C16 92 32 91 50 91 C68 91 84 92 88 89 L53 33 C52 31 51 30 50 31 C49 30 48 31 47 33 Z" stroke="#3D1F0D" strokeWidth="2" strokeLinejoin="round"/>

      {/* Fold texture lines — gently curved, suggest layers */}
      <path d="M22 80 Q50 77 78 80" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.4"/>
      <path d="M28 70 Q50 67 72 70" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.4"/>
      <path d="M35 60 Q50 57 65 60" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.38"/>
      <path d="M41 50 Q50 47 59 50" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.33"/>

      {/* Engraving hatching — left lower corner */}
      <line x1="16" y1="83" x2="24" y2="75" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.22"/>
      <line x1="16" y1="88" x2="29" y2="75" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.22"/>
      <line x1="19" y1="90" x2="35" y2="74" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.18"/>

      {/* Engraving hatching — right lower corner */}
      <line x1="84" y1="83" x2="76" y2="75" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.22"/>
      <line x1="84" y1="88" x2="71" y2="75" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.22"/>
      <line x1="81" y1="90" x2="65" y2="74" stroke="#3D1F0D" strokeWidth="0.55" opacity="0.18"/>

      {/* Golden sauce drizzle — S-curve in golden */}
      <path d="M32 65 Q40 57 50 62 Q60 67 68 59" stroke="#C4A44A" strokeWidth="2.2" strokeLinecap="round"/>

      {/* Plate ellipse */}
      <ellipse cx="50" cy="93" rx="34" ry="5.5" stroke="#3D1F0D" strokeWidth="1.5"/>
      <path d="M16 93 Q50 98 84 93" stroke="#3D1F0D" strokeWidth="0.6" opacity="0.28"/>
    </svg>
  )
}
