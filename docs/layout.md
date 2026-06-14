# LAYOUT

## Container System

### Max Width
| Context | Value | Usage |
|---------|-------|-------|
| Page Container | 1280px | Main content wrapper |
| Content Container | 1024px | Narrow content |
| Form Container | 640px | Forms and inputs |
| Full Width | 100% | Full-bleed sections |

### Container Styling
```css
.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 40px; /* desktop */
  padding-right: 40px; /* desktop */
}

@media (max-width: 768px) {
  .container {
    padding-left: 16px;
    padding-right: 16px;
  }
}
```

---

## Grid System

### 12-Column Grid
- **Columns:** 12
- **Gap:** 24px
- **Usage:** Page layouts, bento grids

### Column Widths
| Span | Width (1280px) | Width (768px) |
|------|----------------|---------------|
| 1 col | 73px | 46px |
| 2 col | 170px | 114px |
| 3 col | 266px | 183px |
| 4 col | 363px | 252px |
| 5 col | 460px | 320px |
| 6 col | 556px | 389px |
| 7 col | 653px | 458px |
| 8 col | 750px | 526px |
| 9 col | 846px | 595px |
| 10 col | 943px | 664px |
| 11 col | 1040px | 732px |
| 12 col | 1136px | 801px |

### Grid Usage
| Layout | Columns | Gap |
|--------|---------|-----|
| Hero | 12 | 0 |
| Card Grid | 3 | 24px |
| Metric Grid | 4 | 24px |
| Bento Grid | 12 | 24px |
| Sidebar Layout | 4 + 8 | 24px |
| Split Layout | 6 + 6 | 24px |

---

## Breakpoints

| Name | Min Width | Max Width | Columns | Margin |
|------|-----------|-----------|---------|--------|
| Mobile | 0 | 767px | 4 | 16px |
| Tablet | 768px | 1023px | 8 | 24px |
| Desktop | 1024px | 1279px | 12 | 40px |
| Wide | 1280px | - | 12 | 40px |

---

## Flex Layouts

### Horizontal Flex
```css
.flex-row {
  display: flex;
  flex-direction: row;
  gap: 24px;
}
```

### Vertical Flex
```css
.flex-col {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
```

### Centered Flex
```css
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Space Between
```css
.flex-between {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

---

## Section Layouts

### Full-Width Section
```css
.section-full {
  width: 100%;
  padding: 96px 0;
}
```

### Centered Section
```css
.section-centered {
  max-width: 1280px;
  margin: 0 auto;
  padding: 96px 40px;
}
```

### Asymmetric Layout (Sidebar + Content)
```css
.layout-asymmetric {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
}
```

### Bento Grid Layout
```css
.layout-bento {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
  max-width: 1280px;
  margin: 0 auto;
}
```

---

## Responsive Layouts

### Desktop (>1024px)
- 12-column grid
- 40px page margin
- Full navigation visible
- Multi-column layouts

### Tablet (768px - 1024px)
- 8-column grid
- 24px page margin
- Collapsed navigation
- Reduced column spans

### Mobile (<768px)
- 4-column grid
- 16px page margin
- Bottom navigation
- Single column layouts

---

## Layout Rules

1. **Max Width:** Content never exceeds 1280px
2. **Centering:** Use auto margins for centering
3. **Grid First:** Prefer CSS Grid for complex layouts
4. **Flex for Simple:** Use Flexbox for simple alignments
5. **Responsive First:** Design for mobile, enhance for desktop
6. **Consistent Spacing:** Use 8px grid system
7. **Whitespace:** Use generous whitespace for institutional feel
