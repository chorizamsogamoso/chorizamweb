"use client";

import { footerContent } from "@/data/products";
import { Flame, Instagram, Facebook, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  const { description, address, phone, email, social } = footerContent;

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {/* Brand */}
          <div className="space-y-4 sm:col-span-2 md:col-span-1 text-center sm:text-left">
            <a href="/" className="inline-flex items-center gap-2 group">
              <Flame className="w-8 h-8 text-accent transition-transform group-hover:scale-110" />
              <span className="text-xl font-bold tracking-tight">CHORIZAM</span>
            </a>
            <p className="text-background/70 text-sm leading-relaxed">
              {description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-sm text-background/70">{address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href={`tel:${phone}`}
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-background/70 hover:text-background transition-colors break-all"
                >
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-accent hover:text-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-background/10 hover:bg-accent hover:text-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 sm:mt-12 pt-8 border-t border-background/20 flex flex-col sm:flex-row justify-between items-center gap-3 text-center sm:text-left">
          <p className="text-sm text-background/60">
            &copy; {new Date().getFullYear()} CHORIZAM. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/60">
            Hecho con <span className="text-accent">fuego</span> y tradición
          </p>
        </div>
      </div>
    </footer>
  );
}
