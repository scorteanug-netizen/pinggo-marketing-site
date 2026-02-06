import { Clock, CheckCircle, AlertTriangle, List, GitBranch, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";

const accents = ["orange", "blue", "violet", "teal"] as const;

const features = [
  {
    icon: Clock,
    title: "SLA Policies",
    description: "Defineste SLA pe tip de lead, sursa, sau valoare. Business hours incluse.",
  },
  {
    icon: CheckCircle,
    title: "Proof Events",
    description: "Inregistreaza automat primul contact: WhatsApp, email, call log.",
  },
  {
    icon: AlertTriangle,
    title: "Escalation Chain",
    description: "Reminder, reassign, manager alert. Configurabil per flow.",
  },
  {
    icon: List,
    title: "Lead Timeline",
    description: "Audit log complet: cine, cand, ce actiune. Perfect pentru raportare.",
  },
  {
    icon: GitBranch,
    title: "Flow Builder",
    description: "Preset-uri + reguli custom. Fara cod, setup in 10 minute.",
  },
  {
    icon: BarChart3,
    title: "Weekly Report",
    description: "TTFC, breach rate, ownership. Trimis automat pe email sau Slack.",
  },
];

export function FeaturesSection() {
  return (
    <Section alternate canvas>
      <SectionHeading
        title="Tot ce ai nevoie pentru lead accountability"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
