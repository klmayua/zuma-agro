"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Framework", href: "/strategic-framework" },
    { label: "Platform", href: "/platform-architecture" },
    { label: "Governance", href: "/governance-controls" },
    { label: "Impact", href: "/impact" },
    { label: "Investors", href: "/investor-intelligence" },
    { label: "Partnership", href: "/institutional-partnerships" },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="hidden md:flex w-full bg-white border-b border-outline-variant py-4 px-margin-desktop justify-between items-center z-50 sticky top-0">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center">
        <img
          src="/zuma_ago_full.png"
          alt="Zuma Agro-Allied Logo"
          className="h-12 w-auto object-contain"
        />
      </Link>

      {/* Navigation Links */}
      <nav className="flex items-center gap-6">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-semibold tracking-wide transition-all py-1 border-b-2 ${
              isActive(link.href)
                ? "border-secondary text-primary font-bold"
                : "border-transparent text-on-surface-variant hover:text-primary hover:border-outline"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* Primary CTA */}
      <div>
        <Link
          href="/enrollment-step-1"
          className="bg-primary text-white text-xs font-bold tracking-wider uppercase px-5 py-3 rounded btn-gold-hover"
        >
          Enroll as Partner
        </Link>
      </div>
    </header>
  );
}
