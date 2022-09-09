/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        mobile: { max: '480px' },
        tablet: { max: '1136px', min: '481px' },
        // => @media (max-width: 1535px) { ... }
      },
      width: {
        desktop: '1136px',
        tablet: '480px',
        mobile: '375px',
      },
      colors: {
        bgLight: '#fde5e5',
        bgDark: '#303030',
        bgLightMain: '#fff',
        bgDarkMain: '#444',
        textLight: '#000',
        textDark: '#fff',
        borderLight: '#000',
        borderDark: '#fff',
        active: '#4f79d4',
        'btn-text': '#bb9f43',
      },
      fontFamily: {
        mon: ['Montserrat'],
        plf: ['Playfair Display'],
      },
      // Keyframe
      keyframes: {
        // For Toast
        fromRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '10%': { transform: 'translateX(0)', opacity: 1 },
          '15%': { transform: 'translateX(10%)', opacity: 1 },
          '20%': { transform: 'translateX(0)', opacity: 1 },
          '30%': { transform: 'translateY(0)', opacity: 1 },
          '90%': { transform: 'translateY(0)', opacity: 1 },
          '100%': { transform: 'translateY(100%)', opacity: 0 },
        },
        growWidth: {
          '0%': { width: 0 },
          '100%': { width: '100%' },
        },
      },
      // Automation
      animation: {
        // For Toast
        fromRight: 'fromRight 3s ease-in-out',
        growWidth: 'growWidth 3s ease-in-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
