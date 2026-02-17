import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Avem deja CRM. De ce ne trebuie Pinggo?",
    answer: "CRM-ul stocheaza date. Pinggo garanteaza executia. Poti folosi Pinggo in paralel cu orice CRM: noi ne ocupam de termen de raspuns, escaladare si dovada, CRM-ul ramane sursa de adevar pentru date.",
  },
  {
    question: "Putem folosi Pinggo fara CRM?",
    answer: "Da. Pinggo functioneaza singur. Leadurile intra prin webhook sau redirectionare e-mail, fara CRM. Ideal pentru echipe mici sau agentii.",
  },
  {
    question: "Ce inseamna dovada de primul contact?",
    answer: "Dovada = eveniment verificabil ca agentul a contactat lead-ul. Poate fi un mesaj WhatsApp trimis, un e-mail trimis sau un apel. Fara dovada, termenul ramane deschis.",
  },
  {
    question: "Se poate folosi cu WhatsApp?",
    answer: "Da. Integram cu WhatsApp Business API. Cand agentul trimite un mesaj pe WhatsApp, Pinggo inregistreaza automat dovada si opreste cronometrul.",
  },
  {
    question: "Cum functioneaza in afara orelor de lucru?",
    answer: "Termenul se calculeaza doar pe ore de lucru. Daca un lead vine la 23:00, cronometrul porneste a doua zi la 09:00. Configurezi programul pe echipa sau agent.",
  },
  {
    question: "Putem seta termene diferite pe tipuri de leaduri?",
    answer: "Da. Poti defini termene diferite pe sursa (Facebook, Google, site), tip (intent ridicat sau scazut), valoare estimata sau orice camp din payload.",
  },
];

export function FAQSection() {
  return (
    <Section>
      <SectionHeading
        title="Intrebari frecvente"
      />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-xl border border-gray-200 bg-card px-6 md:px-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg data-[state=open]:border-orange-500 data-[state=open]:shadow-lg"
            >
              <AccordionTrigger className="text-left font-semibold text-base py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-sm leading-snug">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
