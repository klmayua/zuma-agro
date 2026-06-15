"use client";

import { useState } from "react";

const tiers = [
  {
    id: "tier01",
    number: "01",
    title: "Technical Assistance",
    subtitle: "Tier 01",
    description: "Advisory, planning, systems design.",
    icon: "architecture",
  },
  {
    id: "tier02",
    number: "02",
    title: "Joint Implementation",
    subtitle: "Tier 02",
    description: "Operations, processing, treasury.",
    icon: "handshake",
  },
  {
    id: "tier03",
    number: "03",
    title: "Franchise Replication",
    subtitle: "Tier 03",
    description: "Licensed model, quality assurance.",
    icon: "account_tree",
  },
];

export function EnrollmentStep2Form() {
  const [selectedTier, setSelectedTier] = useState<string>("tier02");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTier) {
      window.location.href = "/enrollment/step3";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-md mb-3xl">
        {tiers.map((tier) => (
          <label
            key={tier.id}
            className={`tier-card block bg-white border rounded-2xl p-6 cursor-pointer relative shadow-soft ${
              selectedTier === tier.id
                ? "selected border-primary bg-surface"
                : "border-outline-variant/50"
            }`}
            onClick={() => setSelectedTier(tier.id)}
          >
            <div className="flex items-start gap-4">
              <div className="mt-1">
                <input
                  type="radio"
                  name="partnership_tier"
                  value={tier.id}
                  checked={selectedTier === tier.id}
                  onChange={() => setSelectedTier(tier.id)}
                  className="hidden"
                />
                <div className={`radio-custom ${selectedTier === tier.id ? "border-primary" : ""}`}></div>
              </div>
              <div className="flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-label-bold text-label-bold text-secondary">{tier.subtitle}</span>
                    <h2 className="font-headline-md text-[20px] font-semibold text-primary">{tier.title}</h2>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[28px]">{tier.icon}</span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">{tier.description}</p>
              </div>
            </div>
          </label>
        ))}
      </div>
      <div className="flex justify-end border-t border-outline-variant/20 pt-xl mt-xl">
        <button
          type="submit"
          className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg gap-xs"
        >
          Next Step
          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
        </button>
      </div>
    </form>
  );
}
