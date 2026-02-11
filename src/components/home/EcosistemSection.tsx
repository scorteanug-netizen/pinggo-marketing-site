import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { cn } from "@/lib/utils";

const ROW_1 = ["HubSpot", "Pipedrive", "Zoho CRM", "ActiveCampaign"] as const;
const ROW_2 = ["Google Calendar", "WhatsApp Business", "Slack", "Webhook"] as const;

const ITEMS = [...ROW_1, ...ROW_2];

export function EcosistemSection() {
  return (
    <Section canvas>
      <SectionHeading
        title="Se integrează cu stack-ul tău existent"
        subtitle="Nu înlocuiește CRM-ul — se conectează cu el."
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
      <div className="mt-5 text-center">
        <Link
          to="/docs"
          className="text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
        >
          Vezi toate integrările &rarr;
        </Link>
      </div>
    </Section>
  );
}
