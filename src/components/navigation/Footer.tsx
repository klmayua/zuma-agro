import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/design-tokens";

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1280px] mx-auto px-16 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-semibold mb-3">Sovereign Insights</h3>
              <p className="text-sm text-white/70 mb-4">
                Subscribe to our institutional intelligence briefing.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-secondary"
                />
                <button className="bg-secondary text-white px-6 py-3 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-executive-caps text-secondary mb-4">Platform</h4>
            <ul className="space-y-3">
              {navigation.footer.platform.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-executive-caps text-secondary mb-4">Framework</h4>
            <ul className="space-y-3">
              {navigation.footer.framework.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-executive-caps text-secondary mb-4">Governance</h4>
            <ul className="space-y-3">
              {navigation.footer.governance.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-executive-caps text-secondary mb-4">Connect</h4>
            <ul className="space-y-3">
              {navigation.footer.connect.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-16 md:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <Image
            src="/zuma_ago_full.png"
            alt="Zuma Agro-Allied"
            width={120}
            height={36}
            className="h-8 w-auto brightness-0 invert"
          />
          <p className="text-xs text-white/50">
            &copy; 2026 Zuma Agro-Allied. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
