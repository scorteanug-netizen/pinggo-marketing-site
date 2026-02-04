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
    <Section>
      <SectionHeading
        title="Integrari din prima zi"
        subtitle="CRM optional. Conectezi HubSpot/Pipedrive/Zoho prin Make/Zapier in v1."
      />
      <div className="flex flex-wrap justify-center gap-3">
        {integrations.map((integration) => (
          <Badge
            key={integration}
            variant="secondary"
            className="text-base px-4 py-2 font-medium"
          >
            {integration}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
