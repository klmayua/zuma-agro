import { Header, MobileHeader } from "@/components/navigation/Header";
import { Footer } from "@/components/navigation/Footer";
import { BottomNav } from "@/components/navigation/BottomNav";
import { ProgressIndicator } from "@/components/sections/ProgressIndicator";
import { EnrollmentStep1Form } from "@/components/forms/EnrollmentStep1Form";
import { Badge } from "@/components/ui/Badge";

export const metadata = {
  title: "Step 1: Entity Classification | Zuma Agro-Allied",
  description:
    "Begin your enrollment with Zuma Agro-Allied by registering your entity classification.",
};

export default function EnrollmentStep1Page() {
  return (
    <>
      <Header />
      <MobileHeader />
      <main className="flex-1">
        <ProgressIndicator currentStep={1} />
        <section className="max-w-[720px] mx-auto px-10 md:px-6 py-16">
          <Badge variant="outline" className="mb-4">Step 1 of 4</Badge>
          <h1 className="text-h3 md:text-h2 font-semibold text-surface-charcoal mb-3">
            Entity Classification
          </h1>
          <p className="text-body-lg text-surface-slate mb-10">
            Register your organization to initiate the partnership protocol. All fields are required
            for institutional verification.
          </p>
          <div className="bg-surface-white border border-surface-stone rounded-xl p-8 md:p-10">
            <EnrollmentStep1Form />
          </div>
        </section>
      </main>
      <Footer />
      <BottomNav />
    </>
  );
}
