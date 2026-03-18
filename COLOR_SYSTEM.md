# Color System Documentation

## Overview

The Nueva Escuela Mexicana platform currently uses a **grayscale color palette** as a placeholder. This document serves as a reference for mapping grayscale values to final brand colors when they are approved.

## Grayscale to Final Color Mapping

### Color Palette Table

| No. | Tailwind Class | Hex Code | RGB Values | Current Use | Future Color Assignment | Notes |
|-----|---|---|---|---|---|---|
| 1 | `gray-50` | `#f9fafb` | 249, 250, 251 | Ultra-light backgrounds, card backgrounds | Primary Light Accent | Lightest gray, used for main app background |
| 2 | `gray-100` | `#f3f4f6` | 243, 244, 246 | Secondary backgrounds, hover states | Secondary Light | Light gray for secondary surfaces |
| 3 | `gray-200` | `#e5e7eb` | 229, 231, 235 | Tertiary backgrounds, subtle dividers | Border Light | Used for light borders and dividers |
| 4 | `gray-300` | `#d1d5db` | 209, 213, 219 | Light borders, disabled states | Border Secondary | Medium-light borders and input fields |
| 5 | `gray-400` | `#9ca3af` | 156, 163, 175 | Disabled text, placeholder text | Disabled State | Medium gray for disabled elements |
| 6 | `gray-500` | `#6b7280` | 107, 114, 128 | Secondary text, descriptions | Secondary Text | Medium gray for secondary content |
| 7 | `gray-600` | `#4b5563` | 75, 85, 99 | Primary text, labels | Primary Text | Primary text color for readability |
| 8 | `gray-700` | `#374151` | 55, 65, 81 | Strong text, primary buttons, focus rings | Primary Action | Main button and interactive elements |
| 9 | `gray-800` | `#1f2937` | 31, 41, 55 | Headers, footers, dark text | Dark Brand | Very dark for headers and strong emphasis |
| 10 | `gray-900` | `#111827` | 17, 24, 39 | High contrast text, dark backgrounds | Darkest Brand | Almost black for maximum contrast |

## Current Usage Examples

### Common Patterns

```jsx
// Primary background
<div className="bg-gray-50">

// Cards and containers
<div className="bg-white rounded-lg shadow p-6 border border-gray-200">

// Primary buttons
<button className="bg-gray-700 text-white hover:bg-gray-800">

// Secondary buttons  
<button className="border border-gray-300 text-gray-700 hover:bg-gray-50">

// Input fields
<input className="border border-gray-300 focus:border-gray-500">

// Text colors
<h1 className="text-gray-900">Main heading</h1>
<p className="text-gray-600">Secondary text</p>
<span className="text-gray-500">Tertiary text</span>

// Disabled states
<button disabled className="opacity-50 cursor-not-allowed">
```

## Role-Based Section Colors

When final colors are assigned, consider using different color schemes for each module:

### Admin Module
- Current: Gray palette
- Suggested variation: Darker tones (gray-700 and above)
- Purpose: Authority and system-level control

### Teacher Module
- Current: Gray palette
- Suggested variation: Warm accent colors
- Purpose: Guidance and mentorship feel

### Student Module
- Current: Gray palette
- Suggested variation: Engaging, lighter colors
- Purpose: Friendly and encouraging environment

## Migration Steps

When final brand colors are ready:

1. **Define new colors** in `tailwind.config.js`:
   ```javascript
   colors: {
     primary: '#NewPrimaryColor',
     secondary: '#NewSecondaryColor',
     success: '#NewSuccessColor',
     warning: '#NewWarningColor',
     error: '#NewErrorColor',
   }
   ```

2. **Update all gray class usage** - Use find and replace:
   - `gray-700` → `primary`
   - `gray-600` → `primary-600`
   - `gray-50` → `primary-50`
   - `gray-300` → `primary-300`
   - etc.

3. **Test across all modules**:
   - Admin dashboard
   - Teacher dashboard
   - Student dashboard
   - Login page

4. **Verify accessibility** - Ensure WCAG AA contrast requirements

## Accessibility Considerations

Current grayscale palette meets WCAG AA standards:
- Text on white: Ratios ✓
- Buttons: Clear stateContrast ✓
- Focus indicators: Visible ✓

When choosing final colors, maintain or improve contrast ratios.

## Tools for Color Selection

Recommended tools when selecting final colors:
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verify WCAG compliance
- [Tailwind Color Studio](https://www.twind.dev/) - Generate Tailwind color scales
- [Coolors.co](https://coolors.co/) - Color palette generation
- [Adobe Color Wheel](https://color.adobe.com/) - Professional color harmonies

## CSS Variables Option (Alternative)

For easier color transitions, the project could also use CSS variables:

```css
:root {
  --color-primary: #4b5563;
  --color-secondary: #6b7280;
  --color-background: #f9fafb;
  --color-border: #d1d5db;
}
```

Then in components:
```jsx
<button style={{ backgroundColor: 'var(--color-primary)' }}>
```

## Brand Color Guidelines (To be filled)

### Primary Color
- Hex: `_______`
- RGB: `_______`
- Used for: CTAs, main buttons, links, primary actions
- Variants: Light, dark, hover states

### Secondary Color
- Hex: `_______`
- RGB: `_______`
- Used for: Secondary buttons, accents, highlights
- Variants: Light, dark, hover states

### Status Colors (Examples)
- Success: `_______`
- Warning: `_______`
- Error: `_______`
- Info: `_______`

## Questions?

Contact the design team to:
- Approve final color selections
- Ensure brand compliance
- Review accessibility levels
- Validate design system consistency
