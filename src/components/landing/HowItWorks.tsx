import { LayoutTemplate, FileText, Share2 } from "lucide-react";
import { Card } from "../ui/card";

const steps = [
  {
    icon: <LayoutTemplate className="h-10 w-10 text-primary" />,
    title: "Elige tu Plantilla",
    description: "Selecciona entre una variedad de plantillas modernas diseñadas por expertos para causar la mejor impresión.",
    href: "/templates",
  },
  {
    icon: <FileText className="h-10 w-10 text-primary" />,
    title: "Completa tus Datos",
    description: "Rellena tu información de forma intuitiva y recibe consejos de nuestra IA para potenciar tu perfil.",
    href: "#",
  },
  {
    icon: <Share2 className="h-10 w-10 text-primary" />,
    title: "Publica y Comparte",
    description: "Obtén una URL personalizada para tu CV y compártela con el mundo. ¡Así de fácil!",
    href: "#",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Tu CV Profesional en 3 Simples Pasos
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Crear un currículum impactante nunca fue tan sencillo y rápido.
          </p>
        </div>
        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 w-full bg-border max-w-4xl mx-auto hidden md:block"
          />
          <div className="relative grid grid-cols-1 gap-12 md:grid-cols-3">
            {steps.map((step, index) => (
              <a href={step.href} key={index}>
                <Card className="text-center p-8 border-2 border-transparent hover:border-primary hover:shadow-2xl transition-all duration-300 h-full">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                      <span className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">{index + 1}</span>
                      {step.icon}
                    </div>
                    <h3 className="text-2xl font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
