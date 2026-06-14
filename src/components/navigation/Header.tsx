"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { navigation } from "@/lib/design-tokens";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-surface-white border-b border-surface-stone">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={140}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navigation.primary.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-surface-charcoal hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            href={navigation.cta.href}
            className="bg-error text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:outline hover:outline-2 hover:outline-secondary hover:outline-offset-2 transition-all"
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
    <header className="sticky top-0 z-50 bg-surface-white border-b border-surface-stone lg:hidden">
      <div className="px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <Link
          href={navigation.cta.href}
          className="bg-error text-white px-4 py-2 rounded-lg text-xs font-semibold"
        >
          Executive Access
        </Link>
      </div>
    </header>
  );
}
