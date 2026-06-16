import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { PartnershipHeroSection } from "@/components/sections/PartnershipHeroSection";
import { TierModelSection } from "@/components/sections/TierModelSection";
import { SovereignAlignmentSection } from "@/components/sections/SovereignAlignmentSection";

export const metadata = {
  title: "Partnership | Zuma Agro-Allied",
  description:
    "Strategic institutional partnerships for sovereign-scale agro-industrial transformation — federal ministries, state governments, and institutional investors.",
};

export default function PartnershipPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <PartnershipHeroSection />
        <TierModelSection />
        <SovereignAlignmentSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
