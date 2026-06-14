# DESIGN SYSTEM MAP

## Overview
Translation of Stitch design tokens into Tailwind CSS configuration.

---

## Color System

### Primary Colors
```typescript
colors: {
  primary: {
    50: '#F0FFF4',
    100: '#E6FFED',
    200: '#B3FFD1',
    300: '#80FFB5',
    400: '#4DFF99',
    500: '#005A43', // Primary
    600: '#004D3A', // Dark
    700: '#003D2E',
    800: '#002D21',
    900: '#001E15',
  },
  secondary: {
    50: '#FFF9E6',
    100: '#FFF3CC',
    200: '#FFE799',
    300: '#FFDB66',
    400: '#FFCF33',
    500: '#C9A03D', // Heritage Gold
    600: '#A68533',
    700: '#836A29',
    800: '#604F1F',
    900: '#3D3414',
  },
  error: {
    50: '#FFF5F5',
    100: '#FFE5E5',
    200: '#FFB3B3',
    300: '#FF8080',
    400: '#FF4D4D',
    500: '#B63A3A', // Rich Red
    600: '#962E2E',
    700: '#762323',
    800: '#561818',
    900: '#360D0D',
  },
  surface: {
    ivory: '#F8F8F4',
    stone: '#EAEDE8',
    white: '#FFFFFF',
    charcoal: '#18211D',
    slate: '#6B7280',
  }
}
```

---

## Typography System

### Font Families
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  serif: ['Libre Caslon Text', 'Georgia', 'serif'],
  display: ['Inter', 'system-ui', 'sans-serif'],
}
```

### Font Sizes
```typescript
fontSize: {
  'xs': ['0.75rem', { lineHeight: '1rem' }],
  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
  'base': ['1rem', { lineHeight: '1.5rem' }],
  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
  '2xl': ['1.5rem', { lineHeight: '2rem' }],
  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
  '5xl': ['3rem', { lineHeight: '1.2' }],
  'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
  'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
  'h3': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
  'h4': ['1.5rem', { lineHeight: '1.2', fontWeight: '500' }],
  'h1-mobile': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
  'body-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
  'body-md': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
  'label-sm': ['0.875rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.05em' }],
}
```

---

## Spacing System

### Base Spacing
```typescript
spacing: {
  '0': '0px',
  '1': '8px',
  '2': '16px',
  '3': '24px',
  '4': '32px',
  '5': '40px',
  '6': '48px',
  '7': '56px',
  '8': '64px',
  '9': '72px',
  '10': '80px',
  '12': '96px',
  '16': '128px',
}
```

---

## Border Radius

```typescript
borderRadius: {
  'sm': '0.25rem',
  DEFAULT: '0.5rem',
  'md': '0.75rem',
  'lg': '1rem',
  'xl': '1.5rem',
  'full': '9999px',
}
```

---

## Shadows

```typescript
boxShadow: {
  'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  DEFAULT: '0px 4px 12px rgba(0,0,0,0.03)',
  'md': '0px 8px 24px rgba(0,0,0,0.06)',
  'lg': '0px 12px 32px rgba(0,0,0,0.08)',
  'xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  'inner': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
}
```

---

## Breakpoints

```typescript
screens: {
  'sm': '640px',
  'md': '768px',
  'lg': '1024px',
  'xl': '1280px',
  '2xl': '1536px',
}
```

---

## Max Width

```typescript
maxWidth: {
  'container': '1280px',
  'content': '1024px',
  'form': '640px',
  'card': '480px',
  'text': '720px',
}
```

---

## Custom Utilities

### Glassmorphism
```css
@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}
```

### Animations
```css
@layer utilities {
  .animate-fadeIn {
    animation: fadeIn 0.3s ease forwards;
  }
  .animate-ping-slow {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }
}
```

---

## Component Tokens

### Button
```typescript
button: {
  primary: {
    bg: '#B63A3A',
    text: '#FFFFFF',
    hover: { outline: '2px solid #C9A03D', outlineOffset: '2px' },
  },
  secondary: {
    bg: 'transparent',
    border: '1px solid #C9A03D',
    text: '#18211D',
    hover: { bg: '#C9A03D', text: '#FFFFFF' },
  },
  tertiary: {
    bg: 'transparent',
    text: '#005A43',
    hover: { textDecoration: 'underline' },
  },
}
```

### Card
```typescript
card: {
  bg: '#FFFFFF',
  border: '1px solid #EAEDE8',
  borderRadius: '12px',
  padding: '32px',
  hover: { borderColor: '#C9A03D', shadow: '0px 8px 24px rgba(0,0,0,0.06)' },
}
```

### Input
```typescript
input: {
  bg: '#EAEDE8',
  border: '1px solid #6B7280',
  borderRadius: '8px',
  padding: '12px 16px',
  focus: { borderColor: '#005A43', boxShadow: '0 0 0 3px rgba(0, 90, 67, 0.1)' },
}
```

---

## Design System Files

| File | Purpose |
|------|---------|
| `tailwind.config.ts` | Tailwind CSS configuration |
| `src/styles/globals.css` | Global styles and custom utilities |
| `src/lib/design-tokens.ts` | TypeScript design tokens |
| `src/lib/theme.ts` | Theme configuration |
