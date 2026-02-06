import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { AccentPanel } from "@/components/AccentPanel";

const bullets = [
  "Calificare simpla: reguli pe sursa, formular, campanie",
  "Repartizare automata: round robin sau pe reguli",
  "Termen de raspuns: diferit pe tip de lead, in orele de lucru",
  "Escaladare: memento, reasignare, alerta manager",
  "Dovada: WhatsApp, e-mail, apel",
];

export function UnSingurSistemSection() {
  return (
    <Section alternate canvas>
      <SectionHeading
        title="In sfarsit, un singur sistem care nu lasa leadurile sa se piarda"
        subtitle="Pinggo aduce intr-un singur loc: preluare, repartizare, termen de raspuns si dovada primului contact."
      />
      <div className="max-w-3xl mx-auto">
        <AccentPanel accent="orange" className="p-6 md:p-8">
          <p className="text-slate-600 text-base leading-relaxed mb-6">
            Preia leaduri din formular, e-mail sau webhook. Le repartizezi automat, setezi termene pe tip de lead si ore de lucru, iar Pinggo urmareste pana cand exista dovada verificabila de primul contact. Daca nu se raspunde la timp, trimite memento, reasigneaza si escaladeaza la manager.
          </p>
          <ul className="space-y-2 mb-6">
            {bullets.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-700 text-sm leading-snug">
                <span className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="font-extrabold text-slate-950 text-lg leading-snug">
            Tu aduci leaduri. Pinggo garanteaza executia.
          </p>
        </AccentPanel>
      </div>
    </Section>
  );
}
