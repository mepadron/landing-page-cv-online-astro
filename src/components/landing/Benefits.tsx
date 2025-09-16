import {
  Eye,
  Briefcase,
  RefreshCw,
  Globe2,
  Target,
  ShieldCheck,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

const benefits = [
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: "Máxima Visibilidad",
    description: "Destaca para los reclutadores con un CV siempre accesible y optimizado.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "Profesionalismo Moderno",
    description: "Proyecta una imagen profesional y actualizada con nuestras plantillas de diseño.",
  },
  {
    icon: <RefreshCw className="h-8 w-8 text-primary" />,
    title: "Actualización Fácil",
    description: "Modifica y actualiza tu información de acuerdo a tu plan.",
  },
  {
    icon: <Globe2 className="h-8 w-8 text-primary" />,
    title: "Accesibilidad 24/7",
    description: "Tu CV online, disponible desde cualquier dispositivo, en cualquier lugar del mundo.",
  },
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: "Optimización",
    description: "Aumenta tus posibilidades con el mejor SEO en tu CV.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Control Total",
    description: "Tú decides quién y de acuerdo a tu plan, que vas a mostrar en tu CV.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Un CV online, una Ventana al Mundo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Descubre las ventajas de tener un currículum vitae dinámico, profesional y siempre a tu alcance.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              <CardHeader className="items-center">
                <div className="mb-4 rounded-full bg-primary/10 p-4">
                  {benefit.icon}
                </div>
                <CardTitle className="text-xl font-semibold">{benefit.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-2 text-base">
                {benefit.description}
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
