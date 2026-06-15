const phases = [
  {
    phase: "Phase Zero",
    title: "Infrastructural Anchor",
    timeline: "Q3 2026",
    description: "Secure primary storage facility and establish baseline logistics routes. Initial soil mapping and local outgrower vetting protocols activated.",
    tags: ["Storage Sec", "Soil Audit"],
    isCurrent: true,
  },
  {
    phase: "Phase One",
    title: "Controlled Cultivation",
    timeline: "Q4 2026",
    description: "Deployment of proprietary seed capital across first 500 Hectares. Implementation of rigid agronomist oversight and initial yield tracking metrics.",
    progress: 50,
    isCurrent: false,
  },
  {
    phase: "Phase Two",
    title: "Harvest & Processing",
    timeline: "Q1 2027",
    description: "First major off-take execution. Activation of localized processing nodes to minimize transit waste and maximize grade quality.",
    isCurrent: false,
  },
  {
    phase: "Phase Three",
    title: "Institutional Scale",
    timeline: "Q3 2027",
    description: "Integration of automated sorting and secondary value-add processing. Expansion parameters unlocked based on Phase 1 & 2 yield verification.",
    isDashed: true,
    isCurrent: false,
  },
];

export function TimelineSection() {
  return (
    <section className="texture-bg border-y border-surface-variant py-stack-lg my-stack-lg">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            4.2 Pilot Deployment Sequencing
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            The structured phase-gate approach to establishing operational dominance in the target corridor.
          </p>
        </div>

        <div className="relative timeline-line max-w-4xl mx-auto py-8">
          {phases.map((phase, index) => {
            const isOdd = index % 2 !== 0;
            return (
              <div 
                key={phase.phase}
                className={`relative flex items-center justify-between md:justify-normal ${
                  index % 2 === 0 ? "md:odd:flex-row-reverse" : "md:even:flex-row"
                } group mb-12`}
              >
                <div className="hidden md:block w-5/12"></div>
                <div className={`absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background z-10 ${
                  phase.isCurrent ? "bg-secondary shadow-[0_0_0_4px_rgba(168,134,45,0.2)]" : "bg-surface-variant group-hover:bg-secondary transition-colors"
                }`}></div>
                <div className={`w-full ml-16 md:ml-0 md:w-5/12 bg-background p-6 border rounded shadow-sm group-hover:border-secondary transition-colors ${
                  phase.isDashed ? "opacity-80 border-dashed" : "border-surface-variant"
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`font-label-bold text-label-bold tracking-widest uppercase ${
                      phase.isCurrent ? "text-secondary" : "text-on-surface-variant group-hover:text-secondary transition-colors"
                    }`}>
                      {phase.phase}
                    </span>
                    <span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-xs rounded">
                      {phase.timeline}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-2">{phase.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4">
                    {phase.description}
                  </p>
                  {phase.tags && (
                    <div className="flex flex-wrap gap-2">
                      {phase.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-surface-container-low border border-surface-variant text-xs rounded text-on-surface">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                  {phase.progress !== undefined && (
                    <div className="flex gap-2">
                      <span className="w-1/2 h-1 bg-secondary rounded"></span>
                      <span className="w-1/2 h-1 bg-surface-variant rounded"></span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
