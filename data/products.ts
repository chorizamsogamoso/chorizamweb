// CHORISAM - Product and Content Data
// Separación de datos y UI para facilitar edición futura

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  image: string;
  badge?: string;
  isFeature?: boolean;
}

export interface Benefit {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface HeroContent {
  tagline: string;
  title: string;
  subtitle: string;
  ctaText: string;
  secondaryCtaText: string;
}

export interface NavLink {
  label: string;
  href: string;
}

// Navigation Links
export const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
];

// Hero Section Content
export const heroContent: HeroContent = {
  tagline: "Tradición al carbón",
  title: "CHORISAM",
  subtitle:
    "Chorizos artesanales preparados al carbón, con el sabor auténtico de la tradición colombiana. Cada bocado cuenta una historia.",
  ctaText: "Ver Productos",
  secondaryCtaText: "Contáctanos",
};

export const featuredProduct: Product = {
  id: "chorizo-premium",
  name: "Chorizo Premium al Carbón",
  description:
    "Nuestro chorizo estrella, preparado con carne seleccionada y especias tradicionales. Asado lentamente al carbón para lograr ese sabor ahumado único que nos caracteriza.",
  price: 15000,
  size: "15 cm",
  image: "/images/featured-chorizo.jpg",
  badge: "Más Vendido",
  isFeature: true,
};

export const products: Product[] = [
  {
    id: "chorizo-clasico",
    name: "Chorizo Clásico",
    description: "El sabor tradicional que todos aman, asado al carbón.",
    price: 12000,
    size: "15 cm",
    image: "/images/chorizo-clasico.jpg",
  },
  {
    id: "combo-arepa",
    name: "Combo con Arepa",
    description: "Chorizo premium acompañado de arepa de maíz recién hecha.",
    price: 18000,
    size: "15 cm",
    image: "/images/combo-arepa.jpg",
    badge: "Popular",
  },
  {
    id: "combo-papa",
    name: "Combo con Papa",
    description: "Chorizo al carbón con papa criolla dorada y salsa especial.",
    price: 20000,
    size: "15 cm",
    image: "/images/combo-papa.jpg",
  },
  {
    id: "combo-queso",
    name: "Combo con Queso Costeño",
    description: "La combinación perfecta: chorizo y queso costeño asado.",
    price: 22000,
    size: "15 cm",
    image: "/images/combo-queso.jpg",
    badge: "Nuevo",
  },
  {
    id: "combo-completo",
    name: "Combo Completo",
    description: "Chorizo, arepa, papa y queso costeño. La experiencia total.",
    price: 28000,
    size: "15 cm",
    image: "/images/combo-completo.jpg",
    badge: "Recomendado",
  },
  {
    id: "chorizo-picante",
    name: "Chorizo Picante",
    description: "Para los amantes del picante, con ají especial de la casa.",
    price: 14000,
    size: "15 cm",
    image: "/images/chorizo-picante.jpg",
  },
];

// Benefits Section
export const benefits: Benefit[] = [
  {
    id: "carbon",
    icon: "flame",
    title: "Asado al Carbón",
    description:
      "Cada chorizo se prepara al carbón, dándole ese sabor ahumado único e inigualable.",
  },
  {
    id: "artesanal",
    icon: "hand",
    title: "100% Artesanal",
    description:
      "Elaborados a mano con recetas tradicionales transmitidas por generaciones.",
  },
  {
    id: "ingredientes",
    icon: "leaf",
    title: "Ingredientes Frescos",
    description:
      "Solo usamos carne seleccionada y especias de la más alta calidad.",
  },
  {
    id: "tradicion",
    icon: "heart",
    title: "Tradición Colombiana",
    description:
      "El auténtico sabor de Colombia en cada mordida, como lo hacía la abuela.",
  },
];

// Footer Content
export const footerContent = {
  description:
    "Chorizos artesanales preparados al carbón con el sabor auténtico de la tradición colombiana.",
  address: "Calle del Sabor #123, Colombia",
  phone: "+57 300 123 4567",
  email: "hola@chorisam.com",
  social: {
    instagram: "#",
    facebook: "#",
    whatsapp: "#",
  },
};

// Format price helper
export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  }).format(price);
};
