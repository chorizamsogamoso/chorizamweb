"use client";

import { cn } from "@/lib/utils";
import { BadgeCustom } from "./badge-custom";
import { Button } from "./button";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { Flame } from "lucide-react";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const { name, description, price, size, image, badge } = product;

  return (
    <article
      className={cn(
        "group relative bg-card rounded-xl overflow-hidden border border-border",
        "transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{
            backgroundImage: `url(${image})`,
            backgroundColor: "oklch(0.45 0.08 30)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
        
        {/* Badge */}
        {badge && (
          <div className="absolute top-3 left-3">
            <BadgeCustom variant="accent">{badge}</BadgeCustom>
          </div>
        )}

        {/* Size indicator */}
        <div className="absolute bottom-3 right-3 bg-card/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-card-foreground">
          {size}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <Flame className="w-4 h-4 text-accent flex-shrink-0" />
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-lg font-bold text-primary">
            {formatPrice(price)}
          </span>
          <Button size="sm" className="transition-transform hover:scale-105">
            Ordenar
          </Button>
        </div>
      </div>
    </article>
  );
}
