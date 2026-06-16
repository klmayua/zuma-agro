import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ImpactHeroSection } from "@/components/sections/ImpactHeroSection";
import { MultiplierBentoSection } from "@/components/sections/MultiplierBentoSection";

export const metadata = {
  title: "Impact & National Multiplier Effects | Zuma Agro-Allied",
  description:
    "Exploring the cascading economic impact of Zuma Agro-Allied — from rural industrialisation and FX stabilisation to youth employment and food security across Nigeria.",
};

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ImpactHeroSection />
        <MultiplierBentoSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
