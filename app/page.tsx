import { Hero } from "@/components/hero";
import { OriginStory } from "@/components/origin-story";
import { ProductShowcase } from "@/components/product-showcase";
import { Recognition } from "@/components/recognition";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ValuesStrip } from "@/components/values-strip";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-hidden bg-linen text-espresso">
        <Hero />
        <ProductShowcase />
        <OriginStory />
        <Recognition />
        <ValuesStrip />
      </main>
      <SiteFooter />
    </>
  );
}
