"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const tiers = [
  {
    id: "technical-assistance",
    title: "Technical Assistance",
    description:
      "Access Zuma Agro-Allied's agronomic expertise, data systems, and operational playbooks. Ideal for entities seeking knowledge transfer and capacity building.",
    features: ["Agronomic Advisory", "Data Systems Access", "Training Programs"],
  },
  {
    id: "joint-implementation",
    title: "Joint Implementation",
    description:
      "Co-develop agro-industrial infrastructure with shared operational oversight. Suited for entities ready to deploy capital and resources alongside Zuma Agro-Allied.",
    features: ["Shared Infrastructure", "Co-Investment Model", "Operational Integration"],
  },
  {
    id: "franchise-replication",
    title: "Franchise Replication",
    description:
      "License and replicate the Zuma Agro-Allied operational model in new territories. Designed for entities with established regional presence and distribution capacity.",
    features: ["Territory Licensing", "Brand Replication", "Full Model Transfer"],
  },
];

export function EnrollmentStep2Form() {
  const [selectedTier, setSelectedTier] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTier) {
      window.location.href = "/enrollment/step3";
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        {tiers.map((tier) => (
          <label
            key={tier.id}
            className={`block border-2 rounded-xl p-6 cursor-pointer transition-all ${
              selectedTier === tier.id
                ? "border-primary bg-primary/5"
                : "border-surface-stone hover:border-surface-slate"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedTier === tier.id
                      ? "border-primary"
                      : "border-surface-stone"
                  }`}
                >
                  {selectedTier === tier.id && (
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  )}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-surface-charcoal mb-1">
                  {tier.title}
                </h3>
                <p className="text-sm text-surface-slate mb-3">{tier.description}</p>
                <div className="flex flex-wrap gap-2">
                  {tier.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs font-medium bg-surface-stone/50 text-surface-charcoal px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </label>
        ))}
      </div>

      <input type="hidden" name="partnershipTier" value={selectedTier} />

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" href="/enrollment/step1">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Continue to Strategic Mandate
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
