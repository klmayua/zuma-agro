import { Badge } from "@/components/ui/Badge";

const executives = [
  {
    name: "General Manager",
    title: "GM",
    description:
      "Day-to-day operational leadership, coordinating across all business units to ensure execution velocity and performance targets are met.",
    initials: "GM",
  },
  {
    name: "Chief Financial Officer",
    title: "CFO",
    description:
      "Financial strategy, capital allocation, risk management, and reporting integrity across the enterprise portfolio.",
    initials: "CFO",
  },
  {
    name: "Chief Technology Officer",
    title: "CTO",
    description:
      "Technology systems, data platforms, precision agriculture tools, and the enterprise intelligence architecture.",
    initials: "CTO",
  },
  {
    name: "Chief Legal Officer",
    title: "CLO",
    description:
      "Legal governance, regulatory compliance, contract management, and land acquisition oversight across all operating corridors.",
    initials: "CLO",
  },
];

export function ExecutiveSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <Badge variant="outline" className="mb-4">
          Leadership
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Executive Management
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          Seasoned professionals driving operational excellence and
          execution discipline across the enterprise.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {executives.map((exec) => (
            <div
              key={exec.name}
              className="bg-surface-white border border-surface-stone rounded-lg p-8 hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 bg-surface-charcoal text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {exec.initials}
              </div>
              <div className="text-xs font-semibold text-primary tracking-wider uppercase mb-1">
                {exec.title}
              </div>
              <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                {exec.name}
              </h3>
              <p className="text-sm text-surface-slate">{exec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
