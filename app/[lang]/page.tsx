import { getMessages } from "@/locales";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { StatsSection } from "@/components/stats-section";
import { FeaturesSection } from "@/components/features-section";
import { PlatformsSection } from "@/components/platforms-section";
import { VnFeaturesSection } from "@/components/vn-features-section";
import { PhilosophySection } from "@/components/philosophy-section";
import { LineageSection } from "@/components/lineage-section";
import { Footer } from "@/components/footer";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const t = getMessages(lang);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header lang={lang} t={t} />
      <HeroSection lang={lang} t={t.hero} />
      <StatsSection t={t.stats} />
      <FeaturesSection t={t.features} />
      <PlatformsSection t={t.platforms} />
      <VnFeaturesSection t={t.vnFeatures} />
      <PhilosophySection t={t.philosophy} />
      <LineageSection t={t.lineage} />
      <Footer lang={lang} t={t.footer} />
    </main>
  );
}
