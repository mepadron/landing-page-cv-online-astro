import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { PlaceHolderImages } from "../../lib/placeholder-images";

const testimonials = [
  {
    id: "avatar-1",
    name: "Ana García",
    role: "Desarrolladora Full-Stack",
    quote:
      "¡Increíble! En minutos, pasé de tener un CV aburrido a uno que realmente destaca. Conseguí dos entrevistas la primera semana de usarlo.",
  },
  {
    id: "avatar-2",
    name: "Carlos Rodriguez",
    role: "Gerente de Proyectos",
    quote:
      "La optimización ATS es revolucionaria. Vi un aumento notable en las respuestas de los reclutadores. La plataforma es intuitiva y potente.",
  },
  {
    id: "avatar-3",
    name: "Laura Martínez",
    role: "Recién Graduada en Marketing",
    quote:
      "Como recién graduada, no sabía por dónde empezar. Perfil Pro me guió para crear un CV profesional que me consiguió mi primer trabajo.",
  },
];

export default function Testimonials() {
  const getAvatar = (id: string) => PlaceHolderImages.find((img) => img.id === id);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Historias de Éxito de Nuestros Usuarios
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            No confíes solo en nuestra palabra. Mira lo que otros profesionales
            han logrado.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatar = getAvatar(testimonial.id);
            return (
              <Card key={testimonial.name} className="flex flex-col justify-between shadow-lg">
                <CardContent className="p-6">
                  <p className="text-muted-foreground italic">
                    "{testimonial.quote}"
                  </p>
                </CardContent>
                <div className="bg-muted/50 p-6 flex items-center gap-4">
                  {avatar && (
                     <Avatar className="h-12 w-12">
                        <AvatarImage src={avatar.imageUrl} alt={testimonial.name} data-ai-hint={avatar.imageHint} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}