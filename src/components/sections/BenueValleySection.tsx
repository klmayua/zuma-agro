import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function BenueValleySection() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Phase One
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
              Benue Valley Corridor Pilot
            </h2>
            <p className="text-lg text-surface-slate mb-6">
              Our inaugural deployment corridor spanning 500,000 hectares of prime agricultural land in Benue State, serving as the proving ground for our Minimum Viable Zuma philosophy.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-white border border-surface-stone rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">500K</div>
                <div className="text-sm text-surface-slate">Hectares</div>
              </div>
              <div className="bg-surface-white border border-surface-stone rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">5.5 MT/Ha</div>
                <div className="text-sm text-surface-slate">Maize Yield</div>
              </div>
              <div className="bg-surface-white border border-surface-stone rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">2.8 MT/Ha</div>
                <div className="text-sm text-surface-slate">Soybean Yield</div>
              </div>
              <div className="bg-surface-white border border-surface-stone rounded-lg p-4">
                <div className="text-2xl font-bold text-primary">Q3 2026</div>
                <div className="text-sm text-surface-slate">Launch Date</div>
              </div>
            </div>
            <Button variant="primary" href="/framework">
              View Phase One Roadmap
            </Button>
          </div>
          <div className="bg-surface-charcoal rounded-xl p-8 text-white">
            <h3 className="text-xl font-semibold mb-4">Validation Trigger</h3>
            <p className="text-white/80 mb-6">
              The Benue Valley Pilot serves as our proof of concept, demonstrating the viability of our integrated approach to agro-industrial transformation.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-white/60">Currently in planning phase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
