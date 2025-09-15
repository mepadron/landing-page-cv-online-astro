import { Button } from "../ui/Button";

// --- Placeholder for Next.js Link component ---
const Link = (props) => <a {...props}></a>;
// --------------------------------------------

export default function Cta() {
  return (
    <section id="cta" className="py-20 sm:py-28">
      <div className="container">
        <div className="relative overflow-hidden rounded-2xl bg-primary/10 p-12 shadow-lg">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"
          ></div>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl">
              ¿Listo para Crear tu Futuro Profesional?
            </h2>
            <p className="mt-4 text-lg text-primary/80">
              Únete a miles de profesionales que ya están destacando. Tu próximo
              paso en tu carrera comienza aquí y ahora.
            </p>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-14 px-10 text-lg bg-accent text-accent-foreground hover:bg-accent/90 shadow-2xl transition-transform hover:scale-105"
              >
                <Link href="#">Empieza Gratis Ahora</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
