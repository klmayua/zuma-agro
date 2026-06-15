export function CapitalBentoSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-xl max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-stack-lg">
      <div className="md:col-span-8 bg-surface-container-low border border-surface-variant rounded-xl p-stack-md flex flex-col gap-stack-md relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-stack-sm text-outline opacity-50 group-hover:opacity-100 transition-opacity">
          <span className="material-symbols-outlined">pie_chart</span>
        </div>
        <h2 className="font-headline-md text-headline-md text-primary">Capital Stack Architecture</h2>
        <p className="font-body-md text-body-md text-on-surface-variant">Strategic blending of financial instruments designed to minimize risk while maintaining robust equity upside for anchor participants.</p>
        <div className="flex-grow flex flex-col justify-center gap-stack-md py-stack-md">
          <div className="w-full h-12 flex rounded overflow-hidden shadow-sm">
            <div className="bg-primary h-full flex items-center justify-center text-on-primary font-label-bold text-label-bold" style={{ width: '50%' }}>
              50% Senior Debt
            </div>
            <div className="bg-primary-container h-full flex items-center justify-center text-on-primary font-label-bold text-label-bold" style={{ width: '20%' }}>
              20% Mezzanine
            </div>
            <div className="bg-secondary h-full flex items-center justify-center text-white font-label-bold text-label-bold" style={{ width: '30%' }}>
              30% Equity
            </div>
          </div>
          <div className="grid grid-cols-3 gap-base mt-stack-sm">
            <div className="flex flex-col border-l-2 border-primary pl-base">
              <span className="font-headline-lg text-headline-lg text-primary">50%</span>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Senior Debt</span>
            </div>
            <div className="flex flex-col border-l-2 border-primary-container pl-base">
              <span className="font-headline-lg text-headline-lg text-primary-container">20%</span>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Mezzanine</span>
            </div>
            <div className="flex flex-col border-l-2 border-secondary pl-base">
              <span className="font-headline-lg text-headline-lg text-secondary">30%</span>
              <span className="font-label-sm text-label-sm text-outline uppercase tracking-wider">Equity</span>
            </div>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 flex flex-col gap-gutter">
        <div className="bg-primary text-on-primary border border-primary-fixed-variant/30 rounded-xl p-stack-md flex flex-col gap-base relative overflow-hidden">
          <div className="absolute -right-4 -bottom-4 opacity-10">
            <span className="material-symbols-outlined text-[120px] fill-icon">account_balance</span>
          </div>
          <div className="flex items-center gap-base text-secondary mb-base">
            <span className="material-symbols-outlined">verified</span>
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Sovereign Guarantee</span>
          </div>
          <h3 className="font-headline-md text-headline-md text-secondary">DFI Alignment</h3>
          <p className="font-body-sm text-body-md text-on-primary/80 z-10">
            Our capital structure operates in synchronized alignment with major Development Finance Institutions, securing first-loss protections and subsidized risk margins.
          </p>
        </div>
        <div className="bg-surface-container-low border border-surface-variant rounded-xl p-stack-md flex flex-col justify-between items-start gap-stack-md">
          <div>
            <h3 className="font-headline-md text-headline-md text-primary mb-base">Direct Dialogue</h3>
            <p className="font-body-sm text-body-md text-on-surface-variant">Request detailed term sheets and initiate diligence room access.</p>
          </div>
          <button className="bg-secondary text-white px-stack-md py-stack-sm rounded font-label-bold text-label-bold flex items-center justify-start gap-stack-sm w-full hover:opacity-90 transition-opacity">
            <span className="material-symbols-outlined">mail</span>
            Request Executive Briefing
          </button>
        </div>
      </div>
      <div className="md:col-span-12 bg-surface-container-lowest border border-surface-variant rounded-xl p-stack-md flex flex-col gap-stack-md overflow-hidden mt-stack-md shadow-sm">
        <div className="flex justify-between items-end border-b border-surface-variant pb-stack-sm">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary">Use of Funds</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">$25M Initial Pilot Capital Allocation</p>
          </div>
          <div className="text-right">
            <span className="font-label-bold text-label-bold text-outline">STATUS:</span>
            <span className="font-label-bold text-label-bold text-secondary ml-2">VERIFIED</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-surface-variant">
                <th className="py-stack-sm px-base font-label-bold text-label-bold text-outline uppercase tracking-wider">Tranche</th>
                <th className="py-stack-sm px-base font-label-bold text-label-bold text-outline uppercase tracking-wider">Allocation Category</th>
                <th className="py-stack-sm px-base font-label-bold text-label-bold text-outline uppercase tracking-wider">Amount (USD)</th>
                <th className="py-stack-sm px-base font-label-bold text-label-bold text-outline uppercase tracking-wider">% of Total</th>
              </tr>
            </thead>
            <tbody className="font-body-md text-body-md">
              <tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors">
                <td className="py-stack-sm px-base font-label-bold text-label-bold text-secondary">T-01</td>
                <td className="py-stack-sm px-base text-primary">Land Acquisition &amp; Prep</td>
                <td className="py-stack-sm px-base text-on-surface">$8,500,000</td>
                <td className="py-stack-sm px-base text-on-surface-variant">34%</td>
              </tr>
              <tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors">
                <td className="py-stack-sm px-base font-label-bold text-label-bold text-secondary">T-02</td>
                <td className="py-stack-sm px-base text-primary">Infrastructure &amp; Tech</td>
                <td className="py-stack-sm px-base text-on-surface">$6,000,000</td>
                <td className="py-stack-sm px-base text-on-surface-variant">24%</td>
              </tr>
              <tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors">
                <td className="py-stack-sm px-base font-label-bold text-label-bold text-secondary">T-03</td>
                <td className="py-stack-sm px-base text-primary">Seed &amp; Initial Inputs</td>
                <td className="py-stack-sm px-base text-on-surface">$4,500,000</td>
                <td className="py-stack-sm px-base text-on-surface-variant">18%</td>
              </tr>
              <tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors">
                <td className="py-stack-sm px-base font-label-bold text-label-bold text-secondary">T-04</td>
                <td className="py-stack-sm px-base text-primary">Working Capital Reserve</td>
                <td className="py-stack-sm px-base text-on-surface">$3,500,000</td>
                <td className="py-stack-sm px-base text-on-surface-variant">14%</td>
              </tr>
              <tr className="border-b border-surface-variant/50 hover:bg-surface-container-low transition-colors">
                <td className="py-stack-sm px-base font-label-bold text-label-bold text-secondary">T-05</td>
                <td className="py-stack-sm px-base text-primary">Contingency</td>
                <td className="py-stack-sm px-base text-on-surface">$2,500,000</td>
                <td className="py-stack-sm px-base text-on-surface-variant">10%</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-surface-container-low">
                <td className="py-stack-sm px-base font-headline-md text-headline-md text-primary text-right" colSpan={2}>TOTAL PROJECTED:</td>
                <td className="py-stack-sm px-base font-headline-md text-headline-md text-secondary border-t-2 border-secondary">$25,000,000</td>
                <td className="py-stack-sm px-base font-headline-md text-headline-md text-primary border-t-2 border-secondary">100%</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
}
