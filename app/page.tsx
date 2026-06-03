import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { FeaturedProduct } from "@/components/sections/featured-product";
import { ProductGrid } from "@/components/sections/product-grid";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedProduct />
      <ProductGrid />
      <Footer />
    </main>
  );
}
