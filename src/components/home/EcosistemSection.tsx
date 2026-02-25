import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";

const ROW_1 = ["HubSpot", "Pipedrive", "Zoho CRM", "ActiveCampaign"] as const;
const ROW_2 = ["Google Calendar", "WhatsApp Business", "Slack", "Webhook"] as const;

const ITEMS = [...ROW_1, ...ROW_2];

export function EcosistemSection() {
  return (
    <Section canvas secondary>
      <SectionHeading
        title="Se integrează cu stack-ul tău existent"
        subtitle="Nu înlocuiește CRM-ul — se conectează cu el."
      />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {ITEMS.map((name) => (
          <div
            key={name}
            className="flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
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
          className="link-underline text-sm font-semibold text-orange-500 transition-colors hover:text-orange-600"
        >
          Vezi toate integrările &rarr;
        </Link>
      </div>
    </Section>
  );
}
