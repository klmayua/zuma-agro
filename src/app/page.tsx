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
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/about">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
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
<main className="flex-grow">
{/* Hero Section */}
<section className="relative w-full overflow-hidden min-h-[700px] flex flex-col justify-center py-4xl px-margin-mobile md:px-margin-desktop">
<div className="absolute inset-0 z-0 bg-[#0a110d]">
<img alt="Benue Valley Agricultural Corridor" className="absolute inset-0 w-full h-full object-cover opacity-80" src="https://lh3.googleusercontent.com/aida/AP1WRLu1FUnla-mNDGgtVyB3uuWs8oJPoXHSHIvaoCEhLmN2MYbv9uQhQWmpxDsTNt9J1DfMMoUWbuefGef9HwCnAMPv1ioY_0CFucOr_i-e3E8-gPQzXavxc7cABHT6OJ6HSMr6QXh1gHOahrhvvR4GfQ2jLxUa7oRusWSEeufpt2OIHZ0T6-98sr-xTvmg_p7JNBXt4cxRs9aP7b9-Zc4WjbcF8it87fTun0FFdBXK9_DUzTsW53obbGf8dDg" />
<div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-transparent"></div>
</div>
<div className="relative z-10 w-full max-w-container-max mx-auto text-left flex flex-col items-start gap-lg">
<span className="font-executive-caps text-executive-caps text-secondary tracking-widest uppercase bg-white/10 px-sm py-xs rounded-full border border-white/20 inline-block backdrop-blur-md">Strategic Initiative</span>
<h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-xl md:text-headline-xl text-white max-w-4xl leading-tight">
                Sovereign Agro-Industrial Transformation Framework
            </h1>
<p className="font-body-lg text-body-lg text-white/90 max-w-2xl">
                Building Nigeria's national productivity infrastructure for food security and continental competitiveness. Zuma Agro-Allied is designed to solve Nigeria’s structural food system failures through a disciplined, integrated, and replicable operating architecture.
            </p>
<div className="flex flex-col sm:flex-row gap-md mt-md">
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">
                    Explore Framework
                    <span className="material-symbols-outlined text-[20px]" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="bg-transparent border-2 border-white/30 text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm">Download Prospectus <span className="material-symbols-outlined text-[20px] ml-xs">download</span></button>
</div>
</div>
</section>
{/* Metrics Section */}
<section className="w-full bg-white py-xl">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
{/* Card 1 */}
<div className="bg-white rounded-2xl p-lg shadow-institutional border border-outline-variant/20 flex flex-col items-center justify-center text-center">
<p className="font-headline-md text-[36px] font-bold text-secondary">34M+</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">Hectares Arable Land</p>
</div>
{/* Card 2 */}
<div className="bg-white rounded-2xl p-lg shadow-institutional border border-outline-variant/20 flex flex-col items-center justify-center text-center">
<p className="font-headline-md text-[36px] font-bold text-secondary">400M</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">Projected Population</p>
</div>
{/* Card 3 */}
<div className="bg-white rounded-2xl p-lg shadow-institutional border border-outline-variant/20 flex flex-col items-center justify-center text-center">
<p className="font-headline-md text-[36px] font-bold text-premium-red">$-10B</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">Annual Import Bill</p>
</div>
{/* Card 4 */}
<div className="bg-white rounded-2xl p-lg shadow-institutional border border-outline-variant/20 flex flex-col items-center justify-center text-center">
<p className="font-headline-md text-[36px] font-bold text-premium-red">20-40%</p>
<p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mt-xs">Post-Harvest Losses</p>
</div>
</div>
</div>
</section>
{/* The Strategic Paradox Section */}
{/* SBU Grid */}
<section className="w-full py-xl bg-surface">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="text-center md:text-left mb-xl">
<h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-md font-bold">Integrated Operating Architecture</h2>
<p className="font-body-lg text-[24px] text-on-surface max-w-4xl leading-relaxed font-light">Zuma Agro operates as a holding company with six Strategic Business Units (SBUs) executing the platform logic. This structure enables risk segregation, capital stack optimisation, and governance clarity.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
{/* SBU 1 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">landscape</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Land, Water, Primary Production</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Production</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Managing company-owned farms, outgrowers, and cooperatives. Accountable for yield optimization, input efficiency, and driving down the cost of primary production.
    </p>
</div>
</div>
{/* SBU 2 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">biotech</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Seed, Fertilizer, Feed, Genetics</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Inputs &amp; Genetics</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Ensuring the availability, quality, and cost-effectiveness of critical inputs through seed multiplication, fertilizer blending, and livestock genetics.
    </p>
</div>
</div>
{/* SBU 3 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">precision_manufacturing</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Mills, Cold Storage, Packaging</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Processing &amp; Mfg.</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Converting raw agricultural output into stable, transportable, higher-value products. Accountable for throughput, conversion cost, and product quality.
    </p>
</div>
</div>
{/* SBU 4 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">local_shipping</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Hubs, Fleet, Trunk Routes</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Logistics &amp; Warehousing</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Managing aggregation hubs, warehouse networks, and fleet logistics to minimize post-harvest loss, optimize routing, and ensure on-time delivery.
    </p>
</div>
</div>
{/* SBU 5 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">monitoring</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Wholesale, Institutional, Export</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Commercial &amp; Trading</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Driving wholesale distribution, securing institutional supply contracts, managing export documentation, and generating market intelligence to secure margins.
    </p>
</div>
</div>
{/* SBU 6 */}
<div className="bg-white rounded-3xl p-xl shadow-institutional border border-outline-variant/10 flex flex-row items-start gap-lg transition-all duration-300 hover:shadow-2xl">
<div className="text-primary shrink-0">
<span className="material-symbols-outlined text-[64px] font-light leading-none">architecture</span>
</div>
<div className="flex flex-col">
<p className="font-label-sm text-[11px] font-bold text-secondary uppercase tracking-[0.15em] mb-xs">Irrigation, Power, Roads, Facilities</p>
<h3 className="font-headline-md text-[28px] font-bold text-on-surface mb-md">Infrastructure &amp; Eng.</h3>
<p className="font-body-md text-[16px] leading-relaxed text-on-surface-variant">
        Developing and maintaining the physical backbone: irrigation systems, power supply, feeder roads, and facility engineering to ensure asset uptime.
    </p>
</div>
</div>
</div>
<div className="flex justify-start mt-3xl"><button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">Explore Business Units <span className="material-symbols-outlined text-[20px]">account_balance</span></button></div></div>
</section>
{/* Execution Doctrines Section */}
<section className="w-full bg-primary py-4xl">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="mb-3xl text-center md:text-left">
<h2 className="font-headline-xl text-[40px] leading-tight text-white mb-md font-bold">The Five Non-Negotiable Doctrines</h2>
<p className="font-body-lg text-[20px] text-white/80 max-w-4xl leading-relaxed">Zuma Agro operates on a doctrine of disciplined integration. These principles govern every investment, partnership, and operational decision.</p>
</div>
<div className="space-y-lg">
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">01</div>
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Backward Integration is Mandatory</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">No processing facility is commissioned without secured feedstock supply. No export contract is signed without verified production capacity. The enterprise never builds capacity ahead of supply or promises delivery ahead of reality.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">02</div>
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Infrastructure Precedes Production</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">Zuma Agro does not plant crops without water security, harvest without storage, or process without logistics. We accept slower deployment in exchange for operational reliability.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">03</div>
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Data-Driven Execution</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">Every field, cooperative, warehouse, and transaction is recorded in the enterprise intelligence system. Decisions – from planting calendars to pricing to credit allocation – are made on documented evidence, not intuition.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">04</div>
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Commercial Discipline Overrides Subsidy Logic</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">While accessing development finance, every line of business must ultimately stand on its own commercial terms. Permanent loss-making is not permitted anywhere within the platform.</p>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl flex flex-col md:flex-row gap-xl items-start">
<div className="px-md py-sm rounded-lg font-headline-md text-[24px] font-bold shrink-0 border border-secondary/30 bg-secondary/10 text-secondary">05</div>
<div>
<h3 className="font-headline-md text-[28px] font-bold text-white mb-sm">Governability Determines Scale</h3>
<p className="font-body-md text-[18px] leading-relaxed text-white/80">The enterprise does not expand into regions where it cannot maintain operational control, security coordination, and financial visibility. Growth is constrained by institutional capacity, not ambition.</p>
</div>
</div>
</div>
<div className="flex justify-start mt-3xl"><button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center gap-xs shadow-lg">Review Institutional Governance <span className="material-symbols-outlined text-[20px]">gavel</span></button></div></div>
</section>
{/* Benue Valley Pilot Section */}
<section className="w-full py-4xl bg-surface" style={{"backgroundImage":"linear-gradient(rgba(248, 250, 246, 0.85), rgba(248, 250, 246, 0.85)), url('https://lh3.googleusercontent.com/aida/AP1WRLu8jVB0-i5QyMT6apaXxh9-W2ReujqF7Dfj37wyAJKLHw_taYib9ZsZH1jcQ9O_RR-Y3VQVSEvjLzDgxtyeVAmMOJ5iNk25WucNvY8gvyEpak0hEdtJtcCNGIcb5FraOJkD_sCKuSQAvN5KjvLBiBNa_L6Vj7rDZEPysyPGtCzj_mCp6VulJKA0k8eVmSs73ZtR-wMcYAP2Sl9oTJv1hSy5eFuBSJwpzNhDuUahHtVRQ6jPw4f2L4dNu4Y')","backgroundSize":"cover","backgroundPosition":"center center","backgroundRepeat":"no-repeat","backgroundBlendMode":"normal"}}>
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
<div className="bg-white rounded-3xl p-3xl relative overflow-hidden shadow-institutional border border-outline-variant/10 shadow-2xl backdrop-blur-sm" style={{"backgroundColor":"rgba(255, 255, 255, 0.9)"}}>
<div className="relative z-10 flex flex-col lg:flex-row gap-3xl items-center">
<div className="lg:w-2/3">
<span className="font-executive-caps text-[14px] font-bold tracking-[0.2em] uppercase mb-md inline-block px-md py-sm rounded-full text-secondary bg-secondary/10">Phase One Deployment</span>
<h2 className="font-headline-xl text-[40px] leading-tight text-primary mb-lg font-bold">The Benue Valley Corridor Pilot</h2>
<p className="font-body-lg text-[20px] text-on-surface-variant mb-lg leading-relaxed">
                        Zuma Agro launches as a 'Minimum Viable Zuma' – a commercially disciplined production unit designed to prove unit economics before capital is committed to replication. 
                    </p>
<p className="font-body-md text-[18px] text-on-surface-variant mb-xl leading-relaxed">
                        The initial pilot concentrates on the Benue Valley corridor (Benue, Nasarawa, Taraba) focusing on maize and soybeans. It includes three initial production clusters (5,000–10,000 hectares each) within 100km of a central processing hub near Makurdi, featuring grain dryers, storage silos, a feed mill, and an oil processing line.
                    </p>
<ul className="grid grid-cols-1 sm:grid-cols-2 gap-lg text-primary font-headline-md text-[18px] font-semibold">
<li className="flex items-center gap-md"><span className="material-symbols-outlined text-[28px] font-light text-secondary">water_drop</span> Small-scale irrigation</li>
<li className="flex items-center gap-md"><span className="material-symbols-outlined text-[28px] font-light text-secondary">warehouse</span> 10,000 MT Storage</li>
<li className="flex items-center gap-md"><span className="material-symbols-outlined text-[28px] font-light text-secondary">factory</span> Feed &amp; Oil Processing</li>
<li className="flex items-center gap-md"><span className="material-symbols-outlined text-[28px] font-light text-secondary">route</span> Feeder road improvements</li>
</ul>
<div className="mt-xl"><button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg">View Phase One Roadmap <span className="material-symbols-outlined text-[20px] ml-xs">map</span></button></div></div>
<div className="lg:w-1/3 flex justify-center w-full">
<div className="bg-primary text-white p-2xl rounded-3xl text-center shadow-2xl w-full max-w-md border border-white/10">
<p className="font-executive-caps text-[14px] font-bold tracking-[0.2em] uppercase mb-md text-secondary">Validation Trigger</p>
<p className="font-headline-xl text-[80px] font-bold leading-none mb-md">3<span className="text-[32px] font-normal">Qs</span></p>
<p className="font-body-md text-[18px] text-white/80 leading-relaxed">Consecutive KPI performance required before national rollout commences.</p>
</div>
</div>
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
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOtO7AioIirhwq-4ahvn0QtnqeJNqk7U0EBCs2XxAW1ND30LxJuz2MFMJjervSij9WiuF3f3nqK-NjoeYf929hxBKtpJrHJH_Nrjij8XKRbzXP89aRJkmwKULX2yfo9oHiMeF8-iOsoEIJgIEHPqKvJL_K-erk-95YsZgiVmqZJ5epvgyq4fGxsN9SBmsro3-0X3J2DhL_2pn3WcuahqE6HXb0TxsF4pjDFQWS2L_9JXlYXijNFZPV-v_AeWUvckeN40Kp2zQLPsw" style={{"filter":"brightness(0) invert(1)"}} />
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
