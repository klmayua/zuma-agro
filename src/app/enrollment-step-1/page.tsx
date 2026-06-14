"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24;
        }
        .icon-fill {
            font-variation-settings: 'FILL' 1;
        }
        
        body {
            background-color: theme('colors.background');
            color: theme('colors.on-background');
        }
        
        .form-input-premium {
            width: 100%;
            background-color: theme('colors.surface-container-low');
            border: 1px solid theme('colors.outline-variant');
            border-radius: theme('borderRadius.lg');
            padding: theme('spacing.md') theme('spacing.lg');
            font-family: theme('fontFamily.sans-inter');
            font-size: 16px;
            color: theme('colors.on-surface');
            transition: all 0.3s ease;
        }
        .form-input-premium:focus {
            outline: none;
            border-color: theme('colors.secondary');
            background-color: theme('colors.surface-container');
            box-shadow: 0 0 0 1px theme('colors.secondary');
        }
        .form-input-premium::placeholder {
            color: theme('colors.on-surface-variant');
            opacity: 0.8;
        }
        
        .form-select-premium {
            width: 100%;
            background-color: theme('colors.surface-container-low');
            border: 1px solid theme('colors.outline-variant');
            border-radius: theme('borderRadius.lg');
            padding: theme('spacing.md') theme('spacing.lg');
            font-family: theme('fontFamily.sans-inter');
            font-size: 16px;
            color: theme('colors.on-surface');
            transition: all 0.3s ease;
            appearance: none;
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23a8862d' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
            background-position: right 1rem center;
            background-repeat: no-repeat;
            background-size: 1.5em 1.5em;
            cursor: pointer;
        }
        .form-select-premium:focus {
            outline: none;
            border-color: theme('colors.secondary');
            background-color: theme('colors.surface-container');
            box-shadow: 0 0 0 1px theme('colors.secondary');
        }

        .premium-step-container {
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 3rem;
            padding: 0 1rem;
        }
        .premium-step-container::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 2rem;
            right: 2rem;
            height: 1px;
            background-color: theme('colors.outline-variant');
            z-index: 0;
            opacity: 0.5;
        }
        .premium-step {
            position: relative;
            z-index: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: theme('colors.surface');
            padding: 0 1rem;
        }
        .premium-step-number {
            font-family: theme('fontFamily.headline-md');
            font-size: 1.25rem;
            font-style: italic;
            margin-bottom: 0.5rem;
        }
        .premium-step.active .premium-step-number {
            color: theme('colors.secondary');
        }
        .premium-step.inactive .premium-step-number {
            color: theme('colors.on-surface-variant');
            opacity: 0.5;
        }
        .premium-step-label {
            font-family: theme('fontFamily.sans-inter');
            font-size: 0.75rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 500;
        }
        .premium-step.active .premium-step-label {
            color: theme('colors.on-surface');
        }
        .premium-step.inactive .premium-step-label {
            color: theme('colors.on-surface-variant');
            opacity: 0.5;
        }
` }} />
      
      
{/* TopNavBar */}
<header className="w-full top-0 fixed bg-white border-b border-outline-variant/20 z-50 transition-colors duration-300">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 md:py-6 w-full max-w-container-max mx-auto">
<div className="flex items-center">
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWsy5WI56gb9C0-IZmPYGPv7VdFVR0LaYMkfQOAhfyu2umhF_FXDYvHn1BxD_UiXdtTKJEIBvY8WoDGPIymb8Sp8rW8UHL32QKovb1YN_5BgbUsRpi05-WUWZoG8MCr18BhFLoGd_KqSBqexY3BDoBR2BAhyIeaiSQ8EqesxH_VzUwzyoH9Ekchrhv20e37b9m8gCym5Oiju4N1gsN4RZ_fsBQMSABEPFOnhPJ-NQvwc8w4v_qgRN-09zLthl7MROtyuY9LaBDMq8" />
</div>
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/enrollment-step-2">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/institutional-partnerships">Partnership</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs">
<span className="material-symbols-outlined text-[20px]" data-icon="admin_panel_settings">lock</span>
            Executive Access
        </button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
{/* Main Content Canvas */}
<main className="flex-grow flex flex-col items-center justify-start pt-16 pb-4xl px-margin-mobile md:px-margin-desktop bg-surface">
<div className="w-full max-w-4xl">
{/* Premium Progress Flow */}
<div className="mb-3xl w-full max-w-2xl mx-auto">
<div className="mb-3xl w-full max-w-2xl mx-auto">
    <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[1px] bg-outline-variant z-0"></div>
        {/* Step 01: Active */}
        <div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
            <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-label-bold text-label-bold border-2 border-surface shadow-sm">
                01
            </div>
            <span className="font-label-sm text-label-sm text-on-surface font-bold">Entity</span>
        </div>
        {/* Step 02: Inactive */}
        <div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                02
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Compliance</span>
        </div>
        {/* Step 03: Inactive */}
        <div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                03
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Mandate</span>
        </div>
        {/* Step 04: Inactive */}
        <div className="relative z-10 flex flex-col items-center gap-2 bg-surface px-2">
            <div className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-bold text-label-bold border-2 border-surface">
                04
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">Review</span>
        </div>
    </div>
</div>
<div className="text-center mt-2xl">
<span className="font-sans-inter text-xs text-secondary uppercase tracking-[0.2em] block mb-4 font-semibold">Step 01 of 04</span>
<h1 className="font-headline-xl text-[56px] leading-tight text-primary font-bold mb-6">Institutional Classification</h1>
<p className="font-sans-inter text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
    Establish your organizational identity to align with the Sovereign framework's production, processing, and distribution architecture.
</p>
</div>
</div>
{/* Premium Form Area */}
<div className="w-full max-w-2xl mx-auto mt-2xl">
<form action="#" className="space-y-3xl" method="POST">
<div className="space-y-2xl">
<div>
<label className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface" htmlFor="legalName" data-stitch-orig-opacity="0">Full Legal Name</label>
<input className="form-input-premium h-[64px] px-xl rounded-xl bg-white" id="legalName" name="legalName" placeholder="e.g. Ministry of Agriculture and Rural Development" required={true} type="text" />
</div>
<div>
<label className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface" htmlFor="jurisdiction" data-stitch-orig-opacity="0">Jurisdiction of Incorporation</label>
<input className="form-input-premium h-[64px] px-xl rounded-xl bg-white" id="jurisdiction" name="jurisdiction" placeholder="e.g. Federal Republic of Nigeria" required={true} type="text" />
</div>
<div>
<label className="font-sans-inter text-xs uppercase tracking-widest block mb-2 font-medium text-on-surface" htmlFor="entityType" data-stitch-orig-opacity="0">Entity Classification</label>
<select className="form-select-premium h-[64px] px-xl rounded-xl bg-white" id="entityType" name="entityType" required={true} defaultValue="">
<option disabled={true} value="">Select classification...</option>
<option value="federal_ministry">Federal Ministry</option>
<option value="state_government">State Government</option>
<option value="dfi">Development Finance Institution (DFI)</option>
<option value="institutional_investor">Institutional Investor</option>
<option value="strategic_partner">Strategic Partner</option>
</select>
</div>
</div>
<div className="pt-xl flex justify-center mt-3xl">
<button className="bg-primary text-white font-sans-inter text-sm tracking-wider uppercase h-[64px] px-[48px] hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-4 shadow-elevated w-full md:w-auto rounded-xl" type="submit">
                            Next Step
                            <span className="material-symbols-outlined text-[24px] text-secondary" style={{"fontVariationSettings":"&quot"}}>arrow_forward</span>
</button>
</div>
</form>
<div className="mt-2xl text-center border-t border-outline-variant/30 pt-xl">
<p className="font-sans-inter text-sm text-on-surface-variant flex items-center justify-center gap-3">
<span className="material-symbols-outlined text-[18px] text-secondary">lock</span>
                    Information provided is secured under institutional NDA protocols.
                </p>
</div>
</div>
</div>
</main>
{/* Footer */}
<footer className="w-full relative bottom-0 bg-primary text-white pt-4xl pb-xl mt-auto">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-3xl">
<div className="bg-white/5 border border-white/10 rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl backdrop-blur-md">
<div>
<h4 className="font-headline-md text-[24px] font-bold text-white mb-xs">Sovereign Insights</h4>
<p className="text-white/70 font-body-md">Executive briefings on agro-industrial transformation.</p>
</div>
<form className="flex w-full md:w-auto max-w-md gap-sm">
<input className="bg-white/10 text-white px-lg py-md rounded-lg border border-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-grow font-body-md placeholder:text-white/40 min-w-[250px]" placeholder="Executive Email" required={true} type="email" />
<button className="bg-secondary text-white font-label-md text-label-md px-xl py-md rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg rounded-xl" type="submit">Subscribe</button>
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
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Technology Stack</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Careers</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/about">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">
                (c) Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-xl">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/about">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/about">Terms of Engagement</Link>
</div></div>
</div>
</footer>







    </>
  );
}
