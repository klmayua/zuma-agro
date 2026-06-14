"use client";

import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/design-tokens";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8 py-5 md:py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={160}
            height={48}
            className="h-16 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-executive-caps text-on-surface-variant hover:text-secondary transition-colors pb-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href={navigation.cta.href}
            className="bg-secondary text-white h-[56px] px-[40px] rounded flex items-center justify-center text-sm font-bold tracking-[0.05em] hover:opacity-90 transition-opacity"
          >
            {navigation.cta.label}
          </Link>
        </div>
      </div>
    </header>
  );
}

export function MobileHeader() {
  return (
    <header className="sticky top-0 z-50 bg-surface-container-lowest border-b border-outline-variant lg:hidden">
      <div className="px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={140}
            height={40}
            className="h-12 w-auto"
            priority
          />
        </Link>
        <Link
          href={navigation.cta.href}
          className="bg-secondary text-white px-5 py-3 rounded text-xs font-bold tracking-[0.05em]"
        >
          Executive Access
        </Link>
      </div>
    </header>
  );
}
