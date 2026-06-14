"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Compass, X } from "lucide-react";

interface RouteItem {
  label: string;
  href: string;
  category: string;
  description: string;
}

export default function PortalDirectory() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  const routes: RouteItem[] = [
    { label: "Sovereign Landing Page (Home)", href: "/", category: "Public Portal", description: "Primary transformation narrative and SBU grid." },
    { label: "About Enterprise (Strategic Alignment)", href: "/about", category: "Public Portal", description: "Vision, leadership, and sustainability mandates." },
    { label: "Strategic Framework", href: "/strategic-framework", category: "Public Portal", description: "Transformation strategies and deployment blueprints." },
    { label: "Platform Architecture", href: "/platform-architecture", category: "Public Portal", description: "Logistics models, silos, and terminal networks." },
    { label: "Governance & Controls", href: "/governance-controls", category: "Public Portal", description: "Compliance boards, risk matrices, and ESG metrics." },
    { label: "Impact & Multipliers", href: "/impact", category: "Public Portal", description: "Employment generation and sector multiplier data." },
    { label: "Investor Intelligence Room", href: "/investor-intelligence", category: "Investor Gateway", description: "Secure capital, DFI room, and project funding." },
    { label: "Sovereign Partnerships", href: "/institutional-partnerships", category: "Investor Gateway", description: "Inter-state alignment and coordination models." },
    { label: "Enrollment Step 1: Identification", href: "/enrollment-step-1", category: "Partner Registry Wizard", description: "Registry and initial categorization." },
    { label: "Enrollment Step 2: Architecture", href: "/enrollment-step-2", category: "Partner Registry Wizard", description: "Operational alignment parameters." },
    { label: "Enrollment Step 3: Alignment", href: "/enrollment-step-3", category: "Partner Registry Wizard", description: "National targets and asset commitments." },
    { label: "Enrollment Step 4: Final Verification", href: "/enrollment-step-4", category: "Partner Registry Wizard", description: "Review, compliance checks, and verification." },
    { label: "Framework Markdown Document", href: "/framework-document", category: "Documents", description: "Raw Markdown strategy v1.0." },
    { label: "Mock Flow Diagram Screen", href: "/chatgpt-image", category: "References", description: "ChatGPT mock visual flowchart." },
    { label: "Reference Image Screen", href: "/image-reference", category: "References", description: "Newly added image reference." },
  ];

  const filteredRoutes = routes.filter((route) =>
    route.label.toLowerCase().includes(search.toLowerCase()) ||
    route.category.toLowerCase().includes(search.toLowerCase())
  );

  const categories = Array.from(new Set(routes.map((r) => r.category)));

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:flex fixed bottom-6 right-6 z-[90] bg-primary text-white p-4 rounded-full shadow-[0_8px_24px_rgba(0,90,67,0.3)] hover:bg-secondary transition-all hover:scale-105 items-center gap-2 border border-secondary/40 font-semibold text-xs tracking-wider uppercase cursor-pointer"
      >
        <Compass className="w-4 h-4 animate-spin-slow" />
        Portal Directory
      </button>

      {/* Directory Modal Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#181d1a]/60 backdrop-blur-md z-[100] flex items-center justify-center p-8 transition-opacity duration-300">
          <div className="bg-[#f8faf6] w-full max-w-4xl rounded-xl border border-outline-variant shadow-[0_16px_48px_rgba(0,0,0,0.25)] flex flex-col max-h-[85vh] overflow-hidden">
            {/* Modal Header */}
            <div className="p-6 bg-white border-b border-outline-variant/60 flex justify-between items-center sticky top-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary-container/10 rounded-lg text-primary">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-primary font-serif">Zuma Agro-Allied Prototype Navigator</h3>
                  <p className="text-xs text-on-surface-variant">Instant access to all 15 compiled screens</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-surface-container transition-all text-on-surface-variant hover:text-primary"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search Input */}
            <div className="px-6 py-4 bg-white border-b border-outline-variant/30 flex items-center gap-3">
              <Search className="w-4 h-4 text-outline" />
              <input
                type="text"
                placeholder="Search routes or categories (e.g. 'about', 'wizard')..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-transparent text-sm text-on-surface placeholder-outline focus:outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="text-xs font-semibold text-outline hover:text-primary"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              {categories.map((cat) => {
                const catRoutes = filteredRoutes.filter((r) => r.category === cat);
                if (catRoutes.length === 0) return null;

                return (
                  <div key={cat} className="mb-6 last:mb-0">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-secondary border-b border-outline/20 pb-1.5 mb-3">
                      {cat}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {catRoutes.map((route) => {
                        const active = pathname === route.href;
                        return (
                          <Link
                            key={route.href}
                            href={route.href}
                            onClick={() => setIsOpen(false)}
                            className={`p-3 rounded-lg border text-left transition-all ${
                              active
                                ? "bg-primary-container/10 border-primary shadow-[0_2px_8px_rgba(0,90,67,0.05)]"
                                : "bg-white border-outline-variant hover:border-primary hover:shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                            }`}
                          >
                            <span className={`text-xs font-bold block mb-0.5 ${active ? "text-primary" : "text-on-surface"}`}>
                              {route.label}
                            </span>
                            <span className={`text-[10px] block ${active ? "text-primary/80" : "text-on-surface-variant"}`}>
                              {route.description}
                            </span>
                            <code className="text-[9px] mt-2 block text-secondary font-mono tracking-tight bg-surface-container-low px-1.5 py-0.5 rounded-sm w-fit border border-outline-variant/30">
                              {route.href}
                            </code>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {filteredRoutes.length === 0 && (
                <div className="text-center py-12 text-on-surface-variant">
                  <p className="text-sm font-semibold">No matching routes found</p>
                  <p className="text-xs mt-1">Try another search query.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
