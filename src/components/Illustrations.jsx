export function BrickMark({ className }) {
  return (
    <svg className={className} viewBox="0 0 120 32" fill="none" aria-hidden="true">
      <rect x="0" y="0" width="38" height="14" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="42" y="0" width="38" height="14" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="84" y="0" width="36" height="14" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="-18" y="18" width="38" height="14" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="24" y="18" width="38" height="14" rx="1" fill="currentColor" opacity="0.9" />
      <rect x="66" y="18" width="38" height="14" rx="1" fill="currentColor" opacity="0.55" />
      <rect x="108" y="18" width="30" height="14" rx="1" fill="currentColor" opacity="0.9" />
    </svg>
  );
}

export function FacadeIllustration() {
  return (
    <svg viewBox="0 0 560 360" className="facade" role="img" aria-label="Illustration de la façade de l'hôtel">
      <rect x="40" y="60" width="480" height="260" rx="4" fill="#C15A34" />
      {Array.from({ length: 8 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, i) => (
          <rect
            key={`${row}-${i}`}
            x={70 + i * 160 + (row % 2 === 0 ? 0 : 30)}
            y={90 + row * 28}
            width="120"
            height="20"
            rx="1"
            fill="#F3ECDD"
            opacity={0.06 + (row % 3) * 0.02}
          />
        ))
      )}
      <rect x="80" y="100" width="70" height="90" rx="2" fill="#F3ECDD" />
      <rect x="80" y="100" width="70" height="90" rx="2" fill="none" stroke="#5F6E52" strokeWidth="3" />
      <line x1="115" y1="100" x2="115" y2="190" stroke="#5F6E52" strokeWidth="2" />
      <line x1="80" y1="145" x2="150" y2="145" stroke="#5F6E52" strokeWidth="2" />

      <rect x="245" y="100" width="70" height="90" rx="2" fill="#F3ECDD" />
      <rect x="245" y="100" width="70" height="90" rx="2" fill="none" stroke="#5F6E52" strokeWidth="3" />
      <line x1="280" y1="100" x2="280" y2="190" stroke="#5F6E52" strokeWidth="2" />
      <line x1="245" y1="145" x2="315" y2="145" stroke="#5F6E52" strokeWidth="2" />

      <rect x="410" y="100" width="70" height="90" rx="2" fill="#F3ECDD" />
      <rect x="410" y="100" width="70" height="90" rx="2" fill="none" stroke="#5F6E52" strokeWidth="3" />
      <line x1="445" y1="100" x2="445" y2="190" stroke="#5F6E52" strokeWidth="2" />
      <line x1="410" y1="145" x2="480" y2="145" stroke="#5F6E52" strokeWidth="2" />

      <rect x="245" y="220" width="70" height="100" rx="2" fill="#232A2E" />
      <rect x="245" y="220" width="70" height="12" fill="#F3ECDD" opacity="0.85" />

      <rect x="80" y="230" width="70" height="90" rx="2" fill="#F3ECDD" />
      <rect x="80" y="230" width="70" height="90" rx="2" fill="none" stroke="#5F6E52" strokeWidth="3" />
      <line x1="115" y1="230" x2="115" y2="320" stroke="#5F6E52" strokeWidth="2" />
      <line x1="80" y1="275" x2="150" y2="275" stroke="#5F6E52" strokeWidth="2" />

      <rect x="410" y="230" width="70" height="90" rx="2" fill="#F3ECDD" />
      <rect x="410" y="230" width="70" height="90" rx="2" fill="none" stroke="#5F6E52" strokeWidth="3" />
      <line x1="445" y1="230" x2="445" y2="320" stroke="#5F6E52" strokeWidth="2" />
      <line x1="410" y1="275" x2="480" y2="275" stroke="#5F6E52" strokeWidth="2" />

      <rect x="20" y="320" width="520" height="10" fill="#232A2E" opacity="0.8" />
    </svg>
  );
}
