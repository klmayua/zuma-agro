import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { SBUGrid } from "@/components/sections/SBUGrid";
import { DoctrinesSection } from "@/components/sections/DoctrinesSection";
import { BenueValleySection } from "@/components/sections/BenueValleySection";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MetricsSection />
        <SBUGrid />
        <DoctrinesSection />
        <BenueValleySection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
