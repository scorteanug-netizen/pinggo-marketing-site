import { Clock, Timer, AlertTriangle, UserCheck, CheckCircle, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Accent } from "@/components/Accent";
import { cn } from "@/lib/utils";

const BORDER_COLORS = [
  "border-t-2 border-t-orange-500",
  "border-t-2 border-t-blue-500",
  "border-t-2 border-t-violet-500",
  "border-t-2 border-t-teal-500",
  "border-t-2 border-t-orange-500",
  "border-t-2 border-t-blue-500",
] as const;

const features = [
  {
    icon: Clock,
    title: "Termene pe tip de lead",
    description: "Setezi termene diferite dupa sursa, intent sau valoare. Include ore de lucru.",
  },
  {
    icon: Timer,
    title: "Cronometru pe fiecare lead",
    description: "Fiecare lead primeste un termen limita, vizibil pentru echipa si manager.",
  },
  {
    icon: AlertTriangle,
    title: "Escaladare automata",
    description: "Memento la timp, reasignare cand e nevoie, alerta la manager daca se depaseste.",
  },
  {
    icon: UserCheck,
    title: "Spune cine e responsabil",
    description: "Stii mereu cine are leadul si cand a fost preluat. Fara discutii.",
  },
  {
    icon: CheckCircle,
    title: "Dovada primului contact",
    description: "Cronometrul se opreste doar la dovada: WhatsApp, e-mail sau apel inregistrat.",
  },
  {
    icon: BarChart3,
    title: "Raport saptamanal",
    description: "Vezi intarzieri, termene depasite si responsabili. Trimise automat pe e-mail sau Slack.",
  },
];

export function FeaturesSection() {
  return (
    <Section alternate canvas className="features-section-tight">
      <SectionHeading
        title={
          <>
            In sfarsit, <Accent>un singur sistem</Accent> care nu lasa leadurile sa se piarda.
          </>
        }
        subtitle="Termene clare, dovezi verificabile si escaladare automata. Ca sa fie executie, nu presupuneri."
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={feature.title}
            className={cn(
              "rounded-2xl bg-white border border-slate-200 overflow-hidden",
              "shadow-[0_8px_30px_rgba(15,23,42,0.08)] hover:shadow-[0_12px_40px_-8px_rgba(15,23,42,0.12)]",
              "transition-all duration-300 hover:-translate-y-0.5",
              "p-5",
              BORDER_COLORS[i]
            )}
          >
            <div className="pb-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-xl font-extrabold leading-tight tracking-tight text-slate-900">
                {feature.title}
              </h3>
            </div>
            <p className="text-slate-600 text-sm leading-snug">{feature.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
