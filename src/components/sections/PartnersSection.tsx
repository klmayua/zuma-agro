const partnerData = [
  {
    category: "Sovereign & Government",
    icon: "account_balance",
    partners: ["Federal Ministry of Agriculture", "Benue State Government", "Nasarawa State Government", "Taraba State Government"],
    gridCols: "grid-cols-2 md:grid-cols-4",
  },
  {
    category: "Development Finance",
    icon: "payments",
    partners: ["African Development Bank (AfDB)", "International Finance Corp (IFC)", "U.S. DFC"],
    gridCols: "grid-cols-2 md:grid-cols-3",
  },
  {
    category: "Corporate & Technical",
    icon: "precision_manufacturing",
    partners: ["Global Logistics Hubs", "Industrial Offtakers", "Processing Tech Providers"],
    gridCols: "grid-cols-2 md:grid-cols-3",
  },
];

export function PartnersSection() {
  return (
    <section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-high border-t border-outline-variant">
      <div className="max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center md:text-left">
          <span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Ecosystem Coordination</span>
          <h2 className="text-headline-lg font-headline-lg text-primary">Global Partnership Ecosystem</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-3xl">
            Zuma Agro operates through a sophisticated network of institutional alignment, connecting sovereign interests with global capital and technical excellence.
          </p>
        </div>
        <div className="flex flex-col gap-[48px]">
          {partnerData.map((cat) => (
            <div key={cat.category}>
              <h4 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest mb-stack-sm border-b border-outline-variant/20 pb-2">{cat.category}</h4>
              <div className={`grid ${cat.gridCols} gap-gutter`}>
                {cat.partners.map((partner) => (
                  <div key={partner} className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
                    <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
                      <span className="material-symbols-outlined text-4xl">{cat.icon}</span>
                    </div>
                    <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">{partner}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
