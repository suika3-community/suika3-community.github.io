import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { LineageSection } from "@/components/lineage-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PhilosophySection />
      <LineageSection />
      <Footer />
    </main>
  );
}
