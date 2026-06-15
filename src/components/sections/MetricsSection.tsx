const metrics = [
  { value: "34M+", label: "Hectares Arable Land", color: "text-secondary" },
  { value: "400M", label: "Projected Population", color: "text-secondary" },
  { value: "$-10B", label: "Annual Import Bill", color: "text-premium-red" },
  { value: "20-40%", label: "Post-Harvest Losses", color: "text-premium-red" },
];

export function MetricsSection() {
  return (
    <section className="w-full bg-white py-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-white rounded-2xl p-lg shadow-institutional border border-outline-variant/20 flex flex-col items-center justify-center text-center">
              <p className={`font-headline-md text-[36px] font-bold ${metric.color}`}>{metric.value}</p>
              <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
