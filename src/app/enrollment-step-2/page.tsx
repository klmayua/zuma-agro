import { Header } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProgressIndicator } from "@/components/sections/ProgressIndicator";
import { EnrollmentStep2Form } from "@/components/forms/EnrollmentStep2Form";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Step 2: Partnership Architecture | Zuma Agro-Allied",
  description:
    "Select your preferred partnership tier with Zuma Agro-Allied.",
};

export default function EnrollmentStep2Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ProgressIndicator currentStep={2} />
        <section className="max-w-[720px] mx-auto px-10 md:px-6 py-16">
          <Badge variant="outline" className="mb-4">Step 2 of 4</Badge>
          <h1 className="text-h3 md:text-h2 font-semibold text-surface-charcoal mb-3">
            Partnership Architecture
          </h1>
          <p className="text-body-lg text-surface-slate mb-10">
            Select the partnership model that aligns with your organization's capacity and strategic
            objectives.
          </p>
          <div className="bg-surface-white border border-surface-stone rounded-xl p-8 md:p-10">
            <EnrollmentStep2Form />
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
