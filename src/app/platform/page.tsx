import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { PlatformHeroSection } from "@/components/sections/PlatformHeroSection";
import { EISSection } from "@/components/sections/EISSection";
import { OperationalNodesSection } from "@/components/sections/OperationalNodesSection";
import { SBUCardsSection } from "@/components/sections/SBUCardsSection";

export const metadata = {
  title: "Platform | Zuma Agro-Allied",
  description:
    "Platform architecture — Enterprise Intelligence System, operational nodes, and strategic business units for sovereign-scale agro-industrial deployment.",
};

export default function PlatformPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-grow">
        <div className="pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full paper-texture">
          <PlatformHeroSection />
          <EISSection />
          <OperationalNodesSection />
          <SBUCardsSection />
        </div>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
