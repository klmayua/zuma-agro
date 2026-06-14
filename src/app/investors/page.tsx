import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { InvestorsHeroSection } from "@/components/sections/InvestorsHeroSection";
import { CapitalBentoSection } from "@/components/sections/CapitalBentoSection";

export const metadata = {
  title: "Investors | Zuma Agro-Allied",
  description:
    "Institutional investor intelligence room with structured capital deployment framework, transparent reporting, and verified impact metrics for Nigeria's sovereign agro-industrial transformation.",
};

export default function InvestorsPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1">
        <InvestorsHeroSection />
        <CapitalBentoSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
