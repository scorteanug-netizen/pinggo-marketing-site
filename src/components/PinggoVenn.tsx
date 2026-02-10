import { useId } from "react";
import { cn } from "@/lib/utils";

/** BACK layer: 2 circles (behind). MID layer: 3 circles. FRONT: central. */
const BACK_IDS = ["intrare", "termen"] as const;
const MID_IDS = ["repartizare", "escaladare", "dovada"] as const;

/** Slightly desaturated (≈10–15%) same hue for premium look. r 92 to reduce center overlap; positions offset 8–16px for deliberate asymmetry. */
const CIRCLES = [
  { id: "intrare", cx: 306, cy: 125, r: 92, label: "Intrare lead", color: "blue" },
  { id: "repartizare", cx: 387, cy: 205, r: 92, label: "Repartizare", color: "violet" },
  { id: "termen", cx: 383, cy: 299, r: 92, label: "Timp raspuns", color: "indigo" },
  { id: "escaladare", cx: 211, cy: 307, r: 92, label: "Escaladare", color: "teal" },
  { id: "dovada", cx: 213, cy: 203, r: 92, label: "Dovada", color: "emerald" },
] as const;

/** Pills: min-width 140px, tangent + 8px gap, padding 10px 14px, font 14–15px weight 700. */
const PILLS: { id: string; x: number; y: number; label: string; color: keyof typeof COLOR_MAP }[] = [
  { id: "intrare", x: 338, y: 68, label: "Intrare lead", color: "blue" },
  { id: "repartizare", x: 448, y: 212, label: "Repartizare", color: "violet" },
  { id: "termen", x: 388, y: 378, label: "Timp raspuns", color: "indigo" },
  { id: "escaladare", x: 172, y: 378, label: "Escaladare", color: "teal" },
  { id: "dovada", x: 102, y: 212, label: "Dovada", color: "emerald" },
];

const COLOR_MAP = {
  blue: { stroke: "rgb(71 125 230)" },
  violet: { stroke: "rgb(128 100 232)" },
  indigo: { stroke: "rgb(98 108 228)" },
  teal: { stroke: "rgb(34 168 158)" },
  emerald: { stroke: "rgb(38 168 132)" },
} as const;

const CENTER = { cx: 300, cy: 240, r: 48 };
const ORANGE = "rgb(255 86 33)";

const STROKE_LARGE = 3.5;
const STROKE_CENTER = 4;
const FILL_OPACITY_LARGE = 0.04;
const FILL_OPACITY_CENTER = 0.05;
const STROKE_OPACITY_LARGE = 0.9;
const HALO_WIDTH = 10;
const HALO_OPACITY = 0.9;
const PILL_MIN_WIDTH = 140;
const PILL_FONT_SIZE = 15;
const PILL_PAD_X = 14;
const PILL_PAD_Y = 10;
const PILL_BORDER = 2;

function pillWidth(label: string) {
  return Math.max(PILL_MIN_WIDTH, label.length * (PILL_FONT_SIZE * 0.52) + PILL_PAD_X * 2);
}

function pillHeight() {
  return PILL_FONT_SIZE + PILL_PAD_Y * 2;
}

export function PinggoVenn() {
  const id = useId();
  const safeId = id.replace(/:/g, "");
  const gradientId = `pinggo-venn-bg-${safeId}`;
  const glowId = `pinggo-venn-glow-${safeId}`;
  const pillShadowId = `pinggo-venn-pill-shadow-${safeId}`;
  const centerBadgeShadowId = `pinggo-center-badge-shadow-${safeId}`;
  const circleShadowId = `pinggo-venn-circle-shadow-${safeId}`;
  const radialId = (color: string) => `pinggo-venn-radial-${color}-${safeId}`;

  const backCircles = CIRCLES.filter((c) => BACK_IDS.includes(c.id as (typeof BACK_IDS)[number]));
  const midCircles = CIRCLES.filter((c) => MID_IDS.includes(c.id as (typeof MID_IDS)[number]));

  const scale = 1.35;
  const cx = 300;
  const cy = 240;
  const scaledViewBox = {
    x: cx - (600 * scale) / 2,
    y: cy - (480 * scale) / 2,
    w: 600 * scale,
    h: 480 * scale,
  };

  return (
    <div
      className={cn(
        "w-full max-w-[600px] min-h-[420px] md:min-h-[460px] mx-auto lg:mx-0 mt-8 lg:mt-0 flex items-center justify-center",
        "animate-[pinggo-venn-in_0.4s_ease-out_both]"
      )}
    >
      {/* Desktop: full Venn SVG */}
      <div className="hidden md:block w-full max-w-[520px] lg:max-w-[600px] min-h-[420px] lg:min-h-[460px] flex items-center justify-center">
        <svg
          viewBox={`${scaledViewBox.x} ${scaledViewBox.y} ${scaledViewBox.w} ${scaledViewBox.h}`}
          className="w-full h-auto min-h-[420px] lg:min-h-[460px] pinggo-venn-svg"
          preserveAspectRatio="xMidYMid meet"
          aria-label="Diagrama Pinggo: Intrare lead, Repartizare, Timp raspuns, Escaladare, Dovada"
          role="img"
        >
          <defs>
            <radialGradient id={gradientId} cx="50%" cy="50%" r="70%">
              <stop offset="0%" stopColor="white" stopOpacity="0.6" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            {/* Per-color radial: center slightly brighter, edge slightly darker */}
            {(Object.keys(COLOR_MAP) as (keyof typeof COLOR_MAP)[]).map((color) => (
              <radialGradient key={color} id={radialId(color)} cx="50%" cy="50%" r="100%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="white" stopOpacity="0.06" />
                <stop offset="100%" stopColor={COLOR_MAP[color].stroke} stopOpacity="0.03" />
              </radialGradient>
            ))}
            <filter id={glowId} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="0" stdDeviation="14" floodColor={ORANGE} floodOpacity="0.25" />
            </filter>
            <filter id={circleShadowId} x="-40%" y="-40%" width="180%" height="180%">
              <feDropShadow dx="0" dy="10" stdDeviation="15" floodColor="rgb(2 6 23)" floodOpacity="0.06" />
            </filter>
            <filter id={pillShadowId} x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="rgb(2 6 23)" floodOpacity="0.08" />
            </filter>
            <filter id={centerBadgeShadowId} x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="8" stdDeviation="12" floodColor="rgb(15 23 42)" floodOpacity="0.10" />
            </filter>
          </defs>

          <g transform={`translate(${cx}, ${cy}) scale(${scale}) translate(${-cx}, ${-cy})`}>
            <rect x="0" y="0" width="600" height="480" fill={`url(#${gradientId})`} className="pointer-events-none" />

            {/* 1) LAYER BACK: halo, then circle with radial fill + inner glow + outer shadow */}
            <g className="pinggo-venn pointer-events-none" aria-hidden>
              {backCircles.map((c) => {
                const colors = COLOR_MAP[c.color];
                return (
                  <g key={c.id} filter={`url(#${circleShadowId})`}>
                    <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="white" strokeWidth={HALO_WIDTH} strokeOpacity={HALO_OPACITY} strokeLinecap="round" />
                    <circle cx={c.cx} cy={c.cy} r={c.r} fill={`url(#${radialId(c.color)})`} />
                    <circle
                      cx={c.cx}
                      cy={c.cy}
                      r={c.r}
                      fill="none"
                      stroke={colors.stroke}
                      strokeWidth={STROKE_LARGE}
                      strokeOpacity={STROKE_OPACITY_LARGE}
                    />
                    <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
                  </g>
                );
              })}
            </g>

            {/* 2) LAYER MID: halo, then circle with radial fill + inner glow + outer shadow */}
            {midCircles.map((c) => {
              const colors = COLOR_MAP[c.color];
              return (
                <g key={c.id} aria-hidden filter={`url(#${circleShadowId})`}>
                  <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="white" strokeWidth={HALO_WIDTH} strokeOpacity={HALO_OPACITY} strokeLinecap="round" />
                  <circle cx={c.cx} cy={c.cy} r={c.r} fill={`url(#${radialId(c.color)})`} />
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={c.r}
                    fill="none"
                    stroke={colors.stroke}
                    strokeWidth={STROKE_LARGE}
                    strokeOpacity={STROKE_OPACITY_LARGE}
                  />
                  <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.25" />
                </g>
              );
            })}

            {/* 3) Central: halo, then circle + glow, inner glow */}
            <circle
              cx={CENTER.cx}
              cy={CENTER.cy}
              r={CENTER.r}
              fill="none"
              stroke="white"
              strokeWidth={HALO_WIDTH}
              strokeOpacity={HALO_OPACITY}
              strokeLinecap="round"
            />
            <g aria-hidden filter={`url(#${glowId})`}>
              <circle
                cx={CENTER.cx}
                cy={CENTER.cy}
                r={CENTER.r}
                fill={ORANGE}
                fillOpacity={FILL_OPACITY_CENTER}
                stroke={ORANGE}
                strokeWidth={STROKE_CENTER}
                strokeOpacity={1}
              />
            </g>
            <circle
              cx={CENTER.cx}
              cy={CENTER.cy}
              r={CENTER.r}
              fill="none"
              stroke={ORANGE}
              strokeWidth={STROKE_CENTER}
              strokeOpacity={1}
            />
            <circle cx={CENTER.cx} cy={CENTER.cy} r={CENTER.r} fill="none" stroke="white" strokeWidth="1" strokeOpacity="0.25" />

            {/* 4) Pills (labels) – last, always on top */}
            <g className="pinggo-venn-pills" aria-hidden>
              {PILLS.map((p) => {
                const colors = COLOR_MAP[p.color];
                const w = pillWidth(p.label);
                const h = pillHeight();
                const rx = h / 2;
                return (
                  <g key={p.id} transform={`translate(${p.x}, ${p.y})`}>
                    <rect
                      x={-w / 2}
                      y={-h / 2}
                      width={w}
                      height={h}
                      rx={rx}
                      ry={rx}
                      fill="white"
                      stroke={colors.stroke}
                      strokeWidth={PILL_BORDER}
                      filter={`url(#${pillShadowId})`}
                    />
                    <text
                      x="0"
                      y="0"
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="select-none pinggo-venn-pill-text"
                      style={{ fontFamily: "var(--font-body), Inter, system-ui, sans-serif", fontSize: PILL_FONT_SIZE, fontWeight: 700, fill: "#0f172a" }}
                    >
                      {p.label}
                    </text>
                  </g>
                );
              })}
            </g>

            {/* Central text: PINGGO in badge (white 90–95%, border, shadow, +15–20% size, weight 800, orange underline) */}
            <g transform={`translate(${CENTER.cx}, ${CENTER.cy})`}>
              <rect
                x="-56"
                y="-20"
                width="112"
                height="44"
                rx="9999"
                ry="9999"
                fill="rgba(255,255,255,0.92)"
                stroke="rgba(15,23,42,0.08)"
                strokeWidth="1"
                filter={`url(#${centerBadgeShadowId})`}
              />
              <text
                x="0"
                y="-2"
                textAnchor="middle"
                dominantBaseline="middle"
                className="tracking-tight select-none pinggo-venn-center-text"
                style={{ fontFamily: "var(--font-heading), Fraunces, system-ui, serif", fontSize: 26, fontWeight: 800, fill: "#0f172a" }}
              >
                PINGGO
              </text>
              <rect x="-16" y="12" width="32" height="2.5" rx="999" fill={ORANGE} />
            </g>
          </g>
        </svg>
      </div>

      {/* Mobile: simplified static placeholder (no overlapping circles) */}
      <div className="md:hidden flex flex-col items-center justify-center gap-3 py-8">
        <div className="text-slate-800 font-heading font-extrabold text-2xl tracking-tight">PINGGO</div>
        <div className="flex flex-wrap justify-center gap-2 max-w-[280px]">
          {PILLS.map((p) => (
            <span
              key={p.id}
              className="px-3 py-1.5 rounded-full text-sm font-bold bg-white border-2 shadow-sm"
              style={{
                borderColor: COLOR_MAP[p.color].stroke,
                color: "#0f172a",
              }}
            >
              {p.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
