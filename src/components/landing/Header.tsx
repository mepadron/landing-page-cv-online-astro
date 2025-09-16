"use client";

import React, { useState, useEffect } from "react";
import { FilePen, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/Sheet";
import { cn } from "../../lib/utils";
import { ThemeToggle } from "../ThemeToggle";

const navLinks = [
  { href: "#benefits", label: "Beneficios" },
  { href: "#templates", label: "Plantillas" },
  // { href: "#features", label: "Funcionalidades" },
  { href: "#pricing", label: "Precios" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#contact", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-sm border-b"
          : "bg-transparent"
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <FilePen className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">
            Perfil Pro
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <Button variant="outline">Iniciar Sesión</Button>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
            Empezar Gratis
          </Button>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b pb-4">
                  <a href="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
                    <FilePen className="h-6 w-6 text-primary" />
                    <span className="font-bold">Perfil Pro</span>
                  </a>
                  <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
                    <X className="h-6 w-6" />
                  </Button>
                </div>
                <nav className="flex flex-col items-start gap-6 py-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-foreground transition-colors hover:text-primary"
                      onClick={closeMobileMenu}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-4">
                  <Button variant="outline" size="lg">Iniciar Sesión</Button>
                  <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                    Empezar Gratis
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
