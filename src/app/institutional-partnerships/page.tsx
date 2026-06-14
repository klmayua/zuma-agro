"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .icon-fill {
            font-variation-settings: 'FILL' 1;
        }
    
` }} />
      
      
{/* TopNavBar */}
<header className="w-full top-0 sticky bg-white border-b border-outline-variant/20 z-50 transition-colors duration-300">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 md:py-6 w-full max-w-container-max mx-auto">
<div className="flex items-center">
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGaxr_6VE-M37DJEtJgcilkNALfLdSTfpO2fukrJToKW2HfnbGWWzaI2HnFtosGGkB0gB4tG4rvd1jt0quNFCtcXB0kLZaVgM_ed0XobhvjHEwCpw69D--OeVt28s3KYCZ9gFMZ31cUCEz66oE0Wd2NrX-JzWN42lQYeJ7nhHGa2yfIgHs__xO9ONPVoucD-qAjHqAnPen-yvcHZdM4Ltntvm9_FbOKkQUS1qVEIjwjF5QzrTFzhAv0kla8UhSO62DfvBfDWdGf5M" />
</div>
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/about">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/institutional-partnerships">Partnership</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs">
<span className="material-symbols-outlined text-[20px]" data-icon="admin_panel_settings">admin_panel_settings</span>
            Executive Access
        </button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
<main className="flex-grow">
{/* Hero Section */}
<section className="relative w-full overflow-hidden min-h-[500px] flex flex-col justify-center py-4xl px-margin-mobile md:px-margin-desktop bg-[#0a110d]">
<div className="absolute inset-0 z-0">
<img alt="A premium, highly detailed top-down view of meticulously organized agricultural fields, featuring lush green crops and golden harvest sections. The lighting is soft and natural, emphasizing the scale and structure of institutional farming. The aesthetic is clean, modern, and conveys stability and generational wealth, utilizing deep sovereign greens and heritage golds." className="w-full h-full object-cover filter grayscale mix-blend-multiply opacity-40" data-alt="A premium, highly detailed top-down view of meticulously organized agricultural fields, featuring lush green crops and golden harvest sections. The lighting is soft and natural, emphasizing the scale and structure of institutional farming. The aesthetic is clean, modern, and conveys stability and generational wealth, utilizing deep sovereign greens and heritage golds." src="https://lh3.googleusercontent.com/aida-public/AB6AXuATk2doVabYmtoP1dzii31tMXyab2HB9gpxuehwF0_GoMa7ZEI4sH_aGWjrqkonBfuxPhe6Q_1BJPFI4X_EhukoReENeozBaXU1aoBUQtEeNF_mCKbSFxoLtv2u08q0nIMbmvolizuWxJv0L2EG7EiEtxq_oHOUUeFjRxpwfWq27ydlRNgXpPdEJ__29wxXY_ZD6ssAWxM-CvrFinldiDfBVraJc6kgPwhjX8zrIFhACvSspoa4nvCB2tfRKHSnxATlvaNo5HSRgWQ" />
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
</div>
<div className="max-w-container-max mx-auto relative z-10 w-full flex flex-col items-start gap-lg">
<span className="font-executive-caps text-executive-caps text-secondary tracking-widest uppercase bg-white/10 px-sm py-xs rounded-full border border-white/20 inline-block backdrop-blur-md">
                        Institutional Coordination
                    </span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-white max-w-4xl leading-tight">
                        Strategic Institutional <br /><span className="text-secondary">Partnerships</span>
</h1>
<p className="font-body-lg text-body-lg text-white/90 max-w-2xl">
                        Sovereign-scale transformation through disciplined collaboration. We forge enduring alliances with governments, development finance institutions, and global investors to catalyze agricultural enterprise and secure generational prosperity.
                    </p>
<div className="flex flex-col sm:flex-row gap-md mt-md">
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
<span className="material-symbols-outlined text-[20px]" data-icon="handshake">handshake</span>
                            Become a Partner
                        </button>
</div>
</div>
</section>
{/* Partnership Model */}
<section className="w-full py-4xl bg-surface">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center md:text-left mb-xl">
<h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-md font-bold">The Three-Tier Partnership Model</h2>
<p className="font-body-lg text-[24px] text-on-surface max-w-4xl leading-relaxed font-light">
                        Our engagements are built on a foundation of rigorous standards, mutual benefit, and absolute accountability. We operate as a trusted steward of capital and land resources through a structured three-tier model.
                    </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-xl">
{/* Tier 1 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">01</div>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Technical Assistance</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
                            Advisory, planning, and systems design. Establishing the operational blueprint and governance structures required for sovereign-scale agricultural transformation.
                        </p>
</div>
{/* Tier 2 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">02</div>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Joint Implementation</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
                            Shared operations, infrastructure, and commercialization. Active partnership in executing the strategic mandate, deploying advanced agronomic practices and ensuring supply chain integrity.
                        </p>
</div>
{/* Tier 3 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-col items-start transition-all duration-300 hover:shadow-2xl">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary mb-lg">03</div>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Franchise Replication</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
                            Licensed Success template with absolute fidelity to Zuma standards. Scaling the established success template across new regions while maintaining absolute fidelity to the Zuma Agro-Allied standard.
                        </p>
</div>
</div>
<div className="flex justify-start mt-3xl">
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
<span className="material-symbols-outlined text-[20px]" data-icon="handshake">handshake</span>
        Become a Partner
    </button>
</div>
</div>
</section>
{/* Sovereign Alignment */}
<section className="w-full bg-primary py-4xl">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="mb-3xl text-center md:text-left">
<h2 className="font-headline-xl text-[40px] leading-tight text-white mb-md font-bold">Sovereign Alignment</h2>
<p className="font-body-lg text-[20px] text-white/80 max-w-4xl leading-relaxed">Focus on Federal Ministries, State Governments, and Institutional Investors.</p>
</div>
<div className="space-y-lg">
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Federal Ministries</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">Collaborating on national policy alignment, infrastructure development, and large-scale agricultural mandates to ensure national food security.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">State Governments</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">Partnering for regional deployment, land access, community integration, and localized economic development initiatives.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Institutional Investors</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">Aligning with DFIs, sovereign wealth funds, and private equity to deploy patient capital for sustainable, long-term returns and structural transformation.</p>
</div>
</div>
</div>
<div className="flex justify-start mt-3xl">
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
<span className="material-symbols-outlined text-[20px]" data-icon="handshake">handshake</span>
        Become a Partner
    </button>
</div>
</div>
</section>
</main>
{/* Footer Overhaul */}
<footer className="w-full relative bottom-0 bg-primary text-white pt-4xl pb-xl">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-3xl">
<div className="bg-white/5 border border-white/10 rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl backdrop-blur-md">
<div>
<h4 className="font-headline-md text-[24px] font-bold text-white mb-xs">Sovereign Insights</h4>
<p className="text-white/70 font-body-md">Executive briefings on agro-industrial transformation.</p>
</div>
<form className="flex w-full md:w-auto max-w-md gap-sm">
<input className="bg-white/10 text-white px-lg py-md rounded-lg border border-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-grow font-body-md placeholder:text-white/40 min-w-[250px]" placeholder="Executive Email" required={true} type="email" />
<button className="bg-secondary text-white font-label-md text-label-md px-xl py-md rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-2xl items-start mb-3xl">
<div className="col-span-1 lg:col-span-4 flex flex-col gap-xl">
<div className="h-20 w-auto">
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3FexTENAygKHEcdm2W_irlwY2ecSIUyS31z7EwFkNLoPtmkdBIxQ2I55FxsPuLQfhu0n0o2kjRA0Zmbw-31_dcxu59cg_wYHw88gA2GjGEXR3-giWmcM8cR1vGLGZ32g3xuSpxQNo_M9orQnc8RktyMlR5vtVGP5hxKaOfL27wU37wlVms0Smkj_FoUASo4vCk6NMu7CYZ52GtvWEEA8Zp1x8B442aSJ7yo-meWkHFnHdguuaeQRcBLSSMxpopYDhqplmrbGLqZI" style={{"filter":"brightness(0) invert(1)"}} />
</div>
<p className="font-body-md text-[16px] text-white/70 max-w-sm leading-relaxed">
                A sovereign-scale integration architecture connecting production, processing, and distribution across Nigeria.
            </p>
</div>
<div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-xl w-full">
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Platform</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/strategic-framework">Framework</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Technology Stack</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Careers</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">
                © Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-xl">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Terms of Engagement</Link>
</div></div>
</div>
</footer>







    </>
  );
}
