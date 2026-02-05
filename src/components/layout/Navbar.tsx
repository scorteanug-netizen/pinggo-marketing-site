import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/docs", label: "Docs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const elementId = href.replace("/#", "");
      if (location.pathname === "/") {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <Container>
        <nav className="flex h-14 items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-extrabold text-foreground tracking-tight">Pinggo</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" asChild>
              <Link to="#">Log in</Link>
            </Button>
            <Button asChild>
              <Link to="/contact">Book a demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-secondary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden",
            isOpen ? "block" : "hidden"
          )}
        >
          <div className="space-y-1 pb-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block py-3 text-base font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-6">
              <Button variant="outline" asChild className="w-full">
                <Link to="#">Log in</Link>
              </Button>
              <Button asChild className="w-full">
                <Link to="/contact">Book a demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
