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
    answer: "CRM-ul stocheaza date. Pinggo garanteaza executia. Poti folosi Pinggo in paralel cu orice CRM - noi ne ocupam de SLA, escaladare si proof, CRM-ul ramane sursa de adevar pentru date.",
  },
  {
    question: "Putem folosi Pinggo fara CRM?",
    answer: "Da. Pinggo functioneaza standalone. Leadurile intra prin webhook sau email forwarding, fara sa ai nevoie de CRM. Ideal pentru echipe mici sau agentii.",
  },
  {
    question: "Ce inseamna proof de first contact?",
    answer: "Proof = eveniment verificabil ca agentul a contactat lead-ul. Poate fi un mesaj WhatsApp trimis, un email out, sau un call log. Fara proof, SLA-ul ramane deschis.",
  },
  {
    question: "Se poate folosi cu WhatsApp?",
    answer: "Da. Integram cu WhatsApp Business API. Cand agentul trimite un mesaj pe WhatsApp, Pinggo inregistreaza automat proof-ul si opreste ceasul SLA.",
  },
  {
    question: "Cum functioneaza after-hours?",
    answer: "SLA-ul se calculeaza doar pe business hours. Daca un lead vine la 23:00, ceasul porneste a doua zi la 09:00. Configurezi programul pe echipa sau agent.",
  },
  {
    question: "Putem seta SLA-uri diferite pe tipuri de leaduri?",
    answer: "Da. Poti defini SLA diferite pe sursa (Facebook, Google, website), tip (high intent, low intent), valoare estimata, sau orice camp custom din payload.",
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
              className="bg-card rounded-2xl border border-border/50 px-6 shadow-soft data-[state=open]:shadow-md transition-all"
            >
              <AccordionTrigger className="text-left font-semibold text-lg py-5 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
}
