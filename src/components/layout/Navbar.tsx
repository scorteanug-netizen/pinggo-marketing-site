import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

const LOCAL_PLATFORM_URL = "http://localhost:3001/login";
const PROD_PLATFORM_URL = "https://app.pinggo.ro/login";

function getDefaultPlatformUrl() {
  if (typeof window === "undefined") {
    return PROD_PLATFORM_URL;
  }

  const isLocalHost = /^(localhost|127(?:\.\d{1,3}){3}|::1)$/i.test(window.location.hostname);
  return isLocalHost ? LOCAL_PLATFORM_URL : PROD_PLATFORM_URL;
}

function getPlatformLoginUrl() {
  const fallbackUrl = getDefaultPlatformUrl();
  const configuredUrl = import.meta.env.VITE_PLATFORM_URL?.trim();
  if (!configuredUrl) {
    return fallbackUrl;
  }

  const hasProtocol = /^[a-zA-Z][a-zA-Z\d+\-.]*:\/\//.test(configuredUrl);
  const isLocalHost = /^(localhost|127(?:\.\d{1,3}){3}|\[::1\])(?::\d+)?(\/|$)/i.test(configuredUrl);
  const candidateUrl = hasProtocol
    ? configuredUrl
    : `${isLocalHost ? "http" : "https"}://${configuredUrl}`;

  try {
    const parsedUrl = new URL(candidateUrl);
    if (!parsedUrl.pathname || parsedUrl.pathname === "/") {
      parsedUrl.pathname = "/login";
    }

    return parsedUrl.toString();
  } catch {
    return fallbackUrl;
  }
}

const navLinks = [
  { href: "/product", label: "Produs" },
  { href: "/#how-it-works", label: "Cum functioneaza" },
  { href: "/pricing", label: "Preturi" },
  { href: "/docs", label: "Documentatie" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const platformLoginUrl = getPlatformLoginUrl();

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
        <nav className="flex h-12 items-center justify-between py-2">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src="/PINGGO_LOGO.png?v=2" alt="Pinggo" className="h-8 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-orange-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex md:items-center md:gap-4">
            <Button variant="ghost" asChild>
              <a href={platformLoginUrl} target="_blank" rel="noopener noreferrer">Conectare</a>
            </Button>
            <Button asChild className="shadow-md hover:shadow-lg hover:brightness-105 transition-all">
              <Link to="/contact">Solicita demo</Link>
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
                <a href={platformLoginUrl} target="_blank" rel="noopener noreferrer">Conectare</a>
              </Button>
              <Button asChild className="w-full">
                <Link to="/contact">Solicita demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
