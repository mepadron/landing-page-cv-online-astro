import type { ClassAttributes, AnchorHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";
import { Button } from "../ui/Button";

// --- Placeholder for Next.js Link component ---
const Link = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}></a>;
// --------------------------------------------

export default function DemoPlantillas() {
  return (
    <section id="demo-plantillas" className="py-20 sm:py-28 bg-muted/30">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 p-12 shadow-lg">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/15 via-transparent to-accent/15"
          ></div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              Explora Nuestro Demo Interactivo
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Descubre cómo nuestras plantillas modernas de CV online pueden transformar tu presencia profesional. 
              Diseños responsivos, optimizados para ATS y creados para destacar en el mercado laboral actual.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-lg bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg transition-transform hover:scale-105"
              >
                <Link href="/templates" target="_blank" rel="noopener noreferrer">
                  Ver Demo de Plantillas
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg border-primary text-primary hover:bg-primary/10 transition-transform hover:scale-105"
              >
                <Link href="/templates">
                  Explorar Todas las Plantillas
                </Link>
              </Button>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-2">Diseños Modernos</h3>
                <p className="text-sm text-muted-foreground">Plantillas actualizadas con las últimas tendencias en diseño profesional</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-2">Optimizadas para Móvil</h3>
                <p className="text-sm text-muted-foreground">Perfectamente visibles en cualquier dispositivo, desde smartphones hasta desktop</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-primary mb-2">Compatibles con ATS</h3>
                <p className="text-sm text-muted-foreground">Diseñadas para superar los sistemas de seguimiento de candidatos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
