export function SovereignAlignmentSection() {
  return (
    <section className="w-full bg-primary py-4xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="mb-3xl text-center md:text-left">
          <h2 className="font-headline-xl text-[40px] leading-tight text-white mb-md font-bold">Sovereign Alignment</h2>
          <p className="font-body-lg text-[20px] text-white/80 max-w-4xl leading-relaxed">Focus on Federal Ministries, State Governments, and Institutional Investors.</p>
        </div>
        <div className="space-y-lg">
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
            <div>
              <h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Federal Ministries</h3>
              <p className="font-body-md text-[18px] leading-relaxed text-white/80">Collaborating on national policy alignment, infrastructure development, and large-scale agricultural mandates to ensure national food security.</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
            <div>
              <h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">State Governments</h3>
              <p className="font-body-md text-[18px] leading-relaxed text-white/80">Partnering for regional deployment, land access, community integration, and localized economic development initiatives.</p>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
            <div>
              <h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Institutional Investors</h3>
              <p className="font-body-md text-[18px] leading-relaxed text-white/80">Aligning with DFIs, sovereign wealth funds, and private equity to deploy patient capital for sustainable, long-term returns and structural transformation.</p>
            </div>
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
