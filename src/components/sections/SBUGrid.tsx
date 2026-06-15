const sbus = [
  {
    icon: "landscape",
    category: "Land, Water, Primary Production",
    name: "Production",
    description: "Managing company-owned farms, outgrowers, and cooperatives. Accountable for yield optimization, input efficiency, and driving down the cost of primary production.",
  },
  {
    icon: "biotech",
    category: "Seed, Fertilizer, Feed, Genetics",
    name: "Inputs & Genetics",
    description: "Ensuring the availability, quality, and cost-effectiveness of critical inputs through seed multiplication, fertilizer blending, and livestock genetics.",
  },
  {
    icon: "precision_manufacturing",
    category: "Mills, Cold Storage, Packaging",
    name: "Processing & Mfg.",
    description: "Converting raw agricultural output into stable, transportable, higher-value products. Accountable for throughput, conversion cost, and product quality.",
  },
  {
    icon: "local_shipping",
    category: "Hubs, Fleet, Trunk Routes",
    name: "Logistics & Warehousing",
    description: "Managing aggregation hubs, warehouse networks, and fleet logistics to minimize post-harvest loss, optimize routing, and ensure on-time delivery.",
  },
  {
    icon: "monitoring",
    category: "Wholesale, Institutional, Export",
    name: "Commercial & Trading",
    description: "Driving wholesale distribution, securing institutional supply contracts, managing export documentation, and generating market intelligence to secure margins.",
  },
  {
    icon: "architecture",
    category: "Irrigation, Power, Roads, Facilities",
    name: "Infrastructure & Eng.",
    description: "Developing and maintaining the physical backbone: irrigation systems, power supply, feeder roads, and facility engineering to ensure asset uptime.",
  },
];

export function SBUGrid() {
  return (
    <section className="w-full py-xl bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center md:text-left mb-xl">
          <h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-md font-bold">
            Integrated Operating Architecture
          </h2>
           <p className="w-full font-body-lg text-[24px] text-on-surface max-w-4xl leading-relaxed font-light">
            Zuma Agro operates as a holding company with six Strategic Business Units (SBUs) executing the platform logic. This structure enables risk segregation, capital stack optimisation, and governance clarity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
          {sbus.map((sbu) => (
            <div key={sbu.name} className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
              <div className="text-primary shrink-0">
                <span className="material-symbols-outlined text-[64px] font-light leading-none">{sbu.icon}</span>
              </div>
              <div className="flex flex-col">
                <p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">{sbu.category}</p>
                <h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">{sbu.name}</h3>
                <p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">{sbu.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-3xl">
          <a href="/platform" className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
            Explore Business Units
            <span className="material-symbols-outlined text-[20px]">account_balance</span>
          </a>
        </div>
      </div>
    </section>
  );
}
