import { Check } from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "../ui/card";
import type { ClassAttributes, AnchorHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";

// --- Placeholder for Next.js Link component ---
const Link = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}></a>;
// --------------------------------------------

const plans = [
  {
    name: "Lanzamiento",
    price: 10,
    priceSuffix: "pago único",
    description: "Ideal para empezar. Un solo pago para tener tu CV online por 6 meses.",
    features: [
      "Acceso a todas las plantillas",
      "Alojamiento por 6 meses",
      "URL personalizada",
      "Soporte estándar",
    ],
    cta: "Empezar ahora",
  },
  {
    name: "Recurrente",
    price: 10,
    priceSuffix: "/ mes",
    description: "La opción flexible. Paga mes a mes después de tu plan inicial.",
    features: [
      "Acceso a todas las plantillas",
      "Alojamiento continuo",
      "URL personalizada",
      "Soporte prioritario",
    ],
    cta: "Elegir plan mensual",
    popular: true,
  },
  {
    name: "Anual",
    price: 50,
    priceSuffix: "/ año",
    description: "El mejor valor. Un año completo de servicio con un gran descuento.",
    features: [
      "Acceso a todas las plantillas",
      "Alojamiento por 12 meses",
      "URL personalizada",
      "Soporte prioritario",
    ],
    cta: "Obtener plan anual",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Planes Flexibles para tu Carrera
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige el plan que se adapte a tus necesidades y da el siguiente paso profesional.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className={`flex flex-col ${plan.popular ? 'border-primary shadow-2xl' : ''}`}>
              <CardHeader>
                {plan.popular && (
                  <div className="text-sm font-bold text-primary text-center bg-primary/10 py-1 px-3 rounded-full w-fit mx-auto mb-4">Más Popular</div>
                )}
                <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
                <CardDescription className="text-center">
                  <span className="text-4xl font-bold text-foreground">${plan.price}</span>
                  <span className="text-muted-foreground">{plan.priceSuffix}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-center mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-accent hover:bg-accent/90 text-accent-foreground'}`} size="lg">
                  <Link href="#">{plan.cta}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
