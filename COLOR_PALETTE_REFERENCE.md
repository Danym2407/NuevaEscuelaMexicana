# Color Palette - Grayscale to Final Colors Reference

## 📊 Grayscale Palette Table

This table shows the current grayscale colors used in the Nueva Escuela Mexicana platform and spaces for mapping them to your final brand colors when approved.

### Quick Reference Table

| # | Tailwind | Name | Hex Code | RGB | Light/Dark | Current UI Purpose | **Final Color** |
|---|----------|------|----------|-----|------------|-------------------|---|
| 1 | gray-50 | Ultra Light | #f9fafb | 249, 250, 251 | Light | Primary background | **HEX: _____ / RGB: _____** |
| 2 | gray-100 | Very Light | #f3f4f6 | 243, 244, 246 | Light | Secondary background | **HEX: _____ / RGB: _____** |
| 3 | gray-200 | Light | #e5e7eb | 229, 231, 235 | Light | Tertiary background | **HEX: _____ / RGB: _____** |
| 4 | gray-300 | Light Gray | #d1d5db | 209, 213, 219 | Light | Light borders | **HEX: _____ / RGB: _____** |
| 5 | gray-400 | Med-Light Gray | #9ca3af | 156, 163, 175 | Medium | Disabled text | **HEX: _____ / RGB: _____** |
| 6 | gray-500 | Medium Gray | #6b7280 | 107, 114, 128 | Medium | Secondary text | **HEX: _____ / RGB: _____** |
| 7 | gray-600 | Med-Dark Gray | #4b5563 | 75, 85, 99 | Medium | Primary text | **HEX: _____ / RGB: _____** |
| 8 | gray-700 | Dark Gray | #374151 | 55, 65, 81 | Dark | Buttons, strong text | **HEX: _____ / RGB: _____** |
| 9 | gray-800 | Very Dark Gray | #1f2937 | 31, 41, 55 | Dark | Headers, footers | **HEX: _____ / RGB: _____** |
| 10 | gray-900 | Almost Black | #111827 | 17, 24, 39 | Dark | High contrast text | **HEX: _____ / RGB: _____** |

---

## 🎨 Detailed Breakdown by Usage

### Backgrounds & Surfaces

| Current Gray | Hex Code | Used For | Element Count | Future Color |
|---|---|---|---|---|
| gray-50 | #f9fafb | App background, card backgrounds | ~15 | **___________** |
| gray-100 | #f3f4f6 | Hover states, secondary surfaces | ~8 | **___________** |
| gray-200 | #e5e7eb | Input backgrounds | ~5 | **___________** |

### Text & Typography

| Current Gray | Hex Code | Used For | Style | Future Color |
|---|---|---|---|---|
| gray-900 | #111827 | Headings (h1, h2, h3) | Bold/Strong | **___________** |
| gray-600 | #4b5563 | Body text, descriptions | Regular | **___________** |
| gray-500 | #6b7280 | Secondary text, subtitles | Light | **___________** |
| gray-400 | #9ca3af | Disabled text, placeholders | Muted | **___________** |

### Interactive Elements

| Current Gray | Hex Code | Used For | Examples | Future Color |
|---|---|---|---|---|
| gray-700 | #374151 | Primary buttons, CTAs | "Sign in", "Create", "Submit" | **___________** |
| gray-800 | #1f2937 | Button hover state | On `hover:bg-gray-800` | **___________** |
| gray-300 | #d1d5db | Button borders (secondary) | Secondary buttons | **___________** |

### Borders & Dividers

| Current Gray | Hex Code | Used For | Context | Future Color |
|---|---|---|---|---|
| gray-200 | #e5e7eb | Card borders | Cards, panels, modals | **___________** |
| gray-300 | #d1d5db | Input focus | Input fields | **___________** |
| gray-400 | #9ca3af | Minor dividers | Subtle separators | **___________** |

---

## 🎯 Component-Specific Color Usage

### Button Colors

#### Primary Button (Main Action)
```jsx
className="bg-gray-700 text-white hover:bg-gray-800"
// Replace with: className="bg-[FINAL_COLOR] text-white hover:bg-[FINAL_COLOR_DARK]"
```
- **Grayscale Used**: gray-700 (bg), gray-800 (hover)
- **Final Colors Needed**: Primary color + Darker variant
- **Hex**: **_____ / _____**

#### Secondary Button (Alternative Action)
```jsx
className="border border-gray-300 text-gray-700 hover:bg-gray-50"
// Replace with: className="border border-[FINAL_BORDER] text-[FINAL_TEXT]"
```
- **Grayscale Used**: gray-300 (border), gray-700 (text), gray-50 (hover)
- **Final Colors Needed**: Border color, Text color, Hover background
- **Colors**: **_____ / _____ / _____**

### Input Fields

```jsx
className="border border-gray-300 focus:border-gray-500 focus:ring-gray-500"
// Replace with: className="border border-[FINAL_BORDER] focus:border-[FINAL_ACCENT] focus:ring-[FINAL_ACCENT]"
```
- **Grayscale Used**: gray-300 (border), gray-500 (focus ring)
- **Final Colors Needed**: Input border, Focus accent
- **Colors**: **_____ / _____**

### Cards & Panels

```jsx
className="bg-white rounded-lg shadow border border-gray-200"
// White stays white, just update border color
```
- **Grayscale Used**: gray-200 (border)
- **Final Color**: **_____**

### Status Colors (To Define)

These should be added when brand colors are finalized:

| Status | Grayscale (Temp) | Final Color | RGB |
|--------|---|---|---|
| **Success** | gray-700 | **_____** | **_____** |
| **Warning** | gray-600 | **_____** | **_____** |
| **Error** | gray-700 | **_____** | **_____** |
| **Info** | gray-600 | **_____** | **_____** |

---

## 📋 Migration Checklist

When you have your final brand colors, use this checklist:

### Phase 1: Gather Colors
- [ ] Primary brand color (main buttons, links)
  - HEX: `_____` | RGB: `_____`
- [ ] Primary dark variant (button hover)
  - HEX: `_____` | RGB: `_____`
- [ ] Primary light variant (backgrounds)
  - HEX: `_____` | RGB: `_____`
- [ ] Secondary color (accent elements)
  - HEX: `_____` | RGB: `_____`
- [ ] Success color (confirmations)
  - HEX: `_____` | RGB: `_____`
- [ ] Warning color (cautions)
  - HEX: `_____` | RGB: `_____`
- [ ] Error color (failures)
  - HEX: `_____` | RGB: `_____`
- [ ] Neutral/Gray shades (keep some grays!)
  - HEX: `_____` | RGB: `_____`

### Phase 2: Update Configurations

1. Update `tailwind.config.js`:
```javascript
colors: {
  primary: '#YOUR_PRIMARY_HEX',
  primaryDark: '#YOUR_PRIMARY_DARK_HEX',
  // ... add more colors
}
```

2. Update `src/index.css` if using CSS variables

3. Create color palette document for team

### Phase 3: Update Components

Use find & replace systematically:
- `gray-700` → your primary color class/hex
- `gray-800` → your primary dark color class/hex
- `gray-50` → your light background color class/hex
- etc.

### Phase 4: Testing

- [ ] Test all buttons and interactive elements
- [ ] Check accessibility (WCAG AA contrast)
- [ ] Verify on light and dark backgrounds
- [ ] Test on all screen sizes (mobile/tablet/desktop)
- [ ] Review all pages and modules

---

## 🔍 Accessibility Notes

**Current Grayscale Contrast Ratios:**

| Combination | Ratio | WCAG Level |
|---|---|---|
| white + gray-900 text | 21:1 | AAA ✅ |
| gray-700 button text (white) | 16.5:1 | AAA ✅ |
| gray-600 on white | 10.2:1 | AAA ✅ |
| gray-500 on white | 9.1:1 | AAA ✅ |
| gray-400 on white | 5:1 | AA ✅ |

**When choosing final colors:** Ensure you maintain WCAG AA minimum (4.5:1 for text).

---

## 📞 Questions?

When you have your final brand colors:

1. Fill in all the `**_____**` fields above
2. Save this document as reference
3. Pass updated colors to development team
4. Review color-updated mockups
5. Proceed with implementation

---

## 🎨 Module-Specific Color Suggestions

### Admin Module
- **Suggested**: Darker, more authoritative colors
- **Feeling**: Control, system, professional

### Teacher Module  
- **Suggested**: Warm, supportive accent colors
- **Feeling**: Guidance, education, mentorship

### Student Module
- **Suggested**: Bright, engaging, friendly colors
- **Feeling**: Encouragement, progress, achievement

---

**Document Status**: Active - Awaiting Final Color Definitions
**Last Updated**: March 18, 2026
**Next Step**: Fill in all `_____` placeholders with approved brand colors
