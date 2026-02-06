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
      <div className="flex flex-wrap justify-center gap-3">
        {integrations.map((integration) => (
          <Badge
            key={integration}
            variant="secondary"
            className="text-sm px-4 py-2 font-semibold bg-white/95 text-foreground shadow-card border border-white/30 rounded-xl hover:bg-white transition-all hover:shadow-card-hover hover:-translate-y-0.5"
          >
            {integration}
          </Badge>
        ))}
      </div>
    </Section>
  );
}
