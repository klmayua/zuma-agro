# COMPONENT MAP

## Overview
Complete component inventory extracted from Stitch design system.

---

## Global Components

### 1. TopNavBar
- **Parent:** Layout (App)
- **Children:** Logo, NavLinks, ExecutiveAccessCTA, MobileMenuButton
- **Styling:**
  - Background: White (#FFFFFF)
  - Border-bottom: 1px solid Stone (#EAEDE8)
  - Height: 64px (desktop), 56px (mobile)
  - Padding: 0 40px (desktop), 0 20px (mobile)
  - Position: Sticky, top: 0
  - Z-index: 50
- **Responsive:**
  - Desktop: Full nav links visible
  - Mobile: Hamburger menu (not used per directive - use bottom nav)

### 2. Footer
- **Parent:** Layout (App)
- **Children:** NewsletterForm, Logo, LinkColumns, CopyrightBar
- **Styling:**
  - Background: Charcoal (#18211D)
  - Text: White
  - Padding: 64px 40px (desktop), 40px 20px (mobile)
- **Responsive:**
  - Desktop: 4-column link grid
  - Mobile: Single column, stacked

### 3. BottomNav (Mobile Only)
- **Parent:** Layout (Mobile)
- **Children:** Home, Platform, Initiatives, Contact, More
- **Styling:**
  - Background: White
  - Border-top: 1px solid Stone
  - Height: 64px
  - Position: Fixed, bottom: 0
  - Z-index: 50
- **Items:**
  1. Home → `/`
  2. Platform → `/platform`
  3. Initiatives → `/framework`
  4. Contact → `/partnership`
  5. More → (bottom sheet)

---

## Hero Components

### 4. HeroFullWidth
- **Parent:** Page
- **Children:** BackgroundImage, GradientOverlay, Badge, Headline, Subtitle, CTAGroup
- **Styling:**
  - Height: 500px (desktop), 400px (mobile)
  - Background: Image with gradient overlay
  - Text: White
  - Max-width: 1280px (content)

### 5. HeroSplit
- **Parent:** Page
- **Children:** TextContent, ImageContent
- **Styling:**
  - Layout: Flex-row (60/40 split)
  - Max-width: 1280px

### 6. HeroCentered
- **Parent:** Page
- **Children:** Badge, Headline, Subtitle, MetricCards
- **Styling:**
  - Layout: Flex-col, centered
  - Max-width: 800px

---

## Card Components

### 7. MetricCard
- **Parent:** MetricsSection
- **Children:** StatValue, StatLabel
- **Styling:**
  - Background: White
  - Border: 1px solid Stone (#EAEDE8)
  - Border-radius: 12px
  - Padding: 24px
  - Shadow: 0px 4px 12px rgba(0,0,0,0.03)
- **Responsive:**
  - Desktop: 4-column grid
  - Mobile: 2-column grid

### 8. SBUCard
- **Parent:** SBUGrid
- **Children:** Icon, Label, Heading, Description
- **Styling:**
  - Background: White
  - Border: 1px solid Stone
  - Border-radius: 12px
  - Padding: 32px
  - Hover: Border-color transitions to Gold (#C9A03D)

### 9. DoctrineCard
- **Parent:** DoctrinesSection
- **Children:** NumberBadge, Heading, Description
- **Styling:**
  - Background: White
  - Border: 1px solid Stone
  - Border-radius: 12px
  - Padding: 24px

### 10. TierCard
- **Parent:** PartnershipModel
- **Children:** NumberBadge, Heading, Description, CTAButton
- **Styling:**
  - Background: White
  - Border: 1px solid Stone
  - Border-radius: 12px
  - Padding: 32px
  - Hover: Border-color to Gold

### 11. GlassBlurCard
- **Parent:** SovereignAlignment
- **Children:** Heading, Description, CTAButton
- **Styling:**
  - Background: rgba(255,255,255,0.1)
  - Backdrop-filter: blur(12px)
  - Border: 1px solid rgba(255,255,255,0.2)
  - Border-radius: 12px

### 12. NodeCard
- **Parent:** OperationalNodes
- **Children:** Icon, Heading, Description
- **Styling:**
  - Background: White
  - Border: 1px solid Stone
  - Border-radius: 12px
  - Padding: 24px

---

## Form Components

### 13. ProgressIndicator
- **Parent:** EnrollmentLayout
- **Children:** StepIndicators (4), ConnectingLine
- **Styling:**
  - Layout: Horizontal flex
  - Height: 64px
  - Steps: Circles with numbers
  - Active: Primary green (#005A43)
  - Completed: Primary green with checkmark
  - Inactive: Stone (#EAEDE8)

### 14. FormField
- **Parent:** FormArea
- **Children:** Label, Input/Select, HelperText
- **Styling:**
  - Background: Stone (#EAEDE8)
  - Border: 1px solid Slate
  - Border-radius: 8px
  - Padding: 12px 16px
  - Focus: Border-color to Primary green

### 15. RadioCard
- **Parent:** SelectionGroup
- **Children:** RadioButton, Heading, Description
- **Styling:**
  - Background: White
  - Border: 2px solid Stone
  - Border-radius: 12px
  - Padding: 20px
  - Selected: Border-color to Primary green, bg tinted

### 16. CheckboxGroup
- **Parent:** FormSection
- **Children:** Checkbox, Label
- **Styling:**
  - Border: 1px solid Stone
  - Border-radius: 8px
  - Checked: Primary green background

### 17. SubmitButton
- **Parent:** FormActions
- **Children:** ButtonText
- **Styling:**
  - Background: Rich Red (#B63A3A)
  - Text: White
  - Border-radius: 8px
  - Padding: 12px 24px
  - Hover: 2px Heritage Gold outline

---

## Button Components

### 18. PrimaryButton
- **Parent:** CTAGroup
- **Children:** ButtonText
- **Styling:**
  - Background: Rich Red (#B63A3A)
  - Text: White
  - Border-radius: 8px
  - Padding: 12px 24px
  - Hover: 2px Heritage Gold outline

### 19. SecondaryButton
- **Parent:** CTAGroup
- **Children:** ButtonText
- **Styling:**
  - Background: Transparent
  - Border: 1px solid Heritage Gold (#C9A03D)
  - Text: Charcoal (#18211D)
  - Border-radius: 8px
  - Padding: 12px 24px

### 20. TertiaryButton
- **Parent:** CTAGroup
- **Children:** ButtonText
- **Styling:**
  - Background: Transparent
  - Border: None
  - Text: Zuma Forest Green (#005A43)
  - Hover: Underline

---

## Section Components

### 21. BentoGrid
- **Parent:** Page
- **Children:** GridItems (various sizes)
- **Styling:**
  - Layout: 12-column CSS grid
  - Gap: 24px
  - Items: 4-col, 6-col, 8-col, 12-col variants

### 22. TimelineSection
- **Parent:** Page
- **Children:** TimelineItems (4 phases)
- **Styling:**
  - Layout: Vertical timeline
  - Left border: 2px solid Stone
  - Items: Date badge, heading, description

### 23. DataTable
- **Parent:** InvestorIntelligence
- **Children:** TableHeader, TableRows
- **Styling:
  - Zebra-striping: Stone at 20% opacity
  - Headers: Label-SM (All Caps)
  - Borders: 1px solid Stone

---

## Utility Components

### 24. Badge
- **Parent:** Various
- **Children:** BadgeText
- **Styling:**
  - Background: Primary green (#005A43)
  - Text: White
  - Border-radius: 9999px (full)
  - Padding: 4px 12px
  - Font: Label-SM

### 25. SectionDivider
- **Parent:** Page
- **Children:** None
- **Styling:**
  - Height: 1px
  - Background: Stone (#EAEDE8)
  - Margin: 64px 0

### 26. NewsletterForm
- **Parent:** Footer
- **Children:** EmailInput, SubmitButton
- **Styling:**
  - Layout: Flex-row
  - Input: Stone bg, border-radius full
  - Button: Primary green bg

---

## Component Count Summary

| Category | Count |
|----------|-------|
| Global | 3 |
| Hero | 3 |
| Card | 6 |
| Form | 5 |
| Button | 3 |
| Section | 3 |
| Utility | 3 |
| **Total** | **26** |
