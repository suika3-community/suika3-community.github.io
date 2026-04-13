import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { PlatformsSection } from "@/components/platforms-section";
import { VnFeaturesSection } from "@/components/vn-features-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { LineageSection } from "@/components/lineage-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <PlatformsSection />
      <VnFeaturesSection />
      <PhilosophySection />
      <LineageSection />
      <Footer />
    </main>
  );
}
