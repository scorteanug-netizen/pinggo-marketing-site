import { Link } from "react-router-dom";
import { Check, Clock, TrendingUp, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";

export function HeroSection() {
  return (
    <section className="section-premium bg-background">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <h1 className="text-foreground">
              First Contact <span className="text-highlight">Proof</span> + <span className="text-highlight">SLA</span> Enforcement
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Garantam ca fiecare lead este contactat la timp, cu dovada verificabila si escaladare automata. Functioneaza cu sau fara CRM.
            </p>
            
            <ul className="mt-10 space-y-4">
              <li className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground text-lg">Clock stop doar pe proof (WhatsApp, email)</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground text-lg">Reminder, reassign, manager escalation</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-foreground text-lg">Rapoarte saptamanale: TTFC, breaches, ownership</span>
              </li>
            </ul>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
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
            <div className="card-premium rounded-2xl p-8 shadow-premium">
              {/* Card Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Lead SLA</span>
                  <h3 className="text-xl font-bold text-foreground mt-2">SLA: 30 min (High intent)</h3>
                </div>
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
              </div>

              {/* Badge */}
              <div className="badge-proof mb-6">
                <Check className="h-4 w-4" />
                Proof: WhatsApp sent
              </div>

              {/* Owner */}
              <div className="flex items-center gap-4 py-5 border-t border-border/50">
                <div className="h-10 w-10 rounded-xl bg-accent/15 flex items-center justify-center">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-base font-semibold text-foreground">Owner: Ioana</p>
                  <p className="text-sm text-muted-foreground">Assigned 5 min ago</p>
                </div>
              </div>

              {/* Mini Chart Placeholder */}
              <div className="mt-5 pt-5 border-t border-border/50">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-muted-foreground">TTFC Trend</span>
                  <TrendingUp className="h-5 w-5 text-proof" />
                </div>
                <div className="flex items-end gap-1.5 h-16">
                  {[40, 60, 35, 80, 55, 70, 45, 65, 50, 75, 60, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t-sm bg-primary/20 transition-all hover:bg-primary/40"
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
