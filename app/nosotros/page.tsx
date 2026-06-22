import { Navbar } from "@/components/sections/navbar";
import { Benefits } from "@/components/sections/benefits";
import { Footer } from "@/components/sections/footer";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros | CHORIZAM",
  description:
    "Conoce la historia y los valores detrás de CHORIZAM. Chorizos artesanales al carbón con tradición colombiana.",
};

export default function Nosotros() {
  return (
    <main className="min-h-screen">
      <Navbar />
      {/* Hero section for Nosotros */}
      <section className="relative min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Background Pattern — same as home */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight">
            Nosotros
          </h1>

          <div className="relative max-w-xs sm:max-w-sm md:max-w-2xl mx-auto mt-10 sm:mt-16 mb-10 sm:mb-16">
            {/* Elemento decorativo de fondo (sombra/resplandor desplazado) */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-accent/20 rounded-[2rem] transform -rotate-2 opacity-60 blur-sm transition-transform duration-700 group-hover:rotate-0" />
            <div className="absolute -inset-2 bg-gradient-to-tr from-accent/40 to-primary/30 rounded-[1.8rem] transform rotate-1 transition-transform duration-700 group-hover:-rotate-1" />

            {/* Contenedor principal de la imagen */}
            <div className="group relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-2xl shadow-2xl ring-4 ring-background border border-border/50">
              <Image
                src="/assets/ComboCompleto.png"
                alt="El equipo de CHORIZAM"
                fill
                className="object-cover transition-transform hover:scale-105 duration-700"
              />
              {/* Overlay sutil para darle un look más premium */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            En CHORIZAM nos dedicamos a crear la mejor experiencia de chorizos
            artesanales, manteniendo viva la tradición colombiana con cada
            preparación al carbón.
          </p>
        </div>
      </section>

      <Benefits />
      <Footer />
    </main>
  );
}
