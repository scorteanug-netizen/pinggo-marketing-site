import { Clock, CheckCircle, AlertTriangle, List, GitBranch, BarChart3 } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader className="pb-3">
              <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
