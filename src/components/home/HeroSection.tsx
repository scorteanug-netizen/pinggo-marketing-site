import { Link } from "react-router-dom";
import { Check, Clock, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              First Contact Proof + SLA Enforcement
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Garantam ca fiecare lead este contactat la timp, cu dovada verificabila si escaladare automata. Functioneaza cu sau fara CRM.
            </p>
            
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Clock stop doar pe proof (WhatsApp, email)</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Reminder, reassign, manager escalation</span>
              </li>
              <li className="flex items-start gap-3">
                <Check className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">Rapoarte saptamanale: TTFC, breaches, ownership</span>
              </li>
            </ul>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/contact">Book a demo</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">Start trial</Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Product Card Mock */}
          <div className="relative">
            <div className="rounded-xl border bg-card shadow-lg p-6">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Lead SLA</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">SLA: 30 min (High intent)</h3>
                </div>
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800 mb-4">
                <Check className="h-4 w-4" />
                Proof: WhatsApp sent
              </div>

              {/* Owner */}
              <div className="flex items-center gap-3 py-4 border-t">
                <div className="h-8 w-8 rounded-full bg-accent/20 flex items-center justify-center">
                  <User className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Owner: Ioana</p>
                  <p className="text-xs text-muted-foreground">Assigned 5 min ago</p>
                </div>
              </div>

              {/* Mini Chart Placeholder */}
              <div className="mt-4 pt-4 border-t">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-muted-foreground">TTFC Trend</span>
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex items-end gap-1 h-12">
                  {[40, 60, 35, 80, 55, 70, 45, 65, 50, 75, 60, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-primary/20"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
