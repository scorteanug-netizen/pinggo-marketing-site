import { Link } from "react-router-dom";
import { Container } from "./Container";

const footerLinks = {
  product: [
    { href: "/product", label: "Product" },
    { href: "/pricing", label: "Pricing" },
    { href: "/docs", label: "Docs" },
  ],
  company: [
    { href: "/contact", label: "Contact" },
    { href: "/terms", label: "Terms" },
    { href: "/privacy", label: "Privacy" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50">
      <Container>
        <div className="py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-extrabold text-foreground tracking-tight">Pinggo</span>
              </Link>
              <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
                Romania-first, EU-ready. Garantam ca fiecare lead este contactat la timp, cu dovada verificabila si escaladare automata.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-foreground mb-5">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-foreground mb-5">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-accent transition-colors font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="mt-14 pt-8 border-t border-border/50">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Pinggo. Romania-first, EU-ready.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
