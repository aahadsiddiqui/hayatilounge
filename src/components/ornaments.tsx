import { useId } from "react";

function GoldGradient({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#f1d4aa" />
        <stop offset="50%" stopColor="#c8935f" />
        <stop offset="100%" stopColor="#7a4f30" />
      </linearGradient>
    </defs>
  );
}

export function Diamond({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} aria-hidden>
      <path d="M6 0.8 11.2 6 6 11.2 0.8 6Z" fill="none" stroke="currentColor" strokeWidth="1" />
      <path d="M6 3.6 8.4 6 6 8.4 3.6 6Z" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

export function DiamondRule({ className = "", width = "w-24" }: { className?: string; width?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 text-[var(--gold)] ${className}`} aria-hidden>
      <span className={`${width} h-px bg-gradient-to-r from-transparent to-[var(--gold)]/60`} />
      <Diamond className="w-3 h-3 shrink-0" />
      <span className={`${width} h-px bg-gradient-to-l from-transparent to-[var(--gold)]/60`} />
    </div>
  );
}

/** Four-point star used at the top and bottom of the drinks board. */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <path
        d="M12 1 13.6 10.4 23 12 13.6 13.6 12 23 10.4 13.6 1 12 10.4 10.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <path d="M12 7 12.8 11.2 17 12 12.8 12.8 12 17 11.2 12.8 7 12 11.2 11.2Z" fill="currentColor" opacity="0.5" />
    </svg>
  );
}

export function Wordmark({ size = "md", className = "" }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const hayati = {
    sm: "text-[1.55rem] tracking-[0.12em]",
    md: "text-5xl sm:text-6xl tracking-[0.1em]",
    lg: "text-[4.2rem] sm:text-[7rem] md:text-[8.5rem] tracking-[0.08em]",
  }[size];
  const lounge = {
    sm: "text-[0.5rem] tracking-[0.55em] mt-0.5",
    md: "text-xs sm:text-sm tracking-[0.6em] mt-2",
    lg: "text-sm sm:text-lg tracking-[0.75em] mt-3 sm:mt-4",
  }[size];

  return (
    <div className={`flex flex-col items-center leading-none ${className}`}>
      <span className={`font-serif font-light uppercase text-gold-gradient ${hayati}`}>Hayati</span>
      <span className={`font-caps uppercase text-[var(--cream)]/85 pl-[0.6em] ${lounge}`}>Lounge</span>
    </div>
  );
}

const oliveLeaves: { x: number; y: number; r: number; s: number }[] = [
  { x: 186, y: 18, r: 200, s: 1 },
  { x: 168, y: 34, r: 150, s: 1.05 },
  { x: 150, y: 46, r: 215, s: 1.1 },
  { x: 132, y: 62, r: 140, s: 1.15 },
  { x: 112, y: 74, r: 222, s: 1.2 },
  { x: 94, y: 92, r: 135, s: 1.15 },
  { x: 74, y: 104, r: 228, s: 1.1 },
  { x: 58, y: 124, r: 130, s: 1 },
  { x: 40, y: 136, r: 210, s: 0.9 },
  { x: 26, y: 152, r: 160, s: 0.8 },
];

/** Olive branch that grows from the top-right toward the bottom-left. */
export function OliveBranch({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="0 0 220 180" className={className} aria-hidden>
      <GoldGradient id={id} />
      <path
        d="M214 4 C 170 30, 120 60, 90 96 S 30 150, 8 172"
        fill="none"
        stroke={`url(#${id})`}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      {oliveLeaves.map((l, i) => (
        <g key={i} transform={`translate(${l.x} ${l.y}) rotate(${l.r}) scale(${l.s})`}>
          <path d="M0 0 C 8 -9, 26 -9, 38 0 C 26 9, 8 9, 0 0Z" fill={`url(#${id})`} opacity="0.92" />
          <path d="M2 0 H 34" stroke="#2a1a10" strokeWidth="0.6" opacity="0.55" />
        </g>
      ))}
      <ellipse cx="128" cy="80" rx="6" ry="7.5" fill="#1b1410" stroke={`url(#${id})`} strokeWidth="0.8" />
      <ellipse cx="80" cy="112" rx="5.5" ry="7" fill="#1b1410" stroke={`url(#${id})`} strokeWidth="0.8" />
    </svg>
  );
}

/** Server and browser Math.sin can differ in the last digits, which breaks hydration. */
const r = (n: number) => Math.round(n * 100) / 100;

/** Palm frond used on the drinks board corners. */
export function PalmFrond({ className = "" }: { className?: string }) {
  const id = useId();
  const blades = Array.from({ length: 13 }, (_, i) => i);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <GoldGradient id={id} />
      <path d="M196 196 C 150 150, 100 110, 30 70" fill="none" stroke={`url(#${id})`} strokeWidth="1.4" />
      {blades.map((i) => {
        const t = i / blades.length;
        const x = r(196 - t * 160);
        const y = r(196 - t * 120 - Math.sin(t * Math.PI) * 10);
        const len = 46 + Math.sin(t * Math.PI) * 30;
        return (
          <g key={i}>
            <path
              d={`M${x} ${y} q ${r(-len * 0.3)} ${r(-len * 0.9)} ${r(-len * 0.15)} ${r(-len * 1.2)}`}
              fill="none"
              stroke={`url(#${id})`}
              strokeWidth="1.1"
              opacity="0.75"
            />
            <path
              d={`M${x} ${y} q ${r(-len * 0.2)} ${r(len * 0.6)} ${r(-len * 0.9)} ${r(len * 0.7)}`}
              fill="none"
              stroke={`url(#${id})`}
              strokeWidth="1.1"
              opacity="0.55"
            />
          </g>
        );
      })}
    </svg>
  );
}
