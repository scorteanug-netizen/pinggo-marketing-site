import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const webhookPayload = `{
  "event": "lead.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "lead_abc123",
    "source": "facebook_ads",
    "campaign": "winter_promo",
    "name": "Ion Popescu",
    "email": "ion@email.com",
    "phone": "+40721123456",
    "message": "Vreau mai multe detalii",
    "custom_fields": {
      "property_type": "apartment",
      "budget": "100000"
    }
  }
}`;

const docs = [
  {
    id: "webhook",
    title: "Webhook Integration",
    content: `
Pinggo accepta leaduri prin webhook POST request. Trimite un JSON payload la endpoint-ul tau dedicat.

**Endpoint:** \`https://api.pinggo.io/v1/leads/{your_api_key}\`

**Method:** POST

**Headers:**
- Content-Type: application/json

**Required fields:**
- email sau phone (minim unul)

**Optional fields:**
- name, source, campaign, message, custom_fields

Raspunsul va fi un JSON cu lead_id si status.
    `,
    hasCode: true,
  },
  {
    id: "slack",
    title: "Slack Integration",
    content: `
Conecteaza Slack pentru a primi notificari in timp real.

**Pasi de instalare:**

1. In Pinggo, navigheaza la Settings > Integrations
2. Click pe "Add Slack"
3. Autorizeaza aplicatia Pinggo in workspace-ul tau
4. Selecteaza channel-ul pentru notificari
5. Configureaza ce tipuri de alerte vrei sa primesti:
   - New lead assigned
   - SLA warning (50%)
   - SLA breach imminent (75%)
   - SLA breached (100%)
   - Proof received

**Comenzi Slack:**
- \`/pinggo status\` - vezi leadurile tale active
- \`/pinggo proof [lead_id]\` - marcheaza lead ca contactat
    `,
    hasCode: false,
  },
  {
    id: "whatsapp",
    title: "WhatsApp Connect",
    content: `
Integreaza WhatsApp Business pentru proof automat.

**Pasi de conectare:**

1. Ai nevoie de un cont WhatsApp Business API (prin provider: Twilio, MessageBird, 360dialog)
2. In Pinggo, navigheaza la Settings > Integrations > WhatsApp
3. Introdu API credentials de la provider
4. Configureaza webhook-ul din provider catre Pinggo
5. Mapeaza numarul de telefon al agentilor

**Cum functioneaza proof-ul:**

Cand un agent trimite un mesaj WhatsApp catre lead:
1. Provider-ul trimite webhook la Pinggo
2. Pinggo verifica: from = agent, to = lead phone
3. Daca match, clock stop + proof logged

**Supported providers:**
- Twilio
- MessageBird
- 360dialog
- WATI
    `,
    hasCode: false,
  },
  {
    id: "email",
    title: "Email Forwarding",
    content: `
Trimite leaduri la Pinggo prin email forwarding.

**Setup:**

1. Primesti un email dedicat: \`leads-{your_id}@inbound.pinggo.io\`
2. Configureaza forwarding din sursa ta:
   - Gmail: Settings > Forwarding
   - CRM: automation rule
   - Form builder: notification email

**Parsing:**

Pinggo extrage automat:
- From: sursa lead-ului
- Subject: devine titlu
- Body: se parseaza pentru email, telefon, nume

**Custom parsing:**

Pentru formate specifice, configureaza reguli custom in Settings > Email Parsing.

**Limitari:**
- Max 10MB per email
- Attachments sunt ignorate (doar text)
    `,
    hasCode: false,
  },
];

const Docs = () => {
  return (
    <Layout>
      {/* Hero */}
      <Section>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-foreground">
            Documentation
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Ghiduri de integrare si referinta tehnica pentru Pinggo.
          </p>
        </div>
      </Section>

      {/* Table of Contents */}
      <Section alternate>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Cuprins</h2>
          <ul className="space-y-3">
            {docs.map((doc) => (
              <li key={doc.id}>
                <a
                  href={`#${doc.id}`}
                  className="text-accent hover:underline font-medium text-lg transition-colors"
                >
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Doc Sections */}
      {docs.map((doc, index) => (
        <Section key={doc.id} alternate={index % 2 === 0} canvas={index % 2 === 1} id={doc.id}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-foreground mb-8">{doc.title}</h2>
            <div className="prose prose-gray max-w-none">
              {doc.content.split("\n").map((line, i) => {
                if (line.startsWith("**") && line.endsWith("**")) {
                  return (
                    <h3 key={i} className="text-xl font-bold mt-8 mb-4 text-foreground">
                      {line.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (line.startsWith("- ")) {
                  return (
                    <li key={i} className="text-muted-foreground ml-4 mb-2">
                      {line.replace("- ", "")}
                    </li>
                  );
                }
                if (line.includes("`") && !line.startsWith("**")) {
                  const parts = line.split("`");
                  return (
                    <p key={i} className="text-muted-foreground my-3 leading-relaxed">
                      {parts.map((part, j) =>
                        j % 2 === 1 ? (
                          <code key={j} className="bg-secondary px-2 py-1 rounded-lg text-sm font-mono font-medium text-foreground">
                            {part}
                          </code>
                        ) : (
                          part
                        )
                      )}
                    </p>
                  );
                }
                if (line.trim()) {
                  return (
                    <p key={i} className="text-muted-foreground my-3 leading-relaxed">
                      {line}
                    </p>
                  );
                }
                return null;
              })}
            </div>

            {doc.hasCode && (
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="text-lg">Sample Payload</CardTitle>
                </CardHeader>
                <CardContent>
                  <pre className="bg-foreground text-background p-5 rounded-xl overflow-x-auto text-sm leading-relaxed">
                    <code>{webhookPayload}</code>
                  </pre>
                </CardContent>
              </Card>
            )}
          </div>
        </Section>
      ))}
    </Layout>
  );
};

export default Docs;
