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
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtO7AioIirhwq-4ahvn0QtnqeJNqk7U0EBCs2XxAW1ND30LxJuz2MFMJjervSij9WiuF3f3nqK-NjoeYf929hxBKtpJrHJH_Nrjij8XKRbzXP89aRJkmwKULX2yfo9oHiMeF8-iOsoEIJgIEHPqKvJL_K-erk-95YsZgiVmqZJ5epvgyq4fGxsN9SBmsro3-0X3J2DhL_2pn3WcuahqE6HXb0TxsF4pjDFQWS2L_9JXlYXijNFZPV-v_AeWUvckeN40Kp2zQLPsw" />
</div>
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-secondary border-b-2 border-secondary pb-1 transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/about">About</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/impact">Impact</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/institutional-partnerships">Partnership</Link>
<Link className="font-executive-caps text-[12px] font-bold tracking-[0.1em] text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80 uppercase" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-bold text-label-bold h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-2">
<span className="material-symbols-outlined text-[20px]" data-icon="admin_panel_settings">admin_panel_settings</span>
            Executive Access
        </button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
<main className="flex-grow">
{/* Premium Institutional Hero Section */}
<section className="relative min-h-[80vh] flex items-center py-stack-lg md:py-[180px] px-margin-mobile md:px-margin-desktop overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="A Sovereign Asset for National Transformation" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida/AP1WRLu1FUnla-mNDGgtVyB3uuWs8oJPoXHSHIvaoCEhLmN2MYbv9uQhQWmpxDsTNt9J1DfMMoUWbuefGef9HwCnAMPv1ioY_0CFucOr_i-e3E8-gPQzXavxc7cABHT6OJ6HSMr6QXh1gHOahrhvvR4GfQ2jLxUa7oRusWSEeufpt2OIHZ0T6-98sr-xTvmg_p7JNBXt4cxRs9aP7b9-Zc4WjbcF8it87fTun0FFdBXK9_DUzTsW53obbGf8dDg" />
<div className="absolute inset-0 bg-primary/70 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-container-max mx-auto w-full text-center md:text-left mt-10 md:mt-0">
<h1 className="text-[40px] md:text-[64px] font-display-lg text-white mb-stack-md max-w-4xl leading-tight">
                A Sovereign Asset for National Transformation
            </h1>
<p className="text-[18px] md:text-[20px] font-body-lg text-white/90 max-w-3xl leading-relaxed">
                Zuma Agro-Allied is a national productivity infrastructure connecting production, aggregation, and industrial processing under a single governance framework. We are engineered to solve Nigeria's structural food system failures through a disciplined, integrated, and replicable operating architecture.
            </p>
</div>
</section>
{/* Management Team (SBUs) Section */}
<section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b border-outline-variant/20">
<div className="max-w-container-max mx-auto">
<div className="mb-stack-lg text-center md:text-left">
<span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Operational Leadership</span>
<h2 className="text-headline-lg font-headline-lg text-primary">Strategic Business Units (SBUs)</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
                    Our operating model is organized into six Strategic Business Units executing the platform logic. Each SBU operates as a profit centre with dedicated leadership and accountability metrics.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
{/* SBU Items */}
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Production</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Production</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for land, water, mechanisation, and primary production (company‑owned and outgrower).</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Yield, input efficiency, production cost</p>
</div>
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Inputs &amp; Genetics</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Inputs &amp; Genetics</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for seed multiplication, fertiliser blending, feed production, and livestock genetics.</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Availability, quality, cost of inputs</p>
</div>
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Processing &amp; Mfg.</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Processing &amp; Manufacturing</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for primary and secondary processing – mills, oil processing, feed mills, cold storage, packaging.</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Throughput, conversion cost, product quality</p>
</div>
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Logistics &amp; Warehousing</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Logistics &amp; Warehousing</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for aggregation hubs, warehouse network, fleet management, and trunk route transport.</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Logistics cost per ton, post‑harvest loss, on‑time delivery</p>
</div>
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Commercial &amp; Trading</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Commercial &amp; Trading</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for wholesale distribution, institutional supply contracts, export documentation, and market intelligence.</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Price realisation, offtake security, margin</p>
</div>
<div className="border-t-2 border-primary pt-stack-sm">
<h3 className="text-headline-md font-headline-md text-primary mb-2">Infrastructure &amp; Eng.</h3>
<p className="text-label-bold font-label-bold text-secondary mb-4 uppercase">Head of Infrastructure &amp; Engineering</p>
<p className="text-body-md font-body-md text-on-surface-variant mb-4">Responsible for irrigation systems, power supply, road access, and facility engineering.</p>
<p className="text-label-sm font-label-sm text-on-surface">Accountability: Asset uptime, maintenance cost, capital efficiency</p>
</div>
</div>
</div>
</section>
{/* Institutional Governance Section */}
<section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
<div className="max-w-container-max mx-auto text-center md:text-left">
<h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-stack-md">
                Institutional Governance &amp; Operating Leadership
            </h1>
<p className="text-body-lg font-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
                Zuma Agro-Allied Integrated Enterprise is a sovereign-scale agro-industrial transformation platform designed to solve Nigeria’s structural food system failures. Our governance and operating architecture ensures disciplined integration across the entire agricultural value chain.
            </p>
</div>
</section>
{/* Board of Directors Section */}
<section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-low border-y border-outline-variant">
<div className="max-w-container-max mx-auto">
<div className="mb-stack-lg text-center md:text-left">
<span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Oversight Systems</span>
<h2 className="text-headline-lg font-headline-lg text-primary">Board of Directors</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
                    Structured for competence, independence, and continuity. The board includes founder representation, independent directors with relevant expertise, and representatives of significant investors or sovereign partners.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/* Board Member Template */}
<div className="bg-surface border border-outline-variant rounded-DEFAULT p-stack-md text-center md:text-left shadow-sm">
<div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto md:mx-0 mb-stack-sm flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-4xl">person</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Founder / Chair</h3>
<p className="text-label-bold font-label-bold text-secondary mb-3">Strategic Oversight</p>
<p className="text-body-md font-body-md text-on-surface-variant">Approves enterprise strategy, annual budget, and major capital expenditures.</p>
</div>
<div className="bg-surface border border-outline-variant rounded-DEFAULT p-stack-md text-center md:text-left shadow-sm">
<div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto md:mx-0 mb-stack-sm flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-4xl">account_balance</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Independent Director</h3>
<p className="text-label-bold font-label-bold text-secondary mb-3">Audit &amp; Risk Committee</p>
<p className="text-body-md font-body-md text-on-surface-variant">Oversight of financial controls, risk management, and compliance.</p>
</div>
<div className="bg-surface border border-outline-variant rounded-DEFAULT p-stack-md text-center md:text-left shadow-sm">
<div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto md:mx-0 mb-stack-sm flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-4xl">trending_up</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Independent Director</h3>
<p className="text-label-bold font-label-bold text-secondary mb-3">Finance &amp; Investment</p>
<p className="text-body-md font-body-md text-on-surface-variant">Capital allocation, funding strategy, and major transaction review.</p>
</div>
<div className="bg-surface border border-outline-variant rounded-DEFAULT p-stack-md text-center md:text-left shadow-sm">
<div className="w-24 h-24 bg-surface-container-highest rounded-full mx-auto md:mx-0 mb-stack-sm flex items-center justify-center text-on-surface-variant">
<span className="material-symbols-outlined text-4xl">gavel</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Sovereign Partner Rep</h3>
<p className="text-label-bold font-label-bold text-secondary mb-3">Governance &amp; Nominations</p>
<p className="text-body-md font-body-md text-on-surface-variant">Board composition, leadership succession, and governance standards.</p>
</div>
</div>
</div>
</section><section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
<div className="max-w-container-max mx-auto">
<div className="mb-stack-lg text-center md:text-left">
<span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Executive Leadership</span>
<h2 className="text-headline-lg font-headline-lg text-primary">Executive Management &amp; C-Level Leadership</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-2xl">
                    Driving the platform's mission through specialized expertise and strategic oversight of the integrated value chain.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
<div className="flex flex-col">
<div className="aspect-square bg-surface-container-low rounded-DEFAULT mb-stack-sm flex items-center justify-center text-on-surface-variant/20">
<span className="material-symbols-outlined text-5xl">person</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">General Manager</h3>
<p className="text-label-bold font-label-bold text-secondary mb-2">Strategic Operations &amp; Deployment</p>
<p className="text-body-md font-body-md text-on-surface-variant">Directs the execution of large-scale agrarian transformation projects across the federation.</p>
</div>
<div className="flex flex-col">
<div className="aspect-square bg-surface-container-low rounded-DEFAULT mb-stack-sm flex items-center justify-center text-on-surface-variant/20">
<span className="material-symbols-outlined text-5xl">person</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Chief Financial Officer</h3>
<p className="text-label-bold font-label-bold text-secondary mb-2">Capital Architecture &amp; Financial Controls</p>
<p className="text-body-md font-body-md text-on-surface-variant">Manages capital allocation, investment frameworks, and institutional financial reporting.</p>
</div>
<div className="flex flex-col">
<div className="aspect-square bg-surface-container-low rounded-DEFAULT mb-stack-sm flex items-center justify-center text-on-surface-variant/20">
<span className="material-symbols-outlined text-5xl">person</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Chief Technology Officer</h3>
<p className="text-label-bold font-label-bold text-secondary mb-2">Integrated Systems &amp; Intelligence</p>
<p className="text-body-md font-body-md text-on-surface-variant">Oversees the digital backbone of the platform, from precision ag-tech to supply chain logistics.</p>
</div>
<div className="flex flex-col">
<div className="aspect-square bg-surface-container-low rounded-DEFAULT mb-stack-sm flex items-center justify-center text-on-surface-variant/20">
<span className="material-symbols-outlined text-5xl">person</span>
</div>
<h3 className="text-headline-md font-headline-md text-primary mb-1">Chief Legal Officer</h3>
<p className="text-label-bold font-label-bold text-secondary mb-2">Governance &amp; Regulatory Compliance</p>
<p className="text-body-md font-body-md text-on-surface-variant">Ensures adherence to sovereign legal frameworks and international governance standards.</p>
</div>
</div>
</div>
</section>
{/* Strategic Partners Section */}
<section className="py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop bg-surface-container-high border-t border-outline-variant"><div className="max-w-container-max mx-auto">
<div className="mb-stack-lg text-center md:text-left">
<span className="text-secondary font-label-bold text-label-bold uppercase tracking-widest mb-base block">Ecosystem Coordination</span>
<h2 className="text-headline-lg font-headline-lg text-primary">Global Partnership Ecosystem</h2>
<p className="text-body-lg font-body-lg text-on-surface-variant mt-stack-sm max-w-3xl">
                    Zuma Agro operates through a sophisticated network of institutional alignment, connecting sovereign interests with global capital and technical excellence.
                </p>
</div>
<div className="flex flex-col gap-[48px]">
<div>
<h4 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest mb-stack-sm border-b border-outline-variant/20 pb-2">Sovereign &amp; Government</h4>
<div className="grid grid-cols-2 md:grid-cols-4 gap-gutter"><div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">account_balance</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Federal Ministry of Agriculture</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">account_balance</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Benue State Government</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">account_balance</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Nasarawa State Government</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">account_balance</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Taraba State Government</span>
</div></div>
</div>
<div>
<h4 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest mb-stack-sm border-b border-outline-variant/20 pb-2">Development Finance</h4>
<div className="grid grid-cols-2 md:grid-cols-3 gap-gutter"><div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">payments</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">African Development Bank (AfDB)</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">payments</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">International Finance Corp (IFC)</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">payments</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">U.S. DFC</span>
</div></div>
</div>
<div>
<h4 className="text-label-bold font-label-bold text-on-surface-variant uppercase tracking-widest mb-stack-sm border-b border-outline-variant/20 pb-2">Corporate &amp; Technical</h4>
<div className="grid grid-cols-2 md:grid-cols-3 gap-gutter"><div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Global Logistics Hubs</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Industrial Offtakers</span>
</div>
<div className="bg-surface-container-lowest p-stack-md rounded-DEFAULT border border-outline-variant/10 flex flex-col items-center justify-center text-center aspect-square md:aspect-video">
  <div className="w-full h-12 mb-3 flex items-center justify-center opacity-60 grayscale hover:grayscale-0 transition-all">
    <span className="material-symbols-outlined text-4xl">precision_manufacturing</span>
  </div>
  <span className="text-[12px] font-label-bold text-on-surface-variant uppercase tracking-wider">Processing Tech Providers</span>
</div></div>
</div>
</div>
</div></section>
</main>
{/* Footer Overhaul */}
<footer className="w-full bg-primary text-white pt-[96px] pb-xl">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-[64px]">
<div className="bg-white/5 border border-white/10 rounded-2xl p-[32px] flex flex-col md:flex-row items-center justify-between gap-[32px] backdrop-blur-md">
<div>
<h4 className="font-headline-md text-[24px] font-bold text-white mb-xs">Sovereign Insights</h4>
<p className="text-white/70 font-body-md">Executive briefings on agro-industrial transformation.</p>
</div>
<form className="flex w-full md:w-auto max-w-md gap-sm">
<input className="bg-white/10 text-white px-[24px] py-[16px] rounded-lg border border-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-grow font-body-md placeholder:text-white/40 min-w-[250px]" placeholder="Executive Email" required={true} type="email" />
<button className="bg-secondary text-white font-label-bold text-label-bold px-[32px] py-[16px] rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg" type="submit">Subscribe</button>
</form>
</div>
</div>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-start mb-[64px]">
<div className="col-span-1 lg:col-span-4 flex flex-col gap-[32px]">
<div className="h-20 w-auto">
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtO7AioIirhwq-4ahvn0QtnqeJNqk7U0EBCs2XxAW1ND30LxJuz2MFMJjervSij9WiuF3f3nqK-NjoeYf929hxBKtpJrHJH_Nrjij8XKRbzXP89aRJkmwKULX2yfo9oHiMeF8-iOsoEIJgIEHPqKvJL_K-erk-95YsZgiVmqZJ5epvgyq4fGxsN9SBmsro3-0X3J2DhL_2pn3WcuahqE6HXb0TxsF4pjDFQWS2L_9JXlYXijNFZPV-v_AeWUvckeN40Kp2zQLPsw" style={{"filter":"brightness(0) invert(1)"}} />
</div>
<p className="font-body-md text-[16px] text-white/70 max-w-sm leading-relaxed">
                A sovereign-scale integration architecture connecting production, processing, and distribution across Nigeria.
            </p>
</div>
<div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-[32px] w-full">
<div className="flex flex-col gap-[16px]">
<h4 className="font-executive-caps text-[12px] font-bold tracking-[0.1em] uppercase mb-sm text-secondary">Platform</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/strategic-framework">Framework</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Technology Stack</Link>
</div>
<div className="flex flex-col gap-[16px]">
<h4 className="font-executive-caps text-[12px] font-bold tracking-[0.1em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-[16px]">
<h4 className="font-executive-caps text-[12px] font-bold tracking-[0.1em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Careers</Link>
</div>
<div className="flex flex-col gap-[16px]">
<h4 className="font-executive-caps text-[12px] font-bold tracking-[0.1em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-[24px] flex flex-col md:flex-row justify-between items-center gap-[16px]"><p className="font-label-sm text-[14px] text-white/50">
                © Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-[32px]">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Terms of Engagement</Link>
</div></div>
</div>
</footer>



    </>
  );
}
