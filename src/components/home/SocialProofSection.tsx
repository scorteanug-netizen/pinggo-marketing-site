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
    <Section alternate>
      <SectionHeading
        title="Construit pentru echipe care vand din leaduri inbound"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {industries.map((industry) => (
          <Card key={industry.title} className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <industry.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
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
