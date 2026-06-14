export function EISSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <span className="text-xs font-semibold text-surface-slate tracking-wider">
                CORE PLATFORM
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
              Enterprise Intelligence System
            </h2>
            <p className="text-lg text-surface-slate mb-6">
              The central nervous system of the Zuma Agro-Allied platform — a
              unified data infrastructure that ingests, processes, and distributes
              operational intelligence across all nodes and business units in
              real-time.
            </p>
            <ul className="space-y-3">
              {[
                "Real-time field telemetry from IoT sensor networks",
                "Predictive yield modelling and crop health analytics",
                "Supply chain optimization and logistics orchestration",
                "Financial performance dashboards and compliance reporting",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-surface-charcoal"
                >
                  <svg
                    className="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="bg-surface-white border border-surface-stone rounded-lg p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="relative">
                  <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center animate-pulse">
                    <svg
                      className="w-12 h-12 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                      />
                    </svg>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">EIS</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Production", "Aggregation", "Processing", "Distribution"].map(
                  (node) => (
                    <div
                      key={node}
                      className="bg-surface-ivory border border-surface-stone rounded-md p-3 text-center"
                    >
                      <div className="text-xs font-semibold text-surface-charcoal">
                        {node}
                      </div>
                    </div>
                  )
                )}
              </div>
              <div className="mt-4 text-center">
                <div className="text-xs text-surface-slate">
                  Unified data layer connecting all operational nodes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
