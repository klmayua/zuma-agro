"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  const [selectedTier, setSelectedTier] = React.useState("tier02");
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .tier-card {
            transition: all 0.3s ease;
        }
        .tier-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.08);
            border-color: #005a43;
        }
        .tier-card.selected {
            border-color: #005a43;
            background-color: #f8faf6;
            box-shadow: inset 0 0 0 1px #005a43;
        }
        .radio-custom {
            appearance: none;
            width: 20px;
            height: 20px;
            border: 2px solid #bfc9c2;
            border-radius: 50%;
            display: inline-block;
            position: relative;
            cursor: pointer;
            transition: all 0.2s ease;
        }
        .tier-card.selected .radio-custom {
            border-color: #005a43;
        }
        .tier-card.selected .radio-custom::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 10px;
            height: 10px;
            background-color: #005a43;
            border-radius: 50%;
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
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsy5WI56gb9C0-IZmPYGPv7VdFVR0LaYMkfQOAhfyu2umhF_FXDYvHn1BxD_UiXdtTKJEIBvY8WoDGPIymb8Sp8rW8UHL32QKovb1YN_5BgbUsRpi05-WUWZoG8MCr18BhFLoGd_KqSBqexY3BDoBR2BAhyIeaiSQ8EqesxH_VzUwzyoH9Ekchrhv20e37b9m8gCym5Oiju4N1gsN4RZ_fsBQMSABEPFOnhPJ-NQvwc8w4v_qgRN-09zLthl7MROtyuY9LaBDMq8" />
</div>
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/enrollment-step-3">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/institutional-partnerships">Partnership</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs">
<span className="material-symbols-outlined text-[20px] icon-fill">lock</span>
            Executive Access
        </button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined">menu</span>
</button>
</div>
</header>
<main className="flex-grow flex flex-col justify-center py-4xl px-margin-mobile md:px-margin-desktop">
<div className="max-w-[800px] w-full mx-auto">
{/* Progress Flow */}
<div className="mb-3xl">
<div className="flex items-center justify-between relative">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-outline-variant z-0"></div>
<div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
<div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
<span className="material-symbols-outlined text-[16px]">check</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 01</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
<div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                            2
                        </div>
<span className="font-label-sm text-label-sm text-on-surface font-bold">Step 02</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                            3
                        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 03</span>
</div>
<div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
<div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                            4
                        </div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Step 04</span>
</div>
</div>
</div>
{/* Header */}
<div className="mb-xl text-center">
<h1 className="font-headline-xl text-headline-xl text-primary mb-sm font-bold">Partnership Architecture</h1>
<p className="font-body-lg text-[20px] text-on-surface-variant">Choose your partnership tier to establish the engagement framework.</p>
</div>
{/* Selection Cards */}
<div className="flex flex-col gap-md mb-3xl">
{/* Tier 01 */}
<div
  className={`tier-card block bg-white border border-outline-variant/50 rounded-2xl p-6 cursor-pointer relative shadow-soft ${selectedTier === "tier01" ? "selected" : ""}`}
  onClick={() => setSelectedTier("tier01")}
>
<div className="flex items-start gap-4">
<div className="mt-1">
<input className="hidden" name="partnership_tier" type="radio" value="tier01" checked={selectedTier === "tier01"} onChange={() => setSelectedTier("tier01")} />
<div className="radio-custom"></div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-secondary">Tier 01</span>
<h2 className="font-headline-md text-[20px] font-semibold text-primary">Technical Assistance</h2>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">architecture</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Advisory, planning, systems design.</p>
</div>
</div>
</div>
{/* Tier 02 */}
<div
  className={`tier-card block bg-white border border-outline-variant/50 rounded-2xl p-6 cursor-pointer relative shadow-soft ${selectedTier === "tier02" ? "selected" : ""}`}
  onClick={() => setSelectedTier("tier02")}
>
<div className="flex items-start gap-4">
<div className="mt-1">
<input className="hidden" name="partnership_tier" type="radio" value="tier02" checked={selectedTier === "tier02"} onChange={() => setSelectedTier("tier02")} />
<div className="radio-custom"></div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-secondary">Tier 02</span>
<h2 className="font-headline-md text-[20px] font-semibold text-primary">Joint Implementation</h2>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">handshake</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Operations, processing, treasury.</p>
</div>
</div>
</div>
{/* Tier 03 */}
<div
  className={`tier-card block bg-white border border-outline-variant/50 rounded-2xl p-6 cursor-pointer relative shadow-soft ${selectedTier === "tier03" ? "selected" : ""}`}
  onClick={() => setSelectedTier("tier03")}
>
<div className="flex items-start gap-4">
<div className="mt-1">
<input className="hidden" name="partnership_tier" type="radio" value="tier03" checked={selectedTier === "tier03"} onChange={() => setSelectedTier("tier03")} />
<div className="radio-custom"></div>
</div>
<div className="flex-grow">
<div className="flex justify-between items-start mb-2">
<div className="flex items-center gap-2">
<span className="font-label-bold text-label-bold text-secondary">Tier 03</span>
<h2 className="font-headline-md text-[20px] font-semibold text-primary">Franchise Replication</h2>
</div>
<span className="material-symbols-outlined text-primary text-[28px]">account_tree</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">Licensed model, quality assurance.</p>
</div>
</div>
</div>
</div>
{/* Actions */}
<div className="flex justify-end border-t border-outline-variant/20 pt-xl mt-xl">
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded hover:opacity-90 transition-opacity flex items-center justify-center shadow-lg gap-xs">
                    Next Step
                    <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
</button>
</div>
</div>
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
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Technology Stack</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Careers</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-1">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">
                © Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-xl">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-1">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-1">Terms of Engagement</Link>
</div></div>
</div>
</footer>






    </>
  );
}
