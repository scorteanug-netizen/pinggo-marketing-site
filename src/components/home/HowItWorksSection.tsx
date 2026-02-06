import { Webhook, Clock, AlertTriangle, CheckCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

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
      <AccentPanel accent="teal" className="p-6 md:p-8">
        <div className="grid gap-6 md:grid-cols-4">
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
