# Implementation Sequence

## Phase 1: Next.js Foundation & Scaffolding
1. Initialize Next.js project inside the workspace `C:\Users\hp\Desktop\KLM2026\ZUMA_AGRO` with TypeScript, ESLint, and Tailwind CSS.
2. Build folder structure:
   - `src/app/`
   - `src/components/`
   - `src/lib/`
   - `public/`
   - `audit/`
3. Inject global fonts (Libre Caslon Text, Manrope) and configure Tailwind theme extensions in `tailwind.config.ts` matching the design system audit.

## Phase 2: Shell & Layout Components
1. Implement the static global `Navbar` and `Footer` components.
2. Build the `MobileBottomNav` component with premium glass refraction and safe-area margins.
3. Create the `MoreDrawerOverlay` to trigger via the "More" bottom nav item, exposing secondary routes.

## Phase 3: Route Compilation (15 Screens)
1. Copy HTML markup and specific styles from the 13 extracted HTML/Markdown pages and compile them as Next.js routes.
2. Fix TSX/JSX parser incompatibilities (CamelCase svg properties, converting style strings to objects, self-closing tag formats, and numeric inputs).
3. Wire mock navigation links to the mapped routes.

## Phase 4: Production Build & Validation
1. Run local dev server and test layout styling parity.
2. Run `npm run build` to guarantee zero typescript compilation errors.
3. Deploy to Vercel and check visual parity on desktop and mobile viewports.
