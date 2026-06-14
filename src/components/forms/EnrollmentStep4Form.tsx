"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function EnrollmentStep4Form() {
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-h3 font-semibold text-surface-charcoal mb-3">
          Enrollment Submitted
        </h2>
        <p className="text-body-md text-surface-slate max-w-md mx-auto mb-8">
          Your enrollment has been received. Our institutional verification team will review your
          submission and contact you within 5 business days.
        </p>
        <Button variant="primary" href="/">
          Return to Home
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold text-surface-charcoal mb-4">Enrollment Summary</h3>
        <div className="bg-surface-ivory rounded-lg p-6 space-y-4">
          <div className="flex justify-between border-b border-surface-stone pb-3">
            <span className="text-sm text-surface-slate">Entity Classification</span>
            <span className="text-sm font-medium text-surface-charcoal">Step 1 Completed</span>
          </div>
          <div className="flex justify-between border-b border-surface-stone pb-3">
            <span className="text-sm text-surface-slate">Partnership Architecture</span>
            <span className="text-sm font-medium text-surface-charcoal">Step 2 Completed</span>
          </div>
          <div className="flex justify-between border-b border-surface-stone pb-3">
            <span className="text-sm text-surface-slate">Strategic Mandate</span>
            <span className="text-sm font-medium text-surface-charcoal">Step 3 Completed</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-surface-slate">Verification Status</span>
            <span className="text-sm font-medium text-secondary">Pending Review</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-surface-charcoal mb-4">Due Diligence Notice</h3>
        <div className="bg-surface-ivory rounded-lg p-6">
          <p className="text-sm text-surface-slate leading-relaxed">
            By submitting this enrollment, you authorize Zuma Agro-Allied Integrated Enterprise to
            conduct institutional due diligence on your entity. This includes verification of
            organizational registration, beneficial ownership, and regulatory standing. All information
            provided will be treated in accordance with applicable data protection regulations and
            Zuma Agro-Allied's confidentiality protocols.
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-surface-charcoal mb-4">Protocol Affirmation</h3>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-1 w-5 h-5 accent-primary rounded"
          />
          <span className="text-sm text-surface-slate leading-relaxed">
            I affirm that all information provided is accurate and complete. I authorize Zuma
            Agro-Allied to verify the submitted details and initiate the partnership onboarding
            process. I understand that material misrepresentation may result in enrollment
            revocation.
          </span>
        </label>
      </div>

      <div className="flex justify-between pt-4">
        <Button type="button" variant="secondary" href="/enrollment/step3">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Button>
        <Button type="submit" variant="primary" className={!agreed ? "opacity-50 cursor-not-allowed" : ""}>
          Submit Enrollment
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </Button>
      </div>
    </form>
  );
}
