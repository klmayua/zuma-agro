"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const corridors = [
  { id: "benue-valley", name: "Benue Valley Corridor", region: "North-Central" },
  { id: "kano-katsina", name: "Kano-Katsina Corridor", region: "North-West" },
  { id: "oyo-osun", name: "Oyo-Osun Corridor", region: "South-West" },
  { id: "kaduna-zaria", name: "Kaduna-Zaria Corridor", region: "North-West" },
  { id: "bauchi-misau", name: "Bauchi-Misau Corridor", region: "North-East" },
  { id: "enugu-nsukka", name: "Enugu-Nsukka Corridor", region: "South-East" },
  { id: "cross-river", name: "Cross River Corridor", region: "South-South" },
];

const commodities = [
  "Rice Paddy",
  "Cassava",
  "Maize",
  "Soybean",
  "Sesame",
  "Shea",
  "Cocoa",
  "Oil Palm",
  "Cowpea",
  "Sorghum",
];

const commitmentTiers = [
  {
    id: "observer",
    title: "Observer",
    range: "Under ₦50M",
    description: "Exploratory engagement with data access",
  },
  {
    id: "participant",
    title: "Participant",
    range: "₦50M – ₦500M",
    description: "Active investment with operational involvement",
  },
  {
    id: "strategic",
    title: "Strategic Partner",
    range: "Above ₦500M",
    description: "Full-spectrum partnership with board representation",
  },
];

type FormData = {
  corridor: string;
  commodity: string;
  commitment: string;
};

export function EnrollmentStep3Form() {
  const [formData, setFormData] = useState<FormData>({
    corridor: "",
    commodity: "",
    commitment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/enrollment/step4";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label className="block text-sm font-semibold text-surface-charcoal mb-3">
          Geographic Corridor Focus
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {corridors.map((corridor) => (
            <label
              key={corridor.id}
              className={`border-2 rounded-lg px-4 py-3 cursor-pointer transition-all flex items-center justify-between ${
                formData.corridor === corridor.id
                  ? "border-primary bg-primary/5"
                  : "border-surface-stone hover:border-surface-slate"
              }`}
            >
              <div>
                <p className="text-sm font-medium text-surface-charcoal">{corridor.name}</p>
                <p className="text-xs text-surface-slate">{corridor.region}</p>
              </div>
              <input
                type="radio"
                name="corridor"
                value={corridor.id}
                checked={formData.corridor === corridor.id}
                onChange={handleChange}
                className="accent-primary"
              />
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="commodity" className="block text-sm font-semibold text-surface-charcoal mb-2">
          Primary Commodity Interest
        </label>
        <select
          id="commodity"
          name="commodity"
          value={formData.commodity}
          onChange={handleChange}
          required
          className="w-full border border-surface-stone rounded-lg px-4 py-3 text-surface-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
        >
          <option value="">Select primary commodity</option>
          {commodities.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-semibold text-surface-charcoal mb-3">
          Resource Commitment Tier
        </label>
        <div className="space-y-3">
          {commitmentTiers.map((tier) => (
            <label
              key={tier.id}
              className={`block border-2 rounded-lg px-5 py-4 cursor-pointer transition-all ${
                formData.commitment === tier.id
                  ? "border-primary bg-primary/5"
                  : "border-surface-stone hover:border-surface-slate"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-surface-charcoal">{tier.title}</p>
                  <p className="text-xs text-surface-slate">{tier.description}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-primary">{tier.range}</p>
                  <input
                    type="radio"
                    name="commitment"
                    value={tier.id}
                    checked={formData.commitment === tier.id}
                    onChange={handleChange}
                    className="accent-primary"
                  />
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" href="/enrollment/step2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Continue to Final Verification
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
