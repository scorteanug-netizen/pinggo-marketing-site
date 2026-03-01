import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import type { NisaKey } from "@/content/blog/cat-costa-un-lead-pierdut";
import { defaultsByNisa } from "@/content/blog/cat-costa-un-lead-pierdut";

const nisaOptions: { key: NisaKey; label: string }[] = [
  { key: "clinica", label: "Clinică" },
  { key: "solar", label: "Solar" },
  { key: "imobiliare", label: "Imobiliare" },
  { key: "custom", label: "Custom" },
];

const currencyFormatter = new Intl.NumberFormat("ro-RO");

function usePrefersReducedMotion() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setReducedMotion(mediaQuery.matches);

    handleChange();
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return reducedMotion;
}

function useAnimatedNumber(target: number, durationMs = 700) {
  const [value, setValue] = useState(target);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reducedMotion) {
      setValue(target);
      return;
    }

    let frameId = 0;
    const startValue = value;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(1, elapsed / durationMs);
      const eased = 1 - Math.pow(1 - progress, 3);
      const next = startValue + (target - startValue) * eased;
      setValue(next);

      if (progress < 1) {
        frameId = requestAnimationFrame(tick);
      }
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, durationMs, reducedMotion]);

  return value;
}

function getRiskColorClass(responseRate: number) {
  if (responseRate > 40) return "accent-orange-500";
  if (responseRate >= 20) return "accent-amber-500";
  return "accent-green-500";
}

function getRiskTextClass(responseRate: number) {
  if (responseRate > 40) return "text-orange-600";
  if (responseRate >= 20) return "text-amber-600";
  return "text-green-600";
}

export function LeadCostCalculator() {
  const [nisa, setNisa] = useState<NisaKey>("clinica");
  const [leadsPerMonth, setLeadsPerMonth] = useState(defaultsByNisa.clinica.leads);
  const [responseRate, setResponseRate] = useState(defaultsByNisa.clinica.responseRate);
  const [conversionRate, setConversionRate] = useState(defaultsByNisa.clinica.conversion);
  const [averageClientValue, setAverageClientValue] = useState(defaultsByNisa.clinica.clientValue);

  useEffect(() => {
    const defaults = defaultsByNisa[nisa];
    setLeadsPerMonth(defaults.leads);
    setResponseRate(defaults.responseRate);
    setConversionRate(defaults.conversion);
    setAverageClientValue(defaults.clientValue);
  }, [nisa]);

  const leadsLost = useMemo(() => leadsPerMonth * (responseRate / 100), [leadsPerMonth, responseRate]);
  const clientsLost = useMemo(() => leadsLost * (conversionRate / 100), [leadsLost, conversionRate]);
  const revenueLost = useMemo(() => clientsLost * averageClientValue, [clientsLost, averageClientValue]);
  const annualLoss = useMemo(() => revenueLost * 12, [revenueLost]);

  const animatedLeadsLost = useAnimatedNumber(leadsLost);
  const animatedClientsLost = useAnimatedNumber(clientsLost);
  const animatedRevenueLost = useAnimatedNumber(revenueLost);
  const animatedAnnualLoss = useAnimatedNumber(annualLoss);

  const responseSliderColor = getRiskColorClass(responseRate);
  const responseTextColor = getRiskTextClass(responseRate);
  const isHighAnnualLoss = annualLoss > 50000;

  return (
    <div className="rounded-3xl border border-border/70 bg-white p-6 shadow-sm md:p-8">
      <div className="flex items-center gap-3">
        <span className="text-2xl" aria-hidden>
          🧮
        </span>
        <p className="text-2xl font-extrabold text-foreground">Calculatorul de pierderi Pinggo</p>
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold text-foreground">Nișa ta</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {nisaOptions.map((option) => {
            const isActive = nisa === option.key;
            return (
              <button
                key={option.key}
                type="button"
                onClick={() => setNisa(option.key)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  isActive
                    ? "border-orange-300 bg-orange-500 text-white shadow-sm"
                    : "border-border bg-background text-foreground hover:border-orange-300 hover:text-orange-600",
                )}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-7 space-y-6">
        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <label htmlFor="leads-per-month" className="font-medium text-foreground">
              Leads pe lună
            </label>
            <span className="font-semibold text-foreground">{Math.round(leadsPerMonth)}</span>
          </div>
          <input
            id="leads-per-month"
            type="range"
            min={10}
            max={500}
            value={leadsPerMonth}
            onChange={(event) => setLeadsPerMonth(Number(event.target.value))}
            className="h-2 w-full cursor-pointer accent-orange-500 transition-colors"
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <label htmlFor="response-rate" className="font-medium text-foreground">
              % fără răspuns în 15 min
            </label>
            <span className={cn("font-semibold transition-colors", responseTextColor)}>{Math.round(responseRate)}%</span>
          </div>
          <input
            id="response-rate"
            type="range"
            min={0}
            max={80}
            value={responseRate}
            onChange={(event) => setResponseRate(Number(event.target.value))}
            className={cn("h-2 w-full cursor-pointer transition-colors", responseSliderColor)}
          />
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-sm">
            <label htmlFor="conversion-rate" className="font-medium text-foreground">
              Rată conversie lead → client
            </label>
            <span className="font-semibold text-foreground">{Math.round(conversionRate)}%</span>
          </div>
          <input
            id="conversion-rate"
            type="range"
            min={5}
            max={60}
            value={conversionRate}
            onChange={(event) => setConversionRate(Number(event.target.value))}
            className="h-2 w-full cursor-pointer accent-orange-500 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="average-client-value" className="mb-2 block text-sm font-medium text-foreground">
            Valoarea medie a unui client (RON)
          </label>
          <div className="relative max-w-xs">
            <Input
              id="average-client-value"
              type="number"
              min={1}
              step={100}
              value={averageClientValue}
              onChange={(event) => setAverageClientValue(Math.max(1, Number(event.target.value) || 1))}
              className="pr-14"
            />
            <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">
              RON
            </span>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "mt-8 rounded-2xl border p-5 md:p-6",
          isHighAnnualLoss ? "border-red-200 bg-red-50" : "border-orange-200 bg-orange-50",
        )}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <p className="text-sm font-medium text-muted-foreground">Pierzi lunar</p>
            <p className="mt-1 text-3xl font-extrabold text-foreground">
              {currencyFormatter.format(Math.round(animatedRevenueLost))} RON
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Pierzi anual</p>
            <p className={cn("mt-1 text-3xl font-extrabold", isHighAnnualLoss ? "text-red-700" : "text-foreground")}>
              {currencyFormatter.format(Math.round(animatedAnnualLoss))} RON
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-muted-foreground">Clienți pierduți</p>
            <p className="mt-1 text-3xl font-extrabold text-foreground">{Math.round(animatedClientsLost)} / lună</p>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Leads pierdute estimate: {animatedLeadsLost.toFixed(1)} / lună
        </p>
      </div>

      <div className="mt-7">
        <Button asChild size="lg" className="shadow-md hover:shadow-lg">
          <a href="https://pinggo.ro/#contact">Elimină aceste pierderi — Solicită demo</a>
        </Button>
      </div>
    </div>
  );
}
