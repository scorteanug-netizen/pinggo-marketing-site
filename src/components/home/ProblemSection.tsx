import { XCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

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
            Leadurile nu se pierd din lipsa de trafic.{" "}
            <span className="text-highlight">Se pierd din lipsa de executie.</span>
          </>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto">
        {problems.map((problem, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-5 rounded-2xl bg-destructive/5 border border-destructive/10 shadow-soft transition-all hover:shadow-md hover:-translate-y-0.5"
          >
            <XCircle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
            <span className="text-foreground font-medium">{problem}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
