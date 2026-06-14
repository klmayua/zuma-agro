"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  LayoutGrid,
  Target,
  Phone,
  MoreHorizontal,
  ChevronDown,
  Building,
  ShieldCheck,
  TrendingUp,
  FileText,
  HelpCircle,
  Briefcase,
  Layers,
  Image,
} from "lucide-react";

export default function MobileBottomNav() {
  const pathname = usePathname();
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const mainItems = [
    { label: "Home", href: "/", icon: Home },
    { label: "Platform", href: "/platform-architecture", icon: LayoutGrid },
    { label: "Initiatives", href: "/strategic-framework", icon: Target },
    { label: "Contact", href: "/about#contact", icon: Phone },
  ];

  const moreItems = [
    { label: "About Enterprise", href: "/about", icon: Building },
    { label: "Governance & ESG", href: "/governance-controls", icon: ShieldCheck },
    { label: "Multiplier Effects", href: "/impact", icon: TrendingUp },
    { label: "Investor Intelligence", href: "/investor-intelligence", icon: Briefcase },
    { label: "Sovereign Partnerships", href: "/institutional-partnerships", icon: Layers },
    { label: "Enroll (Step 1)", href: "/enrollment-step-1", icon: FileText },
    { label: "Enroll (Step 2)", href: "/enrollment-step-2", icon: FileText },
    { label: "Enroll (Step 3)", href: "/enrollment-step-3", icon: FileText },
    { label: "Enroll (Step 4)", href: "/enrollment-step-4", icon: FileText },
    { label: "Framework Markdown", href: "/framework-document", icon: FileText },
    { label: "Graphic Reference", href: "/image-reference", icon: Image },
    { label: "Mock Flow Diagram", href: "/chatgpt-image", icon: Image },
  ];

  return (
    <>
      {/* Fixed Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-t border-outline-variant z-50 flex items-center justify-around pb-safe-bottom px-2 shadow-[0_-4px_16px_rgba(0,0,0,0.05)]">
        {mainItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
                active ? "text-primary font-boldScale" : "text-on-surface-variant hover:text-primary"
              }`}
            >
              <Icon className="w-5 h-5 mb-0.5" />
              <span className="text-[10px] tracking-wide font-medium">{item.label}</span>
            </Link>
          );
        })}

        {/* More Trigger */}
        <button
          onClick={() => setIsMoreOpen(true)}
          className={`flex flex-col items-center justify-center flex-1 py-1 transition-all ${
            isMoreOpen ? "text-primary font-bold" : "text-on-surface-variant hover:text-primary"
          }`}
        >
          <MoreHorizontal className="w-5 h-5 mb-0.5" />
          <span className="text-[10px] tracking-wide font-medium">More</span>
        </button>
      </div>

      {/* Premium Glassmorphic Bottom Sheet Drawer */}
      {isMoreOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300 flex items-end justify-center">
          {/* Backdrop Tap to Close */}
          <div className="absolute inset-0" onClick={() => setIsMoreOpen(false)} />

          {/* Bottom Sheet Body */}
          <div className="relative w-full max-h-[80vh] bg-white rounded-t-2xl shadow-[0_-8px_32px_rgba(0,0,0,0.15)] flex flex-col z-[101] overflow-hidden animate-slideUp">
            {/* Grab Handle Header */}
            <div className="w-full flex flex-col items-center py-3 border-b border-outline-variant/50 sticky top-0 bg-white">
              <div className="w-12 h-1.5 bg-[#bfc9c2] rounded-full mb-2" />
              <div className="flex justify-between items-center w-full px-6">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">
                  Zuma Agro Portal Directory
                </span>
                <button
                  onClick={() => setIsMoreOpen(false)}
                  className="p-1 rounded-full bg-surface-container hover:bg-[#e7e9e5] transition-all"
                >
                  <ChevronDown className="w-4 h-4 text-on-surface" />
                </button>
              </div>
            </div>

            {/* Grid Menu of Drawer Items */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 bg-background pb-12">
              <div className="grid grid-cols-3 gap-4">
                {moreItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.href);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreOpen(false)}
                      className={`flex flex-col items-center justify-center p-3 rounded-lg border transition-all text-center ${
                        active
                          ? "bg-primary-container/10 border-primary text-primary"
                          : "bg-white border-outline-variant hover:border-primary text-on-surface-variant"
                      }`}
                    >
                      <div className={`p-2 rounded-full mb-2 ${
                        active ? "bg-primary text-white" : "bg-[#f2f4f0] text-primary"
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-[10px] leading-tight font-semibold tracking-wide">
                        {item.label}
                      </span>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
