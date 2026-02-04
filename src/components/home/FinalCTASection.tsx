import { Link } from "react-router-dom";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/button";

export function FinalCTASection() {
  return (
    <Section alternate>
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Nu lasa leadurile sa se raceasca.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Incepe cu Pinggo si garanteaza ca fiecare lead primeste atentia pe care o merita.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/contact">Book a demo</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/contact">Start trial</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
}
