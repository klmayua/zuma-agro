const committees = [
  {
    name: "Audit Committee",
    description: "Rigorous financial verification and external compliance alignment.",
  },
  {
    name: "Finance Committee",
    description: "Capital allocation strategy and systemic risk mitigation.",
  },
  {
    name: "Governance Committee",
    description: "Mandate enforcement and executive performance review.",
  },
];

export function ControlsBentoSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
      {/* Board Structures (Spans 8 columns) */}
      <div className="md:col-span-8 bg-surface-container-low rounded border border-outline-variant p-stack-md texture-bg shadow-soft">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-md flex items-center gap-2">
          <span className="material-symbols-outlined">account_balance</span>
          Board Structures
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-sm">
          {committees.map((committee) => (
            <div key={committee.name} className="bg-surface rounded border border-surface-variant p-stack-sm shadow-soft">
              <div className="font-label-bold text-label-bold text-secondary mb-2">{committee.name}</div>
              <p className="font-body-md text-body-md text-on-surface-variant text-sm">{committee.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Institutional Control Doctrine (Spans 4 columns) */}
      <div className="md:col-span-4 bg-primary text-white rounded p-stack-md flex flex-col justify-center relative overflow-hidden shadow-soft">
        <div 
          className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" 
          style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #a7f2d3 0%, transparent 70%)' }}
        />
        <div className="relative z-10">
          <div className="font-label-bold text-label-bold text-secondary mb-2">Section 2.1</div>
          <h3 className="font-headline-md text-headline-md mb-stack-sm text-white">Institutional Control Doctrine</h3>
          <p className="font-body-md text-body-md text-white/80">
            A zero-tolerance framework designed to isolate risk and mandate compliance across all operational tiers.
          </p>
        </div>
      </div>

      {/* Separation of Powers Diagram (Spans 6 columns) */}
      <div className="md:col-span-6 bg-surface-container-low rounded border border-outline-variant p-stack-md shadow-soft">
        <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Separation of Powers</h3>
        <div className="aspect-video bg-surface rounded border border-surface-variant flex items-center justify-center relative p-4">
          <div className="flex w-full justify-between items-center px-4">
            <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center font-label-bold text-label-bold text-primary bg-surface-container-low z-10">
              Exec
            </div>
            <div className="flex-grow h-px bg-outline-variant mx-2 border-dashed border-t-2"></div>
            <div className="w-32 h-32 rounded-full border-2 border-secondary flex items-center justify-center font-label-bold text-label-bold text-secondary bg-surface-container-low z-10">
              Board
            </div>
            <div className="flex-grow h-px bg-outline-variant mx-2 border-dashed border-t-2"></div>
            <div className="w-24 h-24 rounded-full border-2 border-error flex items-center justify-center font-label-bold text-label-bold text-error bg-surface-container-low z-10">
              Audit
            </div>
          </div>
        </div>
      </div>

      {/* Internal Controls / Consequence (Spans 6 columns) */}
      <div className="md:col-span-6 bg-surface-container-low rounded border border-outline-variant p-stack-md flex flex-col justify-between shadow-soft">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Consequence Enforcement &amp; Crisis Management</h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
            Pre-defined escalation matrices ensure immediate, proportionate responses to policy deviations or market shocks.
          </p>
        </div>
        <div className="space-y-2 mt-4">
          <div className="flex items-center gap-3 p-3 bg-surface border border-surface-variant rounded shadow-soft">
            <span className="material-symbols-outlined text-error icon-fill">gavel</span>
            <span className="font-label-bold text-label-bold text-on-surface">Immediate Disciplinary Matrix</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface border border-surface-variant rounded shadow-soft">
            <span className="material-symbols-outlined text-secondary icon-fill">warning</span>
            <span className="font-label-bold text-label-bold text-on-surface">Automated Risk Containment Protocols</span>
          </div>
        </div>
      </div>
    </section>
  );
}
