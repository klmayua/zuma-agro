export function TierModelSection() {
  return (
    <section className="w-full py-4xl bg-surface">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center md:text-left mb-xl">
          <h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-md font-bold">The Three-Tier Partnership Model</h2>
          <p className="font-body-lg text-[24px] text-on-surface max-w-4xl leading-relaxed font-light">
            Our engagements are built on a foundation of rigorous standards, mutual benefit, and absolute accountability. We operate as a trusted steward of capital and land resources through a structured three-tier model.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
          <div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
            <div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">01</div>
            <h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Technical Assistance</h3>
            <p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
              Advisory, planning, and systems design. Establishing the operational blueprint and governance structures required for sovereign-scale agricultural transformation.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
            <div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">02</div>
            <h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Joint Implementation</h3>
            <p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
              Shared operations, infrastructure, and commercialization. Active partnership in executing the strategic mandate, deploying advanced agronomic practices and ensuring supply chain integrity.
            </p>
          </div>
          <div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
            <div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">03</div>
            <h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Franchise Replication</h3>
            <p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
              Licensed Success template with absolute fidelity to Zuma standards. Scaling the established success template across new regions while maintaining absolute fidelity to the Zuma Agro-Allied standard.
            </p>
          </div>
        </div>
        <div className="flex justify-start mt-3xl">
          <button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
            <span className="material-symbols-outlined text-[20px]">handshake</span>
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  );
}
