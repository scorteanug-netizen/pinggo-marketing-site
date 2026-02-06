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
  { id: "dovada", label: "Dovada", caption: "Cronometrul se opreste doar la dovada verificabila." },
] as const;

export function ConfigureziPinggoSection() {
  const [selected, setSelected] = useState<string>(MODULES[0].id);
  const current = MODULES.find((m) => m.id === selected) ?? MODULES[0];

  return (
    <section className="configurezi-section relative overflow-hidden pt-12 pb-12 md:pt-14 md:pb-14">
      {/* Background: deep blue/purple + soft geometric waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f] via-[#252550] to-[#2d1b4e]" aria-hidden />
      <div className="configurezi-section-waves absolute inset-0 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} aria-hidden />

      <Container className="relative z-10">
        {/* Headline + subheadline */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-white leading-tight tracking-tight">
            Configurezi Pinggo cum vrei.
          </h2>
          <p className="mt-2.5 text-white/85 text-base md:text-lg max-w-2xl mx-auto leading-snug">
            Setezi reguli, termene si escaladari pentru fiecare tip de lead. Fara cod.
          </p>
        </div>

        {/* Module picker bar (white, rounded, shadow) */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 md:p-4 bg-white rounded-2xl shadow-xl border border-white/20 mb-6 md:mb-8">
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 min-w-0">
            {MODULES.map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelected(m.id)}
                className={cn(
                  "flex-shrink-0 px-3 py-2 rounded-xl text-sm font-semibold transition-colors",
                  selected === m.id
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
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
          <div className="w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10 border border-white/10 bg-white/5">
            <img
              src="/workflow.png"
              alt="Flux de lucru Pinggo"
              className="w-full h-auto object-contain block"
            />
          </div>
          <p className="mt-4 text-center text-white/90 text-sm md:text-base max-w-xl mx-auto leading-snug">
            {current.caption}
          </p>
        </div>
      </Container>
    </section>
  );
}
