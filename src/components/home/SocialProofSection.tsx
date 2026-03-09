import { Building2, Stethoscope, Home } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";
import { Accent } from "@/components/Accent";

const industries = [
  {
    icon: Building2,
    title: "Agenții",
    accent: "orange" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    benefits: [
      "Termene diferite pe client și campanie. Dovadă pe fiecare lead pentru raportare.",
    ],
  },
  {
    icon: Stethoscope,
    title: "Clinici",
    accent: "violet" as const,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
    benefits: [
      "Contactare rapidă, fără leaduri uitate. Escaladare automată la manager.",
    ],
  },
  {
    icon: Home,
    title: "Imobiliare",
    accent: "violet" as const,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
    benefits: [
      "Repartizare pe zonă sau tip proprietate. Reasignare automată dacă nu există răspuns.",
    ],
  },
];

export function SocialProofSection() {
  return (
    <Section highlightBlue>
      <SectionHeading
        title={<>Construit pentru echipe care vând din <Accent>leaduri inbound</Accent></>}
        light
      />
      <div className="grid gap-6 lg:gap-8 md:grid-cols-3">
        {industries.map((industry) => (
          <AccentCard key={industry.title} accent={industry.accent} variant="top" className="border-white/25 bg-white/95">
            <div className="pb-2">
              <div className={`mb-3 flex h-11 w-11 items-center justify-center rounded-xl ${industry.iconBg}`}>
                <industry.icon className={`h-5 w-5 ${industry.iconColor}`} />
              </div>
              <h3 className="text-lg font-extrabold leading-tight tracking-tight text-foreground">{industry.title}</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-snug">
              {industry.benefits[0]}
            </p>
          </AccentCard>
        ))}
      </div>
    </Section>
  );
}
