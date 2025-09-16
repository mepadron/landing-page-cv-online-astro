import { Button } from "../ui/Button";

import { PlaceHolderImages } from "../../lib/placeholder-images";
import type { AnchorHTMLAttributes, ClassAttributes, ImgHTMLAttributes } from "react";
import type { JSX } from "react/jsx-runtime";

// --- Placeholder components to avoid errors ---
const Image = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLImageElement> & ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />;
const Link = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => <a {...props}></a>;
// ---------------------------------------------

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === "hero-cv");

  return (
    <section className="relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background/80 to-transparent"
      />
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="max-w-xl text-center lg:text-left">
          <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Crea tu CV Online: Destaca, Conecta, Triunfa
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Nuestra plataforma innovadora y moderna mostrará, tu currículum vitae online que impresiona a los
            reclutadores y a todos los que buscan talento.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
              <Link href="#templates">Ver Ejemplos</Link>
            </Button>
            {/* <Button asChild size="lg" variant="ghost" className="transition-transform hover:scale-105">
              <Link href="#templates">Ver Ejemplos</Link>
            </Button> */}
          </div>
        </div>
        <div className="flex justify-center">
          {heroImage && (
            <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[533px] lg:w-[450px] lg:h-[600px] group">
              <div className="absolute -inset-2.5 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                width={450}
                height={600}
                data-ai-hint={heroImage.imageHint}
                className="relative rounded-xl border-4 border-card/50 shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
