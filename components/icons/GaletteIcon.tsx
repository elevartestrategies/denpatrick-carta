export function GaletteIcon({ size = 64, className }: { size?: number; className?: string }) {
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
      {/* Outer galette — slightly organic square (not perfectly straight) */}
      <path d="M12 14 Q13 12 50 11 Q87 10 88 14 Q90 50 88 86 Q87 88 50 89 Q13 90 12 86 Q10 50 12 14 Z" stroke="#3D1F0D" strokeWidth="2" strokeLinejoin="round"/>

      {/* 4 fold lines from corners to center — slightly curved */}
      <path d="M12 12 Q26 26 38 40" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M88 12 Q74 26 62 40" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M12 88 Q26 74 38 60" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>
      <path d="M88 88 Q74 74 62 60" stroke="#3D1F0D" strokeWidth="1.4" strokeLinecap="round"/>

      {/* Buckwheat texture — top-left flap */}
      <line x1="16" y1="27" x2="27" y2="16" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="16" y1="35" x2="35" y2="16" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="19" y1="40" x2="40" y2="19" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.4"/>

      {/* Buckwheat texture — top-right flap */}
      <line x1="84" y1="27" x2="73" y2="16" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="84" y1="35" x2="65" y2="16" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="81" y1="40" x2="60" y2="19" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.4"/>

      {/* Buckwheat texture — bottom-left flap */}
      <line x1="16" y1="73" x2="27" y2="84" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="16" y1="65" x2="35" y2="84" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="19" y1="60" x2="40" y2="81" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.4"/>

      {/* Buckwheat texture — bottom-right flap */}
      <line x1="84" y1="73" x2="73" y2="84" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="84" y1="65" x2="65" y2="84" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.5"/>
      <line x1="81" y1="60" x2="60" y2="81" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.4"/>

      {/* Center open square — slightly organic */}
      <path d="M37 37 Q50 35 63 37 Q65 50 63 63 Q50 65 37 63 Q35 50 37 37 Z" stroke="#3D1F0D" strokeWidth="1.5"/>

      {/* Egg white — subtle curved arcs */}
      <path d="M38 44 Q50 40 62 44" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.35"/>
      <path d="M37 50 Q50 46 63 50" stroke="#3D1F0D" strokeWidth="0.7" opacity="0.3"/>

      {/* Egg yolk — golden double circle */}
      <circle cx="50" cy="50" r="10" stroke="#C4A44A" strokeWidth="1.8"/>
      <circle cx="50" cy="50" r="5" stroke="#C4A44A" strokeWidth="1.2"/>

      {/* Cheese suggestion — golden stroke in center square corner */}
      <path d="M39 60 Q50 58 61 60" stroke="#C4A44A" strokeWidth="0.9" opacity="0.6"/>
    </svg>
  )
}
