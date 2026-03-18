/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grayscale palette - will be mapped to final colors
        gray: {
          50: '#f9fafb',   // Ultra light - Primary background
          100: '#f3f4f6',  // Very light - Secondary background
          200: '#e5e7eb',  // Light - Tertiary background
          300: '#d1d5db',  // Light gray - Borders light
          400: '#9ca3af',  // Medium-light gray - Disabled elements
          500: '#6b7280',  // Medium gray - Secondary text
          600: '#4b5563',  // Medium-dark gray - Primary text
          700: '#374151',  // Dark gray - Strong text
          800: '#1f2937',  // Very dark gray - Header/Footer
          900: '#111827',  // Almost black - High contrast
        },
      },
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
      },
    },
  },
  plugins: [],
}
