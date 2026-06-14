import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProgressIndicator } from "@/components/sections/ProgressIndicator";
import { EnrollmentStep3Form } from "@/components/forms/EnrollmentStep3Form";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Step 3: Strategic Mandate Alignment | Zuma Agro-Allied",
  description:
    "Align your geographic corridor and commodity interests with Zuma Agro-Allied's strategic mandate.",
};

export default function EnrollmentStep3Page() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1">
        <ProgressIndicator currentStep={3} />
        <section className="max-w-[720px] mx-auto px-10 md:px-6 py-16">
          <Badge variant="outline" className="mb-4">Step 3 of 4</Badge>
          <h1 className="text-h3 md:text-h2 font-semibold text-surface-charcoal mb-3">
            Strategic Mandate Alignment
          </h1>
          <p className="text-body-lg text-surface-slate mb-10">
            Define your operational corridor, commodity focus, and resource commitment to complete
            the mandate alignment.
          </p>
          <div className="bg-surface-white border border-surface-stone rounded-xl p-8 md:p-10">
            <EnrollmentStep3Form />
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
