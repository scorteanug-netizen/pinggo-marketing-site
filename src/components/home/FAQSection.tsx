import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOME_FAQ_ITEMS } from "@/content/faqs";

export function FAQSection() {
  return (
    <Section secondary>
      <SectionHeading
        title="Intrebari frecvente"
      />
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {HOME_FAQ_ITEMS.map((faq, index) => (
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
