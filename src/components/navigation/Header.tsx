"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/design-tokens";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full top-0 sticky bg-white border-b border-outline-variant/20 z-50 transition-colors duration-300">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 md:py-6 w-full max-w-container-max mx-auto">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/zuma_ago_full.png"
              alt="Zuma Agro Logo"
              width={160}
              height={64}
              className="h-16 w-auto object-contain"
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
          className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs"
        >
          <span className="material-symbols-outlined text-[20px]" data-icon="admin_panel_settings">
            admin_panel_settings
          </span>
          Executive Access
        </Link>
        <button className="md:hidden text-on-surface flex items-center justify-center">
          <span className="material-symbols-outlined" data-icon="menu">
            menu
          </span>
        </button>
      </div>
    </header>
  );
}
