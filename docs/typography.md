# TYPOGRAPHY

## Font Families

### Primary Font
- **Family:** Inter
- **Usage:** All text (headlines, body, labels)
- **Source:** Google Fonts

### Alternative (from Design MD)
- **Headlines:** Libre Caslon Text (serif)
- **Body:** Manrope (sans-serif)
- **Note:** Stitch design system uses Inter exclusively

---

## Type Scale

### Headlines

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| headline-h1 | Inter | 56px | 700 | 1.2 | -0.02em | Main page headlines |
| headline-h2 | Inter | 40px | 600 | 1.2 | -0.01em | Section headlines |
| headline-h3 | Inter | 32px | 600 | 1.2 | 0 | Sub-section headlines |
| headline-h4 | Inter | 24px | 500 | 1.2 | 0 | Card headlines |
| h1-mobile | Inter | 36px | 700 | 1.2 | 0 | Mobile headlines |

### Body Text

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| body-lg | Inter | 18px | 400 | 1.5 | 0 | Lead paragraphs |
| body-md | Inter | 16px | 400 | 1.5 | 0 | Body paragraphs |

### Labels

| Token | Font | Size | Weight | Line Height | Letter Spacing | Usage |
|-------|------|------|--------|-------------|----------------|-------|
| label-sm | Inter | 14px | 600 | 1 | 0.05em | All caps labels, badges |

---

## Responsive Typography

### Desktop (>1024px)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 56px | 700 | 1.2 |
| H2 | 40px | 600 | 1.2 |
| H3 | 32px | 600 | 1.2 |
| H4 | 24px | 500 | 1.2 |
| Body LG | 18px | 400 | 1.5 |
| Body MD | 16px | 400 | 1.5 |
| Label SM | 14px | 600 | 1.0 |

### Tablet (768px - 1024px)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 48px | 700 | 1.2 |
| H2 | 36px | 600 | 1.2 |
| H3 | 28px | 600 | 1.2 |
| H4 | 22px | 500 | 1.2 |
| Body LG | 18px | 400 | 1.5 |
| Body MD | 16px | 400 | 1.5 |
| Label SM | 14px | 600 | 1.0 |

### Mobile (<768px)
| Element | Size | Weight | Line Height |
|---------|------|--------|-------------|
| H1 | 36px | 700 | 1.2 |
| H2 | 28px | 600 | 1.2 |
| H3 | 24px | 600 | 1.2 |
| H4 | 20px | 500 | 1.2 |
| Body LG | 16px | 400 | 1.5 |
| Body MD | 14px | 400 | 1.5 |
| Label SM | 12px | 600 | 1.0 |

---

## Font Weights

| Weight | Name | Usage |
|--------|------|-------|
| 400 | Regular | Body text |
| 500 | Medium | H4, navigation links |
| 600 | Semibold | H2, H3, buttons |
| 700 | Bold | H1, headlines |

---

## Letter Spacing

| Value | Usage |
|-------|-------|
| -0.02em | H1 (large headlines) |
| -0.01em | H2 |
| 0 | H3, H4, body text |
| 0.05em | Labels (all caps) |

---

## Text Colors

| Color | HEX | Usage |
|-------|-----|-------|
| Charcoal | #18211D | Primary text |
| Slate | #6B7280 | Secondary text |
| White | #FFFFFF | Text on dark backgrounds |
| Primary Green | #005A43 | Links, active states |
| Heritage Gold | #C9A03D | Accent text |

---

## Line Heights

| Ratio | Usage |
|-------|-------|
| 1.0 | Labels, badges |
| 1.2 | Headlines (compact) |
| 1.5 | Body text (readable) |

---

## Text Alignment

| Context | Alignment |
|---------|-----------|
| Hero Headlines | Left or Center |
| Body Text | Left |
| Card Text | Left |
| Labels | Left or Center |
| Captions | Center |

---

## Typography Rules

1. **Headlines:** Tight line-spacing (1.2) for compact, authoritative feel
2. **Body Text:** Generous 1.5 ratio for readability of dense data
3. **Large Headlines (H1-H2):** Negative letter-spacing for high-end financial broadsheet feel
4. **Labels:** All caps with 0.05em letter-spacing for institutional appearance
5. **Data Tables:** Headers in Label-SM (All Caps) for disciplined look
