export function BenueValleySection() {
  return (
    <section
      className="w-full py-4xl bg-surface"
      style={{
        backgroundImage: 'linear-gradient(rgba(248, 250, 246, 0.85), rgba(248, 250, 246, 0.85))',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="bg-white rounded-3xl p-3xl relative overflow-hidden shadow-institutional border border-outline-variant/10 shadow-2xl backdrop-blur-sm" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
          <div className="relative z-10 flex flex-col lg:flex-row gap-3xl items-center">
            <div className="lg:w-2/3">
              <span className="font-executive-caps text-[14px] font-bold tracking-[0.2em] uppercase mb-md inline-block px-md py-sm rounded-full text-secondary bg-secondary/10">
                Phase One Deployment
              </span>
              <h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-lg font-bold">
                The Benue Valley Corridor Pilot
              </h2>
               <p className="w-full font-body-lg text-[20px] text-on-surface-variant mb-lg leading-relaxed">
                Zuma Agro launches as a &apos;Minimum Viable Zuma&apos; – a commercially disciplined production unit designed to prove unit economics before capital is committed to replication.
              </p>
               <p className="w-full font-body-md text-[18px] text-on-surface-variant mb-xl leading-relaxed">
                The initial pilot concentrates on the Benue Valley corridor (Benue, Nasarawa, Taraba) focusing on maize and soybeans. It includes three initial production clusters (5,000–10,000 hectares each) within 100km of a central processing hub near Makurdi, featuring grain dryers, storage silos, a feed mill, and an oil processing line.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-lg text-primary font-headline-md text-[18px] font-semibold">
                <li className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-[28px] font-light text-secondary">water_drop</span>
                  Small-scale irrigation
                </li>
                <li className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-[28px] font-light text-secondary">warehouse</span>
                  10,000 MT Storage
                </li>
                <li className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-[28px] font-light text-secondary">factory</span>
                  Feed &amp; Oil Processing
                </li>
                <li className="flex items-center gap-md">
                  <span className="material-symbols-outlined text-[28px] font-light text-secondary">route</span>
                  Feeder road improvements
                </li>
              </ul>
              <div className="mt-xl">
                <a href="/framework" className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg">
                  View Phase One Roadmap
                  <span className="material-symbols-outlined text-[20px] ml-xs">map</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/3 flex justify-center w-full">
              <div className="bg-primary text-white p-2xl rounded-3xl text-center shadow-2xl w-full max-w-md border border-white/10">
                <p className="font-executive-caps text-[14px] font-bold tracking-[0.2em] uppercase mb-md text-secondary">Validation Trigger</p>
                <p className="font-headline-xl text-[80px] font-bold leading-none mb-md">
                  3<span className="text-[32px] font-normal">Qs</span>
                </p>
                <p className="font-body-md text-[18px] text-white/80 leading-relaxed">
                  Consecutive KPI performance required before national rollout commences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
