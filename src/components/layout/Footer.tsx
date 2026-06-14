import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden md:block w-full bg-[#18211d] text-[#eceeeb] py-12 px-margin-desktop border-t border-outline/30 mt-auto">
      <div className="max-w-container-max mx-auto grid grid-cols-4 gap-8">
        {/* Column 1: Brand & Contact */}
        <div className="flex flex-col gap-4">
          <img
            src="/ZumaAgro_logoMark_No_Bg.png"
            alt="Zuma Agro Logo Mark"
            className="h-10 w-10 object-contain brightness-100"
          />
          <h4 className="font-serif text-lg font-bold text-white tracking-wide">
            ZUMA AGRO-ALLIED
          </h4>
          <p className="text-xs text-on-surface-variant leading-relaxed max-w-xs">
            Sovereign agrarian transformation and national logistics corridors. Building scale, security, and generational value.
          </p>
          <span className="text-xs text-secondary font-semibold">
            Direct Line: +234 (0) 90 2211 4455
          </span>
        </div>

        {/* Column 2: Navigation */}
        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-outline/20 pb-2">
            Governance & Strategy
          </h5>
          <nav className="flex flex-col gap-2">
            <Link href="/about" className="text-xs text-on-surface-variant hover:text-white transition-all">
              About Enterprise
            </Link>
            <Link href="/strategic-framework" className="text-xs text-on-surface-variant hover:text-white transition-all">
              Strategic Framework
            </Link>
            <Link href="/platform-architecture" className="text-xs text-on-surface-variant hover:text-white transition-all">
              Logistics & Platform
            </Link>
            <Link href="/governance-controls" className="text-xs text-on-surface-variant hover:text-white transition-all">
              Governance & ESG
            </Link>
            <Link href="/impact" className="text-xs text-on-surface-variant hover:text-white transition-all">
              Multiplier Effects
            </Link>
          </nav>
        </div>

        {/* Column 3: Registries & Terminals */}
        <div className="flex flex-col gap-3">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-outline/20 pb-2">
            Operational Hubs
          </h5>
          <ul className="flex flex-col gap-3 text-xs text-on-surface-variant">
            <li>
              <strong className="text-white block">Abuja HQ:</strong>
              42 Constitution Hill, Maitama, FCT Abuja
            </li>
            <li>
              <strong className="text-white block">Makurdi Hub (Silos):</strong>
              Industrial Zone B, Makurdi-Gboko Road, Benie State
            </li>
            <li>
              <strong className="text-white block">Lagos Terminal (Crushing):</strong>
              Apapa Port Complex Extension, Apapa, Lagos State
            </li>
          </ul>
        </div>

        {/* Column 4: Newsletter & Legal */}
        <div className="flex flex-col gap-4">
          <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-outline/20 pb-2">
            Engagement & Legal
          </h5>
          <div className="flex flex-col gap-2">
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Subscribe to DFI project briefs and strategic updates.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Enter institutional email..."
                className="bg-[#1e2722] border border-[#2f3933] text-white text-xs px-3 py-2 rounded-l focus:outline-none focus:border-secondary w-full"
              />
              <button className="bg-secondary text-[#18211d] text-xs font-bold px-3 py-2 rounded-r hover:bg-[#ffe19c] transition-all">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex gap-4 text-[10px] text-on-surface-variant mt-2 border-t border-outline/10 pt-3">
            <Link href="/about" className="hover:text-white">Privacy Policy</Link>
            <span>•</span>
            <Link href="/about" className="hover:text-white">Terms of Engagement</Link>
          </div>
        </div>
      </div>
      <div className="max-w-container-max mx-auto text-center text-[10px] text-on-surface-variant border-t border-outline/10 mt-10 pt-4">
        © {new Date().getFullYear()} Zuma Agro-Allied Enterprise Limited. All rights reserved. Sovereign Trust & Compliance.
      </div>
    </footer>
  );
}
