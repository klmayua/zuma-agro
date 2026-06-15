"use client";

import { useState } from "react";

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
    <form onSubmit={handleSubmit} className="space-y-3xl">
      <div className="space-y-2xl">
        <div>
          <label htmlFor="fullName" className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface">
            Full Legal Name
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="e.g. Ministry of Agriculture and Rural Development"
            className="form-input-premium h-[64px] px-xl rounded-xl bg-white"
          />
        </div>
        <div>
          <label htmlFor="jurisdiction" className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface">
            Full Legal Name
          </label>
          <input
            type="text"
            id="jurisdiction"
            name="jurisdiction"
            value={formData.jurisdiction}
            onChange={handleChange}
            required
            placeholder="e.g. Federal Republic of Nigeria"
            className="form-input-premium h-[64px] px-xl rounded-xl bg-white"
          />
        </div>
        <div>
          <label htmlFor="entityType" className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface">
            Full Legal Name
          </label>
          <select
            id="entityType"
            name="entityType"
            value={formData.entityType}
            onChange={handleChange}
            required
            className="form-select-premium h-[64px] px-xl rounded-xl bg-white"
          >
            <option disabled value="">Select classification...</option>
            {entityTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="pt-xl flex justify-center mt-3xl">
        <button
          type="submit"
          className="bg-primary text-white font-sans-inter text-sm tracking-wider uppercase h-[64px] px-[48px] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-4 shadow-elevated w-full md:w-auto rounded-xl"
        >
          Next Step
          <span className="material-symbols-outlined text-[24px] text-secondary" style={{ fontVariationSettings: '"FILL" 0' }}>arrow_forward</span>
        </button>
      </div>
      <div className="mt-2xl text-center border-t border-outline-variant/30 pt-xl">
        <p className="font-sans-inter text-sm text-on-surface-variant flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-[18px] text-secondary">lock</span>
          Information provided is secured under institutional NDA protocols.
        </p>
      </div>
    </form>
  );
}
