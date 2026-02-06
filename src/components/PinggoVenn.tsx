import { useId } from "react";
import { cn } from "@/lib/utils";

const CIRCLES = [
  { id: "intrare", cx: 300, cy: 145, r: 100, label: "Intrare lead", color: "blue" },
  { id: "repartizare", cx: 379, cy: 211, r: 100, label: "Repartizare", color: "violet" },
  { id: "termen", cx: 377, cy: 289, r: 100, label: "Termen de raspuns", color: "indigo" },
  { id: "escaladare", cx: 223, cy: 289, r: 100, label: "Escaladare", color: "teal" },
  { id: "dovada", cx: 221, cy: 211, r: 100, label: "Dovada", color: "emerald" },
] as const;

const COLOR_MAP = {
  blue: { fill: "rgb(59 130 246)", fillOpacity: 0.05, stroke: "rgb(59 130 246)", strokeHover: "rgb(37 99 235)" },
  violet: { fill: "rgb(139 92 246)", fillOpacity: 0.05, stroke: "rgb(139 92 246)", strokeHover: "rgb(124 58 237)" },
  indigo: { fill: "rgb(99 102 241)", fillOpacity: 0.05, stroke: "rgb(99 102 241)", strokeHover: "rgb(79 70 229)" },
  teal: { fill: "rgb(20 184 166)", fillOpacity: 0.05, stroke: "rgb(20 184 166)", strokeHover: "rgb(15 118 110)" },
  emerald: { fill: "rgb(16 185 129)", fillOpacity: 0.05, stroke: "rgb(16 185 129)", strokeHover: "rgb(5 150 105)" },
} as const;

export function PinggoVenn() {
  const id = useId();
  const filterId = `pinggo-venn-shadow-${id.replace(/:/g, "")}`;

  return (
    <div
      className={cn(
        "w-full max-w-[560px] mx-auto lg:mx-0 mt-8 lg:mt-0",
        "animate-[pinggo-venn-in_0.4s_ease-out_both]"
      )}
    >
      <svg
        viewBox="0 0 600 480"
        className="w-full h-auto"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Diagrama Pinggo: Intrare lead, Repartizare, Termen de raspuns, Escaladare, Dovada"
        role="img"
      >
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodOpacity="0.08" floodColor="rgb(15 23 42)" />
          </filter>
        </defs>
        <g filter={`url(#${filterId})`} className="pinggo-venn">
          {/* Outer circles */}
          {CIRCLES.map((c) => {
            const colors = COLOR_MAP[c.color];
            return (
              <g key={c.id} className="cursor-default">
                <circle
                  cx={c.cx}
                  cy={c.cy}
                  r={c.r}
                  fill={colors.fill}
                  fillOpacity={colors.fillOpacity}
                  stroke={colors.stroke}
                  strokeWidth="2"
                  className="venn-circle transition-all duration-300"
                />
                <text
                  x={c.cx}
                  y={c.cy}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="venn-label fill-slate-600 font-bold transition-colors duration-300 pointer-events-none select-none"
                  style={{ fontFamily: "var(--font-body), Inter, system-ui, sans-serif", fontSize: "12px" }}
                >
                  {c.label}
                </text>
              </g>
            );
          })}
          {/* Center circle: PINGGO (orange) */}
          <g className="cursor-default">
            <circle
              cx={300}
              cy={240}
              r={58}
              fill="rgb(249 115 22)"
              fillOpacity="0.06"
              stroke="rgb(249 115 22)"
              strokeWidth="2.5"
              className="venn-circle transition-all duration-300"
            />
            <text
              x={300}
              y={240}
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-slate-800 font-extrabold tracking-tight pointer-events-none select-none"
              style={{ fontFamily: "var(--font-heading), Fraunces, system-ui, serif", fontSize: "14px" }}
            >
              PINGGO
            </text>
          </g>
        </g>
      </svg>
    </div>
  );
}
