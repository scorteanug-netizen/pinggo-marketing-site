import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { cn } from "@/lib/utils";

const ITEMS = [
  "HubSpot",
  "Pipedrive",
  "Zoho CRM",
  "Google Sheets",
  "WhatsApp",
  "Slack",
  "Email",
  "Webhook",
] as const;

export function EcosistemSection() {
  return (
    <Section canvas className="ecosistem-section-tight">
      <SectionHeading
          title="Compatibila cu ecosistemul tau"
          subtitle="Conectezi rapid canalele si sistemele pe care le folosesti deja."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {ITEMS.map((name, i) => (
            <div
              key={name}
              className={cn(
                "rounded-2xl bg-white border-2 border-slate-200 p-5 flex flex-col items-center justify-center min-h-[120px]",
                "shadow-[0_4px_20px_rgba(15,23,42,0.06)] hover:shadow-[0_8px_28px_rgba(15,23,42,0.1)]",
                "transition-all duration-300",
                i % 3 === 0 && "hover:border-orange-500",
                i % 3 === 1 && "hover:border-blue-500",
                i % 3 === 2 && "hover:border-violet-500"
              )}
            >
              <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 mb-3">
                Compatibil
              </span>
              <span className="text-lg font-bold text-slate-800 tracking-tight text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
    </Section>
  );
}
