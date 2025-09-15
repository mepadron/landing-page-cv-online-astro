import { FilePen } from "lucide-react";

export default function Preloader() {
  return (
    <div id="preloader-container" className="fixed inset-0 z-[200] flex items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center gap-4">
        <div className="relative flex items-center justify-center">
          <div className="absolute h-24 w-24 rounded-full bg-primary/20 animate-ping"></div>
          <FilePen className="relative h-12 w-12 text-primary" />
        </div>
        <p className="text-lg text-muted-foreground animate-pulse">
          Preparando tu lienzo profesional...
        </p>
      </div>
    </div>
  );
}
