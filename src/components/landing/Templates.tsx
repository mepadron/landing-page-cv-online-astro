import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious, 
} from "../ui/carousel";
import { Card } from "../ui/card";
import { PlaceHolderImages } from "../../lib/placeholder-images";

// --- Placeholder for Next.js Image component ---
const Image = (props) => <img {...props} />;
// ---------------------------------------------

export default function Templates() {
  const templates = PlaceHolderImages.filter(img => img.id.startsWith("template-"));

  return (
    <section id="templates" className="py-20 sm:py-28 bg-muted/50">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Plantillas Modernas y Profesionales
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Elige el diseño que mejor represente tu carrera. Todos nuestros
            diseños son responsivos y optimizados.
          </p>
        </div>
        <div className="mt-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {templates.map((template) => (
                <CarouselItem key={template.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden p-4 shadow-lg transition-transform hover:scale-105">
                      {template && (
                        <Image
                          src={template.imageUrl}
                          alt={template.description}
                          width={400}
                          height={560}
                          data-ai-hint={template.imageHint}
                          className="rounded-lg w-full h-auto"
                        />
                      )}
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
