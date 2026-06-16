"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/design-tokens";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-[calc(100%-2rem)] max-w-container-max mx-auto top-4 sticky bg-white/80 backdrop-blur-md border border-outline-variant/30 rounded-2xl shadow-elevated z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 py-2.5 md:py-3.5 w-full">
        {/* Left column: Logo wrapper */}
        <div className="flex-1 flex justify-start items-center">
          <Link href="/">
            <Image
              src="/zuma_ago_full.png"
              alt="Zuma Agro Logo"
              width={200}
              height={80}
              className="h-9 md:h-14 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Center column: Centered Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-gutter flex-initial">
          {navigation.primary.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-executive-caps text-executive-caps font-bold transition-colors duration-300 cursor-pointer py-2 px-1 group ${
                  isActive
                    ? "text-secondary"
                    : "text-on-surface-variant hover:text-secondary"
                }`}
              >
                <span>{item.label}</span>
                <span className={`absolute bottom-0 left-0 w-full h-[2px] bg-secondary transition-transform duration-300 origin-center ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`} />
              </Link>
            );
          })}
        </nav>

        {/* Right column: CTA wrapper */}
        <div className="flex-1 flex justify-end items-center">
          <Link
            href={navigation.cta.href}
            className="bg-secondary text-white font-label-bold text-label-bold h-9 md:h-11 px-3 md:px-5 inline-flex items-center justify-center rounded hover:opacity-90 transition-all shadow-md gap-1.5 text-[11px] md:text-xs font-bold"
          >
            <span className="material-symbols-outlined text-[14px] md:text-[16px]" data-icon="admin_panel_settings">
              admin_panel_settings
            </span>
            <span className="md:hidden">Access</span>
            <span className="hidden md:inline">Executive Access</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
