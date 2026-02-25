import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { isHubspotConfigured, submitContactToHubspot } from "@/lib/hubspot";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError("");

    if (!isHubspotConfigured("contact")) {
      setSubmitError("Formularul nu este configurat corect. Lipsesc setarile HubSpot.");
      toast({
        variant: "destructive",
        title: "Configurare lipsa",
        description: "Seteaza VITE_HUBSPOT_PORTAL_ID si VITE_HUBSPOT_CONTACT_FORM_ID.",
      });
      return;
    }

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!name || !company || !phone || !email) {
      setSubmitError("Completeaza toate campurile obligatorii.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubmitError("Adresa de email nu este valida.");
      return;
    }

    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 9) {
      setSubmitError("Numarul de telefon nu este valid.");
      return;
    }

    setIsLoading(true);
    try {
      await submitContactToHubspot({
        name,
        company,
        phone,
        email,
      });

      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Cerere trimisa!",
        description: "Revenim in maximum 24 de ore.",
      });
    } catch (error) {
      const messageText = error instanceof Error ? error.message : "Nu am putut trimite formularul.";
      setSubmitError(messageText);
      toast({
        variant: "destructive",
        title: "Eroare la trimitere",
        description: messageText,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Layout>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <h1 className="text-foreground mb-5">
              Contacteaza-ne
            </h1>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Completeaza formularul sau scrie-ne direct. Raspundem in 24 ore.
            </p>

            {isSubmitted ? (
              <Card className="shadow-premium">
                <CardContent className="pt-8">
                  <div className="text-center py-10">
                    <div className="h-20 w-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                      <Send className="h-10 w-10 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Multumim!
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      Revenim in maximum 24 de ore.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Nume prenume</Label>
                    <Input id="name" name="name" required placeholder="Ex: Andrei Popescu" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-semibold">Companie</Label>
                    <Input id="company" name="company" required placeholder="Ex: Pinggo SRL" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="font-semibold">Telefon</Label>
                    <Input id="phone" name="phone" type="tel" required placeholder="Ex: 07xx xxx xxx" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="Ex: nume@companie.ro" className="h-12 rounded-xl" />
                  </div>
                </div>
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Se trimite..." : "Trimite formularul"}
                </Button>
                {submitError && <p className="text-sm text-red-600">{submitError}</p>}
              </form>
            )}
          </div>

          {/* WhatsApp Alternative */}
          <div className="lg:pt-24">
            <Card className="shadow-premium">
              <CardHeader>
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-100">
                  <MessageSquare className="h-7 w-7 text-violet-600" />
                </div>
                <CardTitle className="text-xl">Preferi WhatsApp?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Scrie-ne direct pe WhatsApp pentru un raspuns mai rapid.
                </p>
                <Button variant="outline" asChild className="w-full">
                  <a
                    href="https://wa.me/40700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Deschide WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="mt-8 p-6 rounded-2xl bg-secondary border border-border/50 shadow-soft">
              <h3 className="font-bold text-foreground mb-5 text-lg">De ce sa vorbim?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Demo personalizat pentru echipa ta
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Intrebari despre preturi si functionalitati
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Suport pentru integrari personalizate
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Oportunitati de parteneriat
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
