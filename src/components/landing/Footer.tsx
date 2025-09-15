import { FilePen, Linkedin, Twitter } from "lucide-react";

// --- Placeholder for Next.js Link component ---
const Link = (props) => <a {...props}></a>;
// --------------------------------------------

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <FilePen className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold tracking-tight text-foreground">
                Perfil Pro
              </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              Tu herramienta todo-en-uno para crear, gestionar y compartir tu CV online de forma profesional.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="#benefits" className="text-sm text-muted-foreground hover:text-primary">Beneficios</Link></li>
              <li><Link href="#templates" className="text-sm text-muted-foreground hover:text-primary">Plantillas</Link></li>
              <li><Link href="#features" className="text-sm text-muted-foreground hover:text-primary">Funcionalidades</Link></li>
              <li><Link href="#pricing" className="text-sm text-muted-foreground hover:text-primary">Precios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
              <li><Link href="#" className="text-sm text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Perfil Pro. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
