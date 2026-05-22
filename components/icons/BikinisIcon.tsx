export function BikinisIcon({ size = 64, className }: { size?: number; className?: string }) {
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
      {/* Top bread slice — organic rounded, slightly irregular */}
      <path d="M13 17 Q14 12 50 11 Q86 10 87 15 Q89 17 88 28 Q87 33 50 34 Q13 35 12 30 Q11 27 13 17 Z" stroke="#3D1F0D" strokeWidth="2"/>

      {/* Toast marks on top bread — diagonal lines */}
      <line x1="21" y1="14" x2="26" y2="32" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="32" y1="13" x2="37" y2="33" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="44" y1="12" x2="48" y2="33" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="55" y1="12" x2="59" y2="33" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="66" y1="13" x2="70" y2="32" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>

      {/* Crust lines on top bread top edge */}
      <path d="M14 17 Q30 14 50 13 Q70 12 86 15" stroke="#3D1F0D" strokeWidth="0.6" opacity="0.3"/>

      {/* Ham layer — thin wavy strip */}
      <path d="M13 36 Q50 34 87 36 Q88 36 88 40 Q50 42 12 40 Q11 40 13 36 Z" stroke="#3D1F0D" strokeWidth="1.3"/>
      <path d="M18 38 Q50 36 82 38" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.25"/>

      {/* Cheese layer — golden, slightly thicker, with drip */}
      <path d="M13 42 Q50 40 87 42 Q88 42 88 50 Q50 52 12 50 Q11 50 13 42 Z" stroke="#C4A44A" strokeWidth="1.5"/>
      <path d="M20 46 Q50 44 80 46" stroke="#C4A44A" strokeWidth="0.7" opacity="0.4"/>
      {/* Cheese drip right side */}
      <path d="M88 46 C93 49 92 56 88 58" stroke="#C4A44A" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M89 47 C93 50 92 55 89 57" stroke="#C4A44A" strokeWidth="0.5" opacity="0.4"/>

      {/* Bottom bread slice — mirror of top */}
      <path d="M13 52 Q14 51 50 51 Q86 51 87 52 Q89 55 88 67 Q87 72 50 73 Q13 74 12 69 Q11 66 13 52 Z" stroke="#3D1F0D" strokeWidth="2"/>

      {/* Toast marks on bottom bread */}
      <line x1="21" y1="54" x2="26" y2="71" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="32" y1="53" x2="37" y2="72" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="44" y1="52" x2="48" y2="72" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="55" y1="52" x2="59" y2="72" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>
      <line x1="66" y1="53" x2="70" y2="71" stroke="#3D1F0D" strokeWidth="0.85" opacity="0.42"/>

      {/* Crust lines on bottom bread bottom edge */}
      <path d="M14 69 Q30 72 50 73 Q70 74 86 71" stroke="#3D1F0D" strokeWidth="0.6" opacity="0.28"/>
    </svg>
  )
}
