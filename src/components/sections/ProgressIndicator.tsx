import Link from "next/link";

type Step = {
  number: number;
  label: string;
  href: string;
};

const steps: Step[] = [
  { number: 1, label: "Entity Classification", href: "/enrollment/step1" },
  { number: 2, label: "Partnership Architecture", href: "/enrollment/step2" },
  { number: 3, label: "Strategic Mandate", href: "/enrollment/step3" },
  { number: 4, label: "Final Verification", href: "/enrollment/step4" },
];

type ProgressIndicatorProps = {
  currentStep: number;
};

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  return (
    <div className="bg-surface-ivory border-b border-surface-stone">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6 py-6">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => {
            const isActive = step.number === currentStep;
            const isCompleted = step.number < currentStep;

            return (
              <div key={step.number} className="flex items-center flex-1 last:flex-none">
                <Link
                  href={step.href}
                  className={`flex items-center gap-3 ${
                    isActive
                      ? "text-primary"
                      : isCompleted
                      ? "text-primary"
                      : "text-surface-slate"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                      isActive
                        ? "bg-primary text-white"
                        : isCompleted
                        ? "bg-primary text-white"
                        : "bg-surface-stone text-surface-slate"
                    }`}
                  >
                    {isCompleted ? (
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="hidden md:block">
                    <p className={`text-sm font-semibold ${isActive ? "text-primary" : ""}`}>
                      Step {step.number}
                    </p>
                    <p className="text-xs text-surface-slate">{step.label}</p>
                  </div>
                </Link>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div
                      className={`h-0.5 ${
                        step.number < currentStep ? "bg-primary" : "bg-surface-stone"
                      }`}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
