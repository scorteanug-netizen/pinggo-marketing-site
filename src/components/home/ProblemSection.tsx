import { XCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";
import { Accent } from "@/components/Accent";

const problems = [
  "Lead neasumat - nimeni nu stie cine se ocupa",
  "Lead intarziat - contactat dupa ore sau zile",
  "Fara dovada - nu stii daca a fost contactat real",
  "Fara escaladare - problemele se descopera prea tarziu",
];

export function ProblemSection() {
  return (
    <Section canvas>
      <SectionHeading
        title={
          <>
            Leadurile nu se pierd din lipsa de trafic. Se pierd din lipsa de <Accent>executie.</Accent>
          </>
        }
      />
      <div className="grid gap-5 sm:grid-cols-2 max-w-3xl mx-auto">
        {problems.map((problem, index) => (
          <AccentCard
            key={index}
            accent={index % 2 === 0 ? "orange" : "gray"}
            variant="left"
            className="bg-rose-50 border-slate-200"
          >
            <div className="flex items-start gap-3">
              <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium text-sm leading-snug">{problem}</span>
            </div>
          </AccentCard>
        ))}
      </div>
    </Section>
  );
}
