import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { GovernanceHeroSection } from "@/components/sections/GovernanceHeroSection";
import { ControlsBentoSection } from "@/components/sections/ControlsBentoSection";

export const metadata = {
  title: "Governance & Controls | Zuma Agro-Allied",
  description:
    "Institutional governance architecture with board committees, control doctrine, and consequence enforcement for sovereign agro-industrial operations.",
};

export default function GovernancePage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <GovernanceHeroSection />
        <ControlsBentoSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
