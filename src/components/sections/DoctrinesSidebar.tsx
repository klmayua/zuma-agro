"use client";

import { pages } from "@/lib/design-tokens";

export function DoctrinesSidebar() {
  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="lg:sticky lg:top-24">
        <h2 className="text-xl font-bold text-surface-charcoal mb-6">
          Five Doctrines
        </h2>
        <nav className="space-y-2">
          {pages.doctrines.map((doctrine) => (
            <a
              key={doctrine.number}
              href={`#doctrine-${doctrine.number}`}
              className="group flex items-start gap-4 p-4 rounded-lg hover:bg-surface-stone/30 transition-colors"
            >
              <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-primary-dark transition-colors">
                {doctrine.number}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-surface-charcoal group-hover:text-primary transition-colors">
                  {doctrine.title}
                </h3>
                <p className="text-xs text-surface-slate mt-1">
                  {doctrine.description}
                </p>
              </div>
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}
