import { Webhook, Zap, Calendar, AlertTriangle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

const steps = [
  {
    icon: Webhook,
    title: "Leadul intră",
    description: "Din formular, Facebook Ads, sau WhatsApp. Se conectează în 5 minute, fără să schimbi nimic.",
  },
  {
    icon: Zap,
    title: "Răspuns instant",
    description: "Clientul primește mesaj pe WhatsApp în 15 secunde. Întrebări scurte + propunere programare.",
  },
  {
    icon: Calendar,
    title: "Programare automată",
    description: "Slot ales → calendar actualizat → confirmare trimisă. Fără apeluri, fără așteptare.",
  },
  {
    icon: AlertTriangle,
    title: "Dacă ceva nu merge",
    description: "Clientul nu răspunde? Follow-up automat. Agentul nu preia? Reasignare + alertă manager. Niciun lead nu se pierde.",
  },
];

export function HowItWorksSection() {
  return (
    <Section alternate canvas id="how-it-works">
      <SectionHeading
        title="Cum functioneaza"
        subtitle="4 pasi simpli, de la lead la dovada"
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
