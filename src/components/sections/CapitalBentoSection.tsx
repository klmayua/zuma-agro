import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

const capitalStack = [
  {
    label: "Senior Debt",
    percentage: 50,
    amount: "$12.5M",
    color: "bg-primary",
    textColor: "text-primary",
  },
  {
    label: "Mezzanine",
    percentage: 20,
    amount: "$5.0M",
    color: "bg-secondary",
    textColor: "text-secondary",
  },
  {
    label: "Equity",
    percentage: 30,
    amount: "$7.5M",
    color: "bg-surface-charcoal",
    textColor: "text-surface-charcoal",
  },
];

const useOfFunds = [
  {
    tranche: "Tranche A",
    category: "Land Acquisition & Titling",
    allocation: "$8.5M",
    percentage: "34%",
    description: "500-hectare pilot zone in Benue Valley with secured titles",
  },
  {
    tranche: "Tranche B",
    category: "Infrastructure Development",
    allocation: "$6.0M",
    percentage: "24%",
    description: "Irrigation systems, processing facilities, and cold chain",
  },
  {
    tranche: "Tranche C",
    category: "Seed & Input Procurement",
    allocation: "$4.5M",
    percentage: "18%",
    description: "Certified seeds, fertilizers, and crop protection chemicals",
  },
  {
    tranche: "Tranche D",
    category: "Working Capital",
    allocation: "$3.5M",
    percentage: "14%",
    description: "Operational expenses, payroll, and logistics financing",
  },
  {
    tranche: "Tranche E",
    category: "Contingency Reserve",
    allocation: "$2.5M",
    percentage: "10%",
    description: "Risk buffer for currency fluctuation and force majeure",
  },
];

export function CapitalBentoSection() {
  return (
    <section id="capital" className="py-16 md:py-24 bg-surface-ivory">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Capital Stack Architecture
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          Structured capital deployment across a diversified asset base with
          institutional-grade risk allocation and transparent reporting.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Capital Stack - 8 cols */}
          <div className="lg:col-span-8">
            <Card className="h-full" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-surface-charcoal">
                  Capital Stack Structure
                </h3>
                <Badge variant="primary">$25M Total Raise</Badge>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex h-10 rounded-lg overflow-hidden">
                  {capitalStack.map((layer) => (
                    <div
                      key={layer.label}
                      className={`${layer.color} relative group cursor-default`}
                      style={{ width: `${layer.percentage}%` }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                        {layer.percentage}%
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-3">
                  {capitalStack.map((layer) => (
                    <div
                      key={layer.label}
                      className="flex items-center gap-2"
                      style={{ width: `${layer.percentage}%` }}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full ${layer.color}`} />
                      <span className="text-xs text-surface-slate whitespace-nowrap">
                        {layer.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack Breakdown Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {capitalStack.map((layer) => (
                  <div
                    key={layer.label}
                    className="bg-surface-ivory rounded-xl p-5 border border-surface-stone"
                  >
                    <div className={`text-3xl font-bold ${layer.textColor} mb-1`}>
                      {layer.percentage}%
                    </div>
                    <div className="text-sm font-medium text-surface-charcoal mb-1">
                      {layer.label}
                    </div>
                    <div className="text-lg font-semibold text-surface-charcoal">
                      {layer.amount}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* DFI Alignment - 4 cols */}
          <div className="lg:col-span-4">
            <div className="bg-primary text-white rounded-xl p-8 h-full flex flex-col">
              <Badge variant="secondary" className="mb-4 w-fit">
                DFI Alignment
              </Badge>
              <h3 className="text-xl font-semibold mb-4">
                Development Finance Institution Criteria
              </h3>
              <p className="text-white/80 mb-6 flex-1">
                Structured to meet the eligibility requirements of major
                development finance institutions, ensuring access to
                concessionary capital and blended finance facilities.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">IFC Performance Standards</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">AfDB Green Bond Framework</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">World Bank ESG Compliance</span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 rounded-lg px-4 py-3">
                  <div className="w-2 h-2 bg-secondary rounded-full" />
                  <span className="text-sm">FSD Africa Catalytic Funding</span>
                </div>
              </div>
              <Button variant="secondary" href="#briefing">
                View DFI Roadmap
              </Button>
            </div>
          </div>

          {/* Use of Funds Table - 12 cols */}
          <div className="lg:col-span-12">
            <Card className="h-full" hover={false}>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-surface-charcoal">
                  Use of Funds Allocation
                </h3>
                <Badge variant="outline">5 Tranches</Badge>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-surface-stone">
                      <th className="text-left py-3 px-4 text-xs font-semibold text-surface-slate uppercase tracking-wider">
                        Tranche
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-surface-slate uppercase tracking-wider">
                        Category
                      </th>
                      <th className="text-left py-3 px-4 text-xs font-semibold text-surface-slate uppercase tracking-wider">
                        Description
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-surface-slate uppercase tracking-wider">
                        Allocation
                      </th>
                      <th className="text-right py-3 px-4 text-xs font-semibold text-surface-slate uppercase tracking-wider">
                        Share
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {useOfFunds.map((item, i) => (
                      <tr
                        key={item.tranche}
                        className={`border-b border-surface-stone/50 ${
                          i === useOfFunds.length - 1 ? "border-b-0" : ""
                        }`}
                      >
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                            {item.tranche}
                          </span>
                        </td>
                        <td className="py-4 px-4 font-medium text-surface-charcoal">
                          {item.category}
                        </td>
                        <td className="py-4 px-4 text-sm text-surface-slate max-w-xs">
                          {item.description}
                        </td>
                        <td className="py-4 px-4 text-right font-semibold text-surface-charcoal">
                          {item.allocation}
                        </td>
                        <td className="py-4 px-4 text-right text-sm text-surface-slate">
                          {item.percentage}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="border-t-2 border-surface-charcoal/20">
                      <td
                        colSpan={3}
                        className="py-4 px-4 font-bold text-surface-charcoal"
                      >
                        Total Capital Allocation
                      </td>
                      <td className="py-4 px-4 text-right font-bold text-lg text-primary">
                        $25.0M
                      </td>
                      <td className="py-4 px-4 text-right font-bold text-surface-charcoal">
                        100%
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </Card>
          </div>

          {/* CTA Section - full width */}
          <div className="lg:col-span-12">
            <div
              id="briefing"
              className="bg-surface-charcoal rounded-xl p-8 md:p-12 text-center"
            >
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Request Executive Briefing
              </h3>
              <p className="text-white/70 mb-8 max-w-xl mx-auto">
                Access the complete investment memorandum, financial models, and
                due diligence documentation. Available to qualified institutional
                investors and development finance partners.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="primary" href="/enrollment/step1">
                  Request Briefing Package
                </Button>
                <Button variant="secondary" href="/partnership">
                  Schedule Investor Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
