import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";

const Privacy = () => {
  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-foreground mb-10">
            Privacy Policy
          </h1>

          <div className="prose prose-gray max-w-none space-y-8">
            <p className="text-muted-foreground text-lg">
              Last updated: January 2024
            </p>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Pinggo ("we", "us", "our") is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information when you use our service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed">
                We collect information you provide directly, including account details, lead data, and communication records. We also collect usage data automatically through cookies and similar technologies.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use your information to provide and improve our service, process transactions, send notifications, and comply with legal obligations. We do not sell your personal data to third parties.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Storage and Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                Your data is stored securely in EU-based data centers. We implement industry-standard security measures including encryption, access controls, and regular security audits.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your data for as long as your account is active or as needed to provide services. You can request deletion of your data at any time by contacting us.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Your Rights (GDPR)</h2>
              <p className="text-muted-foreground leading-relaxed">
                Under GDPR, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. To exercise these rights, contact us at privacy@pinggo.io.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use third-party services for hosting, analytics, and communication. These providers are contractually bound to protect your data and process it only as instructed by us.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use essential cookies to operate our service and optional analytics cookies to understand usage. You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this policy from time to time. We will notify you of significant changes via email or through the service.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50">
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions about this Privacy Policy or to exercise your data rights, contact us at privacy@pinggo.io.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Privacy;
