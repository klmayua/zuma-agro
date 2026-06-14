import { MetricCard } from "@/components/ui/Card";
import { pages } from "@/lib/design-tokens";

export function MetricsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {pages.home.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              value={metric.value}
              label={metric.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
