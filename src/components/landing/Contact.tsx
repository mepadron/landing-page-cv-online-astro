import { Mail, Phone, User } from "lucide-react";
import { Card, CardContent } from "../ui/card";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ponte en Contacto
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Estamos aquí para ayudarte. No dudes en contactarnos.
          </p>
        </div>
        <div className="mt-16 max-w-lg mx-auto">
          <Card className="shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Responsable</h3>
                  <p className="text-muted-foreground">Juan Pérez</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                  <a href="mailto:contacto@perfilpro.com" className="text-muted-foreground hover:text-primary">
                    contacto@perfilpro.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-primary/10 p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Teléfono</h3>
                  <a href="tel:+34123456789" className="text-muted-foreground hover:text-primary">
                    +34 123 456 789
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
