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
      <div className="grid gap-5 md:grid-cols-3">
        {industries.map((industry, i) => (
          <Card key={industry.title} className={`card-on-blue ${i === 0 ? "card-accent-orange" : i === 1 ? "card-accent-blue" : "card-accent-violet"}`}>
            <CardHeader className="pb-2">
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <industry.icon className="h-5 w-5 text-accent" />
              </div>
              <CardTitle className="text-lg">{industry.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {industry.benefits.map((benefit, index) => (
                  <li key={index} className="text-muted-foreground text-sm leading-snug flex items-start gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
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
