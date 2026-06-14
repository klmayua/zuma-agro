# Navigation Map

## Global Navigation Links
To maintain interactive prototype integrity, mock anchors (`#`) in the header navbar and menus are mapped to these Next.js routes:

- **About** -> `/about`
- **Framework** -> `/strategic-framework`
- **Governance** -> `/governance-controls`
- **Impact** -> `/impact`
- **Investors** -> `/investor-intelligence`
- **Partnership** -> `/institutional-partnerships`
- **Platform** -> `/platform-architecture`

## Mobile Navigation
- **Requirement:** Fixed bottom navigation bar visible on all mobile pages.
- **Items Count:** 5 items
- **Menu Items:**
  1. **Home** -> `/`
  2. **Platform** -> `/platform-architecture`
  3. **Initiatives** -> `/strategic-framework`
  4. **Contact** -> `/about#contact`
  5. **More** -> Triggers a premium bottom sheet drawer containing the remaining routes:
     - Governance controls
     - Impact & multipliers
     - Investor intelligence
     - Partnerships
     - Enroll as partner (Step 1-4)
     - Framework Document
     - Graphic Image References
- **Constraint Compliance:** Hamburger menus are strictly forbidden. The bottom fixed navigation and the "More" slide-up panel will act as the authoritative mobile portal directory.
