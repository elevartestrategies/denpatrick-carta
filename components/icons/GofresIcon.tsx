export function GofresIcon({ size = 64, className }: { size?: number; className?: string }) {
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
      {/* Steam above scoop — 2 subtle S-wisps */}
      <path d="M38 10 C36 6 40 2 38 -1" stroke="#3D1F0D" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M52 8 C50 4 54 0 52 -2" stroke="#3D1F0D" strokeWidth="1.3" strokeLinecap="round"/>

      {/* Ice cream scoop — dome with engraving texture lines */}
      <path d="M26 32 Q28 10 50 8 Q72 6 74 32" stroke="#3D1F0D" strokeWidth="2" strokeLinecap="round"/>
      <path d="M28 32 Q50 26 72 32" stroke="#3D1F0D" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 26 Q50 20 68 26" stroke="#3D1F0D" strokeWidth="0.8" opacity="0.38"/>
      <path d="M36 19 Q50 15 64 19" stroke="#3D1F0D" strokeWidth="0.8" opacity="0.32"/>

      {/* Golden drip from scoop right */}
      <path d="M66 22 Q70 29 68 36 Q67 40 69 44" stroke="#C4A44A" strokeWidth="1.6" strokeLinecap="round"/>

      {/* Waffle body — organic rounded rect with wavy edge feel */}
      <path d="M14 36 Q13 33 17 32 Q34 31 50 31 Q66 31 83 32 Q87 33 87 36 L87 70 Q87 74 83 75 Q66 76 50 76 Q34 76 17 75 Q13 74 14 70 Z" stroke="#3D1F0D" strokeWidth="2"/>

      {/* Grid — 3 vertical lines with shadow for depth */}
      <line x1="33" y1="32" x2="33" y2="75" stroke="#3D1F0D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="34" y1="33" x2="34" y2="76" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.18"/>
      <line x1="50" y1="31" x2="50" y2="76" stroke="#3D1F0D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="51" y1="32" x2="51" y2="77" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.18"/>
      <line x1="67" y1="32" x2="67" y2="75" stroke="#3D1F0D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="68" y1="33" x2="68" y2="76" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.18"/>

      {/* Grid — 2 horizontal lines with shadow for depth */}
      <line x1="14" y1="47" x2="87" y2="47" stroke="#3D1F0D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="14" y1="48" x2="87" y2="48" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.18"/>
      <line x1="14" y1="62" x2="87" y2="62" stroke="#3D1F0D" strokeWidth="1.2" opacity="0.6"/>
      <line x1="14" y1="63" x2="87" y2="63" stroke="#3D1F0D" strokeWidth="0.5" opacity="0.18"/>

      {/* Golden accent in one waffle cell */}
      <path d="M35 49 Q42 47 49 49" stroke="#C4A44A" strokeWidth="0.9" opacity="0.55"/>
    </svg>
  )
}
