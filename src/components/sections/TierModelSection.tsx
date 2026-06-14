import { Card } from "@/components/ui/Card";

const tiers = [
  {
    number: "01",
    title: "Technical Assistance",
    description:
      "Advisory and capacity-building partnerships with development institutions, providing agronomic expertise, policy alignment, and institutional knowledge transfer to accelerate deployment timelines.",
    deliverables: [
      "Agronomic advisory services",
      "Policy alignment frameworks",
      "Capacity-building programs",
      "Institutional knowledge transfer",
    ],
  },
  {
    number: "02",
    title: "Joint Implementation",
    description:
      "Co-investment and co-execution partnerships with state governments and development finance institutions, sharing operational risk while expanding geographic reach across agricultural corridors.",
    deliverables: [
      "Co-investment structures",
      "Shared operational risk",
      "Geographic expansion",
      "Joint execution teams",
    ],
  },
  {
    number: "03",
    title: "Franchise Replication",
    description:
      "Scalable partnership model enabling qualified institutions to replicate the Zuma Agro-Allied operational framework within defined territories under brand and quality governance.",
    deliverables: [
      "Territory-based licensing",
      "Brand governance standards",
      "Quality assurance protocols",
      "Replication playbooks",
    ],
  },
];

export function TierModelSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Three-Tier Partnership Model
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          A structured engagement framework calibrated to the institutional
          capacity and strategic objectives of each partner category.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tiers.map((tier) => (
            <Card key={tier.number} className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {tier.number}
                </div>
                <h3 className="text-lg font-semibold text-surface-charcoal">
                  {tier.title}
                </h3>
              </div>
              <p className="text-sm text-surface-slate mb-6 flex-1">
                {tier.description}
              </p>
              <div className="border-t border-surface-stone pt-4">
                <h4 className="text-xs font-semibold text-surface-slate tracking-wider uppercase mb-3">
                  Key Deliverables
                </h4>
                <ul className="space-y-2">
                  {tier.deliverables.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-surface-charcoal"
                    >
                      <svg
                        className="w-4 h-4 text-primary mt-0.5 flex-shrink-0"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
