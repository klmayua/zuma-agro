const boardMembers = [
  { title: "Founder / Chair", role: "Strategic Oversight", icon: "person", description: "Approves enterprise strategy, annual budget, and major capital expenditures." },
  { title: "Independent Director", role: "Audit & Risk Committee", icon: "account_balance", description: "Oversight of financial controls, risk management, and compliance." },
  { title: "Independent Director", role: "Finance & Investment", icon: "trending_up", description: "Capital allocation, funding strategy, and major transaction review." },
  { title: "Sovereign Partner Rep", role: "Governance & Nominations", icon: "gavel", description: "Board composition, leadership succession, and governance standards." },
];

export function BoardSection() {
  return (
    <section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant">
      <div className="max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center md:text-left">
          <span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Oversight Systems</span>
          <h2 className="text-headline-lg font-headline-lg text-primary">Board of Directors</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
            Structured for competence, independence, and continuity. The board includes founder representation, independent directors with relevant expertise, and representatives of significant investors or sovereign partners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {boardMembers.map((member) => (
            <div key={member.title + member.role} className="bg-surface border border-outline-variant rounded-DEFAULT p-stack-md text-center md:text-left shadow-sm">
              <div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto md:mx-0 mb-stack-sm flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-4xl">{member.icon}</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary mb-1">{member.title}</h3>
              <p className="text-label-bold font-label-bold text-secondary mb-3">{member.role}</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
