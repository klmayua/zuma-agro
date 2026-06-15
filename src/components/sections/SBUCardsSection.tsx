const sbus = [
  {
    name: "SBU Alpha: Staples",
    badge: "Core",
    description: "Focuses on high-volume, staple crop production critical for regional food security and baseline revenue stability.",
  },
  {
    name: "SBU Beta: Cash Crops",
    badge: "Growth",
    description: "Dedicated to high-value export commodities, driving margin expansion and international market penetration.",
  },
];

export function SBUCardsSection() {
  return (
    <section className="mb-stack-lg">
      <h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-surface-variant pb-2">
        Strategic Business Units (SBUs)
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        {sbus.map((sbu) => (
          <div key={sbu.name} className="bg-surface-container p-stack-md rounded border border-outline-variant/50">
            <div className="flex justify-between items-start mb-4">
              <h4 className="font-headline-md text-headline-md text-primary">{sbu.name}</h4>
              <span className="text-secondary font-label-bold text-label-bold bg-secondary/10 px-2 py-1 rounded">{sbu.badge}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">{sbu.description}</p>
            <div className="flex justify-start">
              <a href="/platform" className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded hover:bg-primary/5 transition-colors font-label-bold text-label-bold">
                <span className="material-symbols-outlined text-sm">analytics</span>
                <span>View SBU Metrics</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
