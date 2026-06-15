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
        <section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto text-center md:text-left">
            <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-stack-md">
              Institutional Governance &amp; Operating Leadership
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
              Zuma Agro-Allied Integrated Enterprise is a sovereign-scale agro-industrial transformation platform designed to solve Nigeria&apos;s structural food system failures. Our governance and operating architecture ensures disciplined integration across the entire agricultural value chain.
            </p>
          </div>
        </section>
        <BoardSection />
        <ExecutiveSection />
        <PartnersSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
