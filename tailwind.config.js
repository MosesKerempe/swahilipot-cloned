/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Enable dark mode with the class or data attribute
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)", // Use CSS variables for dynamic color
        secondary: "var(--secondary-color)", // Same here for secondary
        dark: "var(--dark-color)", // For dark theme
        light: "var(--light-color)", // For light theme
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Define your default font family
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out', // Custom fade-in animation
        'slide-up': 'slideUp 0.5s ease-out', // Custom slide-up animation
        'pulse-slow': 'pulse 3s infinite', // Slower pulse animation
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')", // Define background image for hero section
      },
    },
  },
  plugins: [],
}
