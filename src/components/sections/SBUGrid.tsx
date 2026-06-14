import { SBUCard } from "@/components/ui/Card";
import { pages } from "@/lib/design-tokens";

export function SBUGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Integrated Operating Architecture
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          Six strategic business units working in concert to deliver sovereign-scale agro-industrial transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.sbus.map((sbu) => (
            <SBUCard key={sbu.name} name={sbu.name} description={sbu.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
