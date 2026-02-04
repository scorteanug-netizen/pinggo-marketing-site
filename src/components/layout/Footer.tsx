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
    <footer className="border-t bg-background py-12">
      <Container>
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-foreground">
              Pinggo
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">
              First Contact Proof + SLA Enforcement. Romania-first, EU-ready.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Pinggo - Romania-first, EU-ready
          </p>
        </div>
      </Container>
    </footer>
  );
}
