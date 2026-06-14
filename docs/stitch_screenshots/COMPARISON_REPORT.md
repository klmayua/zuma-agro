# ZUMA AGRO - Stitch Design vs Implementation Comparison Report

**Date:** 2026-06-15  
**Screenshots Downloaded:** 12 files to `C:\Users\hp\Desktop\KLM2026\ZUMA_AGRO\docs\stitch_screenshots\`  
**HTML Source Files:** 12 files in `C:\Users\hp\Desktop\KLM2026\ZUMA_AGRO\docs\stitch_html\`

---

## 1. COLOR SYSTEM COMPARISON

### Stitch Design (Canonical) - From HTML tailwind.config

| Token Name | Hex Value | Usage |
|---|---|---|
| **primary** | `#005a43` | Deep institutional green |
| **secondary** | `#a8862d` | Heritage gold (most pages) |
| **secondary** (about page) | `#775a00` | Darker gold variant |
| **error / premium-red** | `#ba1a1a` | Premium red |
| **background / surface** | `#f8faf6` | Off-white ivory |
| **surface-container-low** | `#f2f4f0` | Light sage |
| **surface-container** | `#eceeeb` | Medium sage |
| **surface-container-high** | `#e7e9e5` | Elevated sage |
| **surface-container-highest** | `#e1e3df` | Darkest sage |
| **surface-variant** | `#e1e3df` | Border gray |
| **on-surface** | `#191c1a` | Near-black text |
| **on-surface-variant** | `#3f4944` | Muted text |
| **outline** | `#6f7974` | Gray outline |
| **outline-variant** | `#bfc9c2` | Light border |
| **primary-container** | `#005a43` | Same as primary |
| **secondary-container** | `#fed574` | Light gold |
| **primary-fixed** | `#a7f2d3` | Mint accent |
| **primary-fixed-dim** | `#8cd5b8` | Dimmed mint |
| **inverse-primary** | `#8cd5b8` | Inverse mint |
| **surface-dim** | `#d8dbd7` | Dim surface |
| **surface-bright** | `#f8faf6` | Bright surface |
| **surface-tint** | `#1d6a52` | Tinted primary |
| **tertiary** | `#77000a` | Deep red |
| **tertiary-container** | `#a20012` | Red container |

### Implementation (Current) - From globals.css + design-tokens.ts

| Token Name | Hex Value | Usage |
|---|---|---|
| **primary** | `#005A43` | Matches Stitch |
| **primary-dark** | `#004D3A` | Custom addition |
| **primary-light** | `#006B53` | Custom addition |
| **secondary** | `#C9A03D` | **MISMATCH** - Brighter gold |
| **secondary-dark** | `#A68533` | Custom |
| **secondary-light** | `#D4AF37` | Custom |
| **error** | `#B63A3A` | **MISMATCH** - Lighter than Stitch |
| **error-dark** | `#962E2E` | Custom |
| **error-light** | `#DC2626` | Custom |
| **background** | `#F8F8F4` | **MISMATCH** - Slightly warmer |
| **foreground** | `#18211D` | **MISMATCH** - Different dark |
| **surface-ivory** | `#F8F8F4` | **MISMATCH** - vs `#f8faf6` |
| **surface-stone** | `#EAEDE8` | **MISMATCH** - vs `#e1e3df` |
| **surface-white** | `#FFFFFF` | Matches |
| **surface-charcoal** | `#18211D` | **MISMATCH** - vs `#191c1a` |
| **surface-slate** | `#6B7280` | **MISMATCH** - vs `#6f7974` |

### Critical Color Differences

1. **Secondary Gold**: Stitch uses `#a8862d` (muted, earthy), Implementation uses `#C9A03D` (brighter, more saturated)
2. **Background**: Stitch `#f8faf6` (cool off-white), Implementation `#F8F8F4` (warm off-white)
3. **Error Red**: Stitch `#ba1a1a`, Implementation `#B63A3A`
4. **Surface Charcoal**: Stitch `#191c1a`, Implementation `#18211D`
5. **Missing tokens**: Implementation lacks 30+ Material Design 3 tokens used in Stitch (surface-container variants, primary-fixed, inverse-*, tertiary, etc.)

---

## 2. TYPOGRAPHY COMPARISON

### Stitch Design System

| Token | Font | Size | Line Height | Weight | Letter Spacing |
|---|---|---|---|---|---|
| **display-lg** | Libre Caslon Text | 48px | 56px | 700 | -0.02em |
| **display-lg-mobile** | Libre Caslon Text | 36px | 44px | 700 | - |
| **headline-xl** | Libre Caslon Text | 48px | 56px | 700 | -0.02em |
| **headline-lg** | Libre Caslon Text | 32px | 40px | 600 | - |
| **headline-lg-mobile** | Libre Caslon Text | 28px | 36px | 600 | -0.01em |
| **headline-md** | Libre Caslon Text | 24px | 32px | 600 | - |
| **body-lg** | Manrope | 18px | 28px | 400 | - |
| **body-md** | Manrope | 16px | 24px | 400 | - |
| **label-bold** | Manrope | 14px | 20px | 700 | 0.05em |
| **label-md** | Manrope | 14px | 20px | 600 | 0.05em |
| **label-sm** | Manrope | 12px | 16px | 500 | - |
| **executive-caps** | Manrope | 12px | 16px | 700 | 0.1em |

### Implementation System

| Token | Font | Size | Line Height | Weight | Letter Spacing |
|---|---|---|---|---|---|
| **h1** | Inter | 3.5rem (56px) | 1.2 | 700 | -0.02em |
| **h1-mobile** | Inter | 2.25rem (36px) | 1.2 | 700 | - |
| **h2** | Inter | 2.5rem (40px) | 1.2 | 600 | -0.01em |
| **h3** | Inter | 2rem (32px) | 1.2 | 600 | - |
| **h4** | Inter | 1.5rem (24px) | 1.2 | 500 | - |
| **body-lg** | Inter | 1.125rem (18px) | 1.5 | 400 | - |
| **body-md** | Inter | 1rem (16px) | 1.5 | 400 | - |
| **label-sm** | Inter | 0.875rem (14px) | 1 | 600 | 0.05em |
| **sans** | Inter | - | - | - | - |
| **serif** | Libre Caslon Text | - | - | - | - |

### Critical Typography Differences

1. **Primary Body Font**: Stitch uses **Manrope** for all body/label text; Implementation uses **Inter** everywhere
2. **Display/Headline Font**: Stitch uses **Libre Caslon Text** (serif) for all headlines; Implementation only loads Inter and uses it for headlines too
3. **Missing Font Tokens**: Implementation lacks `executive-caps`, `label-bold`, `label-md`, `headline-xl`, `headline-lg-mobile` tokens
4. **Font Loading**: Stitch loads both `Libre Caslon Text` + `Manrope` from Google Fonts; Implementation only loads Inter via `next/font`
5. **Line Heights**: Stitch uses tighter line heights (e.g., body-md 24px vs implementation 24px/1.5)

---

## 3. SPACING & LAYOUT COMPARISON

### Stitch Design Spacing

| Token | Value |
|---|---|
| container-max | 1280px |
| margin-desktop | 64px |
| margin-mobile | 20px |
| gutter | 24px |
| stack-sm | 12px |
| stack-md | 24px |
| stack-lg | 48px |
| base / unit / sm | 8px |
| xs | 4px |
| xl | 32px |
| 2xl | 48px |
| 3xl | 64px |
| 4xl | 96px |

### Implementation Spacing

| Token | Value |
|---|---|
| maxWidth | 1280px |
| marginDesktop | 40px |
| marginMobile | 16px |
| gutter | 24px |
| base | 8px |

### Critical Spacing Differences

1. **Desktop Margin**: Stitch `64px` vs Implementation `40px` - **24px narrower content area**
2. **Mobile Margin**: Stitch `20px` vs Implementation `16px` - **4px narrower on mobile**
3. **Missing Tokens**: Implementation lacks `stack-sm/md/lg`, `xl/2xl/3xl/4xl` semantic spacing tokens
4. **Container**: Both use 1280px max-width - matches

---

## 4. BORDER RADIUS COMPARISON

### Stitch Design

| Token | Value |
|---|---|
| DEFAULT | 0.125rem (2px) |
| lg | 0.25rem (4px) |
| xl | 0.5rem (8px) |
| full | 0.75rem (12px) |
| 2xl | 1rem (16px) |
| 3xl | 1.5rem (24px) |

### Implementation

| Token | Value |
|---|---|
| sm | 0.25rem (4px) |
| DEFAULT | 0.5rem (8px) |
| md | 0.75rem (12px) |
| lg | 1rem (16px) |
| xl | 1.5rem (24px) |
| full | 9999px |

### Differences

- Stitch has much tighter default radius (2px vs 8px)
- Implementation's `full` is pill-shaped (9999px) vs Stitch's rounded (12px)
- Stitch's `3xl` (24px) maps to Implementation's `xl` (24px) - same value, different name

---

## 5. SHADOW SYSTEM COMPARISON

### Stitch Design

| Token | Value |
|---|---|
| soft | `0 4px 20px -2px rgba(0,0,0,0.05)` |
| elevated | `0 10px 30px -5px rgba(0,0,0,0.08)` |
| institutional | `0 20px 40px -10px rgba(0,0,0,0.1)` |

### Implementation

| Token | Value |
|---|---|
| sm | `0 1px 2px 0 rgba(0,0,0,0.05)` |
| DEFAULT | `0px 4px 12px rgba(0,0,0,0.03)` |
| md | `0px 8px 24px rgba(0,0,0,0.06)` |
| lg | `0px 12px 32px rgba(0,0,0,0.08)` |

### Differences

- Stitch uses `-2px` / `-5px` / `-10px` spread offsets for tighter shadows
- Implementation lacks the `institutional` level shadow (20px 40px)
- Stitch shadows are generally larger and more diffused

---

## 6. PAGE-BY-PAGE STRUCTURAL COMPARISON

### 01 - Sovereign Landing Page (`sovereign-landing-page.html`)

**Stitch Design:**
- Sticky header with `bg-white`, border-bottom, `py-5 md:py-6`
- Logo: `h-16 w-auto`
- Nav items: `font-executive-caps` (Manrope 12px 700 0.1em uppercase)
- CTA button: `bg-secondary` (gold `#a8862d`), `h-[56px] px-[40px]`
- Hero: Full-width, `min-h-[700px]`, dark overlay `bg-[#0a110d]` + gradient
- Badge: `bg-white/10`, `backdrop-blur-md`, `rounded-full`, `border border-white/20`
- SBU Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`, `gap-xl`, cards `rounded-3xl p-xl shadow-institutional`
- Doctrines: `bg-primary` section, `bg-white/5 backdrop-blur-lg rounded-3xl p-2xl`
- Footer: `bg-primary`, newsletter form with `bg-white/5` card

**Implementation (HeroSection.tsx):**
- Simple gradient overlay `from-primary/80 to-primary-dark/90`
- No hero image, no dark photo background
- Missing SBU grid section
- Missing doctrines section
- Missing Benue Valley pilot section
- **Major gap: Landing page is drastically simplified vs Stitch**

### 02 - About Page (`about-zuma.html`)

**Stitch Design:**
- Hero: Full-bleed image with `bg-primary/70 mix-blend-multiply` overlay
- SBU section: `bg-surface-container-lowest`, border-top cards with `border-t-2 border-primary`
- Board section: `bg-surface-container-low`, `rounded-DEFAULT` cards with avatar circles
- Executive section: `bg-surface-container-lowest`, 4-column grid
- Partners section: `bg-surface-container-high`, categorized partner grid (Sovereign, DFI, Corporate)
- Partner cards: `aspect-square md:aspect-video`, grayscale icons with hover:grayscale-0

**Implementation:**
- Needs comparison with `about/page.tsx` and related components

### 03 - Framework (`strategic-framework.html`)

**Stitch Design:**
- Hero: `py-stack-lg md:py-24`, section badge with dot indicator
- Asymmetric layout: `md:grid-cols-12`, left sidebar (4 cols) + right content (8 cols)
- Sidebar: `sticky top-[120px]`, `bg-surface-container-low`, doctrines list
- MVZ section: Anchor commodity cards with `bg-surface-container`, border
- Timeline: Custom `timeline-line::before` with absolute positioning
- Texture background: `texture-bg` with SVG noise filter

**Implementation:**
- Needs comparison with `framework/page.tsx` components

### 04 - Platform (`platform-architecture.html`)

**Stitch Design:**
- Paper texture background: `paper-texture` with SVG noise
- EIS section: `bg-primary` full-width card with `rounded-xl`, animated ping effect
- Critical Nodes: `md:grid-cols-4`, `bg-surface-container-lowest` cards with icon boxes
- SBUs: `md:grid-cols-2`, `bg-surface-container` cards with metric buttons

### 05 - Governance (`governance-controls.html`)

**Stitch Design:**
- Bento grid: `md:grid-cols-12`
- Board structures: `md:col-span-8`, 3-column inner grid
- Control doctrine: `md:col-span-4`, `bg-primary text-white`
- Separation of powers: `md:col-span-6`, abstract circle diagram with dashed lines
- Consequence: `md:col-span-6`, list items with icon badges

### 06 - Impact (`impact-multiplier.html`)

**Stitch Design:**
- Hero: Paper texture, centered, `min-h-[716px]`
- Metric cards: 2-column grid with `bg-surface-container-low`
- Multiplier section: `bg-primary py-stack-lg`, bento grid
- Feature cards: `md:col-span-2` and single col, `bg-primary-container`
- Image placeholder: `md:col-span-2`, background image with `bg-primary/60` overlay

### 07 - Investors (`investor-intelligence.html`)

**Stitch Design:**
- Header with `shield_lock` icon and section label
- Capital stack: `md:col-span-8`, horizontal stacked bar chart (50%/20%/30%)
- Alignment panel: `md:col-span-4`, DFI box with `bg-primary`
- Use of Funds: Full-width table with tranches T-01 through T-05, total $25M

### 08 - Partnership (`institutional-partnerships.html`)

**Stitch Design:**
- Hero: Dark photo background `bg-[#0a110d]`, gradient overlay
- Three-tier model: `md:grid-cols-3`, numbered cards with `rounded-3xl p-xl shadow-institutional`
- Sovereign alignment: `bg-primary`, glass-morphism cards `bg-white/5 backdrop-blur-lg`

### 09-12 - Enrollment Steps

**Step 1 (Institutional Classification):**
- Fixed header (`position: fixed` not `sticky`)
- Progress indicator: 4-step horizontal with active state
- Form inputs: Custom `.form-input-premium` and `.form-select-premium` classes
- Uses `Inter` font specifically for form elements (`font-sans-inter`)
- Step number uses italic serif font

**Step 2 (Partnership Architecture):**
- Radio card selection with custom `.tier-card` styles
- Selected state: `border-color: #005a43`, `box-shadow: inset 0 0 0 1px`
- Custom radio buttons with after pseudo-element

**Step 3 (Strategic Mandate Alignment):**
- Multi-section form with radio groups and checkbox grids
- Geographic corridor cards with hover states
- Commodity checkboxes in grid layout
- Resource commitment radio cards

**Step 4 (Final Verification):**
- Bento layout: 8-col summary + 4-col actions
- Summary card with `border-l-4 border-l-secondary`
- Stacked avatar indicators for progress
- Protocol affirmation checkbox with peer-checked styling
- Due diligence notice with diagonal stripe pattern background

---

## 7. COMPONENT-LEVEL DIFFERENCES

### Header/Navigation

| Aspect | Stitch | Implementation |
|---|---|---|
| Position | `sticky` | `sticky` |
| Height | `py-5 md:py-6` (~44-48px padding) | `h-16` (64px fixed) |
| Logo height | `h-16` (64px) | `h-10` (40px) - **smaller** |
| Nav font | `font-executive-caps` (12px 700 0.1em) | `text-sm font-medium` (14px 500) |
| Nav color | `text-on-surface-variant` hover `text-secondary` | `text-surface-charcoal` hover `text-primary` |
| Active nav | `text-secondary border-b border-secondary pb-2` | Not implemented |
| CTA bg | `bg-secondary` (gold `#a8862d`) | `bg-error` (red `#B63A3A`) - **WRONG COLOR** |
| CTA height | `h-[56px] px-[40px]` | `px-5 py-2.5` - **much smaller** |

### Buttons

| Aspect | Stitch | Implementation |
|---|---|---|
| Primary bg | `bg-secondary` (gold) | `bg-primary` (green) |
| Primary height | `h-[56px] px-[40px]` | `h-11 px-5` |
| Primary radius | `rounded` (0.125rem) | `rounded-lg` (0.5rem) |
| Secondary | `bg-transparent border-2 border-white/30` | `bg-secondary` |
| Hover | `hover:opacity-90` | `hover:outline hover:outline-2` |

### Cards

| Aspect | Stitch | Implementation |
|---|---|---|
| SBU cards | `rounded-3xl p-xl shadow-institutional` | Not fully implemented |
| Border | `border border-outline-variant/10` | Different border tokens |
| Icon size | `text-[64px] font-light` | Different sizing |
| Label | `text-[11px] font-bold tracking-[0.15em]` | Different |

### Footer

| Aspect | Stitch | Implementation |
|---|---|---|
| Background | `bg-primary` | Needs verification |
| Newsletter | `bg-white/5 border border-white/10 rounded-2xl` | Needs implementation |
| Logo | `filter: brightness(0) invert(1)` (white) | Needs verification |
| Grid | `grid-cols-2 md:grid-cols-4` for links | Different layout |
| Section headers | `font-executive-caps` gold color | Different |

---

## 8. MISSING IMPLEMENTATIONS (High Priority)

Based on Stitch designs vs current code:

1. **Landing page hero** - Stitch has dark photo background with gradient overlay; implementation has simple gradient
2. **SBU cards section** - Full 3-column grid with icons, labels, descriptions
3. **Doctrines section** - 5 numbered items with glass-morphism cards on green background
4. **Benue Valley pilot section** - Complex card with stats, feature list, and validation trigger
5. **About hero** - Full-bleed image with blend-mode overlay
6. **Board/Executive sections** - Avatar circles, role descriptions, 4-column grids
7. **Partners section** - Categorized partner grid with grayscale icons
8. **Framework timeline** - Custom CSS timeline with alternating layout
9. **Platform EIS section** - Animated ping effect, bento layout
10. **Governance bento grid** - Complex 12-column asymmetric layout
11. **Impact bento grid** - Feature cards spanning multiple columns
12. **Investors capital stack** - Horizontal stacked bar chart
13. **Investors use-of-funds table** - Styled data table
14. **Partnership tier cards** - Numbered cards with hover effects
15. **All 4 enrollment steps** - Complete form flows with progress indicators

---

## 9. RECOMMENDED FIXES (Priority Order)

### Critical (Visual Fidelity)

1. **Add Manrope font** to layout.tsx alongside Inter
2. **Fix secondary color** from `#C9A03D` to `#a8862d`
3. **Fix error color** from `#B63A3A` to `#ba1a1a`
4. **Fix background color** from `#F8F8F4` to `#f8faf6`
5. **Fix foreground color** from `#18211D` to `#191c1a`
6. **Fix CTA button color** from `bg-error` to `bg-secondary` (gold)
7. **Fix header padding** to `py-5 md:py-6` for proper height
8. **Fix logo height** to `h-16` for proper sizing
9. **Fix nav font** to uppercase 12px with letter-spacing
10. **Fix desktop margin** from `40px` to `64px`

### Important (Component Accuracy)

11. Implement SBU cards grid on landing page
12. Implement doctrines section with glass-morphism
13. Implement Benue Valley pilot section
14. Add all 30+ missing Material Design 3 color tokens
15. Implement executive-caps font token (12px 700 0.1em uppercase)
16. Fix border radius defaults (2px default, not 8px)
17. Implement institutional shadow token
18. Build complete footer with newsletter form
19. Build all 4 enrollment step pages
20. Build partnership tier selection cards

### Nice to Have

21. Paper texture backgrounds (SVG noise filters)
22. Timeline CSS for framework page
23. Animated ping effect for EIS section
24. Diagonal stripe pattern for due diligence notice
25. Custom radio/checkbox styling for forms

---

## 10. FILES REFERENCE

### Screenshots (Downloaded)
```
C:\Users\hp\Desktop\KLM2026\ZUMA_AGRO\docs\stitch_screenshots\
  01-sovereign-landing.png (24,711 bytes)
  02-about.png (18,152 bytes)
  03-framework.png (21,783 bytes)
  04-platform.png (35,802 bytes)
  05-governance.png (47,133 bytes)
  06-impact.png (31,769 bytes)
  07-investors.png (35,815 bytes)
  08-partnership.png (27,633 bytes)
  09-enrollment-step1.png (29,844 bytes)
  10-enrollment-step2.png (36,990 bytes)
  11-enrollment-step3.png (28,353 bytes)
  12-enrollment-step4.png (35,780 bytes)
```

### Stitch HTML Source
```
C:\Users\hp\Desktop\KLM2026\ZUMA_AGRO\docs\stitch_html\
  sovereign-landing-page.html
  about-zuma.html
  strategic-framework.html
  platform-architecture.html
  governance-controls.html
  impact-multiplier.html
  investor-intelligence.html
  institutional-partnerships.html
  enrollment-step1.html
  enrollment-step2.html
  enrollment-step3.html
  enrollment-step4.html
```

### Implementation Files
```
src/app/globals.css - CSS variables and theme
src/lib/design-tokens.ts - TypeScript design tokens
src/app/layout.tsx - Root layout with font loading
src/components/navigation/Header.tsx - Header component
src/components/sections/HeroSection.tsx - Landing hero
```
