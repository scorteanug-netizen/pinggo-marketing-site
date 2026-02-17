import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/badge";

const integrations = [
  "Slack",
  "WhatsApp",
  "Email",
  "Webhook",
  "Make",
  "Zapier",
];

export function IntegrationsSection() {
  return (
    <Section highlightBlue>
      <SectionHeading
        title="Integrari din prima zi"
        subtitle="CRM optional. Conectezi HubSpot, Pipedrive sau Zoho prin Make sau Zapier in versiunea initiala."
        light
      />
      <div className="flex flex-wrap justify-center gap-4">
        {integrations.map((integration) => (
          <Badge
            key={integration}
            variant="secondary"
            className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-orange-500 hover:bg-white hover:shadow-lg"
          >
            {integration}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
