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
              height={48}
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
                  ? "text-secondary border-b-2 border-secondary pb-1"
                  : "text-on-surface-variant hover:text-secondary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center">
          <Link
            href={navigation.cta.href}
            className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs"
          >
            <span className="material-symbols-outlined text-[20px]">admin_panel_settings</span>
            Executive Access
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MobileHeader() {
  return (
    <header className="w-full top-0 sticky bg-white border-b border-outline-variant/20 z-50 transition-colors duration-300 md:hidden">
      <div className="flex justify-between items-center px-margin-mobile py-5 w-full">
        <Link href="/" className="flex items-center">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro Logo"
            width={140}
            height={40}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>
        <div className="flex items-center">
          <span className="text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </span>
        </div>
      </div>
    </header>
  );
}
