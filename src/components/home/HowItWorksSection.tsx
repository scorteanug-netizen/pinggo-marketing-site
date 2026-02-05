import { Webhook, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const steps = [
  {
    icon: Webhook,
    title: "Intake",
    description: "Leadurile intra prin webhook sau email forwarding. Zero setup manual.",
  },
  {
    icon: Clock,
    title: "SLA Clock",
    description: "Deadline calculat pe business hours. Fiecare lead are un timer.",
  },
  {
    icon: AlertTriangle,
    title: "Escalare",
    description: "Reminder la 50%, reassign la 75%, manager alert la 100%.",
  },
  {
    icon: CheckCircle,
    title: "Proof",
    description: "Clock se opreste doar pe eveniment verificabil: WhatsApp, email, call.",
  },
];

export function HowItWorksSection() {
  return (
    <Section alternate canvas id="how-it-works">
      <SectionHeading
        title="Cum functioneaza"
        subtitle="4 pasi simpli de la lead la proof"
      />
      <div className="grid gap-8 md:grid-cols-4">
        {steps.map((step, index) => (
          <div key={step.title} className="text-center group">
            <div className="relative mx-auto mb-6">
              <div className="h-20 w-20 rounded-2xl bg-card shadow-soft border border-border/50 flex items-center justify-center mx-auto transition-all group-hover:shadow-premium group-hover:-translate-y-1">
                <step.icon className="h-9 w-9 text-primary" />
              </div>
              <div className="absolute -top-2 -right-2 h-9 w-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shadow-lg">
                {index + 1}
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
