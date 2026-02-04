import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const comparisons = [
  {
    ai: "Conversatie automata",
    pinggo: "Ownership + SLA cu deadline",
  },
  {
    ai: "Un singur canal",
    pinggo: "Cross-channel proof (WhatsApp, email, call)",
  },
  {
    ai: "Notify la eroare",
    pinggo: "Enforcement cu escaladare si audit",
  },
];

export function DifferentiationSection() {
  return (
    <Section>
      <SectionHeading
        title="AI raspunde. Pinggo garanteaza executia."
        subtitle="De ce SLA enforcement bate AI-ul in vanzari B2B"
      />
      <div className="max-w-3xl mx-auto">
        <div className="rounded-lg border overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-2 bg-secondary">
            <div className="p-4 border-r">
              <span className="font-semibold text-muted-foreground">AI Agent</span>
            </div>
            <div className="p-4">
              <span className="font-semibold text-primary">Pinggo</span>
            </div>
          </div>
          {/* Rows */}
          {comparisons.map((row, index) => (
            <div key={index} className="grid grid-cols-2 border-t">
              <div className="p-4 border-r text-muted-foreground">
                {row.ai}
              </div>
              <div className="p-4 text-foreground font-medium">
                {row.pinggo}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
