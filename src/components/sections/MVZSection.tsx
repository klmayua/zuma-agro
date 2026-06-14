import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const commodities = [
  {
    name: "High-Yield Maize",
    yield: "5.5 MT/Ha",
    description:
      "Certified hybrid varieties optimized for Nigeria's agro-ecological zones. Target yield 3x national average.",
    season: "Year-round",
    target: "Benue Valley Pilot",
  },
  {
    name: "Industrial Soybeans",
    yield: "2.8 MT/Ha",
    description:
      "Premium crushing-grade soybeans for oil extraction and protein meal. Import substitution focus.",
    season: "March-July",
    target: "Northern Guinea Savanna",
  },
  {
    name: "Quality Cassava",
    yield: "15 MT/Ha",
    description:
      "High-starch varieties for industrial processing. Starch, ethanol, and flour production chain.",
    season: "Year-round",
    target: "South-South Corridor",
  },
];

export function MVZSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <div className="mb-12">
          <Badge variant="outline" className="mb-4">
            MVZ Philosophy
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
            Maximálnaya Vyzhelostnaya Zona
          </h2>
          <p className="text-lg text-surface-slate max-w-3xl">
            The Maximum Yield Zone (MVZ) philosophy drives our approach: prove
            the yield before scaling the operation. Each commodity must achieve
            2-3x national average yields before commercial deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {commodities.map((commodity) => (
            <Card key={commodity.name} className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-surface-charcoal">
                  {commodity.name}
                </h3>
                <span className="text-2xl font-bold text-primary">
                  {commodity.yield}
                </span>
              </div>
              <p className="text-sm text-surface-slate mb-6">
                {commodity.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-surface-slate">
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{commodity.season}</span>
                </div>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>{commodity.target}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
