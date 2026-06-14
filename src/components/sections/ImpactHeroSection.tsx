import { Badge } from "@/components/ui/Badge";
import { MetricCard } from "@/components/ui/Card";

export function ImpactHeroSection() {
  return (
    <section className="relative bg-surface-charcoal text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/90 via-primary/80 to-surface-charcoal/95" />
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-light/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />
      </div>
      <div className="relative max-w-[1280px] mx-auto px-10 md:px-6 py-20 md:py-32 text-center">
        <div className="flex justify-center mb-6">
          <Badge variant="secondary">National Imperative</Badge>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 max-w-4xl mx-auto tracking-tight">
          Impact & National Multiplier Effects
        </h1>
        <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Every operational node creates cascading economic value — from farm
          gate to national GDP, from rural households to foreign exchange
          reserves.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "34M+", label: "Hectares of Arable Land" },
            { value: "400M", label: "Population to Feed" },
            { value: "$-10B", label: "Annual Food Import Bill" },
            { value: "20-40%", label: "Post-Harvest Losses" },
          ].map((stat) => (
            <MetricCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}
