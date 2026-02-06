import { Clock, CheckCircle, AlertTriangle, List, GitBranch, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";

const accents = ["orange", "blue", "violet", "teal"] as const;

const features = [
  {
    icon: Clock,
    title: "Politici de timp de raspuns",
    description: "Definesti termene pe tip de lead, sursa sau valoare. Include ore de lucru.",
  },
  {
    icon: CheckCircle,
    title: "Dovezi",
    description: "Inregistram automat primul contact: WhatsApp, e-mail, apel.",
  },
  {
    icon: AlertTriangle,
    title: "Escaladare",
    description: "Memento, reasignare, alerta la manager. Configurabil pe fiecare flux.",
  },
  {
    icon: List,
    title: "Istoric lead",
    description: "Jurnal complet: cine, cand, ce a facut. Util pentru raportare.",
  },
  {
    icon: GitBranch,
    title: "Constructor de reguli",
    description: "Sabloane si reguli simple. Fara cod, configurare rapida.",
  },
  {
    icon: BarChart3,
    title: "Raport saptamanal",
    description: "Timp pana la primul contact, intarzieri, responsabil. Trimise pe e-mail sau Slack.",
  },
];

export function FeaturesSection() {
  return (
    <Section alternate canvas>
      <SectionHeading
        title="Tot ce ai nevoie pentru responsabilitate pe leaduri"
      />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <AccentCard key={feature.title} accent={accents[i % 4]} variant="top">
            <div className="pb-2">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-lg font-extrabold leading-tight tracking-tight text-foreground">{feature.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-snug">{feature.description}</p>
          </AccentCard>
        ))}
      </div>
    </Section>
  );
}
