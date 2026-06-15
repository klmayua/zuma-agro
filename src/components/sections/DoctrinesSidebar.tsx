"use client";

const doctrines = [
  { number: "01", title: "Yield Precedes Scale", description: "Optimization of localized hectare productivity overrides arbitrary land acquisition metrics." },
  { number: "02", title: "Data Sovereignty", description: "All agronomic and logistical data must be owned, secured, and localized within the primary infrastructure." },
  { number: "03", title: "Corridor Integrity", description: "Logistics remain strictly confined to the pre-audited Benue Valley transit routes during Phase Zero." },
  { number: "04", title: "Community Capital", description: "Integration with local outgrower networks is structural, not philanthropic." },
  { number: "05", title: "Audit Transparency", description: "Real-time ledger visibility for institutional stakeholders on anchor commodity flows." },
];

export function DoctrinesSidebar() {
  return (
    <aside className="sticky top-[120px] bg-surface-container-low p-8 border border-surface-variant rounded">
      <h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-surface-variant pb-4">
        The Five Non-Negotiable Doctrines
      </h3>
      <ul className="space-y-6">
        {doctrines.map((doctrine) => (
          <li key={doctrine.number} className="flex items-start space-x-4 group">
            <span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">
              {doctrine.number}
            </span>
            <div>
              <h4 className="font-label-bold text-label-bold text-on-surface">
                {doctrine.title}
              </h4>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                {doctrine.description}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}
