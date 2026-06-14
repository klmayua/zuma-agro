import { pages } from "@/lib/design-tokens";

export function SBUGrid() {
  return (
    <section className="py-16 md:py-24 bg-surface-container-lowest">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8">
        <h2 className="font-display text-3xl md:text-headline-lg font-bold text-on-surface mb-4">
          Integrated Operating Architecture
        </h2>
        <p className="text-body-lg text-on-surface-variant mb-12 max-w-2xl">
          Six strategic business units working in concert to deliver sovereign-scale agro-industrial transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.sbus.map((sbu) => (
            <div
              key={sbu.name}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-xl shadow-institutional hover:shadow-elevated transition-shadow"
            >
              <div className="text-6xl font-light mb-4">{sbu.icon}</div>
              <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-2">
                Strategic Business Unit
              </div>
              <h3 className="font-display text-xl font-semibold text-on-surface mb-2">
                {sbu.name}
              </h3>
              <p className="text-body-md text-on-surface-variant">
                {sbu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
