export function EISSection() {
  return (
    <section className="mb-stack-lg">
      <div className="bg-primary text-white p-stack-md md:p-stack-lg rounded-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2" />
        <div className="relative z-10 flex flex-col md:flex-row gap-stack-md items-center justify-between">
          <div className="max-w-xl">
            <h2 className="font-headline-lg text-headline-lg mb-stack-sm text-secondary">
              Enterprise Intelligence System
            </h2>
            <p className="font-body-md text-body-md text-white/80 mb-stack-md">
              Acting as the central nervous system, the EIS continuously monitors, analyzes, and optimizes resource allocation across all operational nodes in real-time.
            </p>
            <ul className="space-y-2 font-label-bold text-label-bold text-primary-fixed">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Predictive Yield Modeling
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Automated Logistics Routing
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                Quality Assurance Telemetry
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="w-32 h-32 md:w-48 md:h-48 border-4 border-secondary rounded-full flex items-center justify-center relative">
              <div className="absolute inset-0 border-2 border-primary-fixed rounded-full animate-ping opacity-20" />
              <span className="material-symbols-outlined text-6xl text-secondary">hub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
