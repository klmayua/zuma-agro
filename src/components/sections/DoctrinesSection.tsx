const doctrines = [
  {
    number: "01",
    title: "Backward Integration is Mandatory",
    description: "No processing facility is commissioned without secured feedstock supply. No export contract is signed without verified production capacity. The enterprise never builds capacity ahead of supply or promises delivery ahead of reality.",
  },
  {
    number: "02",
    title: "Infrastructure Precedes Production",
    description: "Zuma Agro does not plant crops without water security, harvest without storage, or process without logistics. We accept slower deployment in exchange for operational reliability.",
  },
  {
    number: "03",
    title: "Data-Driven Execution",
    description: "Every field, cooperative, warehouse, and transaction is recorded in the enterprise intelligence system. Decisions – from planting calendars to pricing to credit allocation – are made on documented evidence, not intuition.",
  },
  {
    number: "04",
    title: "Commercial Discipline Overrides Subsidy Logic",
    description: "While accessing development finance, every line of business must ultimately stand on its own commercial terms. Permanent loss-making is not permitted anywhere within the platform.",
  },
  {
    number: "05",
    title: "Governability Determines Scale",
    description: "The enterprise does not expand into regions where it cannot maintain operational control, security coordination, and financial visibility. Growth is constrained by institutional capacity, not ambition.",
  },
];

export function DoctrinesSection() {
  return (
    <section className="w-full bg-primary py-4xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-3xl text-center md:text-left">
          <h2 className="font-headline-xl text-[40px] leading-tight text-white mb-md font-bold">
            The Five Non-Negotiable Doctrines
          </h2>
           <p className="w-full font-body-lg text-[20px] text-white/80 max-w-4xl leading-relaxed">
            Zuma Agro operates on a doctrine of disciplined integration. These principles govern every investment, partnership, and operational decision.
          </p>
        </div>
        <div className="space-y-lg">
          {doctrines.map((doctrine) => (
            <div key={doctrine.number} className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start border border-white/10">
              <div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">
                {doctrine.number}
              </div>
              <div>
                <h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">{doctrine.title}</h3>
                <p className="font-body-md text-[18px] leading-relaxed text-white/80">{doctrine.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-3xl">
          <a href="/governance" className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
            Review Institutional Governance
            <span className="material-symbols-outlined text-[20px]">gavel</span>
          </a>
        </div>
      </div>
    </section>
  );
}
