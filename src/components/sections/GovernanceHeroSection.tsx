import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function GovernanceHeroSection() {
  return (
    <section className="relative bg-surface-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 to-primary/80" />
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-6">
              Institutional Framework
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 tracking-tight">
              Governance & Controls
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-lg">
              A sovereign-grade governance architecture designed to ensure
              institutional integrity, accountability, and transparent
              decision-making across all operational layers.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" href="#controls">
                Explore Controls
              </Button>
              <Button variant="secondary" href="/investors">
                View Compliance
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
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <div className="mt-6 grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3</div>
                  <div className="text-xs text-white/60 mt-1">Committees</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">4</div>
                  <div className="text-xs text-white/60 mt-1">Escalation Tiers</div>
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
