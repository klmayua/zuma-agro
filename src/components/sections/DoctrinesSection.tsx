import { DoctrineCard } from "@/components/ui/Card";
import { pages } from "@/lib/design-tokens";

export function DoctrinesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-surface-charcoal mb-4">
          Five Non-Negotiable Doctrines
        </h2>
        <p className="text-lg text-surface-slate mb-12 max-w-2xl">
          The foundational principles that govern every operational decision.
        </p>
        <div className="space-y-6 max-w-2xl">
          {pages.doctrines.map((doctrine) => (
            <DoctrineCard
              key={doctrine.number}
              number={doctrine.number}
              title={doctrine.title}
              description={doctrine.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
