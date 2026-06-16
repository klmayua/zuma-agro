import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { FrameworkHeroSection } from "@/components/sections/FrameworkHeroSection";
import { DoctrinesSidebar } from "@/components/sections/DoctrinesSidebar";
import { MVZSection } from "@/components/sections/MVZSection";
import { TimelineSection } from "@/components/sections/TimelineSection";

export const metadata = {
  title: "Framework | Zuma Agro-Allied",
  description:
    "Strategic framework governing Zuma Agro-Allied's sovereign-scale agro-industrial transformation — five doctrines, MVZ philosophy, and four-phase deployment timeline.",
};

export default function FrameworkPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <FrameworkHeroSection />

        {/* Doctrines Sidebar + MVZ Content */}
        <section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto border-t border-surface-variant">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16">
            <div className="md:col-span-4 order-2 md:order-1 mt-stack-lg md:mt-0">
              <DoctrinesSidebar />
            </div>
            <div className="md:col-span-8 order-1 md:order-2 space-y-stack-lg">
              <MVZSection />
            </div>
          </div>
        </section>

        <TimelineSection />
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
