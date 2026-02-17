import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const MODULES = [
  { id: "intrare", label: "Intrare lead", caption: "Leaduri din formular, WhatsApp, e-mail sau webhook." },
  { id: "repartizare", label: "Repartizare", caption: "Repartizare dupa agent, program sau regula." },
  { id: "termen", label: "Termen", caption: "Termen diferit in functie de intent si sursa." },
  { id: "escaladare", label: "Escaladare", caption: "Memento, reasignare, alerta manager." },
  { id: "dovada", label: "Confirmare", caption: "Cronometrul se oprește doar la dovada de contact." },
] as const;

export function ConfigureziPinggoSection() {
  const [selected, setSelected] = useState<string>(MODULES[0].id);
  const current = MODULES.find((m) => m.id === selected) ?? MODULES[0];

  return (
    <section className="configurezi-section relative overflow-hidden py-16 md:py-24">
      {/* Light canvas base + dot grid (in CSS) */}
      {/* Top accent: soft blue/purple band behind content */}
      <div className="configurezi-section-top-accent absolute inset-x-0 top-0 h-[260px] pointer-events-none" aria-hidden />

      <Container className="relative z-10">
        {/* Headline + subheadline */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-slate-900 leading-tight tracking-tight">
            Configurezi Pinggo cum vrei.
          </h2>
          <p className="mt-2.5 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-snug">
            Setezi reguli, termene si escaladari pentru fiecare tip de lead. Fara cod.
          </p>
        </div>

        {/* Module picker bar (white, rounded, shadow) */}
        <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 md:mb-10 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 min-w-0">
            {MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelected(m.id)}
                className={cn(
                  "flex-shrink-0 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 hover:scale-105",
                  selected === m.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 hover:shadow-sm"
                )}
              >
                {m.label}
              </button>
            ))}
          </div>
          <Button asChild size="sm" className="flex-shrink-0 w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white shadow-md">
            <Link to="/contact">Solicita demo</Link>
          </Button>
        </div>

        {/* Mockup image + caption */}
        <div className="flex flex-col items-center">
          <img
            src="/form_routing.png"
            alt="Flux de lucru Pinggo"
            className="w-full max-w-4xl h-auto object-contain block my-8"
          />
          <p className="mt-4 text-center text-slate-600 text-sm md:text-base max-w-xl mx-auto leading-snug">
            {current.caption}
          </p>
        </div>
      </Container>
    </section>
  );
}
