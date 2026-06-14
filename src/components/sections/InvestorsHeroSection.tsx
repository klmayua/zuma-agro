import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function InvestorsHeroSection() {
  return (
    <section className="relative bg-surface-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Badge variant="secondary">Section 5.2</Badge>
              <div className="flex items-center gap-1.5 text-white/60 text-xs font-medium tracking-wider uppercase">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                Security Tagged
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-tight">
              Investor Intelligence Room
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              Institutional-grade capital deployment framework for
              Nigeria&apos;s sovereign agro-industrial transformation.
              Transparent reporting, structured returns, and verified impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#capital">
                Capital Architecture
              </Button>
              <Button variant="secondary" href="#briefing">
                Request Briefing
              </Button>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
              <div className="aspect-[4/3] bg-surface-charcoal/50 rounded-xl overflow-hidden flex items-center justify-center">
                <svg
                  className="w-24 h-24 text-secondary/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">$25M</div>
                  <div className="text-xs text-white/60 mt-1">Total Raise</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">5</div>
                  <div className="text-xs text-white/60 mt-1">Allocation Tranches</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">100%</div>
                  <div className="text-xs text-white/60 mt-1">Audit Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
