const nodes = [
  {
    number: "01",
    title: "Production",
    description:
      "Large-scale commercial farming operations deploying precision agriculture, climate-smart practices, and IoT-enabled monitoring across prime agricultural corridors.",
    metrics: [
      { value: "500K", label: "Hectares Target" },
      { value: "12", label: "States" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Aggregation",
    description:
      "Farm-gate collection networks, primary processing hubs, and quality grading systems ensuring post-harvest integrity from field to facility.",
    metrics: [
      { value: "200+", label: "Collection Points" },
      { value: "<5%", label: "Target Loss" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Processing",
    description:
      "Value-added processing facilities converting raw commodities into finished goods — rice milling, cassava processing, tomato paste, and palm oil refining.",
    metrics: [
      { value: "4", label: "Facility Types" },
      { value: "80%", label: "Local Content" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Distribution",
    description:
      "Multi-modal logistics networks connecting production zones to processing facilities and end markets through integrated cold chain and dry cargo systems.",
    metrics: [
      { value: "3", label: "Logistics Modes" },
      { value: "36", label: "State Reach" },
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
];

export function OperationalNodesSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Operational Nodes
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          Four integrated operational nodes forming the physical infrastructure
          backbone of the platform — each instrumented for real-time
          intelligence capture.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nodes.map((node) => (
            <div
              key={node.number}
              className="bg-surface-white border border-surface-stone rounded-lg p-8 hover:border-secondary transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                  {node.icon}
                </div>
                <span className="text-xs font-semibold text-surface-slate tracking-wider">
                  NODE {node.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                {node.title}
              </h3>
              <p className="text-sm text-surface-slate mb-6">
                {node.description}
              </p>
              <div className="grid grid-cols-2 gap-3 border-t border-surface-stone pt-4">
                {node.metrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-lg font-bold text-primary">
                      {metric.value}
                    </div>
                    <div className="text-[11px] text-surface-slate">
                      {metric.label}
                    </div>
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
