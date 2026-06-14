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
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsy5WI56gb9C0-IZmPYGPv7VdFVR0LaYMkfQOAhfyu2umhF_FXDYvHn1BxD_UiXdtTKJEIBvY8WoDGPIymb8Sp8rW8UHL32QKovb1YN_5BgbUsRpi05-WUWZoG8MCr18BhFLoGd_KqSBqexY3BDoBR2BAhyIeaiSQ8EqesxH_VzUwzyoH9Ekchrhv20e37b9m8gCym5Oiju4N1gsN4RZ_fsBQMSABEPFOnhPJ-NQvwc8w4v_qgRN-09zLthl7MROtyuY9LaBDMq8" />
</div>
<nav className="hidden md:flex space-x-gutter">

<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/enrollment-step-3">About</Link><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/institutional-partnerships">Partnership</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs">
<span className="material-symbols-outlined text-[20px]" data-icon="lock">lock</span>
            Executive Access
        </button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
{/* Main Content */}
<main className="flex-grow max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-4xl w-full">
{/* Progress Header */}
<header className="mb-3xl border-b border-outline-variant/20 pb-xl">
<div className="flex items-center justify-between mb-md">
<h1 className="font-headline-xl text-headline-xl text-primary">Final Verification</h1>
<div className="flex items-center gap-md">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center text-white text-[10px] z-30"><span className="material-symbols-outlined text-sm">check</span></div>
<div className="w-8 h-8 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center text-white text-[10px] z-20"><span className="material-symbols-outlined text-sm">check</span></div>
<div className="w-8 h-8 rounded-full border-2 border-secondary bg-secondary flex items-center justify-center text-white text-[10px] z-10"><span className="material-symbols-outlined text-sm">check</span></div>
<div className="w-8 h-8 rounded-full border-2 border-secondary bg-white flex items-center justify-center text-secondary font-bold text-[12px] ring-4 ring-secondary/10">04</div>
</div>
<span className="font-executive-caps text-label-sm text-outline uppercase tracking-widest">Final Review</span>
</div>
</div>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Please review the authoritative summary of your enrollment selections before submitting. Ensure all information is accurate and authorized.</p>
</header>
{/* Bento Grid Layout */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-xl">
{/* Summary Column (8 cols) */}
<div className="md:col-span-8 flex flex-col gap-xl">
{/* Audit Summary Card */}
<section className="bg-white rounded-xl p-xl shadow-institutional border-l-4 border-l-secondary border-y border-r border-outline-variant/20">
<h2 className="font-headline-md text-headline-md text-primary mb-lg flex items-center gap-sm border-b border-outline-variant/20 pb-md">
<span className="material-symbols-outlined text-secondary font-light">summarize</span>
                        Enrollment Summary
                    </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
{/* Entity Details */}
<div>
<h3 className="font-executive-caps text-executive-caps text-outline uppercase tracking-[0.15em] mb-md">Entity Information</h3>
<dl className="space-y-sm">
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Legal Name</dt>
<dd className="font-body-md text-body-md text-on-surface font-semibold">Acme Global Holdings Ltd.<span className="material-symbols-outlined text-primary text-[16px] ml-1 align-middle icon-fill">verified</span></dd>
</div>
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Registration No.</dt>
<dd className="font-body-md text-body-md text-on-surface font-semibold">CRN-2026-98765<span className="material-symbols-outlined text-primary text-[16px] ml-1 align-middle icon-fill">verified</span></dd>
</div>
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Jurisdiction</dt>
<dd className="font-body-md text-body-md text-on-surface font-semibold">Delaware, USA</dd>
</div>
</dl>
</div>
{/* Allocation Details */}
<div>
<h3 className="font-executive-caps text-executive-caps text-outline uppercase tracking-[0.15em] mb-md">Initial Allocation</h3>
<dl className="space-y-sm">
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Fund Tranche</dt>
<dd className="font-body-md text-body-md text-on-surface font-semibold">Series B - Yield Focus<span className="material-symbols-outlined text-primary text-[16px] ml-1 align-middle icon-fill">verified</span></dd>
</div>
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Commitment Level</dt>
<dd className="font-body-md text-body-md text-primary font-bold">$5,000,000 USD<span className="material-symbols-outlined text-primary text-[16px] ml-1 align-middle icon-fill">verified</span></dd>
</div>
<div className="flex justify-between border-b border-outline-variant/10 pb-sm">
<dt className="font-label-sm text-label-sm text-on-surface-variant">Fee Structure</dt>
<dd className="font-body-md text-body-md text-on-surface font-semibold">Standard Institutional</dd>
</div>
</dl>
</div>
</div>
</section>
{/* Representative Card */}
<section className="bg-white rounded-2xl p-xl shadow-institutional border border-outline-variant/20"><div className="mb-xl">
<div className="flex items-center gap-sm mb-lg">
<div className="h-1 w-8 bg-secondary rounded-full"></div>
<h3 className="font-executive-caps text-[14px] text-primary font-bold tracking-widest uppercase">Protocol Affirmation</h3>
</div>
<label className="flex items-start gap-md cursor-pointer group p-lg bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all">
<div className="relative flex items-center justify-center mt-1">
<input className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-outline bg-white checked:border-secondary checked:bg-secondary transition-all" required={true} type="checkbox" />
<span className="material-symbols-outlined text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none text-md transition-opacity">check</span>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors leading-relaxed">
      I declare under penalty of perjury that I am the authorized representative for the named entity, and that all information provided herein is accurate and complete.
    </span>
</label>
</div>
<button className="w-full bg-secondary text-white font-executive-caps text-[14px] tracking-widest h-[64px] px-[40px] rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-md shadow-institutional group">
  SUBMIT FORMAL ENROLLMENT
  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">shield_with_heart</span>
</button></section>
<div className="mt-auto pt-xl">
<Link className="flex items-center gap-md p-lg rounded-xl border border-outline-variant/20 hover:bg-white transition-all group" href="/enrollment-step-3">
<div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<div className="font-label-bold text-on-surface group-hover:text-secondary transition-colors">Compliance Concierge</div>
<div className="font-label-sm text-outline">Direct line to verification officers</div>
</div>
</Link>
</div></div>
{/* Legal/Action Column (4 cols) */}
<div className="md:col-span-4 flex flex-col gap-xl">
{/* Due Diligence Notice */}
<section className="bg-white/40 backdrop-blur-md border border-secondary/20 rounded-xl p-xl relative overflow-hidden shadow-soft">
<div className="absolute inset-0 opacity-5" style={{"backgroundImage":"repeating-linear-gradient(45deg, #00402f 25%, transparent 25%, transparent 75%, #00402f 75%, #00402f), repeating-linear-gradient(45deg, #00402f 25%, #f8faf6 25%, #f8faf6 75%, #00402f 75%, #00402f)","backgroundPosition":"0 0, 10px 10px","backgroundSize":"20px 20px"}}></div>
<div className="relative z-10">
<h3 className="font-label-md text-label-md text-primary mb-sm flex items-center gap-xs">
<span className="material-symbols-outlined text-secondary text-lg">enhanced_encryption</span>
                            Due Diligence Protocol Notice
                        </h3>
<p className="font-label-sm text-label-sm text-on-surface-variant leading-relaxed text-justify">
                            By proceeding, you acknowledge that Zuma Agro-Allied performs rigorous background checks and institutional vetting in compliance with global Anti-Money Laundering (AML) and Know Your Customer (KYC) regulations. Submission of this form constitutes explicit consent for our compliance officers to initiate these protocols using the provided entity and representative data.
                        </p>
</div>
</section>
{/* Declaration & Submit */}
<section className="bg-white rounded-2xl p-xl shadow-institutional border border-outline-variant/20 flex-grow flex flex-col justify-between"><div className="mb-xl">
<div className="flex items-center gap-sm mb-lg">
<div className="h-1 w-8 bg-secondary rounded-full"></div>
<h3 className="font-executive-caps text-[14px] text-primary font-bold tracking-widest uppercase">Protocol Affirmation</h3>
</div>
<label className="flex items-start gap-md cursor-pointer group p-lg bg-surface-container-low rounded-xl border border-outline-variant/10 hover:border-secondary/30 transition-all">
<div className="relative flex items-center justify-center mt-1">
<input className="peer h-6 w-6 cursor-pointer appearance-none rounded border-2 border-outline bg-white checked:border-secondary checked:bg-secondary transition-all" required={true} type="checkbox" />
<span className="material-symbols-outlined text-white absolute opacity-0 peer-checked:opacity-100 pointer-events-none text-md transition-opacity">check</span>
</div>
<span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors leading-relaxed">
      I declare under penalty of perjury that I am the authorized representative for the named entity, and that all information provided herein is accurate and complete.
    </span>
</label>
</div>
<button className="w-full bg-secondary text-white font-executive-caps text-[14px] tracking-widest h-[64px] px-[40px] rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-md shadow-institutional group">
  SUBMIT FORMAL ENROLLMENT
  <span className="material-symbols-outlined text-[24px] group-hover:translate-x-1 transition-transform">shield_with_heart</span>
</button></section>
<div className="mt-auto pt-xl">
<Link className="flex items-center gap-md p-lg rounded-xl border border-outline-variant/20 hover:bg-white transition-all group" href="/enrollment-step-3">
<div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary">
<span className="material-symbols-outlined">support_agent</span>
</div>
<div>
<div className="font-label-bold text-on-surface group-hover:text-secondary transition-colors">Compliance Concierge</div>
<div className="font-label-sm text-outline">Direct line to verification officers</div>
</div>
</Link>
</div></div>
</div>
</main>
{/* Footer Overhaul */}
<footer className="w-full relative bottom-0 bg-primary text-white pt-4xl pb-xl mt-auto">
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
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsy5WI56gb9C0-IZmPYGPv7VdFVR0LaYMkfQOAhfyu2umhF_FXDYvHn1BxD_UiXdtTKJEIBvY8WoDGPIymb8Sp8rW8UHL32QKovb1YN_5BgbUsRpi05-WUWZoG8MCr18BhFLoGd_KqSBqexY3BDoBR2BAhyIeaiSQ8EqesxH_VzUwzyoH9Ekchrhv20e37b9m8gCym5Oiju4N1gsN4RZ_fsBQMSABEPFOnhPJ-NQvwc8w4v_qgRN-09zLthl7MROtyuY9LaBDMq8" style={{"filter":"brightness(0) invert(1)"}} />
</div>
<p className="font-body-md text-[16px] text-white/70 max-w-sm leading-relaxed">
                A sovereign-scale integration architecture connecting production, processing, and distribution across Nigeria.
            </p>
</div>
<div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-xl w-full">
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Platform</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/strategic-framework">Framework</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Technology Stack</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Careers</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-3">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">
                © Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-xl">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-3">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-3">Terms of Engagement</Link>
</div></div>
</div>
</footer>





    </>
  );
}
