const nodes = [
  {
    title: "Production",
    icon: "agriculture",
    description: "Precision agriculture techniques applied across large-scale institutional landholdings to maximize sustainable yield.",
  },
  {
    title: "Aggregation",
    icon: "inventory_2",
    description: "Strategic collection centers ensuring rapid consolidation of raw materials while maintaining strict quality controls.",
  },
  {
    title: "Processing",
    icon: "factory",
    description: "Advanced value-addition facilities transforming raw harvest into high-margin institutional grade commodities.",
  },
  {
    title: "Distribution",
    icon: "local_shipping",
    description: "Optimized logistics network delivering processed goods to global markets with minimized transit loss.",
  },
];

export function OperationalNodesSection() {
  return (
    <section className="mb-stack-lg">
      <h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-surface-variant pb-2">
        The Critical Operational Nodes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
        {nodes.map((node) => (
          <div key={node.title} className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10">
            <div className="w-12 h-12 bg-surface-container-low text-primary rounded flex items-center justify-center mb-stack-sm border border-outline-variant">
              <span className="material-symbols-outlined">{node.icon}</span>
            </div>
            <h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">{node.title}</h4>
            <p className="font-body-md text-body-md text-on-surface-variant text-sm">{node.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
