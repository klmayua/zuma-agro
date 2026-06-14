"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .paper-texture {
            background-color: #f8faf6;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
        }
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
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTQl5245Oh9koSqCGm3zKlq5QYyK4hj1iu4ha4dzHclZHQIYc9knnHDvE7Xr4WcoiTaQnVb-lM5-YNVRzSHoxWphiQpIJkUldIu9Qo5Nqc0HwquKnAJwZbLX1dZZdWwXpS3HgsWknJSQoeCM3EUue3MdzO2PDTfX_WJQpNaVdMgSlDdjhOKLs5w7d5sCYK0zx6ACJWNst4gZySNXqPE0JlWjwtOXH2tKuRMgFe8dtnQNOAl_aSpguHzdqb_2IZMHXrYHYTvMbyic" />
</div>
<nav className="hidden md:flex space-x-gutter">

<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/about">About</Link><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/institutional-partnerships">Partnership</Link>
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
{/* Main Content */}
<main className="flex-grow pt-32 pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
{/* Hero Section */}
<section className="mb-stack-lg border-b border-surface-variant pb-stack-md">
<div className="max-w-3xl">
<span className="inline-block px-3 py-1 bg-surface-container-low border border-outline-variant text-primary font-label-bold text-label-bold rounded-full mb-stack-sm tracking-widest uppercase">Section 1.4</span>
<h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-primary mb-stack-md">Integrated Operating Architecture</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">The structural foundation of Zuma Agro-Allied’s operational capacity. This hub-and-spoke model ensures seamless flow from cultivation to market, governed by our Enterprise Intelligence System.</p>
<div className="flex justify-start">
<button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded hover:bg-opacity-90 transition-colors font-label-bold text-label-bold">
<span className="material-symbols-outlined">book</span>
<span className="">Review Operational Playbooks</span>
</button>
</div>
</div>
</section>
{/* EIS Central Nervous System */}
<section className="mb-stack-lg">
<div className="bg-primary text-white p-stack-md md:p-stack-lg rounded-xl relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-primary-container rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-stack-md items-center justify-between">
<div className="max-w-xl">
<h2 className="font-headline-lg text-headline-lg mb-stack-sm text-secondary">Enterprise Intelligence System</h2>
<p className="font-body-md text-body-md text-white/80 mb-stack-md">Acting as the central nervous system, the EIS continuously monitors, analyzes, and optimizes resource allocation across all operational nodes in real-time.</p>
<ul className="space-y-2 font-label-bold text-label-bold text-primary-fixed">
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary">check_circle</span> Predictive Yield Modeling</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary">check_circle</span> Automated Logistics Routing</li>
<li className="flex items-center gap-2"><span className="material-symbols-outlined text-secondary">check_circle</span> Quality Assurance Telemetry</li>
</ul>
</div>
<div className="w-full md:w-1/3 flex justify-center">
<div className="w-32 h-32 md:w-48 md:h-48 border-4 border-secondary rounded-full flex items-center justify-center relative">
<div className="absolute inset-0 border-2 border-primary-fixed rounded-full animate-ping opacity-20"></div>
<span className="material-symbols-outlined text-6xl text-secondary">hub</span>
</div>
</div>
</div>
</div>
</section>
{/* The 4 Critical Nodes (Hub & Spoke Abstract Representation) */}
<section className="mb-stack-lg">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-surface-variant pb-2">The Critical Operational Nodes</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter relative">
{/* Node 1: Production */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10">
<div className="w-12 h-12 bg-surface-container-low text-primary rounded flex items-center justify-center mb-stack-sm border border-outline-variant">
<span className="material-symbols-outlined">agriculture</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Production</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Precision agriculture techniques applied across large-scale institutional landholdings to maximize sustainable yield.</p>
</div>
{/* Node 2: Aggregation */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10">
<div className="w-12 h-12 bg-surface-container-low text-primary rounded flex items-center justify-center mb-stack-sm border border-outline-variant">
<span className="material-symbols-outlined">inventory_2</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Aggregation</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Strategic collection centers ensuring rapid consolidation of raw materials while maintaining strict quality controls.</p>
</div>
{/* Node 3: Processing */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10">
<div className="w-12 h-12 bg-surface-container-low text-primary rounded flex items-center justify-center mb-stack-sm border border-outline-variant">
<span className="material-symbols-outlined">factory</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Processing</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Advanced value-addition facilities transforming raw harvest into high-margin institutional grade commodities.</p>
</div>
{/* Node 4: Distribution */}
<div className="bg-surface-container-lowest border border-outline-variant p-stack-md rounded-lg shadow-sm hover:shadow-md transition-shadow relative z-10">
<div className="w-12 h-12 bg-surface-container-low text-primary rounded flex items-center justify-center mb-stack-sm border border-outline-variant">
<span className="material-symbols-outlined">local_shipping</span>
</div>
<h4 className="font-headline-md text-headline-md text-primary mb-2 text-xl">Distribution</h4>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Optimized logistics network delivering processed goods to global markets with minimized transit loss.</p>
</div>
</div>
</section>
{/* Strategic Business Units (SBUs) */}
<section>
<h3 className="font-headline-md text-headline-md text-primary mb-stack-md border-b border-surface-variant pb-2">Strategic Business Units (SBUs)</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
{/* SBU Card 1 */}
<div className="bg-surface-container p-stack-md rounded border border-outline-variant/50">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline-md text-headline-md text-primary">SBU Alpha: Staples</h4>
<span className="text-secondary font-label-bold text-label-bold bg-secondary/10 px-2 py-1 rounded">Core</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Focuses on high-volume, staple crop production critical for regional food security and baseline revenue stability.</p>
<div className="flex justify-start">
<button className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded hover:bg-primary/5 transition-colors font-label-bold text-label-bold">
<span className="material-symbols-outlined text-sm">analytics</span>
<span className="">View SBU Metrics</span>
</button>
</div>
</div>
{/* SBU Card 2 */}
<div className="bg-surface-container p-stack-md rounded border border-outline-variant/50">
<div className="flex justify-between items-start mb-4">
<h4 className="font-headline-md text-headline-md text-primary">SBU Beta: Cash Crops</h4>
<span className="text-secondary font-label-bold text-label-bold bg-secondary/10 px-2 py-1 rounded">Growth</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Dedicated to high-value export commodities, driving margin expansion and international market penetration.</p>
<div className="flex justify-start">
<button className="flex items-center gap-2 text-primary border border-primary px-4 py-2 rounded hover:bg-primary/5 transition-colors font-label-bold text-label-bold">
<span className="material-symbols-outlined text-sm">analytics</span>
<span className="">View SBU Metrics</span>
</button>
</div>
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
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkWrqabUDfqCUSP-aezwXjHuz2bKMBWiWkKensL3Sn7rj1ltcBSJfN_hmyLzYiXgmFp9nVEnAdogZMQUmXIhdZhv6nUhAkcqfM3_3LJCO_V6VqUithm1Q6uauPpZtzEP3NHKN2Czx_BcEyj5SXV8WC2X07UiZAuKbgjUpsEZm1INP7-GLkd73ywzPwplZRDFZdQELeyrw3uLbqQvStojXfnwKTuiwyGsxINcJ_kZr-79ibircVWoKtfA5lgpMGW9A4IG3xEMbzt0U" style={{"filter":"brightness(0) invert(1)"}} />
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
