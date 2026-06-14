# NAVIGATION MAP

## Overview
Complete navigation system extraction from Stitch design.

---

## Primary Navigation (Desktop Header)

### Structure
```
Logo | About | Framework | Governance | Impact | Investors | Partnership | Platform | [Executive Access]
```

### Navigation Items

| # | Label | Route | Order | Highlight State |
|---|-------|-------|-------|-----------------|
| 1 | About | `/about` | 1 | Active page highlighted |
| 2 | Framework | `/framework` | 2 | Active page highlighted |
| 3 | Governance | `/governance` | 3 | Active page highlighted |
| 4 | Impact | `/impact` | 4 | Active page highlighted |
| 5 | Investors | `/investors` | 5 | Active page highlighted |
| 6 | Partnership | `/partnership` | 6 | Active page highlighted |
| 7 | Platform | `/platform` | 7 | Active page highlighted |
| 8 | Executive Access | `/enrollment/step1` | CTA | Primary button style |

### Styling
- **Container:** Max-width 1280px, centered
- **Height:** 64px
- **Background:** White (#FFFFFF)
- **Border-bottom:** 1px solid Stone (#EAEDE8)
- **Position:** Sticky, top: 0, z-index: 50
- **Logo:** Left-aligned
- **Nav Links:** Center, flex-row, gap: 32px
- **CTA:** Right-aligned

### Link States
- **Default:** Charcoal (#18211D), font-weight: 500
- **Hover:** Primary green (#005A43)
- **Active:** Primary green, underline
- **Font:** Manrope, 14px, 500 weight

---

## Mobile Navigation (Bottom Bar)

### Structure
```
[Home] | [Platform] | [Initiatives] | [Contact] | [More]
```

### Navigation Items

| # | Label | Icon | Route | Order |
|---|-------|------|-------|-------|
| 1 | Home | Home icon | `/` | 1 |
| 2 | Platform | Grid icon | `/platform` | 2 |
| 3 | Initiatives | Layers icon | `/framework` | 3 |
| 4 | Contact | Mail icon | `/partnership` | 4 |
| 5 | More | Ellipsis icon | (bottom sheet) | 5 |

### Styling
- **Container:** Fixed, bottom: 0, full-width
- **Height:** 64px
- **Background:** White (#FFFFFF)
- **Border-top:** 1px solid Stone (#EAEDE8)
- **Z-index:** 50
- **Layout:** Flex-row, justify-around, items-center

### Item States
- **Default:** Stone (#EAEDE8) icon, 12px label
- **Active:** Primary green (#005A43) icon, Primary green label
- **Hover:** Primary green

### More Button Behavior
- **Trigger:** Tap on "More" icon
- **Action:** Opens bottom sheet modal
- **Content:**
  - About
  - Framework
  - Governance
  - Impact
  - Investors
  - Partnership
  - Executive Access
  - Newsletter Signup

---

## Footer Navigation

### Structure
```
Newsletter | Logo | Platform Links | Framework Links | Governance Links | Connect Links | Copyright
```

### Link Columns

#### Column 1: Platform
| Label | Route |
|-------|-------|
| Enterprise Intelligence System | `/platform` |
| Operational Nodes | `/platform` |
| SBU Alpha (Staples) | `/platform` |
| SBU Beta (Cash Crops) | `/platform` |

#### Column 2: Framework
| Label | Route |
|-------|-------|
| Five Doctrines | `/framework` |
| MVZ Philosophy | `/framework` |
| Deployment Timeline | `/framework` |
| Benue Valley Pilot | `/framework` |

#### Column 3: Governance
| Label | Route |
|-------|-------|
| Board Committees | `/governance` |
| Control Doctrine | `/governance` |
| Separation of Powers | `/governance` |
| Compliance Protocols | `/governance` |

#### Column 4: Connect
| Label | Route |
|-------|-------|
| Partnership Inquiry | `/partnership` |
| Investor Briefing | `/investors` |
| Media Relations | `/about` |
| Careers | `/about` |

### Newsletter Signup
- **Label:** "Sovereign Insights"
- **Placeholder:** "Enter your email"
- **Button:** Subscribe
- **Position:** Top of footer

### Copyright
- **Text:** "© 2026 Zuma Agro-Allied. All rights reserved."
- **Position:** Bottom of footer

---

## Enrollment Flow Navigation

### Progress Indicator
```
[01 Entity] ---- [02 Compliance] ---- [03 Mandate] ---- [04 Review]
```

### Step Navigation

| Step | Route | Previous | Next |
|------|-------|----------|------|
| Step 1 | `/enrollment/step1` | - | `/enrollment/step2` |
| Step 2 | `/enrollment/step2` | `/enrollment/step1` | `/enrollment/step3` |
| Step 3 | `/enrollment/step3` | `/enrollment/step2` | `/enrollment/step4` |
| Step 4 | `/enrollment/step4` | `/enrollment/step3` | Submit |

### Step States
- **Completed:** Green circle with checkmark
- **Active:** Green circle with number
- **Inactive:** Stone circle with number

---

## CTA Navigation

### Landing Page CTAs

| CTA Label | Destination | Type | Position |
|-----------|-------------|------|----------|
| Explore Framework | `/framework` | Primary | Hero |
| Download Prospectus | `/investors` | Secondary | Hero |
| Explore Business Units | `/about` | Secondary | Body |
| Review Governance | `/governance` | Secondary | Body |
| View Phase One Roadmap | `/framework` | Tertiary | Body |
| Executive Access | `/enrollment/step1` | Primary CTA | Header |

### Page-Level CTAs

| Page | CTA Label | Destination |
|------|-----------|-------------|
| Framework | Download Deployment Blueprint | `/investors` |
| Governance | Examine Oversight Protocols | (scroll) |
| Impact | View Sustainability Report | (scroll) |
| Investors | Request Executive Briefing | `/enrollment/step1` |
| Partnership | Become a Partner | `/enrollment/step1` |

---

## Navigation Behavior Rules

### Desktop
1. Sticky header persists on scroll
2. Active page highlighted in nav
3. Hover states on all interactive elements
4. Executive Access button always visible

### Mobile
1. Bottom navigation always visible
2. No hamburger menu (per directive)
3. "More" button opens bottom sheet
4. Header may collapse to logo + CTA only

### Enrollment Flow
1. Progress indicator always visible at top
2. Back button returns to previous step
3. Forward button advances to next step
4. Save Draft preserves form state
5. Submit sends to backend

---

## Navigation Items Count

| Type | Count |
|------|-------|
| Primary Nav | 8 |
| Mobile Nav | 5 |
| Footer Links | 16 |
| CTAs | 12 |
| **Total** | **41** |
