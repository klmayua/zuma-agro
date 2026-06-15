const executives = [
  { name: "General Manager", role: "Strategic Operations & Deployment", description: "Directs the execution of large-scale agrarian transformation projects across the federation." },
  { name: "Chief Financial Officer", role: "Capital Architecture & Financial Controls", description: "Manages capital allocation, investment frameworks, and institutional financial reporting." },
  { name: "Chief Technology Officer", role: "Integrated Systems & Intelligence", description: "Oversees the digital backbone of the platform, from precision ag-tech to supply chain logistics." },
  { name: "Chief Legal Officer", role: "Governance & Regulatory Compliance", description: "Ensures adherence to sovereign legal frameworks and international governance standards." },
];

export function ExecutiveSection() {
  return (
    <section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto">
        <div className="mb-stack-lg text-center md:text-left">
          <span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Executive Leadership</span>
          <h2 className="text-headline-lg font-headline-lg text-primary">Executive Management &amp; C-Level Leadership</h2>
          <p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
            Driving the platform&apos;s mission through specialized expertise and strategic oversight of the integrated value chain.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {executives.map((exec) => (
            <div key={exec.name} className="flex flex-col">
              <div className="aspect-square bg-surface-container-low rounded-DEFAULT mb-stack-sm flex items-center justify-center text-on-surface-variant/20">
                <span className="material-symbols-outlined text-5xl">person</span>
              </div>
              <h3 className="text-headline-md font-headline-md text-primary mb-1">{exec.name}</h3>
              <p className="text-label-bold font-label-bold text-secondary mb-2">{exec.role}</p>
              <p className="text-body-md font-body-md text-on-surface-variant">{exec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
