"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/design-tokens";

const icons = {
  home: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  info: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  layers: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  trending_up: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  ellipsis: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
    </svg>
  ),
};

export function BottomNav() {
  const [showMore, setShowMore] = useState(false);
  const pathname = usePathname();

  const isTabActive = (itemHref: string) => {
    if (itemHref === "/") return pathname === "/";
    if (itemHref === "/about") return pathname === "/about";
    if (itemHref === "/strategic-framework") return pathname === "/strategic-framework";
    if (itemHref === "/investor-intelligence") return pathname === "/investor-intelligence";
    if (itemHref === "#more") {
      const moreRoutes = [
        "/governance-controls",
        "/impact",
        "/institutional-partnerships",
        "/platform-architecture",
        "/enrollment-step-1",
        "/enrollment-step-2",
        "/enrollment-step-3",
        "/enrollment-step-4"
      ];
      return moreRoutes.includes(pathname) || showMore;
    }
    return false;
  };

  return (
    <>
      <div className="fixed bottom-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-md border border-outline-variant/20 rounded-2xl shadow-elevated lg:hidden py-2 px-1">
        <nav className="grid grid-cols-5 w-full justify-items-center">
          {navigation.mobile.map((item) => {
            const isActive = isTabActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className="w-full flex flex-col items-center justify-center py-1 transition-all duration-300 active:scale-95"
                onClick={(e) => {
                  if (item.href === '#more') {
                    e.preventDefault();
                    setShowMore(true);
                  }
                }}
              >
                <div className={`py-1 px-3.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  isActive
                    ? "bg-primary/10 text-primary scale-105"
                    : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low/50"
                }`}>
                  {icons[item.icon as keyof typeof icons]}
                </div>
                <span className={`text-[10px] tracking-tight transition-all duration-300 mt-0.5 ${
                  isActive
                    ? "text-primary font-bold scale-105"
                    : "text-on-surface-variant font-medium"
                }`}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>
      </div>

      {showMore && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setShowMore(false)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md rounded-t-[32px] p-6 pb-10 border-t border-outline-variant/20 shadow-institutional animate-fadeIn">
            <div className="w-12 h-1 bg-outline-variant/30 rounded-full mx-auto mb-6" />
            <h3 className="text-xl font-bold mb-4 text-primary tracking-tight">Navigation</h3>
            <div className="space-y-2">
              {navigation.primary
                .filter(item => 
                  item.href !== '/about' && 
                  item.href !== '/strategic-framework' && 
                  item.href !== '/investor-intelligence'
                )
                .map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between py-3.5 px-4 rounded-xl transition-all duration-300 ${
                        isActive
                          ? "bg-primary/10 text-primary font-bold"
                          : "text-on-surface-variant hover:text-primary hover:bg-surface-container-low/50"
                      }`}
                      onClick={() => setShowMore(false)}
                    >
                      <span className="font-medium">{item.label}</span>
                      <span className="material-symbols-outlined text-[18px] opacity-70">
                        chevron_right
                      </span>
                    </Link>
                  );
                })}
              <Link
                href={navigation.cta.href}
                className="flex items-center justify-center py-3.5 px-4 bg-secondary text-white rounded-xl text-center font-bold mt-4 shadow-md active:scale-95 transition-all duration-300 hover:opacity-95"
                onClick={() => setShowMore(false)}
              >
                <span>{navigation.cta.label}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
