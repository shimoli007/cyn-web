/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx}",
      "./src/components/**/*.{js,ts,jsx,tsx}",
      "./src/styles/**/*.css"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#0c2350',
            light: '#1e3a8a',
            dark: '#0a1a40'
          },
          secondary: {
            DEFAULT: '#f97316',
            light: '#ff9f43',
            dark: '#ea580c'
          },
          accent: {
            DEFAULT: '#ef4444',
            light: '#f87171',
            dark: '#dc2626'
          }
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)'
        },
        backgroundImage: {
          'gradient-primary': 'linear-gradient(to right, var(--tw-gradient-stops))'
        }
      }
    },
    plugins: []
  }