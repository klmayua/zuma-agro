export function PlatformHeroSection() {
  return (
    <section className="mb-stack-lg border-b border-surface-variant pb-stack-md">
      <div className="max-w-3xl">
        <span className="inline-block px-3 py-1 bg-surface-container-low border border-outline-variant text-primary font-label-bold text-label-bold rounded-full mb-stack-sm tracking-widest uppercase">
          Section 1.4
        </span>
        <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-md">
          Integrated Operating Architecture
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
          The structural foundation of Zuma Agro-Allied&apos;s operational capacity. This hub-and-spoke model ensures seamless flow from cultivation to market, governed by our Enterprise Intelligence System.
        </p>
        <div className="flex justify-start">
          <a href="/platform" className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-label-bold text-label-bold">
            <span className="material-symbols-outlined">book</span>
            <span>Review Operational Playbooks</span>
          </a>
        </div>
      </div>
    </section>
  );
}
