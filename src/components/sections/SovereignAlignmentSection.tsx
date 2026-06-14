const partners = [
  {
    category: "Federal Ministries",
    description:
      "Direct coordination with the Federal Ministry of Agriculture, Ministry of Industry, Trade & Investment, and Ministry of Finance to align sovereign priorities with operational deployment.",
    entities: [
      "Federal Ministry of Agriculture & Food Security",
      "Federal Ministry of Industry, Trade & Investment",
      "Federal Ministry of Finance",
      "Central Bank of Nigeria",
    ],
  },
  {
    category: "State Governments",
    description:
      "Bilateral partnership agreements with state governments across Nigeria's primary agricultural corridors, enabling land access, infrastructure co-development, and policy harmonization.",
    entities: [
      "Benue State Government",
      "Kaduna State Government",
      "Kano State Government",
      "Cross River State Government",
    ],
  },
  {
    category: "Institutional Investors",
    description:
      "Capital partnerships with sovereign wealth funds, development finance institutions, and institutional allocators seeking exposure to Nigeria's agro-industrial transformation.",
    entities: [
      "Nigerian Sovereign Investment Authority",
      "African Development Bank",
      "IFC — International Finance Corporation",
      "Bank of Industry",
    ],
  },
];

export function SovereignAlignmentSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-charcoal">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Sovereign Alignment
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-2xl">
          Institutional partnerships structured to align with Nigeria&apos;s
          sovereign development priorities and national food security objectives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.category}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-secondary/50 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-3">
                {partner.category}
              </h3>
              <p className="text-sm text-white/70 mb-6">
                {partner.description}
              </p>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-3">
                  Key Partners
                </h4>
                <ul className="space-y-2">
                  {partner.entities.map((entity) => (
                    <li
                      key={entity}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                      {entity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
