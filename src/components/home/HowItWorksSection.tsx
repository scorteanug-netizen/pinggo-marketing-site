import { Webhook, Zap, Calendar, AlertTriangle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

const steps = [
  {
    icon: Webhook,
    title: "Lead intră",
    description: "Lead-ul vine din Facebook/Google/site și ajunge în Pinggo instant.",
  },
  {
    icon: Zap,
    title: "Răspuns automat în 15 secunde",
    description: "Pinggo trimite răspuns pe WhatsApp automat: 'Bună! Când doriți programarea?'",
  },
  {
    icon: Calendar,
    title: "Programare automată",
    description: "Clientul alege un slot. Pinggo sincronizează în Google Calendar automat.",
  },
  {
    icon: AlertTriangle,
    title: "Dacă ceva nu merge, escaladare",
    description: "Dacă nimeni nu răspunde în 10 minute, Pinggo alertează managerul automat.",
  },
];

export function HowItWorksSection() {
  return (
    <Section alternate canvas id="how-it-works">
      <SectionHeading
        title="Cum functioneaza"
        subtitle="4 pasi simpli, de la lead la programare"
      />
      <AccentPanel accent="teal" className="p-6 md:p-8">
        <div className="grid gap-5 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center group">
              <div className="relative mx-auto mb-4">
                <div className="h-16 w-16 rounded-xl bg-white shadow-lg border border-slate-200 flex items-center justify-center mx-auto transition-all group-hover:shadow-xl group-hover:-translate-y-0.5">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <div className="absolute -top-1.5 -right-1.5 h-7 w-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold shadow-md">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-extrabold text-foreground mb-2 leading-tight">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-snug">{step.description}</p>
            </div>
          ))}
        </div>
      </AccentPanel>
    </Section>
  );
}
