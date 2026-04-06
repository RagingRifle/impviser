/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#1798c1",
          blue: "#223794",
          green: "#29ec48",
           brandBlue: "#223794",
        brandGreen: "#29ec48",
        brandCyan: "#1798c1",
        },
      },
      keyframes: {
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
      },
      animation: {
        pulseScale: 'pulseScale 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
