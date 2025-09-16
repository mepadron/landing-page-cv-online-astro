import type { ClassAttributes, ImgHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";
import { PlaceHolderImages } from "../../lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

// --- Placeholder for Next.js Image component ---
const Image = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />;
// ---------------------------------------------

const atsImage = PlaceHolderImages.find((img) => img.id === "feature-ats");
const tipsImage = PlaceHolderImages.find((img) => img.id === "feature-tips");
const hostingImage = PlaceHolderImages.find((img) => img.id === "feature-hosting");

const features = [
  {
    title: "Asistente de Optimización ATS",
    description: "Recibe un informe automatizado con los cambios necesarios para mejorar la puntuación y legibilidad de tu CV en los sistemas de seguimiento de candidatos (ATS) más comunes.",
    points: [
      "Análisis de palabras clave.",
      "Recomendaciones de formato.",
      "Mejora de la estructura general.",
    ],
    image: atsImage,
    imageSide: "left",
  },
  {
    title: "Consejos Personalizados con IA",
    description: "Mientras completas tu CV, nuestra IA te ofrece consejos personalizados para mejorar el contenido, la redacción y la estructura, basándose en las mejores prácticas para tu rol objetivo.",
    points: [
      "Sugerencias contextuales.",
      "Optimización de secciones clave.",
      "Feedback constructivo e instantáneo.",
    ],
    image: tipsImage,
    imageSide: "right",
  },
    {
    title: "Tu CV Siempre Online",
    description: "Aloja tu currículum finalizado en línea con una URL única y compartible, facilitando que los empleadores potenciales accedan a tu perfil profesional en cualquier momento.",
    points: [
      "URL personalizable y fácil de recordar.",
      "Acceso global 24/7.",
      "Actualizaciones en tiempo real.",
    ],
    image: hostingImage,
    imageSide: "left",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Funcionalidades que te Dan la Ventaja
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Aprovecha la tecnología para construir un CV que no solo se ve bien, sino que también funciona de manera inteligente.
          </p>
        </div>
        <div className="mt-20 space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
                feature.imageSide === "right" ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div
                className={`flex justify-center ${
                  feature.imageSide === "right" ? "lg:col-start-2" : ""
                }`}
              >
                {feature.image && (
                   <div className="relative group w-[400px] h-[400px] sm:w-[500px] sm:h-[500px]">
                     <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                     <Image
                        src={feature.image.imageUrl}
                        alt={feature.title}
                        width={500}
                        height={500}
                        data-ai-hint={feature.image.imageHint}
                        className="relative rounded-2xl shadow-xl w-full h-full object-cover"
                    />
                   </div>
                )}
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <ul className="space-y-3 pt-2">
                  {feature.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="mr-3 h-5 w-5 flex-shrink-0 text-accent" />
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
