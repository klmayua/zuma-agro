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
        .texture-bg {
            background-image: url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23e1e3df" fill-opacity="0.2" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E');
        }
    
` }} />
      
      
{/* TopNavBar */}
<header className="w-full top-0 sticky bg-white border-b border-outline-variant/20 z-50 transition-colors duration-300">
<div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-5 md:py-6 w-full max-w-container-max mx-auto">
<div className="flex items-center">
<img alt="Zuma Agro Logo" className="h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARTQl5245Oh9koSqCGm3zKlq5QYyK4hj1iu4ha4dzHclZHQIYc9knnHDvE7Xr4WcoiTaQnVb-lM5-YNVRzSHoxWphiQpIJkUldIu9Qo5Nqc0HwquKnAJwZbLX1dZZdWwXpS3HgsWknJSQoeCM3EUue3MdzO2PDTfX_WJQpNaVdMgSlDdjhOKLs5w7d5sCYK0zx6ACJWNst4gZySNXqPE0JlWjwtOXH2tKuRMgFe8dtnQNOAl_aSpguHzdqb_2IZMHXrYHYTvMbyic" />
</div>
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/about">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer transition-all active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/governance-controls">Governance</Link>
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
<main className="flex-grow pt-xl pb-stack-lg px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
{/* Hero Section */}
<section className="mb-stack-lg border-b border-surface-variant pb-stack-md flex flex-col md:flex-row items-start justify-between gap-stack-md">
<div className="max-w-2xl">
<h1 className="font-display-lg text-display-lg text-primary mb-stack-sm">Governance &amp; Controls</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant mb-stack-md">
                    Establishing enduring stability through stringent oversight, separation of powers, and an unwavering commitment to consequence enforcement within the institutional control doctrine.
                </p>
<button className="bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] rounded flex items-center justify-center gap-xs hover:opacity-90 transition-opacity shadow-lg">
<span className="material-symbols-outlined text-[20px]" data-icon="shield">shield</span>
                    Examine Oversight Protocols
                </button>
</div>
<div className="w-full md:w-1/3 aspect-[4/3] bg-surface-container rounded border border-outline-variant overflow-hidden">
<img className="w-full h-full object-cover" data-alt="A formal corporate boardroom viewed from a high angle. The room features a massive polished dark wood table, surrounded by leather executive chairs. Natural light streams through large windows onto the table, creating a serious, institutional mood. The color palette emphasizes deep wood tones, pristine white walls, and touches of institutional green. The overall aesthetic conveys authority, permanence, and stringent oversight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCO_XAtHzHeoJE-PZaoVQ09lNB9sihJlxUA7qZpW4zKHN0DWeWelv-8JeVbCC0w1WdHu4wjpUQxn_k7AMA8cvocReLTUFELJdz8a4ARx9t8BGM1PDyhQJUIMYJOHK4WtkdeM7MmqI4bSCaneEi-Dam2gZ3RQACOjJQKzjHRWQfhWs2DNL7ZvgqnH8-B8AO6I0PRvVMUHco2FTUQXU46utRBbVsoGgQH2HZNdD0O7SSOcz66wkAE74kspc_ZPBcJcrC4waFXCUHqStU" />
</div>
</section>
{/* Bento Grid: Controls Framework */}
<section className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
{/* Board Structures (Spans 8 columns) */}
<div className="md:col-span-8 bg-surface-container-low rounded border border-outline-variant p-stack-md texture-bg shadow-soft">
<h2 className="font-headline-md text-headline-md text-primary mb-stack-md flex items-center gap-2">
<span className="material-symbols-outlined" data-icon="account_balance">account_balance</span>
                    Board Structures
                </h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-stack-sm">
<div className="bg-surface rounded border border-surface-variant p-stack-sm shadow-soft">
<div className="font-label-bold text-label-bold text-secondary mb-2">Audit Committee</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Rigorous financial verification and external compliance alignment.</p>
</div>
<div className="bg-surface rounded border border-surface-variant p-stack-sm shadow-soft">
<div className="font-label-bold text-label-bold text-secondary mb-2">Finance Committee</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Capital allocation strategy and systemic risk mitigation.</p>
</div>
<div className="bg-surface rounded border border-surface-variant p-stack-sm shadow-soft">
<div className="font-label-bold text-label-bold text-secondary mb-2">Governance Committee</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm">Mandate enforcement and executive performance review.</p>
</div>
</div>
</div>
{/* Institutional Control Doctrine (Spans 4 columns) */}
<div className="md:col-span-4 bg-primary text-white rounded p-stack-md flex flex-col justify-center relative overflow-hidden shadow-soft">
<div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{"backgroundImage":"radial-gradient(circle at 100% 0%, #a7f2d3 0%, transparent 70%)"}}></div>
<div className="font-label-bold text-label-bold text-secondary mb-2">Section 2.1</div>
<h3 className="font-headline-md text-headline-md mb-stack-sm text-white">Institutional Control Doctrine</h3>
<p className="font-body-md text-body-md text-white/80">
                    A zero-tolerance framework designed to isolate risk and mandate compliance across all operational tiers.
                </p>
</div>
{/* Separation of Powers Diagram (Spans 6 columns) */}
<div className="md:col-span-6 bg-surface-container-low rounded border border-outline-variant p-stack-md shadow-soft">
<h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Separation of Powers</h3>
<div className="aspect-video bg-surface rounded border border-surface-variant flex items-center justify-center relative p-4">
{/* Abstract representation of separation */}
<div className="flex w-full justify-between items-center px-4">
<div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center font-label-bold text-label-bold text-primary bg-surface-container-low z-10">Exec</div>
<div className="flex-grow h-px bg-outline-variant mx-2 border-dashed border-t-2"></div>
<div className="w-32 h-32 rounded-full border-2 border-secondary flex items-center justify-center font-label-bold text-label-bold text-secondary bg-surface-container-low z-10">Board</div>
<div className="flex-grow h-px bg-outline-variant mx-2 border-dashed border-t-2"></div>
<div className="w-24 h-24 rounded-full border-2 border-error flex items-center justify-center font-label-bold text-label-bold text-error bg-surface-container-low z-10">Audit</div>
</div>
</div>
</div>
{/* Internal Controls / Consequence (Spans 6 columns) */}
<div className="md:col-span-6 bg-surface-container-low rounded border border-outline-variant p-stack-md flex flex-col justify-between shadow-soft">
<div>
<h3 className="font-headline-md text-headline-md text-primary mb-stack-sm">Consequence Enforcement &amp; Crisis Management</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-stack-sm">
                        Pre-defined escalation matrices ensure immediate, proportionate responses to policy deviations or market shocks.
                    </p>
</div>
<div className="space-y-2 mt-4">
<div className="flex items-center gap-3 p-3 bg-surface border border-surface-variant rounded shadow-soft">
<span className="material-symbols-outlined text-error icon-fill" data-icon="gavel">gavel</span>
<span className="font-label-bold text-label-bold text-on-surface">Immediate Disciplinary Matrix</span>
</div>
<div className="flex items-center gap-3 p-3 bg-surface border border-surface-variant rounded shadow-soft">
<span className="material-symbols-outlined text-secondary icon-fill" data-icon="warning">warning</span>
<span className="font-label-bold text-label-bold text-on-surface">Automated Risk Containment Protocols</span>
</div>
</div>
</div>
</section>
</main>
{/* Footer Overhaul */}
<footer className="w-full relative bottom-0 bg-primary text-white pt-4xl pb-xl"><div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mb-3xl"><div className="bg-white/5 border border-white/10 rounded-2xl p-xl flex flex-col md:flex-row items-center justify-between gap-xl backdrop-blur-md"><div><h4 className="font-headline-md text-[24px] font-bold text-white mb-xs">Sovereign Insights</h4><p className="text-white/70 font-body-md">Executive briefings on agro-industrial transformation.</p></div><form className="flex w-full md:w-auto max-w-md gap-sm"><input className="bg-white/10 text-white px-lg py-md rounded-lg border border-white/20 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary flex-grow font-body-md placeholder:text-white/40 min-w-[250px]" placeholder="Executive Email" required={true} type="email" /><button className="bg-secondary text-white font-label-md text-label-md px-xl py-md rounded-lg hover:opacity-90 transition-opacity font-bold shadow-lg" type="submit">Subscribe</button></form></div></div><div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-12 gap-2xl items-start mb-3xl"><div className="col-span-1 lg:col-span-4 flex flex-col gap-xl"><div className="h-20 w-auto">https://lh3.googleusercontent.com/aida-public/AB6AXuACTcUMOJRn0ysfgdNWL4j5W6m2s7-ZL1P4EdnFYnMYawR0PrXl8etkDYTjXkXfhWpPeoejr9tauQIu75FgW5q4xD3Ro5MYj5Xt_bLY2aA25LNwE8dzsg_LRthq2dqPUXDlqVoJXFUNJu2pJjMnnNBufCHwsc7uevuEIabUFsNwyEwBxTc3JQsYy6Kq8hsDrpXn5gVurFg9nCDeowj1qL-1H3C8jiyePmJdc-sE31GhFbF7ulvvv-tNLUgaov4eXUJKhEo-mEznQMo</div><p className="font-body-md text-[16px] text-white/70 max-w-sm leading-relaxed">A sovereign-scale integration architecture connecting production, processing, and distribution across Nigeria.</p></div><div className="col-span-1 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-xl w-full"><div className="flex flex-col gap-md"><h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Platform</h4><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/strategic-framework">Framework</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Strategic Business Units</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Operations</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Technology Stack</Link></div><div className="flex flex-col gap-md"><h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Institutional</h4><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Governance Board</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">ESG Standards</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Risk Management</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Continuity Planning</Link></div><div className="flex flex-col gap-md"><h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Access</h4><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Investors &amp; DFIs</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Contact Enterprise</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/institutional-partnerships">Partnership</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Press &amp; Media</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Careers</Link></div><div className="flex flex-col gap-md"><h4 className="font-executive-caps text-[14px] font-bold tracking-[0.15em] uppercase mb-sm text-secondary">Locations</h4><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Abuja HQ</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Makurdi Hub</Link><Link className="font-body-md text-[16px] text-white/80 hover:text-white transition-colors" href="/">Lagos Terminal</Link></div></div></div><div className="border-t border-white/10"><div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-lg flex flex-col md:flex-row justify-between items-center gap-md"><p className="font-label-sm text-[14px] text-white/50">© Zuma Agro-Allied | 2026. All rights reserved.</p><div className="flex gap-xl"><Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Privacy Policy</Link><Link className="font-label-sm text-[14px] text-white/50 hover:text-white transition-colors" href="/">Terms of Engagement</Link></div></div></div></footer>









    </>
  );
}
