import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const multiplierEffects = [
  {
    title: "Rural Industrialisation",
    description:
      "Transforming agrarian communities into self-sustaining industrial hubs with processing facilities, cold storage, and value-addition infrastructure.",
    metric: "12 States",
    metricLabel: "Target Coverage",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: "FX Stabilisation",
    description:
      "Reducing import dependency by $2B annually through domestic production of staples, eliminating unnecessary foreign exchange outflows.",
    metric: "-$2B",
    metricLabel: "Annual FX Savings",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Youth Employment",
    description:
      "Creating over 50,000 direct and indirect jobs across the value chain — from farm operatives to logistics coordinators and processing technicians.",
    metric: "50K+",
    metricLabel: "Jobs Created",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Food Security",
    description:
      "Ensuring year-round availability of affordable staples for 400M+ citizens through strategic reserves and distributed production networks.",
    metric: "400M+",
    metricLabel: "Citizens Served",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    title: "Import Substitution",
    description:
      "Replacing $10B+ in annual food imports with domestically produced alternatives, strengthening Nigeria's trade balance.",
    metric: "$10B+",
    metricLabel: "Import Replacement",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: "Technology Transfer",
    description:
      "Deploying precision agriculture, IoT-enabled monitoring, and AI-driven yield optimisation across all operational nodes.",
    metric: "100%",
    metricLabel: "Digital Integration",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "GDP Contribution",
    description:
      "Contributing 2-3% to national GDP growth through integrated agro-industrial operations and value chain multiplication.",
    metric: "2-3%",
    metricLabel: "GDP Growth Impact",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: "Export Revenue",
    description:
      "Generating $500M+ in annual export revenue through high-value processed commodities targeting global markets.",
    metric: "$500M+",
    metricLabel: "Annual Export Revenue",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Community Development",
    description:
      "Investing 5% of revenue into local infrastructure — schools, healthcare, roads, and water systems in host communities.",
    metric: "5%",
    metricLabel: "Revenue Reinvested",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Climate Resilience",
    description:
      "Building drought-resistant supply chains and carbon-negative farming practices across 500K+ hectares of managed farmland.",
    metric: "500K+",
    metricLabel: "Hectares Managed",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export function MultiplierBentoSection() {
  return (
    <section id="multipliers" className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
            National Multiplier Effects
          </h2>
          <p className="text-lg text-surface-slate max-w-2xl mx-auto">
            Each operational investment generates measurable cascading value
            across Nigeria&apos;s economic landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Rural Industrialisation — 2-col */}
          <div className="lg:col-span-2">
            <Card className="h-full" hover={false}>
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  {multiplierEffects[0].icon}
                </div>
                <Badge variant="primary">{multiplierEffects[0].metric}</Badge>
              </div>
              <h3 className="text-xl font-semibold text-surface-charcoal mb-2">
                {multiplierEffects[0].title}
              </h3>
              <p className="text-surface-slate mb-6">
                {multiplierEffects[0].description}
              </p>
              <div className="bg-surface-ivory rounded-xl p-5 border border-surface-stone">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Processing Nodes", value: "48" },
                    { label: "Warehouses", value: "120+" },
                    { label: "Cold Chain Hubs", value: "36" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-2xl font-bold text-primary">
                        {item.value}
                      </div>
                      <div className="text-xs text-surface-slate mt-1">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* FX Stabilisation — 1-col */}
          <div className="lg:col-span-1">
            <div className="bg-primary text-white rounded-xl p-8 h-full flex flex-col">
              <div className="w-12 h-12 bg-white/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                {multiplierEffects[1].icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {multiplierEffects[1].title}
              </h3>
              <p className="text-white/80 mb-6 flex-1">
                {multiplierEffects[1].description}
              </p>
              <div className="bg-white/10 rounded-xl p-5">
                <div className="text-4xl font-bold text-secondary mb-1">
                  {multiplierEffects[1].metric}
                </div>
                <div className="text-sm text-white/60">
                  {multiplierEffects[1].metricLabel}
                </div>
              </div>
            </div>
          </div>

          {/* Youth Employment — 1-col */}
          <div className="lg:col-span-1">
            <Card className="h-full" hover={false}>
              <div className="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4">
                {multiplierEffects[2].icon}
              </div>
              <h3 className="text-xl font-semibold text-surface-charcoal mb-2">
                {multiplierEffects[2].title}
              </h3>
              <p className="text-surface-slate mb-6">
                {multiplierEffects[2].description}
              </p>
              <div className="bg-surface-ivory rounded-xl p-5 border border-surface-stone">
                <div className="text-4xl font-bold text-secondary mb-1">
                  {multiplierEffects[2].metric}
                </div>
                <div className="text-sm text-surface-slate">
                  {multiplierEffects[2].metricLabel}
                </div>
              </div>
            </Card>
          </div>

          {/* Scale & Precision — 2-col with image overlay */}
          <div className="lg:col-span-2">
            <div className="relative bg-surface-charcoal rounded-xl overflow-hidden h-full min-h-[320px]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-primary-dark/80" />
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-64 h-64 border border-white/30 rounded-full" />
                <div className="absolute bottom-4 left-4 w-48 h-48 border border-white/20 rounded-full" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/10 rounded-full" />
              </div>
              <div className="relative p-8 md:p-12 flex flex-col justify-between h-full">
                <div>
                  <Badge variant="secondary" className="mb-4 w-fit">
                    Enterprise Scale
                  </Badge>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                    Scale & Precision
                  </h3>
                  <p className="text-white/80 max-w-lg">
                    Operating across Nigeria&apos;s 34M+ hectares of arable
                    land with precision agriculture technology, satellite
                    monitoring, and AI-driven yield optimisation.
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {[
                    { value: "34M+", label: "Hectares" },
                    { value: "6", label: "SBUs" },
                    { value: "12", label: "States" },
                    { value: "100%", label: "Digital" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg p-4 text-center"
                    >
                      <div className="text-xl font-bold text-secondary">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Food Security — 1-col */}
          <div className="lg:col-span-1">
            <Card className="h-full" hover={false}>
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                {multiplierEffects[3].icon}
              </div>
              <h3 className="text-xl font-semibold text-surface-charcoal mb-2">
                {multiplierEffects[3].title}
              </h3>
              <p className="text-surface-slate mb-6">
                {multiplierEffects[3].description}
              </p>
              <div className="bg-surface-ivory rounded-xl p-5 border border-surface-stone">
                <div className="text-4xl font-bold text-primary mb-1">
                  {multiplierEffects[3].metric}
                </div>
                <div className="text-sm text-surface-slate">
                  {multiplierEffects[3].metricLabel}
                </div>
              </div>
            </Card>
          </div>

          {/* Remaining 6 effects — 3-col grid */}
          {multiplierEffects.slice(4).map((effect) => (
            <div key={effect.title} className="lg:col-span-1">
              <Card className="h-full" hover={false}>
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                  {effect.icon}
                </div>
                <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                  {effect.title}
                </h3>
                <p className="text-sm text-surface-slate mb-6">
                  {effect.description}
                </p>
                <div className="bg-surface-ivory rounded-xl p-4 border border-surface-stone">
                  <div className="text-2xl font-bold text-primary">
                    {effect.metric}
                  </div>
                  <div className="text-xs text-surface-slate mt-1">
                    {effect.metricLabel}
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-surface-charcoal rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Measurable Impact, Verified Results
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Download our comprehensive sustainability report to explore the
              full scope of our national multiplier effects and ESG commitments.
            </p>
            <Button variant="primary" href="/sustainability">
              View Sustainability Report
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
