import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

const comparisons = [
  {
    ai: "Conversatie automata",
    pinggo: "Responsabil + termen clar",
  },
  {
    ai: "Un singur canal",
    pinggo: "Dovada pe mai multe canale (WhatsApp, e-mail, apel)",
  },
  {
    ai: "Notifica la eroare",
    pinggo: "Impune respectarea termenului si audit",
  },
];

export function DifferentiationSection() {
  return (
    <Section>
      <SectionHeading
        title={
          <>
            AI raspunde. Pinggo garanteaza <span className="text-highlight">executia.</span>
          </>
        }
        subtitle="De ce respectarea termenului bate automatizarea fara control"
      />
      <div className="max-w-3xl mx-auto">
        <AccentPanel accent="violet">
          <div className="overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-2 bg-secondary">
              <div className="p-4 border-r border-slate-200">
                <span className="font-bold text-sm text-muted-foreground">AI Agent</span>
              </div>
              <div className="p-4">
                <span className="font-bold text-sm text-primary">Pinggo</span>
              </div>
            </div>
            {/* Rows */}
            {comparisons.map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-slate-200">
                <div className="p-4 border-r border-slate-200 text-muted-foreground text-sm leading-snug">
                  {row.ai}
                </div>
                <div className="p-4 text-foreground font-semibold text-sm leading-snug">
                  {row.pinggo}
                </div>
              </div>
            ))}
          </div>
        </AccentPanel>
      </div>
    </Section>
  );
}
