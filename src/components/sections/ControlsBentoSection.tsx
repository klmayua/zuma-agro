import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const committees = [
  {
    name: "Audit Committee",
    role: "Financial oversight and regulatory compliance",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    responsibilities: [
      "Quarterly financial review",
      "Internal audit coordination",
      "Risk assessment protocols",
    ],
  },
  {
    name: "Finance Committee",
    role: "Capital allocation and treasury management",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    responsibilities: [
      "Investment approval",
      "Budget oversight",
      "Treasury operations",
    ],
  },
  {
    name: "Governance Committee",
    role: "Board composition and policy enforcement",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    responsibilities: [
      "Board nomination",
      "Policy compliance",
      "Ethics oversight",
    ],
  },
];

const escalationMatrix = [
  {
    tier: "Tier 1",
    level: "Operational",
    color: "bg-primary/10 text-primary",
    description: "Department-level issue resolution within 48 hours",
  },
  {
    tier: "Tier 2",
    level: "Divisional",
    color: "bg-secondary/10 text-secondary",
    description: "Cross-functional escalation with committee notification",
  },
  {
    tier: "Tier 3",
    level: "Executive",
    color: "bg-error/10 text-error",
    description: "Board-level intervention with mandatory audit trail",
  },
  {
    tier: "Tier 4",
    level: "Sovereign",
    color: "bg-surface-charcoal/10 text-surface-charcoal",
    description: "Full board review with external auditor involvement",
  },
];

const separationOfPowers = [
  {
    entity: "Executive",
    role: "Operational Execution",
    color: "bg-primary",
    borderColor: "border-primary",
    description: "Day-to-day management and strategic implementation",
  },
  {
    entity: "Board",
    role: "Strategic Oversight",
    color: "bg-secondary",
    borderColor: "border-secondary",
    description: "Policy direction and fiduciary responsibility",
  },
  {
    entity: "Audit",
    role: "Independent Review",
    color: "bg-error",
    borderColor: "border-error",
    description: "Verification and compliance assurance",
  },
];

export function ControlsBentoSection() {
  return (
    <section id="controls" className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Institutional Control Architecture
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          A multi-layered governance framework ensuring accountability,
          transparency, and institutional integrity at every operational level.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Board Structures - spans 2 cols */}
          <div className="lg:col-span-2">
            <Card className="h-full" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-surface-charcoal">
                  Board Committee Structures
                </h3>
                <Badge variant="primary">3 Committees</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {committees.map((committee) => (
                  <div
                    key={committee.name}
                    className="bg-surface-ivory rounded-xl p-5 border border-surface-stone"
                  >
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                      {committee.icon}
                    </div>
                    <h4 className="font-semibold text-surface-charcoal mb-1">
                      {committee.name}
                    </h4>
                    <p className="text-sm text-surface-slate mb-4">
                      {committee.role}
                    </p>
                    <ul className="space-y-2">
                      {committee.responsibilities.map((resp) => (
                        <li
                          key={resp}
                          className="flex items-start gap-2 text-sm text-surface-charcoal"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Institutional Control Doctrine */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-xl p-8 h-full flex flex-col">
              <Badge variant="secondary" className="mb-4 w-fit">
                Core Doctrine
              </Badge>
              <h3 className="text-xl font-semibold mb-4">
                Institutional Control Doctrine
              </h3>
              <p className="text-white/80 mb-6 flex-1">
                Every operational decision must pass through a structured
                verification process. No single individual may control the
                complete lifecycle of any financial or operational transaction.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">Mandatory dual authorization</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">Automated audit trails</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">Real-time reporting dashboard</span>
                </div>
              </div>
            </div>
          </div>

          {/* Separation of Powers Diagram */}
          <div className="lg:col-span-1">
            <Card className="h-full" hover={false}>
              <h3 className="text-xl font-semibold text-surface-charcoal mb-6">
                Separation of Powers
              </h3>
              <div className="flex flex-col items-center gap-4">
                <div className="relative flex justify-center w-full">
                  {separationOfPowers.map((power, i) => (
                    <div
                      key={power.entity}
                      className="relative"
                      style={{
                        marginLeft: i > 0 ? "-12px" : "0",
                        zIndex: separationOfPowers.length - i,
                      }}
                    >
                      <div
                        className={`w-16 h-16 rounded-full ${power.color} flex items-center justify-center text-white text-xs font-bold border-4 border-white shadow-md`}
                      >
                        {power.entity.slice(0, 3).toUpperCase()}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full mt-4 space-y-3">
                  {separationOfPowers.map((power) => (
                    <div
                      key={power.entity}
                      className={`flex items-start gap-3 p-3 rounded-lg border-l-4 ${power.borderColor} bg-surface-ivory`}
                    >
                      <div>
                        <div className="font-semibold text-sm text-surface-charcoal">
                          {power.entity}
                        </div>
                        <div className="text-xs text-surface-slate">
                          {power.role}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Consequence Enforcement - spans full width */}
          <div className="lg:col-span-3">
            <Card className="h-full" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-surface-charcoal">
                  Consequence Enforcement Matrix
                </h3>
                <Badge variant="outline">4 Escalation Tiers</Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {escalationMatrix.map((item) => (
                  <div
                    key={item.tier}
                    className="bg-surface-ivory rounded-xl p-5 border border-surface-stone relative overflow-hidden"
                  >
                    <div
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-3 ${item.color}`}
                    >
                      {item.tier}
                    </div>
                    <h4 className="font-semibold text-surface-charcoal mb-2">
                      {item.level}
                    </h4>
                    <p className="text-sm text-surface-slate">
                      {item.description}
                    </p>
                    {item.tier !== "Tier 4" && (
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-surface-stone/40">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
