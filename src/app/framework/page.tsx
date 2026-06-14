import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { FrameworkHeroSection } from "@/components/sections/FrameworkHeroSection";
import { DoctrinesSidebar } from "@/components/sections/DoctrinesSidebar";
import { MVZSection } from "@/components/sections/MVZSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Framework | Zuma Agro-Allied",
  description:
    "Strategic framework governing Zuma Agro-Allied's sovereign-scale agro-industrial transformation — five doctrines, MVZ philosophy, and four-phase deployment timeline.",
};

export default function FrameworkPage() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1">
        <FrameworkHeroSection />

        {/* Doctrines Sidebar + MVZ Content */}
        <section className="py-16 md:py-24">
          <div className="max-w-[1280px] mx-auto px-10 md:px-6">
            <div className="flex flex-col lg:flex-row gap-12">
              <DoctrinesSidebar />
              <div className="flex-1 min-w-0">
                {/* Doctrines Detail */}
                <div className="mb-16">
                  <h2 className="text-2xl md:text-3xl font-bold text-surface-charcoal mb-6">
                    Non-Negotiable Doctrines
                  </h2>
                  <div className="space-y-8">
                    <div
                      id="doctrine-01"
                      className="bg-surface-stone/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                          01
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                            Yield Precedes Scale
                          </h3>
                          <p className="text-surface-slate">
                            Prove the yield before scaling the operation. Every
                            commodity must achieve 2-3x national average yields
                            in controlled conditions before commercial deployment.
                            Data-driven validation ensures operational viability
                            before capital commitment.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="doctrine-02"
                      className="bg-surface-stone/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                          02
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                            Data Sovereignty
                          </h3>
                          <p className="text-surface-slate">
                            Own and control all operational data. From soil
                            sensors to yield metrics, every data point is
                            captured, analyzed, and leveraged for operational
                            advantage. No third-party data dependency.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="doctrine-03"
                      className="bg-surface-stone/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                          03
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                            Corridor Integrity
                          </h3>
                          <p className="text-surface-slate">
                            Maintain quality across the entire value chain —
                            from seed to shelf. Vertical integration ensures
                            traceability, quality control, and margin capture
                            at every stage of production and distribution.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="doctrine-04"
                      className="bg-surface-stone/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                          04
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                            Community Capital
                          </h3>
                          <p className="text-surface-slate">
                            Invest in local communities for sustainable growth.
                            Outgrower schemes, skills transfer, and shared
                            infrastructure create mutual value and ensure
                            long-term operational stability.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div
                      id="doctrine-05"
                      className="bg-surface-stone/30 rounded-lg p-6"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                          05
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                            Audit Transparency
                          </h3>
                          <p className="text-surface-slate">
                            Complete transparency in all operations. Real-time
                            reporting, third-party audits, and open governance
                            frameworks build trust with investors, partners,
                            and regulatory authorities.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <MVZSection />
              </div>
            </div>
          </div>
        </section>

        <TimelineSection />

        {/* Download CTA */}
        <section className="py-16 md:py-24 bg-surface-charcoal text-white">
          <div className="max-w-[1280px] mx-auto px-10 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Deployment Blueprint
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              Access the comprehensive operational blueprint detailing our
              strategic framework, deployment timeline, and investment
              parameters.
            </p>
            <Button variant="primary" href="/enrollment/step1">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Blueprint
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
