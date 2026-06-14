import { Badge } from "@/components/ui/Badge";

const boardMembers = [
  {
    name: "Chairman",
    title: "Board Chairman",
    description:
      "Presides over the Board of Directors, ensuring governance integrity, fiduciary oversight, and strategic alignment with national development priorities.",
    initials: "CH",
  },
  {
    name: "Chief Executive Officer",
    title: "Group CEO",
    description:
      "Leads enterprise-wide strategy execution, operational deployment, and stakeholder relations across all six strategic business units.",
    initials: "CEO",
  },
  {
    name: "Chief Financial Officer",
    title: "CFO",
    description:
      "Oversees capital structuring, financial controls, investor relations, and treasury operations for sovereign-scale agro-industrial investment.",
    initials: "CFO",
  },
  {
    name: "Chief Technology Officer",
    title: "CTO",
    description:
      "Directs technology infrastructure, data sovereignty systems, and digital platforms powering the enterprise intelligence layer.",
    initials: "CTO",
  },
];

export function BoardSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8">
        <Badge variant="outline" className="mb-4">
          Governance
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold font-display text-on-surface mb-4">
          Board of Directors
        </h2>
        <p className="text-lg text-on-surface-variant mb-12 max-w-2xl">
          Institutional governance by experienced leaders committed to
          sovereign-scale agro-industrial transformation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 shadow-institutional hover:border-secondary transition-colors"
            >
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold mb-4">
                {member.initials}
              </div>
              <div className="text-xs font-semibold text-secondary tracking-wider uppercase mb-1">
                {member.title}
              </div>
              <h3 className="text-lg font-semibold text-on-surface mb-2">
                {member.name}
              </h3>
              <p className="text-sm text-on-surface-variant">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
