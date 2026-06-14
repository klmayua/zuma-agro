"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

const entityTypes = [
  "Federal Ministry",
  "State Government",
  "Development Finance Institution (DFI)",
  "Institutional Investor",
  "Strategic Partner",
];

type FormData = {
  fullName: string;
  jurisdiction: string;
  entityType: string;
};

export function EnrollmentStep1Form() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    jurisdiction: "",
    entityType: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = "/enrollment/step2";
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <label htmlFor="fullName" className="block text-sm font-semibold text-surface-charcoal mb-2">
          Full Legal Name of Entity
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="Enter the full registered name of your organization"
          className="w-full border border-surface-stone rounded-lg px-4 py-3 text-surface-charcoal placeholder:text-surface-slate focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      <div>
        <label htmlFor="jurisdiction" className="block text-sm font-semibold text-surface-charcoal mb-2">
          Jurisdiction of Incorporation
        </label>
        <input
          type="text"
          id="jurisdiction"
          name="jurisdiction"
          value={formData.jurisdiction}
          onChange={handleChange}
          required
          placeholder="e.g. Federal Republic of Nigeria"
          className="w-full border border-surface-stone rounded-lg px-4 py-3 text-surface-charcoal placeholder:text-surface-slate focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
        />
      </div>

      <div>
        <label htmlFor="entityType" className="block text-sm font-semibold text-surface-charcoal mb-2">
          Entity Classification
        </label>
        <select
          id="entityType"
          name="entityType"
          value={formData.entityType}
          onChange={handleChange}
          required
          className="w-full border border-surface-stone rounded-lg px-4 py-3 text-surface-charcoal focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all bg-white"
        >
          <option value="">Select your entity type</option>
          {entityTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      <div className="flex justify-end pt-4">
        <Button type="submit" variant="primary">
          Continue to Partnership Architecture
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
