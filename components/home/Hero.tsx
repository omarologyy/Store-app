import Link from "next/link";
import { Button } from "@/components/ui/button";
import HeroCarousel from "./HeroCarousel";

function Hero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl font-bold text-4xl tracking-tight sm:text-6xl">
          Drive Innovation, Drive Quality
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">
          Explore top-rated cars from leading manufacturers. From luxury sedans
          to rugged SUVs, compare features, pricing, and reviews to make the
          smartest choice for your next ride.
        </p>
        <Button asChild size="lg" className="mt-10">
          <Link href="/products">Our Products</Link>
        </Button>
      </div>
      <HeroCarousel />
    </section>
  );
}
export default Hero;
