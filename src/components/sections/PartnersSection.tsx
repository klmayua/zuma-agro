import { Badge } from "@/components/ui/Badge";

const partnerCategories = [
  {
    category: "Sovereign & Government",
    description:
      "Strategic alignment with federal and state government agencies, leveraging policy frameworks, land access, and institutional support for national food security objectives.",
    partners: [
      "Federal Ministry of Agriculture",
      "State Governments (Pilot Corridors)",
      "Central Bank of Nigeria",
      "National Agricultural Seed Council",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    category: "Development Finance",
    description:
      "Multilateral development finance institutions providing patient capital, concessional lending, and technical assistance for sovereign-scale agro-industrial infrastructure.",
    partners: [
      "African Development Bank (AfDB)",
      "International Finance Corporation (IFC)",
      "Nigerian Sovereign Investment Authority (NSIA)",
      "Bank of Industry (BOI)",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    category: "Corporate & Technical",
    description:
      "Technical partnerships with leading agribusiness corporations, research institutions, and technology providers driving innovation across the value chain.",
    partners: [
      "Global Seed Companies",
      "Agricultural Research Institutes",
      "Technology Platform Partners",
      "Equipment & Machinery Providers",
    ],
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export function PartnersSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <Badge variant="outline" className="mb-4">
          Ecosystem
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Partnership Ecosystem
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          A multi-layered partnership architecture connecting sovereign
          institutions, development finance, and corporate expertise.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {partnerCategories.map((category) => (
            <div
              key={category.category}
              className="bg-surface-white border border-surface-stone rounded-lg p-8 hover:border-secondary transition-colors"
            >
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center mb-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-surface-charcoal mb-2">
                {category.category}
              </h3>
              <p className="text-sm text-surface-slate mb-6">
                {category.description}
              </p>
              <div className="space-y-2">
                {category.partners.map((partner) => (
                  <div
                    key={partner}
                    className="flex items-center gap-2 text-sm text-surface-charcoal"
                  >
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full flex-shrink-0" />
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
