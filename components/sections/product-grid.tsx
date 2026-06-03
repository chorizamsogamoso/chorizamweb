"use client";

import { ProductCard } from "@/components/ui/product-card";
import { BadgeCustom } from "@/components/ui/badge-custom";
import { products } from "@/data/products";

export function ProductGrid() {
  return (
    <section id="productos" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <BadgeCustom variant="secondary">Nuestro Menú</BadgeCustom>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold text-foreground">
            Productos y Combos
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra variedad de chorizos artesanales y combos especiales,
            todos preparados al carbón con el sabor auténtico de Colombia.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
