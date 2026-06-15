export function FrameworkHeroSection() {
  return (
    <section className="px-margin-mobile md:px-margin-desktop py-stack-lg md:py-24 max-w-container-max mx-auto relative">
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="w-full h-full border-r border-b border-primary-fixed"></div>
        <div className="absolute top-1/4 w-full border-t border-primary-fixed"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
        <div className="md:col-span-8 space-y-stack-md">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container border border-surface-variant rounded-full text-primary font-label-bold text-label-sm">
            <span className="w-2 h-2 rounded-full bg-secondary"></span>
            <span>SECTION 4.0</span>
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-display-lg-mobile md:text-display-lg tracking-tight">
            Strategic Framework &amp; Rollout Sequencing
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Defining the execution vector for Zuma Agro-Allied. Anchored in the &apos;Minimum Viable Zuma&apos; philosophy, prioritizing immediate yield stability in the Benue Valley corridor before expansive scaling.
          </p>
          <div className="pt-stack-sm">
            <a 
              href="#" 
              className="inline-flex items-center space-x-3 bg-secondary text-white px-6 py-3 hover:opacity-90 transition-all font-label-bold text-label-bold rounded shadow-sm"
            >
              <span className="material-symbols-outlined icon-fill">download</span>
              <span>Download Deployment Blueprint</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
