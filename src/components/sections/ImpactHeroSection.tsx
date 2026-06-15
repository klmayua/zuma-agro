export function ImpactHeroSection() {
  return (
    <section className="paper-texture py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop min-h-[716px] flex flex-col justify-center items-center text-center">
      <div className="max-w-container-max mx-auto space-y-stack-md">
        <span className="inline-block px-4 py-1 border border-primary text-primary rounded-full font-label-bold text-label-bold uppercase tracking-wider">
          National Imperative
        </span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl mx-auto leading-tight">
          Addressing the $6–10B Annual Food Import Bill
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
          A systemic vulnerability framed as a generational investment opportunity. By localizing agricultural production, we mitigate national security risks while unlocking immense economic multipliers.
        </p>
        <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-3xl mx-auto">
          <div className="bg-surface-container-low p-stack-md rounded border border-surface-variant flex flex-col items-center justify-center text-center shadow-sm">
            <span className="font-headline-lg text-headline-lg text-secondary mb-2">34M+</span>
            <span className="font-label-bold text-label-bold text-primary uppercase tracking-wide">Hectares of Arable Land</span>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">Underutilized potential awaiting institutional structuring.</p>
          </div>
          <div className="bg-surface-container-low p-stack-md rounded border border-surface-variant flex flex-col items-center justify-center text-center shadow-sm">
            <span className="font-headline-lg text-headline-lg text-secondary mb-2">400M</span>
            <span className="font-label-bold text-label-bold text-primary uppercase tracking-wide">Projected Population</span>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">The demographic imperative driving future domestic demand.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
