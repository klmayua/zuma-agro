"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/design-tokens";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky bg-white/80 backdrop-blur-md border-b border-outline-variant/20 z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 md:py-5 w-full max-w-container-max mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/zuma_ago_full.png"
              alt="Zuma Agro Logo"
              width={200}
              height={80}
              className="h-20 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-gutter">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-executive-caps text-executive-caps transition-colors duration-300 cursor-pointer transition-all active:opacity-80 ${
                pathname === item.href
                  ? "text-secondary"
                  : "text-on-surface-variant hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href={navigation.cta.href}
          className="bg-secondary text-white font-label-md text-label-md h-[40px] md:h-[56px] px-[16px] md:px-[40px] inline-flex items-center justify-center rounded hover:opacity-90 transition-all shadow-lg flex gap-xs text-[11px] md:text-label-md font-bold"
        >
          <span className="material-symbols-outlined text-[16px] md:text-[20px]" data-icon="admin_panel_settings">
            admin_panel_settings
          </span>
          <span>Executive Access</span>
        </Link>
      </div>
    </header>
  );
}
