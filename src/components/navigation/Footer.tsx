import Link from "next/link";
import Image from "next/image";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "Framework", href: "/strategic-framework" },
      { label: "Strategic Business Units", href: "/platform-architecture" },
      { label: "Operations", href: "/platform-architecture" },
      { label: "Technology Stack", href: "/platform-architecture" },
    ],
  },
  {
    title: "Institutional",
    links: [
      { label: "Governance Board", href: "/governance-controls" },
      { label: "ESG Standards", href: "/governance-controls" },
      { label: "Risk Management", href: "/governance-controls" },
      { label: "Continuity Planning", href: "/governance-controls" },
    ],
  },
  {
    title: "Access",
    links: [
      { label: "Investors & DFIs", href: "/investor-intelligence" },
      { label: "Contact Enterprise", href: "/institutional-partnerships" },
      { label: "Partnership", href: "/institutional-partnerships" },
      { label: "Press & Media", href: "/about" },
      { label: "Careers", href: "/about" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "Abuja HQ", href: "#" },
      { label: "Makurdi Hub", href: "#" },
      { label: "Lagos Terminal", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="w-full relative bottom-0 bg-primary text-white pt-4xl pb-xl">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-3xl">
         <div className="bg-white/5 border border-white/10 rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl backdrop-blur-md">
          <div>
            <h4 className="font-headline-md text-[24px] font-bold text-white mb-xs">Sovereign Insights</h4>
             <p className="text-white/70 font-body-md">Executive briefings on agro-industrial transformation.</p>
          </div>
          <form className="flex w-full md:w-auto max-w-md gap-sm">
            <input
              className="bg-white/10 text-white px-lg py-md rounded-lg border border-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-grow font-body-md placeholder:text-white/40 min-w-[250px]"
              placeholder="Executive Email"
              required
              type="email"
            />
            <button className="bg-secondary text-white font-label-md text-label-md px-xl py-md rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg" type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-2xl items-start mb-3xl">
        <div className="col-span-1 lg:col-span-4 flex flex-col gap-xl">
          <div className="h-24 w-auto">
            <Image
              src="/zuma_ago_full.png"
              alt="Zuma Agro Logo"
              width={200}
              height={100}
              className="h-full w-auto object-contain brightness-0 invert"
            />
          </div>
           <p className="font-body-md text-[16px] text-white/70 max-w-sm leading-relaxed">
            A sovereign-scale integration architecture connecting production, processing, and distribution across Nigeria.
          </p>
        </div>
        <div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-xl w-full">
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-md">
              <h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">{col.title}</h4>
              {col.links.map((link) => (
                <Link key={link.label} href={link.href} className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md">
          <p className="font-label-sm text-[14px] text-white/50">
            &copy; Zuma Agro-Allied | 2026. All rights reserved.
          </p>
          <div className="flex gap-xl">
            <a className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="#">Terms of Engagement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
