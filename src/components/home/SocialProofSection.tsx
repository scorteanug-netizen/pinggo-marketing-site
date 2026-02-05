import { Building2, Stethoscope, Home } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const industries = [
  {
    icon: Building2,
    title: "Agentii",
    benefits: [
      "SLA diferite pe client si campanie",
      "Proof pe fiecare lead pentru raportare",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinici",
    benefits: [
      "Contactare in maxim 15 minute",
      "Escalare automata la manager",
    ],
  },
  {
    icon: Home,
    title: "Imobiliare",
    benefits: [
      "Routing pe zona sau tip proprietate",
      "Reassign automat daca agentul nu raspunde",
    ],
  },
];

export function SocialProofSection() {
  return (
    <Section highlightBlue>
      <SectionHeading
        title="Construit pentru echipe care vand din leaduri inbound"
        light
      />
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry.title} className="card-on-blue hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="h-14 w-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-4">
                <industry.icon className="h-7 w-7 text-accent" />
              </div>
              <CardTitle className="text-xl">{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="text-muted-foreground flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
