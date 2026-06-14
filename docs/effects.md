# EFFECTS

## Shadows

### Elevation Levels
| Level | Shadow | Usage |
|-------|--------|-------|
| Level 0 | none | Background, flat elements |
| Level 1 | 0px 4px 12px rgba(0,0,0,0.03) | Cards, containers |
| Level 2 | 0px 8px 24px rgba(0,0,0,0.06) | Dropdowns, popovers |
| Level 3 | 0px 12px 32px rgba(0,0,0,0.08) | Modals, overlays |

### Shadow Usage
| Component | Shadow Level |
|-----------|--------------|
| Cards | Level 1 |
| Navigation | Level 2 |
| Dropdowns | Level 2 |
| Modals | Level 3 |
| Buttons (hover) | Level 1 |

---

## Borders

### Border Widths
| Width | Value | Usage |
|-------|-------|-------|
| Thin | 1px | Default borders |
| Medium | 2px | Active states, radio cards |
| Thick | 3px | Focus states |

### Border Colors
| Color | HEX | Usage |
|-------|-----|-------|
| Stone | #EAEDE8 | Default borders |
| Primary Green | #005A43 | Focus states, active |
| Heritage Gold | #C9A03D | Hover accent |
| Rich Red | #B63A3A | Error states |

### Border Radius
| Token | Value | Usage |
|-------|-------|-------|
| rounded-sm | 0.25rem (4px) | Small elements |
| rounded | 0.5rem (8px) | Buttons, inputs |
| rounded-md | 0.75rem (12px) | Cards |
| rounded-lg | 1rem (16px) | Large cards |
| rounded-xl | 1.5rem (24px) | Modals |
| rounded-full | 9999px | Badges, avatars |

---

## Hover States

### Card Hover
```css
.card:hover {
  border-color: #C9A03D; /* Heritage Gold */
  box-shadow: 0px 8px 24px rgba(0,0,0,0.06);
  transition: all 0.2s ease;
}
```

### Button Hover
```css
.button-primary:hover {
  outline: 2px solid #C9A03D;
  outline-offset: 2px;
}

.button-secondary:hover {
  background-color: #C9A03D;
  color: white;
}
```

### Link Hover
```css
.link:hover {
  color: #004D3A; /* Dark Green */
  text-decoration: underline;
}
```

### Navigation Link Hover
```css
.nav-link:hover {
  color: #005A43; /* Primary Green */
}
```

---

## Active States

### Active Navigation
```css
.nav-link.active {
  color: #005A43;
  border-bottom: 2px solid #005A43;
}
```

### Active Button
```css
.button:active {
  transform: scale(0.98);
}
```

### Active Card
```css
.card.active {
  border-color: #005A43;
  background-color: #F0FFF4; /* Light green tint */
}
```

---

## Focus States

### Focus Ring
```css
:focus-visible {
  outline: 2px solid #005A43;
  outline-offset: 2px;
}
```

### Input Focus
```css
input:focus {
  border-color: #005A43;
  box-shadow: 0 0 0 3px rgba(0, 90, 67, 0.1);
}
```

---

## Transitions

### Default Transition
```css
transition: all 0.2s ease;
```

### Specific Transitions
| Element | Property | Duration | Easing |
|---------|----------|----------|--------|
| Cards | border-color, box-shadow | 0.2s | ease |
| Buttons | background-color, transform | 0.15s | ease |
| Links | color | 0.15s | ease |
| Navigation | color | 0.15s | ease |
| Modals | opacity, transform | 0.3s | ease |

---

## Animations

### Ping Animation (EIS Hub)
```css
@keyframes ping {
  75%, 100% {
    transform: scale(2);
    opacity: 0;
  }
}

.ping {
  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
}
```

### Pulse Animation
```css
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
```

### Fade In
```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease forwards;
}
```

---

## Glass Effects

### Glassmorphism Card
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
}
```

---

## Gradient Overlays

### Hero Gradient
```css
.hero-gradient {
  background: linear-gradient(
    to bottom,
    rgba(0, 107, 83, 0.8) 0%,
    rgba(0, 77, 58, 0.9) 100%
  );
}
```

### Dark Gradient
```css
.dark-gradient {
  background: linear-gradient(
    135deg,
    #18211D 0%,
    #2D3A33 100%
  );
}
```

---

## Effects Rules

1. **Tonal Layers:** Use shadows for functional hierarchy, not decoration
2. **Subtle Transitions:** Keep transitions fast (0.2s) and smooth
3. **Focus Accessibility:** Always provide visible focus states
4. **Hover Feedback:** Provide clear hover feedback for interactive elements
5. **Glass Effects:** Use sparingly for premium feel
6. **Performance:** Minimize complex animations for mobile
