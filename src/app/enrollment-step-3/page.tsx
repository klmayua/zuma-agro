"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-radio:checked {
            background-color: theme('colors.secondary');
            border-color: theme('colors.secondary');
        }
        .custom-checkbox:checked {
            background-color: theme('colors.secondary');
            border-color: theme('colors.secondary');
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
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/enrollment-step-4">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
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
<main className="flex-grow pt-xl pb-stack-lg px-margin-desktop md:px-margin-desktop flex justify-center">
<div className="w-full max-w-4xl">
{/* Progress Indicator */}
<div className="mb-stack-lg flex items-center justify-between w-full relative">
<div className="absolute left-0 top-1/2 w-full h-[1px] bg-outline-variant -z-10"></div>
<div className="flex flex-col items-center bg-surface px-2">
<div className="w-8 h-8 rounded-full border border-outline bg-surface-container-high flex items-center justify-center font-label-bold text-label-bold text-on-surface-variant">01</div>
<span className="mt-2 font-label-sm text-label-sm text-on-surface-variant">Entity</span>
</div>
<div className="flex flex-col items-center bg-surface px-2">
<div className="w-8 h-8 rounded-full border border-outline bg-surface-container-high flex items-center justify-center font-label-bold text-label-bold text-on-surface-variant">02</div>
<span className="mt-2 font-label-sm text-label-sm text-on-surface-variant">Compliance</span>
</div>
<div className="flex flex-col items-center bg-surface px-2">
<div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center font-label-bold text-label-bold text-on-secondary shadow-sm">03</div>
<span className="mt-2 font-label-sm text-label-sm text-on-surface font-bold">Mandate</span>
</div>
<div className="flex flex-col items-center bg-surface px-2">
<div className="w-8 h-8 rounded-full border border-outline bg-surface flex items-center justify-center font-label-bold text-label-bold text-outline">04</div>
<span className="mt-2 font-label-sm text-label-sm text-outline">Review</span>
</div>
</div>
{/* Header */}
<div className="mb-stack-lg">
<h1 className="font-display-lg text-display-lg text-primary mb-4">Strategic Mandate Alignment</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                    Define your operational footprint and commodity focus to align with institutional investment frameworks.
                </p>
</div>
{/* Form */}
<form className="space-y-stack-md bg-surface-container-low border border-outline-variant rounded-lg p-stack-md shadow-sm">
{/* Section 1: Geographic Corridor */}
<div className="space-y-4">
<div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-6">
<span className="font-label-bold text-label-bold text-secondary">01.</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Geographic Corridor Focus</h2>
</div>
<div className="grid grid-cols-1 gap-gutter md:grid-cols-3"><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">Benue Valley (Pilot)</div><div className="font-label-sm text-label-sm text-on-surface-variant">Sub-Humid Zone: Primary hub for grain and tuber integration.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">North Central Corridor</div><div className="font-label-sm text-label-sm text-on-surface-variant">Semi-Arid/Sub-Humid: Strategic logistics and processing hub.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">North West Corridor</div><div className="font-label-sm text-label-sm text-on-surface-variant">Semi-Arid Zone: Focus on industrial oilseeds and livestock.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">Southern Agro-Industrial Zone</div><div className="font-label-sm text-label-sm text-on-surface-variant">Humid Forest/Coastal: Tree crops and aquaculture focus.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">Western Logistics Corridor</div><div className="font-label-sm text-label-sm text-on-surface-variant">Strategic gateway for export-oriented processing and regional trade.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">Eastern Export Corridor</div><div className="font-label-sm text-label-sm text-on-surface-variant">High-yield production zone with direct access to maritime logistics.</div></label><label className="block cursor-pointer relative p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest transition-colors"><input className="custom-radio w-5 h-5 border-outline text-secondary focus:ring-secondary absolute right-4 top-4" name="corridor" type="radio" /><div className="font-label-bold text-label-bold text-primary mb-1">Delta-Aquaculture Zone</div><div className="font-label-sm text-label-sm text-on-surface-variant">Specialized aquatic ecosystem for high-protein value chain development.</div></label></div>
</div>
{/* Section 2: Commodity Interest */}
<div className="space-y-4 pt-4">
<div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-6">
<span className="font-label-bold text-label-bold text-secondary">02.</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Primary Commodity Interest</h2>
</div>
<div className="space-y-6"><div className="space-y-3"><h3 className="font-label-bold text-label-sm text-outline uppercase tracking-wider">Staple Grains</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3"><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="maize" /><span className="font-body-md text-body-md text-on-surface">Maize</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="rice" /><span className="font-body-md text-body-md text-on-surface">Rice</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="sorghum" /><span className="font-body-md text-body-md text-on-surface">Sorghum</span></label></div></div><div className="space-y-3"><h3 className="font-label-bold text-label-sm text-outline uppercase tracking-wider">Industrial &amp; Oilseeds</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3"><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="soybeans" /><span className="font-body-md text-body-md text-on-surface">Soybeans</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="groundnuts" /><span className="font-body-md text-body-md text-on-surface">Groundnuts</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="cotton" /><span className="font-body-md text-body-md text-on-surface">Cotton</span></label></div></div><div className="space-y-3"><h3 className="font-label-bold text-label-sm text-outline uppercase tracking-wider">Roots, Tubers &amp; Tree Crops</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3"><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="cassava" /><span className="font-body-md text-body-md text-on-surface">Cassava</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="cocoa" /><span className="font-body-md text-body-md text-on-surface">Cocoa</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="cashew" /><span className="font-body-md text-body-md text-on-surface">Cashew</span></label></div></div><div className="space-y-3"><h3 className="font-label-bold text-label-sm text-outline uppercase tracking-wider">Proteins</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-3"><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="poultry" /><span className="font-body-md text-body-md text-on-surface">Poultry</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="aquaculture" /><span className="font-body-md text-body-md text-on-surface">Aquaculture</span></label><label className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity" type="checkbox" value="livestock" /><span className="font-body-md text-body-md text-on-surface">Livestock</span></label></div></div><div className="space-y-3 pt-2"><h3 className="font-label-bold text-label-sm text-outline uppercase tracking-wider">Other Interests</h3><div className="flex items-center gap-3 p-3 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors"><input className="custom-checkbox w-5 h-5 rounded-sm border-outline text-secondary focus:ring-secondary" name="commodity_other_check" type="checkbox" /><input className="bg-transparent border-none focus:ring-0 p-0 font-body-md text-body-md text-on-surface w-full placeholder:text-outline/50" placeholder="Specify other interest..." type="text" /></div></div></div>
</div>
{/* Section 3: Resource Commitment */}
<div className="space-y-4 pt-4">
<div className="flex items-center gap-2 border-b border-outline-variant pb-2 mb-6">
<span className="font-label-bold text-label-bold text-secondary">03.</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Estimated Resource Commitment</h2>
</div>
<div className="space-y-3"><label className="flex items-start gap-4 p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors relative"><input className="custom-radio mt-1 w-5 h-5 border-outline text-secondary focus:ring-secondary" name="commitment" type="radio" /><div><div className="font-label-bold text-label-bold text-primary mb-1">Tier I: Pilot Scale Deployment</div><div className="font-body-md text-body-md text-on-surface-variant">Initial proof-of-concept within a single corridor (&lt; 500 Hectares).</div></div></label><label className="flex items-start gap-4 p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors relative"><input className="custom-radio mt-1 w-5 h-5 border-outline text-secondary focus:ring-secondary" name="commitment" type="radio" /><div><div className="font-label-bold text-label-bold text-primary mb-1">Tier II: Regional Integration</div><div className="font-body-md text-body-md text-on-surface-variant">Expanded operations across multiple local government areas (500 - 2,000 Hectares).</div></div></label><label className="flex items-start gap-4 p-4 border border-outline-variant rounded bg-surface hover:bg-surface-container-highest cursor-pointer transition-colors relative"><input className="custom-radio mt-1 w-5 h-5 border-outline text-secondary focus:ring-secondary" name="commitment" type="radio" /><div><div className="font-label-bold text-label-bold text-primary mb-1">Tier III: National Strategic Scale</div><div className="font-body-md text-body-md text-on-surface-variant">Sovereign-scale deployment with full value chain integration (&gt; 2,000 Hectares).</div></div></label></div>
</div>
{/* Action Area */}
<div className="pt-8 mt-8 border-t border-outline-variant flex justify-between items-center">
<button className="px-6 py-3 font-label-bold text-label-bold text-on-surface-variant hover:text-primary transition-colors border border-transparent hover:border-outline-variant rounded" type="button">
                        Save Draft
                    </button>
<button className="bg-secondary text-white px-8 py-3 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity flex items-center gap-2 shadow-lg" type="button">
                        Proceed to Review
                        <span className="material-symbols-outlined" style={{"fontVariationSettings":"'FILL' 0"}}>arrow_forward</span>
</button>
</div>
</form>
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
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Strategic Business Units</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Operations</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Technology Stack</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Governance Board</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">ESG Standards</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Risk Management</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Continuity Planning</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Investors &amp; DFIs</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Press &amp; Media</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Careers</Link>
</div>
<div className="flex flex-col gap-md">
<h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Abuja HQ</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Makurdi Hub</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/enrollment-step-2">Lagos Terminal</Link>
</div>
</div>
</div>
<div className="border-t border-white/10">
<div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">
                (c) Zuma Agro-Allied | 2026. All rights reserved.
            </p>
<div className="flex gap-xl">
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-2">Privacy Policy</Link>
<Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/enrollment-step-2">Terms of Engagement</Link>
</div></div>
</div>
</footer>





    </>
  );
}
