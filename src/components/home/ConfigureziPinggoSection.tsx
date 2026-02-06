import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";
import { AccentCard } from "@/components/AccentCard";

const pills = [
  "Termen de raspuns",
  "Ore de lucru",
  "Escaladare",
  "Dovezi",
  "Repartizare",
];

const exampleLines = [
  "Lead din formular: termen 30 min",
  "La 50%: memento",
  "La 75%: reasignare",
  "La 100%: alerta manager",
  "Stop: dovada WhatsApp",
];

export function ConfigureziPinggoSection() {
  return (
    <Section>
      <SectionHeading
        title="Configurezi Pinggo cum vrei"
        subtitle="Stabilesti termene, reguli si escaladari pentru fiecare tip de lead. Fara cod."
      />
      <AccentPanel accent="orange" className="p-6 md:p-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          <div>
            <div className="flex flex-wrap gap-2 mb-6">
              {pills.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 border border-slate-200"
                >
                  {label}
                </span>
              ))}
            </div>
            <div className="max-w-md">
              <AccentCard accent="orange" variant="left" className="p-5">
                <h3 className="text-base font-extrabold text-foreground mb-3 leading-tight">
                  Exemplu de regula
                </h3>
                <ul className="space-y-1.5 text-sm text-slate-600 leading-snug">
                  {exampleLines.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </AccentCard>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5 border border-slate-200 w-full max-w-lg mx-auto md:mx-0 md:max-w-none">
            <img
              src="/workflow.png"
              alt="Flux de lucru Pinggo"
              className="w-full h-auto object-contain block"
            />
          </div>
        </div>
      </AccentPanel>
    </Section>
  );
}
