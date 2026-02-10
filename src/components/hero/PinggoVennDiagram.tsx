import { useId } from "react";
import { cn } from "@/lib/utils";

/** Height 570 so circles (e.g. bottom at cy=390+r=565) are not clipped; spec 520 clips. */
const VIEWBOX = { w: 700, h: 570 };
const OUTER_R = 175;
const CENTER_R = 115;

const COLORS = {
  blue: "#3B82F6",
  purple: "#8B5CF6",
  indigo: "#6366F1",
  green: "#22C55E",
  teal: "#14B8A6",
} as const;
const ORANGE = "#ff5621";

/** Outer circles: use exact coordinates. Render order = farthest first (back row then front), center last. */
const OUTER_CIRCLES = [
  { id: "intrare", cx: 360, cy: 170, label: "Intrare lead", color: "blue" as keyof typeof COLORS },
  { id: "repartizare", cx: 480, cy: 290, label: "Repartizare", color: "purple" as keyof typeof COLORS },
  { id: "termen", cx: 410, cy: 390, label: "Termen de raspuns", color: "indigo" as keyof typeof COLORS },
  { id: "escaladare", cx: 270, cy: 390, label: "Escaladare", color: "teal" as keyof typeof COLORS },
  { id: "dovada", cx: 220, cy: 280, label: "Dovada", color: "green" as keyof typeof COLORS },
] as const;

/** Back layer (draw first): top + bottom two. Front layer: left + right. */
const BACK_IDS = ["intrare", "termen", "escaladare"] as const;
const FRONT_IDS = ["repartizare", "dovada"] as const;

/** Label positions and alignment. Plain text only, no pills. */
const LABELS: {
  id: string;
  x: number;
  y: number;
  label: string;
  color: keyof typeof COLORS;
  textAnchor: "start" | "middle" | "end";
}[] = [
  { id: "intrare", x: 360, y: 125, label: "Intrare lead", color: "blue", textAnchor: "middle" },
  { id: "repartizare", x: 605, y: 290, label: "Repartizare", color: "purple", textAnchor: "end" },
  { id: "termen", x: 430, y: 445, label: "Termen de raspuns", color: "indigo", textAnchor: "middle" },
  { id: "escaladare", x: 255, y: 445, label: "Escaladare", color: "teal", textAnchor: "middle" },
  { id: "dovada", x: 108, y: 280, label: "Dovada", color: "green", textAnchor: "start" },
];

const CENTER_POS = { cx: 350, cy: 290 };
const CENTER_LABEL_POS = { x: 350, y: 300 };

const OUTER_STROKE_WIDTH = 2.5;
const OUTER_FILL_OPACITY = 0.05;
const OUTER_STROKE_OPACITY = 0.85;
const CENTER_STROKE_WIDTH = 4.5;
const CENTER_FILL_OPACITY = 0.04;

export default function PinggoVennDiagram({ className }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const centerShadowId = `pinggo-venn-center-shadow-${uid}`;

  const backCircles = OUTER_CIRCLES.filter((c) =>
    BACK_IDS.includes(c.id as (typeof BACK_IDS)[number])
  );
  const frontCircles = OUTER_CIRCLES.filter((c) =>
    FRONT_IDS.includes(c.id as (typeof FRONT_IDS)[number])
  );

  return (
    <div
      className={cn(
        "flex items-center justify-center w-full max-w-[360px] md:max-w-[560px] min-w-[280px] mx-auto min-h-[280px] rounded-xl border-2 border-slate-200/80 bg-slate-50/50 p-4",
        className
      )}
      data-diagram="pinggo-venn-chili-piper"
      data-version="chili-piper-2025"
    >
      <svg
        viewBox={`0 0 ${VIEWBOX.w} ${VIEWBOX.h}`}
        preserveAspectRatio="xMidYMid meet"
        className="block w-full h-auto min-h-[260px] pinggo-venn-diagram [&_.venn-label]:text-[18px] md:[&_.venn-label]:text-[26px] [&_.venn-center-text]:text-[28px] md:[&_.venn-center-text]:text-[34px]"
        style={{ display: "block" }}
        aria-label="Diagrama Pinggo: Intrare lead, Repartizare, Termen de raspuns, Escaladare, Dovada"
        role="img"
      >
        <defs>
          <filter id={centerShadowId} x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="4" stdDeviation="10" floodColor="rgb(15 23 42)" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 1) Back layer: outer circles (no shadow) */}
        <g aria-hidden>
          {backCircles.map((c) => (
            <circle
              key={c.id}
              cx={c.cx}
              cy={c.cy}
              r={OUTER_R}
              fill={COLORS[c.color]}
              fillOpacity={OUTER_FILL_OPACITY}
              stroke={COLORS[c.color]}
              strokeWidth={OUTER_STROKE_WIDTH}
              strokeOpacity={OUTER_STROKE_OPACITY}
            />
          ))}
        </g>

        {/* 2) Front layer: outer circles */}
        <g aria-hidden>
          {frontCircles.map((c) => (
            <circle
              key={c.id}
              cx={c.cx}
              cy={c.cy}
              r={OUTER_R}
              fill={COLORS[c.color]}
              fillOpacity={OUTER_FILL_OPACITY}
              stroke={COLORS[c.color]}
              strokeWidth={OUTER_STROKE_WIDTH}
              strokeOpacity={OUTER_STROKE_OPACITY}
            />
          ))}
        </g>

        {/* 3) Center circle (last, with subtle shadow) */}
        <g filter={`url(#${centerShadowId})`} aria-hidden>
          <circle
            cx={CENTER_POS.cx}
            cy={CENTER_POS.cy}
            r={CENTER_R}
            fill={ORANGE}
            fillOpacity={CENTER_FILL_OPACITY}
            stroke={ORANGE}
            strokeWidth={CENTER_STROKE_WIDTH}
            strokeOpacity={0.95}
          />
        </g>

        {/* 4) Labels: plain text only, no pills */}
        <g aria-hidden>
          {LABELS.map((l) => (
            <text
              key={l.id}
              x={l.x}
              y={l.y}
              textAnchor={l.textAnchor}
              dominantBaseline="middle"
              fill={COLORS[l.color]}
              className="venn-label"
              style={{
                fontFamily: "var(--font-body), system-ui, sans-serif",
                fontWeight: 700,
              }}
            >
              {l.label}
            </text>
          ))}
        </g>

        {/* 5) Center label PINGGO */}
        <text
          x={CENTER_LABEL_POS.x}
          y={CENTER_LABEL_POS.y}
          textAnchor="middle"
          dominantBaseline="middle"
          fill="#111827"
          className="venn-center-text"
          style={{
            fontFamily: "var(--font-heading), system-ui, sans-serif",
            fontWeight: 800,
          }}
          aria-hidden
        >
          PINGGO
        </text>
      </svg>
    </div>
  );
}
