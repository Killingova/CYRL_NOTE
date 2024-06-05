/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          blue: '#E0F7FA',
          yellow: '#FFF9C4',
          mint: '#C8E6C9',
        },
        bold: {
          green: '#388E3C',
          blue: '#1E88E5',
        },
        earth: {
          terracotta: '#F4511E',
          sand: '#A1887F',
        },
        neon: {
          pink: '#FF4081',
        },
        darkMode: {
          background: '#121212',
          text: '#E0E0E0',
          accent: '#00BCD4',
        },
        gradient: {
          start: '#7B1FA2',
          end: '#2196F3',
        },
        metallic: {
          gold: '#FFD700',
        },
        retro: {
          background: '#FFEB3B',
          text: '#5D4037',
        },
      },
    },
  },
  plugins: [],
}
