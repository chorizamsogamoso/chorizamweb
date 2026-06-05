"use client";

import { Button } from "@/components/ui/button";
import { heroContent } from "@/data/products";
import { BadgeCustom } from "@/components/ui/badge-custom";
import { ArrowRight, Flame } from "lucide-react";

export function Hero() {
  const { tagline, title, subtitle, ctaText } = heroContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/30 to-background" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2">
              <BadgeCustom variant="secondary">
                <Flame className="w-3 h-3 mr-1" />
                {tagline}
              </BadgeCustom>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight">
              {title}
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="group transition-all hover:scale-105"
                onClick={() => document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {ctaText}
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">15cm</p>
                <p className="text-sm text-muted-foreground">Tamaño</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Artesanal</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">Al</p>
                <p className="text-sm text-muted-foreground">Carbón</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-accent/30 to-primary/30" />
              
              {/* Main image container */}
              <div
                className="absolute inset-8 rounded-full bg-cover bg-center shadow-2xl"
                style={{
                  backgroundColor: "oklch(0.40 0.12 30)",
                  backgroundImage: "url('/assets/foto%20sandra%20chorizo.png')",
                }}
              />

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-lg animate-bounce">
                <Flame className="w-6 h-6 text-accent" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card px-4 py-2 rounded-xl shadow-lg">
                <p className="text-sm font-semibold text-card-foreground">
                  Hecho con amor
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
