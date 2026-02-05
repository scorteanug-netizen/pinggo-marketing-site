import { useState } from "react";
import { MessageSquare, Send } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    toast({
      title: "Mesaj trimis!",
      description: "Revenim in 24 ore.",
    });
  };

  return (
    <Layout>
      <Section>
        <div className="grid gap-12 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* Form */}
          <div>
            <h1 className="text-foreground mb-5">
              Contact
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
                      Revenim in 24 ore.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="font-semibold">Nume</Label>
                    <Input id="name" name="name" required className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-semibold">Email</Label>
                    <Input id="email" name="email" type="email" required className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-semibold">Company</Label>
                    <Input id="company" name="company" className="h-12 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role" className="font-semibold">Role</Label>
                    <Input id="role" name="role" className="h-12 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-semibold">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Spune-ne despre echipa ta si ce provocari ai cu leadurile..."
                    className="rounded-xl resize-none"
                  />
                </div>
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Se trimite..." : "Trimite mesaj"}
                </Button>
              </form>
            )}
          </div>

          {/* WhatsApp Alternative */}
          <div className="lg:pt-24">
            <Card className="shadow-premium">
              <CardHeader>
                <div className="h-14 w-14 rounded-2xl bg-proof/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-7 w-7 text-proof" />
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
                  Intrebari despre pricing sau features
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Suport pentru integrari custom
                </li>
                <li className="flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  Partnership opportunities
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
