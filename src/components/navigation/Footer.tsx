import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/design-tokens";

export function Footer() {
  return (
    <footer className="bg-surface-charcoal text-white">
      <div className="max-w-[1280px] mx-auto px-10 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <h3 className="text-lg font-semibold mb-4">Sovereign Insights</h3>
            <p className="text-sm text-surface-stone mb-4">
              Subscribe to our institutional intelligence briefing.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-surface-stone/20 border border-surface-stone/30 rounded-full px-4 py-2 text-sm text-white placeholder:text-surface-slate focus:outline-none focus:border-primary"
              />
              <button className="bg-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Platform</h4>
            <ul className="space-y-2">
              {navigation.footer.platform.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-stone hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Framework</h4>
            <ul className="space-y-2">
              {navigation.footer.framework.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-stone hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Governance</h4>
            <ul className="space-y-2">
              {navigation.footer.governance.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-stone hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold mb-4 tracking-wider uppercase">Connect</h4>
            <ul className="space-y-2">
              {navigation.footer.connect.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-surface-stone hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-stone/20">
        <div className="max-w-[1280px] mx-auto px-10 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={100}
            height={28}
            className="h-7 w-auto opacity-50"
          />
          <p className="text-xs text-surface-slate">
            &copy; 2026 Zuma Agro-Allied. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
