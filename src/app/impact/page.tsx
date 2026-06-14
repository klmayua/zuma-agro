"use client";

import React from "react";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .paper-texture {
            background-color: #f8faf6;
            background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
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
<nav className="hidden md:flex space-x-gutter"><Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/about">About</Link>

<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/strategic-framework">Framework</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/governance-controls">Governance</Link>
<Link className="font-executive-caps text-executive-caps text-secondary border-b border-secondary pb-2 cursor-pointer transition-all active:opacity-80" href="/impact">Impact</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/investor-intelligence">Investors</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/institutional-partnerships">Partnership</Link>
<Link className="font-executive-caps text-executive-caps text-on-surface-variant hover:text-secondary transition-colors duration-300 cursor-pointer active:opacity-80" href="/platform-architecture">Platform</Link></nav>
<button className="hidden md:inline-flex bg-secondary text-white font-label-md text-label-md h-[56px] px-[40px] items-center justify-center rounded hover:opacity-90 transition-colors shadow-lg flex gap-xs">
                Executive Access
                <span className="material-symbols-outlined text-[20px] ml-2" data-icon="arrow_forward">arrow_forward</span>
</button>
<button className="md:hidden text-on-surface">
<span className="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
</header>
{/* Main Content */}
<main className="flex-grow">
{/* Hero Section (Paper Texture) */}
<section className="paper-texture py-stack-lg md:py-[120px] px-margin-mobile md:px-margin-desktop min-h-[716px] flex flex-col justify-center items-center text-center">
<div className="max-w-container-max mx-auto space-y-stack-md">
<span className="inline-block px-4 py-1 border border-primary text-primary rounded-full font-label-bold text-label-bold uppercase tracking-wider">National Imperative</span>
<h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl mx-auto leading-tight">
                    Addressing the $6–10B Annual Food Import Bill
                </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mt-6">
                    A systemic vulnerability framed as a generational investment opportunity. By localizing agricultural production, we mitigate national security risks while unlocking immense economic multipliers.
                </p>
<div className="mt-stack-lg grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-3xl mx-auto">
{/* Metric Card 1 */}
<div className="bg-surface-container-low p-stack-md rounded border border-surface-variant flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-headline-lg text-headline-lg text-secondary mb-2">34M+</span>
<span className="font-label-bold text-label-bold text-primary uppercase tracking-wide">Hectares of Arable Land</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">Underutilized potential awaiting institutional structuring.</p>
</div>
{/* Metric Card 2 */}
<div className="bg-surface-container-low p-stack-md rounded border border-surface-variant flex flex-col items-center justify-center text-center shadow-sm">
<span className="font-headline-lg text-headline-lg text-secondary mb-2">400M</span>
<span className="font-label-bold text-label-bold text-primary uppercase tracking-wide">Projected Population</span>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 text-sm">The demographic imperative driving future domestic demand.</p>
</div>
</div>
</div>
</section>
{/* Multiplier Effects Bento Grid (Deep Green) */}
<section className="bg-primary py-stack-lg md:py-[100px] px-margin-mobile md:px-margin-desktop text-on-primary">
<div className="max-w-container-max mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-stack-lg gap-6">
<div className="max-w-xl">
<h2 className="font-headline-md text-headline-md text-secondary mb-4">10+ Multiplier Effects</h2>
<p className="font-body-lg text-body-lg text-surface-dim">
                            Our localized production models trigger compounding economic benefits across the national value chain.
                        </p>
</div>
<button className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded font-label-bold text-label-bold hover:opacity-90 transition-opacity shadow-lg self-start md:self-end">
<span className="material-symbols-outlined">bar_chart</span>
                        View Sustainability Report
                    </button>
</div>
{/* Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
{/* Feature 1 (Spans 2 cols on desktop) */}
<div className="md:col-span-2 bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
<div className="mb-8">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">factory</span>
<h3 className="font-headline-md text-headline-md text-white mb-2">Rural Industrialisation</h3>
<p className="font-body-md text-body-md text-surface-dim max-w-lg">
                                Transforming agrarian communities into agro-processing hubs. We establish localized infrastructure that retains value at the source, reducing post-harvest losses and driving regional GDP growth.
                            </p>
</div>
<div className="flex items-center justify-between border-t border-on-primary-fixed-variant/50 pt-4 mt-auto">
<span className="font-label-bold text-label-bold text-secondary uppercase tracking-wider">Impact Vector 01</span>
<span className="material-symbols-outlined text-surface-dim group-hover:text-secondary transition-colors">arrow_outward</span>
</div>
</div>
{/* Feature 2 */}
<div className="bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
<div className="mb-8">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">currency_exchange</span>
<h3 className="font-headline-md text-headline-md text-white mb-2">FX Stabilisation</h3>
<p className="font-body-md text-body-md text-surface-dim">
                                Direct substitution of imported commodities with domestically produced equivalents, conserving vital foreign exchange reserves.
                            </p>
</div>
<div className="mt-auto">
<span className="font-headline-lg text-headline-lg text-secondary block mb-2">-$2B</span>
<span className="font-label-sm text-label-sm text-surface-dim uppercase">Targeted Import Reduction</span>
</div>
</div>
{/* Feature 3 */}
<div className="bg-primary-container p-stack-md rounded border border-on-primary-fixed-variant/30 flex flex-col justify-between group hover:border-secondary/50 transition-colors">
<div className="mb-8">
<span className="material-symbols-outlined text-secondary text-4xl mb-4">groups</span>
<h3 className="font-headline-md text-headline-md text-white mb-2">Youth Employment</h3>
<p className="font-body-md text-body-md text-surface-dim">
                                Creating formalized, high-skill roles in modern agronomy, logistics, and agribusiness management.
                            </p>
</div>
<div className="mt-auto">
<span className="font-headline-lg text-headline-lg text-secondary block mb-2">50k+</span>
<span className="font-label-sm text-label-sm text-surface-dim uppercase">Direct Jobs Projected</span>
</div>
</div>
{/* Image Placeholder (Spans 2 cols) */}
<div className="md:col-span-2 relative min-h-[300px] rounded overflow-hidden border border-on-primary-fixed-variant/30">
<div className="absolute inset-0 bg-cover bg-center" data-alt="A sweeping, cinematic aerial view of a massive, modern agricultural facility surrounded by vast, perfectly regimented fields of crops in varying shades of deep green. The scene is bathed in golden hour sunlight, casting long shadows and highlighting the geometric precision of the farm layout. The aesthetic is premium, emphasizing scale, technological advancement, and institutional stability against the raw natural landscape." style={{"backgroundImage":"url('https://lh3.googleusercontent.com/aida-public/AB6AXuBWREz9DewjetTuroZ_YdGpvAhXvv9ZXTwlwmmOUXurbcX05b3Wy3_sYVEiotcv74mxLZjng79OrRE6DKDL1O05g81FitUiGeVuf4YSRT85e7CRl0LRuGHFRryUWvJYggNHu8fThLnHgwWxRxrjC-1TGudJ4W82y3_J1TTbNkJVaXHESOWrwE6ul1uD1B-1wFuvEmmnInD09yL1IIRcVTw4Lgc4KEqCatMJ466UsyO7SZyzvNM0GVD6XNBd1Gap3CFlcG3Upc2k7vE')"}}></div>
<div className="absolute inset-0 bg-primary/60 mix-blend-multiply"></div>
<div className="absolute bottom-0 left-0 p-stack-md w-full bg-gradient-to-t from-primary to-transparent">
<h3 className="font-headline-md text-headline-md text-secondary">Scale &amp; Precision</h3>
<p className="font-body-md text-body-md text-surface-dim mt-2">Institutional-grade execution across the agricultural belt.</p>
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
