"use client";

import { BadgeCustom } from "@/components/ui/badge-custom";
import { benefits } from "@/data/products";
import { Flame, Hand, Leaf, Heart } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  flame: <Flame className="w-8 h-8" />,
  hand: <Hand className="w-8 h-8" />,
  leaf: <Leaf className="w-8 h-8" />,
  heart: <Heart className="w-8 h-8" />,
};

export function Benefits() {
  return (
    <section id="beneficios" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <BadgeCustom variant="default">Por Qué Elegirnos</BadgeCustom>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Nuestra Diferencia
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            En CHORIZAM nos dedicamos a crear la mejor experiencia de chorizos
            artesanales, manteniendo viva la tradición colombiana.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit) => (
            <article
              key={benefit.id}
              className="group bg-card rounded-xl p-6 border border-border transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {iconMap[benefit.icon]}
              </div>
              
              <h3 className="text-lg font-semibold text-card-foreground mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
