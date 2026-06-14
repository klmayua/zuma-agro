import { pages } from "@/lib/design-tokens";

export function DoctrinesSection() {
  return (
    <section className="py-16 md:py-24 bg-primary">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8">
        <h2 className="font-display text-3xl md:text-headline-lg font-bold text-white mb-4">
          Five Non-Negotiable Doctrines
        </h2>
        <p className="text-body-lg text-white/70 mb-12 max-w-2xl">
          The foundational principles that govern every operational decision.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.doctrines.map((doctrine) => (
            <div
              key={doctrine.number}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-bold">
                  {doctrine.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-white">
                  {doctrine.title}
                </h3>
              </div>
              <p className="text-body-md text-white/70">
                {doctrine.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
