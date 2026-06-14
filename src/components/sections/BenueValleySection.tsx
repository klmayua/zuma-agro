import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function BenueValleySection() {
  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="outline" className="mb-4">
              Phase One
            </Badge>
            <h2 className="font-display text-3xl md:text-headline-lg font-bold text-on-surface mb-4">
              Benue Valley Corridor Pilot
            </h2>
            <p className="text-body-lg text-on-surface-variant mb-6">
              Our inaugural deployment corridor spanning 500,000 hectares of prime agricultural land in Benue State, serving as the proving ground for our Minimum Viable Zuma philosophy.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">500K</div>
                <div className="text-sm text-on-surface-variant">Hectares</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">5.5 MT/Ha</div>
                <div className="text-sm text-on-surface-variant">Maize Yield</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">2.8 MT/Ha</div>
                <div className="text-sm text-on-surface-variant">Soybean Yield</div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant rounded-xl p-4">
                <div className="text-2xl font-bold text-primary">Q3 2026</div>
                <div className="text-sm text-on-surface-variant">Launch Date</div>
              </div>
            </div>
            <Button variant="primary" href="/framework">
              View Phase One Roadmap
            </Button>
          </div>
          <div className="bg-inverse-surface rounded-3xl p-2xl text-inverse-on-surface">
            <h3 className="font-display text-xl font-semibold mb-4">Validation Trigger</h3>
            <p className="text-inverse-on-surface/80 mb-6">
              The Benue Valley Pilot serves as our proof of concept, demonstrating the viability of our integrated approach to agro-industrial transformation.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
              <span className="text-sm text-inverse-on-surface/60">Currently in planning phase</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
