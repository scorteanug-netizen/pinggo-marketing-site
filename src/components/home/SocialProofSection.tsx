import { Building2, Stethoscope, Home } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";
import { Accent } from "@/components/Accent";

const industries = [
  {
    icon: Building2,
    title: "Agentii",
    accent: "orange" as const,
    benefits: [
      "SLA diferite pe client si campanie",
      "Proof pe fiecare lead pentru raportare",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinici",
    accent: "blue" as const,
    benefits: [
      "Contactare in maxim 15 minute",
      "Escalare automata la manager",
    ],
  },
  {
    icon: Home,
    title: "Imobiliare",
    accent: "violet" as const,
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
        title={<>Construit pentru echipe care vand din <Accent>leaduri inbound</Accent></>}
        light
      />
      <div className="grid gap-5 md:grid-cols-3">
        {industries.map((industry) => (
          <AccentCard key={industry.title} accent={industry.accent} variant="top" className="border-white/25 bg-white/95 shadow-xl hover:shadow-2xl">
            <div className="pb-2">
              <div className="h-11 w-11 rounded-xl bg-accent/10 flex items-center justify-center mb-3">
                <industry.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-extrabold leading-tight tracking-tight text-foreground">{industry.title}</h3>
            </div>
            <ul className="space-y-2">
              {industry.benefits.map((benefit, index) => (
                <li key={index} className="text-muted-foreground text-sm leading-snug flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </AccentCard>
        ))}
      </div>
    </Section>
  );
}
