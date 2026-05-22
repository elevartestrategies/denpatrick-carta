export function GelatsIcon({ size = 64, className }: { size?: number; className?: string }) {
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
      {/* Ice cream scoop — slightly oval circle */}
      <ellipse cx="50" cy="33" rx="23" ry="21" stroke="#3D1F0D" strokeWidth="2"/>

      {/* Scoop creamy texture — curved arcs suggesting softness */}
      <path d="M31 27 Q50 21 69 27" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.4"/>
      <path d="M29 33 Q50 26 71 33" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.38"/>
      <path d="M31 39 Q50 33 69 39" stroke="#3D1F0D" strokeWidth="0.9" opacity="0.35"/>
      <path d="M35 44 Q50 39 65 44" stroke="#3D1F0D" strokeWidth="0.8" opacity="0.28"/>

      {/* Small bump on top of scoop — gives natural gelat look */}
      <path d="M42 13 Q50 9 58 13" stroke="#3D1F0D" strokeWidth="1" opacity="0.45" strokeLinecap="round"/>

      {/* Golden drip — right side, organic drip path */}
      <path d="M70 40 C74 46 73 54 71 60 C70 64 72 68 71 72" stroke="#C4A44A" strokeWidth="1.7" strokeLinecap="round"/>
      <path d="M69 42 C72 48 71 55 70 60" stroke="#C4A44A" strokeWidth="0.6" opacity="0.4" strokeLinecap="round"/>

      {/* Cone — slightly organic triangle, waist at scoop base */}
      <path d="M27 54 Q27 53 50 94 Q73 53 73 54 Q62 55 50 54 Q38 55 27 54 Z" stroke="#3D1F0D" strokeWidth="2" strokeLinejoin="round"/>

      {/* Barquillo texture — diagonal lines (/ direction) */}
      <line x1="30" y1="63" x2="42" y2="93" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.5"/>
      <line x1="37" y1="57" x2="50" y2="90" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.5"/>
      <line x1="44" y1="54" x2="57" y2="86" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.5"/>
      <line x1="53" y1="54" x2="63" y2="78" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.5"/>
      <line x1="62" y1="55" x2="68" y2="70" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.45"/>

      {/* Barquillo texture — diagonal lines (\ direction) */}
      <line x1="70" y1="63" x2="58" y2="93" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.5"/>
      <line x1="63" y1="57" x2="50" y2="90" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.45"/>
      <line x1="56" y1="54" x2="43" y2="86" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.45"/>
      <line x1="47" y1="54" x2="37" y2="78" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.45"/>

      {/* Barquillo horizontal curves */}
      <path d="M29 66 Q50 70 71 66" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.42"/>
      <path d="M32 74 Q50 78 68 74" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.38"/>
      <path d="M36 82 Q50 85 64 82" stroke="#3D1F0D" strokeWidth="0.75" opacity="0.33"/>
    </svg>
  )
}
