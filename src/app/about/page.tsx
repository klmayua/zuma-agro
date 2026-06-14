import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { AboutHeroSection } from "@/components/sections/AboutHeroSection";
import { SBUSection } from "@/components/sections/SBUSection";
import { BoardSection } from "@/components/sections/BoardSection";
import { ExecutiveSection } from "@/components/sections/ExecutiveSection";
import { PartnersSection } from "@/components/sections/PartnersSection";

export const metadata = {
  title: "About | Zuma Agro-Allied",
  description:
    "Learn about Zuma Agro-Allied Integrated Enterprise — Nigeria's sovereign-scale agro-industrial transformation platform.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1">
        <AboutHeroSection />
        <SBUSection />
        <BoardSection />
        <ExecutiveSection />
        <PartnersSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
