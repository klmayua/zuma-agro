import { Badge } from "@/components/ui/Badge";

const phases = [
  {
    phase: "Phase 0",
    title: "Foundation & Validation",
    timeline: "Q3 2026",
    status: "current",
    items: [
      "Complete corporate restructuring",
      "Finalize seed bank partnerships",
      "Deploy pilot plots (500 Ha)",
      "Establish data collection systems",
    ],
  },
  {
    phase: "Phase 1",
    title: "Pilot Expansion",
    timeline: "Q4 2026",
    status: "upcoming",
    items: [
      "Scale to 2,000 Ha across Benue Valley",
      "Achieve MVZ yield targets for maize",
      "Launch soybean crushing facility",
      "Deploy precision agriculture systems",
    ],
  },
  {
    phase: "Phase 2",
    title: "Commercial Scaling",
    timeline: "Q1-Q2 2027",
    status: "upcoming",
    items: [
      "Expand to 10,000 Ha",
      "Commission processing plants",
      "Establish distribution networks",
      "Onboard smallholder clusters",
    ],
  },
  {
    phase: "Phase 3",
    title: "Full Operational Capacity",
    timeline: "Q3 2027",
    status: "upcoming",
    items: [
      "Achieve 50,000 Ha operational area",
      "Full value chain integration",
      "Pan-Nigeria deployment ready",
      "Export corridor activation",
    ],
  },
];

export function TimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-stone/30">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            Deployment Timeline
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
            Four-Phase Rollout
          </h2>
          <p className="text-lg text-surface-slate max-w-3xl">
            A disciplined, phased approach to scaling — from validation to
            continental deployment.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-surface-stone md:-translate-x-px" />

          <div className="space-y-8 md:space-y-0">
            {phases.map((phase, index) => (
              <div
                key={phase.phase}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-start md:items-center md:mb-16`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-surface-white md:-translate-x-1.5 -translate-x-1.5 z-10" />

                {/* Content */}
                <div
                  className={`flex-1 ml-10 md:ml-0 ${
                    index % 2 === 0
                      ? "md:pr-12 md:text-right"
                      : "md:pl-12 md:text-left"
                  }`}
                >
                  <div
                    className={`bg-surface-white border border-surface-stone rounded-lg p-6 ${
                      phase.status === "current"
                        ? "border-primary shadow-md"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {phase.phase}
                      </span>
                      <span className="text-xs text-surface-slate">
                        {phase.timeline}
                      </span>
                      {phase.status === "current" && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-semibold text-surface-charcoal mb-3">
                      {phase.title}
                    </h3>
                    <ul
                      className={`space-y-2 text-sm text-surface-slate ${
                        index % 2 === 0 ? "md:text-right" : "md:text-left"
                      }`}
                    >
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <svg
                            className="w-4 h-4 mt-0.5 text-primary flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
