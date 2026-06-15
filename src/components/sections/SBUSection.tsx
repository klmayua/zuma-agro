const sbuData = [
  { name: "Production", role: "Head of Production", description: "Responsible for land, water, mechanisation, and primary production (company-owned and outgrower).", accountability: "Yield, input efficiency, production cost" },
  { name: "Inputs & Genetics", role: "Head of Inputs & Genetics", description: "Responsible for seed multiplication, fertiliser blending, feed production, and livestock genetics.", accountability: "Availability, quality, cost of inputs" },
  { name: "Processing & Mfg.", role: "Head of Processing & Manufacturing", description: "Responsible for primary and secondary processing – mills, oil processing, feed mills, cold storage, packaging.", accountability: "Throughput, conversion cost, product quality" },
  { name: "Logistics & Warehousing", role: "Head of Logistics & Warehousing", description: "Responsible for aggregation hubs, warehouse network, fleet management, and trunk route transport.", accountability: "Logistics cost per ton, post-harvest loss, on-time delivery" },
  { name: "Commercial & Trading", role: "Head of Commercial & Trading", description: "Responsible for wholesale distribution, institutional supply contracts, export documentation, and market intelligence.", accountability: "Price realisation, offtake security, margin" },
  { name: "Infrastructure & Eng.", role: "Head of Infrastructure & Engineering", description: "Responsible for irrigation systems, power supply, road access, and facility engineering.", accountability: "Asset uptime, maintenance cost, capital efficiency" },
];

export function SBUSection() {
  return (
    <section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/20">
      <div className="max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center md:text-left">
          <span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Operational Leadership</span>
          <h2 className="text-headline-lg font-headline-lg text-primary">Strategic Business Units (SBUs)</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
            Our operating model is organized into six Strategic Business Units executing the platform logic. Each SBU operates as a profit centre with dedicated leadership and accountability metrics.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {sbuData.map((sbu) => (
            <div key={sbu.name} className="border-t-2 border-primary pt-stack-sm">
              <h3 className="text-headline-md font-headline-md text-primary mb-2">{sbu.name}</h3>
              <p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">{sbu.role}</p>
              <p className="text-body-md font-body-md text-on-surface-variant mb-4">{sbu.description}</p>
              <p className="text-label-sm font-label-sm text-on-surface">Accountability: {sbu.accountability}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
