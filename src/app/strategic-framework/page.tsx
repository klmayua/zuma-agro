"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .texture-bg {
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
            background-color: #f2f4f0; /* surface-container-low fallback */
        }
        
        .timeline-line::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 24px;
            width: 2px;
            background-color: #e1e3df;
            z-index: 0;
        }
        @media (min-width: 768px) {
            .timeline-line::before { left: 50%; transform: translateX(-50%); }
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
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/about">About</Link>

<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
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
<main className="flex-grow pb-stack-lg">
{/* Hero Section */}
<section className="px-margin-mobile md:px-margin-desktop py-stack-lg md:py-24 max-w-container-max mx-auto relative">
<div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
<div className="w-full h-full border-r border-b border-primary-fixed"></div>
<div className="absolute top-1/4 w-full border-t border-primary-fixed"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
<div className="md:col-span-8 space-y-stack-md">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-surface-container border border-surface-variant rounded-full text-primary font-label-bold text-label-sm">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="">SECTION 4.0</span>
</div>
<h1 className="font-display-lg-mobile md:font-display-lg text-primary text-display-lg-mobile md:text-display-lg tracking-tight">Strategic Framework &amp; Rollout Sequencing</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                        Defining the execution vector for Zuma Agro-Allied. Anchored in the 'Minimum Viable Zuma' philosophy, prioritizing immediate yield stability in the Benue Valley corridor before expansive scaling.
                    </p>
<div className="pt-stack-sm">
<Link className="inline-flex items-center space-x-3 bg-secondary text-white px-6 py-3 hover:opacity-90 transition-all font-label-bold text-label-bold rounded shadow-sm" href="/">
<span className="material-symbols-outlined icon-fill">download</span>
<span className="">Download Deployment Blueprint</span>
</Link>
</div>
</div>
</div>
</section>
{/* Main Content Area: Asymmetric Layout */}
<section className="px-margin-mobile md:px-margin-desktop py-stack-lg max-w-container-max mx-auto border-t border-surface-variant">
<div className="grid grid-cols-1 md:grid-cols-12 gap-gutter md:gap-16">
{/* Left Sidebar: Doctrines */}
<div className="md:col-span-4 order-2 md:order-1 mt-stack-lg md:mt-0">
<div className="sticky top-[120px] bg-surface-container-low p-8 border border-surface-variant rounded">
<h3 className="font-headline-md text-headline-md text-primary mb-6 border-b border-surface-variant pb-4">The Five Non-Negotiable Doctrines</h3>
<ul className="space-y-6">
<li className="flex items-start space-x-4 group">
<span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">01</span>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Yield Precedes Scale</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Optimization of localized hectare productivity overrides arbitrary land acquisition metrics.</p>
</div>
</li>
<li className="flex items-start space-x-4 group">
<span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">02</span>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Data Sovereignty</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">All agronomic and logistical data must be owned, secured, and localized within the primary infrastructure.</p>
</div>
</li>
<li className="flex items-start space-x-4 group">
<span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">03</span>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Corridor Integrity</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Logistics remain strictly confined to the pre-audited Benue Valley transit routes during Phase Zero.</p>
</div>
</li>
<li className="flex items-start space-x-4 group">
<span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">04</span>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Community Capital</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Integration with local outgrower networks is structural, not philanthropic.</p>
</div>
</li>
<li className="flex items-start space-x-4 group">
<span className="font-headline-md text-headline-md text-secondary opacity-50 group-hover:opacity-100 transition-opacity">05</span>
<div>
<h4 className="font-label-bold text-label-bold text-on-surface">Audit Transparency</h4>
<p className="font-body-md text-body-md text-on-surface-variant mt-1">Real-time ledger visibility for institutional stakeholders on anchor commodity flows.</p>
</div>
</li>
</ul>
</div>
</div>
{/* Right Content: Philosophy & Deployment */}
<div className="md:col-span-8 order-1 md:order-2 space-y-stack-lg">
{/* Section 4.1 */}
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">4.1 Minimum Viable Zuma (MVZ)</h2>
<div className="h-1 w-16 bg-secondary mb-6"></div>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                            The MVZ philosophy dictates a constrained, high-fidelity operational footprint designed to prove unit economics before massive capital deployment. We reject the standard model of broad, shallow agricultural investment in favor of deep, systemic control over a specific geographic and agronomic node.
                        </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
{/* Anchor Commodity Cards */}
<div className="bg-surface-container border border-surface-variant p-6 rounded hover:border-secondary transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">agriculture</span>
<span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold tracking-widest uppercase">Anchor I</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">High-Yield Maize</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Primary calorie foundation. Focus on drought-resistant hybrid seeds calibrated for Benue Valley soil composition.</p>
<div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Target Yield</span>
<span className="font-label-bold text-label-bold text-primary">5.5 MT/Ha</span>
</div>
</div>
<div className="bg-surface-container border border-surface-variant p-6 rounded hover:border-secondary transition-colors">
<div className="flex justify-between items-start mb-4">
<span className="material-symbols-outlined text-primary text-3xl">eco</span>
<span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold tracking-widest uppercase">Anchor II</span>
</div>
<h3 className="font-headline-md text-headline-md text-on-surface mb-2">Industrial Soybeans</h3>
<p className="font-body-md text-body-md text-on-surface-variant">High-protein protein core. Critical for establishing the poultry feed value chain and domestic supply security.</p>
<div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center text-sm">
<span className="text-on-surface-variant">Target Yield</span>
<span className="font-label-bold text-label-bold text-primary">2.8 MT/Ha</span>
</div>
</div>
</div>
</div>
{/* Map / Location Area */}
<div className="relative w-full h-[300px] bg-surface-container-high rounded overflow-hidden border border-surface-variant group">
<img alt="Benue Valley Map" className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" data-alt="A highly detailed, professional satellite map rendering or abstract landscape view focusing on the Benue Valley region in Nigeria. The image should feature a modern, minimalist aesthetic with an overlay of sophisticated, glowing technical grid lines and territorial boundaries indicating agricultural zones. The color palette must lean heavily into the UI's brand colors: off-white backgrounds, deep institutional green (primary), and muted gold accents outlining specific geographical nodes. The mood is precise, authoritative, and data-driven, representing strategic agricultural asset management." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqYQFjLVCZrlAPqcPhQQHpXKNF1eGHO0imnEZBONGeP-xs3ooAYcOLUTtoyZ9T7USgo0TfZEKIYWSPxE4TgHCH_G9_RTAAtxPdvZLfF7b6Y4SiHmk23jJX-FeduNprpbB3vVvJhHOVE0KYyjq4Ud_by-FmHk8eIyBjlp9_uTinH5xIoBy9j1XhWgzNXOJBT0a-tTPBmuOaKUaP6Xm2WIXVSIviLxo0xsimlhL9xXXos3VD5KLTi7kMIxT7VNCApyDhxYtGs27MCa0" />
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white">
<h3 className="font-headline-md text-headline-md">Benue Valley Corridor</h3>
<p className="font-body-md text-body-md opacity-80 flex items-center mt-1">
<span className="material-symbols-outlined text-sm mr-1">location_on</span>
                                Primary Deployment Zone
                            </p>
</div>
</div>
</div>
</div>
</section>
{/* Texture Section: Rollout Sequencing */}
<section className="texture-bg border-y border-surface-variant py-stack-lg my-stack-lg">
<div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-headline-lg text-headline-lg text-primary mb-4">4.2 Pilot Deployment Sequencing</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">The structured phase-gate approach to establishing operational dominance in the target corridor.</p>
</div>
{/* High-Density Timeline */}
<div className="relative timeline-line max-w-4xl mx-auto py-8">
{/* Phase 0 */}
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-secondary z-10 shadow-[0_0_0_4px_rgba(168,134,45,0.2)]"></div>
<div className="w-full ml-16 md:ml-0 md:w-5/12 bg-background p-6 border border-surface-variant rounded shadow-sm group-hover:border-secondary transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-label-bold text-label-bold text-secondary tracking-widest uppercase">Phase Zero</span>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-xs rounded">Q3 2026</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Infrastructural Anchor</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Secure primary storage facility and establish baseline logistics routes. Initial soil mapping and local outgrower vetting protocols activated.</p>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 bg-surface-container-low border border-surface-variant text-xs rounded text-on-surface">Storage Sec</span>
<span className="px-2 py-1 bg-surface-container-low border border-surface-variant text-xs rounded text-on-surface">Soil Audit</span>
</div>
</div>
</div>
{/* Phase 1 */}
<div className="relative flex items-center justify-between md:justify-normal md:even:flex-row group mb-12">
<div className="hidden md:block w-5/12 text-right pr-12">
<div className="text-right">
{/* Empty space for structural balance */}
</div>
</div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-surface-variant group-hover:bg-secondary transition-colors z-10"></div>
<div className="w-full ml-16 md:ml-0 md:w-5/12 bg-background p-6 border border-surface-variant rounded shadow-sm group-hover:border-secondary transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-label-bold text-label-bold text-on-surface-variant group-hover:text-secondary transition-colors tracking-widest uppercase">Phase One</span>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-xs rounded">Q4 2026</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Controlled Cultivation</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-4">Deployment of proprietary seed capital across first 500 Hectares. Implementation of rigid agronomist oversight and initial yield tracking metrics.</p>
<div className="flex gap-2">
<span className="w-1/2 h-1 bg-secondary rounded"></span>
<span className="w-1/2 h-1 bg-surface-variant rounded"></span>
</div>
</div>
</div>
{/* Phase 2 */}
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group mb-12">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-surface-variant group-hover:bg-secondary transition-colors z-10"></div>
<div className="w-full ml-16 md:ml-0 md:w-5/12 bg-background p-6 border border-surface-variant rounded shadow-sm group-hover:border-secondary transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="font-label-bold text-label-bold text-on-surface-variant group-hover:text-secondary transition-colors tracking-widest uppercase">Phase Two</span>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-xs rounded">Q1 2027</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Harvest &amp; Processing</h3>
<p className="font-body-md text-body-md text-on-surface-variant">First major off-take execution. Activation of localized processing nodes to minimize transit waste and maximize grade quality.</p>
</div>
</div>
{/* Phase 3 */}
<div className="relative flex items-center justify-between md:justify-normal md:even:flex-row group">
<div className="hidden md:block w-5/12"></div>
<div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background bg-surface-variant group-hover:bg-secondary transition-colors z-10"></div>
<div className="w-full ml-16 md:ml-0 md:w-5/12 bg-background p-6 border border-surface-variant rounded shadow-sm group-hover:border-secondary transition-colors opacity-80 border-dashed">
<div className="flex items-center justify-between mb-2">
<span className="font-label-bold text-label-bold text-on-surface-variant group-hover:text-secondary transition-colors tracking-widest uppercase">Phase Three</span>
<span className="bg-surface-variant text-on-surface-variant px-2 py-0.5 text-xs rounded">Q3 2027</span>
</div>
<h3 className="font-headline-md text-headline-md text-primary mb-2">Institutional Scale</h3>
<p className="font-body-md text-body-md text-on-surface-variant">Integration of automated sorting and secondary value-add processing. Expansion parameters unlocked based on Phase 1 &amp; 2 yield verification.</p>
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
<img alt="Zuma Agro Logo" className="h-full w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCdpl9JDarO4I9YmAaM7C9NbtairVibZWYwotL4_SOYEWFvY82CJy9Tz-0HSpRymGtom6BdDJcOhnLKnjLmyv4LtHxpD-_lz0-q0NnKHy8w_RiMaDBXFip4ghav2jwISnPoszfRc0GL4ciFKw52dxaTLnKvceizrsWnTzxp0ML9ISkFH0elaO_FW3WXGsae5AEbG8mqs0ZwpqkjKIkg_6peqyDt1uklSDBSZMUR6A3W_oFPcBSG9kHvdUfH7J_jnWIlzP3mlUUAn8" style={{"filter":"brightness(0) invert(1)"}} />
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
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Contact Enterprise</Link>
<Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link>
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
