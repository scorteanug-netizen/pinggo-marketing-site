import { Check } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const items = [
  "Câte leaduri au intrat azi",
  "Câte au primit răspuns în <15 min",
  "Câte au programare",
  "Care agent a întârziat",
  "Raport săptămânal pe email",
];

export function CeVedeManagerulSection() {
  return (
    <Section alternate canvas id="ce-vede-managerul">
      <SectionHeading
        title="Ce vede managerul"
        subtitle="Vizibilitate completă, fără întrebări. Totul la un click."
      />
      <div className="max-w-2xl mx-auto">
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Check className="h-5 w-5 text-primary" />
              </div>
              <span className="text-slate-800 font-semibold text-base">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
