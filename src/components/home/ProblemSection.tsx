import { XCircle } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentCard } from "@/components/AccentCard";
import { Accent } from "@/components/Accent";

const problems = [
  "Ai plătit 50 lei pe lead-ul din Facebook. A răspuns cineva în 5 minute?",
  "Clientul a scris pe WhatsApp la 10:14. A primit răspuns la 17:30.",
  "Lead-ul a întrebat de preț. Răspunsul a fost 'Vă sun eu'. Nu a sunat nimeni.",
  "5 leads astăzi. 2 alocate lui Alex. Alex e în concediu de 3 zile.",
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
