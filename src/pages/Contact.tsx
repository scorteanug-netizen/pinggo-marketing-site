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
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
              Contact
            </h1>
            <p className="text-muted-foreground mb-8">
              Completeaza formularul sau scrie-ne direct. Raspundem in 24 ore.
            </p>

            {isSubmitted ? (
              <Card>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Send className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Multumim!
                    </h3>
                    <p className="text-muted-foreground">
                      Revenim in 24 ore.
                    </p>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nume</Label>
                    <Input id="name" name="name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role</Label>
                    <Input id="role" name="role" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Spune-ne despre echipa ta si ce provocari ai cu leadurile..."
                  />
                </div>
                <Button type="submit" size="lg" disabled={isLoading}>
                  {isLoading ? "Se trimite..." : "Trimite mesaj"}
                </Button>
              </form>
            )}
          </div>

          {/* WhatsApp Alternative */}
          <div className="lg:pt-20">
            <Card>
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <MessageSquare className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Preferi WhatsApp?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
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

            <div className="mt-8 p-6 rounded-lg bg-secondary">
              <h3 className="font-semibold text-foreground mb-4">De ce sa vorbim?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Demo personalizat pentru echipa ta</li>
                <li>Intrebari despre pricing sau features</li>
                <li>Suport pentru integrari custom</li>
                <li>Partnership opportunities</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
