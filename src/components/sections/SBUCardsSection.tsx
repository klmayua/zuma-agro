import { Badge } from "@/components/ui/Badge";

const sbus = [
  {
    badge: "SBU ALPHA",
    title: "Staples",
    description:
      "Core food commodities — rice, maize, cassava, and sorghum — targeted for import substitution and domestic food security. Operates across the full value chain from production to consumer-ready packaged goods.",
    focus: [
      "Rice paddy cultivation and milling",
      "Maize production and animal feed",
      "Cassava processing and starch derivatives",
      "Sorghum for food and industrial use",
    ],
    status: "Phase 1 Deployment",
  },
  {
    badge: "SBU BETA",
    title: "Cash Crops",
    description:
      "High-value export commodities — cocoa, sesame, ginger, and palm oil — positioned for premium international markets and foreign exchange generation. Focused on quality certification and traceability.",
    focus: [
      "Cocoa processing and premium export",
      "Sesame seed grading and export",
      "Ginger cultivation and processing",
      "Palm oil refining and fractionation",
    ],
    status: "Phase 2 Deployment",
  },
];

export function SBUCardsSection() {
  return (
    <section className="py-16 md:py-24 bg-surface-charcoal">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Strategic Business Units
        </h2>
        <p className="text-lg text-white/70 mb-12 max-w-2xl">
          Two primary business units operating under the platform — each
          specialized in distinct commodity categories with dedicated operational
          infrastructure.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sbus.map((sbu) => (
            <div
              key={sbu.badge}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:border-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary">{sbu.badge}</Badge>
                <span className="text-xs text-white/50">{sbu.status}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">{sbu.title}</h3>
              <p className="text-sm text-white/70 mb-6">{sbu.description}</p>
              <div className="border-t border-white/10 pt-4">
                <h4 className="text-xs font-semibold text-white/50 tracking-wider uppercase mb-3">
                  Focus Areas
                </h4>
                <ul className="space-y-2">
                  {sbu.focus.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
