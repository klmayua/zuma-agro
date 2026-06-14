import { Badge } from "@/components/ui/Badge";

export function PlatformHeroSection() {
  return (
    <section className="relative bg-surface-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-dark/90 to-surface-charcoal/95" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-6 py-20 md:py-32">
        <Badge variant="secondary" className="mb-6">
          1.4
        </Badge>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 max-w-4xl tracking-tight">
          Platform Architecture
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl">
          An integrated operational platform comprising the Enterprise
          Intelligence System, four operational nodes, and two strategic business
          units — engineered for sovereign-scale agro-industrial deployment.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
          {[
            { value: "1", label: "Enterprise Intelligence System" },
            { value: "4", label: "Operational Nodes" },
            { value: "2", label: "Strategic Business Units" },
            { value: "36+", label: "State Coverage Target" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white/5 border border-white/10 rounded-lg p-4"
            >
              <div className="text-2xl font-bold text-secondary">
                {stat.value}
              </div>
              <div className="text-xs text-white/60 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
