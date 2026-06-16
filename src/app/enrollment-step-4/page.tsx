import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProgressIndicator } from "@/components/sections/ProgressIndicator";
import { EnrollmentStep4Form } from "@/components/forms/EnrollmentStep4Form";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Step 4: Final Verification | Zuma Agro-Allied",
  description:
    "Review your enrollment summary and submit for institutional verification.",
};

export default function EnrollmentStep4Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgressIndicator currentStep={4} />
        <section className="max-w-[720px] mx-auto px-10 md:px-6 py-16">
          <Badge variant="outline" className="mb-4">Step 4 of 4</Badge>
          <h1 className="text-h3 md:text-h2 font-semibold text-surface-charcoal mb-3">
            Final Verification
          </h1>
          <p className="text-body-lg text-surface-slate mb-10">
            Review your enrollment details, acknowledge due diligence requirements, and submit for
            institutional verification.
          </p>
          <div className="bg-surface-white border border-surface-stone rounded-xl p-8 md:p-10">
            <EnrollmentStep4Form />
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
