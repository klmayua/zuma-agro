export function GovernanceHeroSection() {
  return (
    <section className="mb-stack-lg border-b border-surface-variant pb-stack-md flex flex-col md:flex-row items-start justify-between gap-stack-md">
      <div className="max-w-2xl">
        <h1 className="font-display-lg text-display-lg text-primary mb-stack-sm">
          Governance &amp; Controls
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
          Establishing enduring stability through stringent oversight, separation of powers, and an unwavering commitment to consequence enforcement within the institutional control doctrine.
        </p>
        <button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded flex items-center justify-center gap-xs hover:opacity-90 transition-opacity shadow-lg">
          <span className="material-symbols-outlined text-[20px]" data-icon="shield">shield</span>
          Examine Oversight Protocols
        </button>
      </div>
      <div className="w-full md:w-1/3 aspect-[4/3] bg-surface-container rounded border border-outline-variant overflow-hidden">
        <img 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_XAtHzHeoJE-PZaoVQ09lNB9sihJlxUA7qZpW4zKHN0DWeWelv-8JeVbCC0w1WdHu4wjpUQxn_k7AMA8cvocReLTUFELJdz8a4ARx9t8BGM1PDyhQJUIMYJOHK4WtkdeM7M<ctrl2509>" 
          alt="Boardroom View"
        />
      </div>
    </section>
  );
}
