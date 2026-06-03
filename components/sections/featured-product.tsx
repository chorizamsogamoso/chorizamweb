"use client";

import { Button } from "@/components/ui/button";
import { BadgeCustom } from "@/components/ui/badge-custom";
import { featuredProduct, formatPrice } from "@/data/products";
import { Flame, Star, Clock, Ruler } from "lucide-react";

export function FeaturedProduct() {
  const { name, description, price, size, image, badge } = featuredProduct;

  return (
    <section className="py-20 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <BadgeCustom variant="default">Producto Destacado</BadgeCustom>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Nuestro Favorito
          </h2>
        </div>

        {/* Featured Card */}
        <div className="bg-card rounded-2xl overflow-hidden shadow-xl border border-border">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto min-h-[400px]">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundColor: "oklch(0.40 0.12 30)",
                  backgroundImage: `url(${image})`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/20 lg:bg-gradient-to-l" />
              
              {/* Badge */}
              {badge && (
                <div className="absolute top-6 left-6">
                  <BadgeCustom variant="accent">
                    <Star className="w-3 h-3 mr-1" />
                    {badge}
                  </BadgeCustom>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <Flame className="w-6 h-6 text-accent" />
                  <span className="text-sm font-medium text-accent">
                    Al Carbón
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-card-foreground">
                  {name}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Ruler className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      {size}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary px-3 py-2 rounded-lg">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-sm font-medium text-secondary-foreground">
                      Preparación rápida
                    </span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Precio</p>
                    <p className="text-3xl font-bold text-primary">
                      {formatPrice(price)}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="transition-all hover:scale-105 hover:shadow-lg"
                  >
                    Ordenar Ahora
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
