/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          // 1. THE DARKEST (Use for Navbar, Hero, Footer)
          base: '#11200f',    // "Shadowy woodland depths"

          // 2. THE "LIGHTER" DARK (Use for alternating sections)
          medium: '#363d29',  // "Cool deep earth"

          // 3. THE GREEN ACCENT (Use for specific feature cards or callouts)
          rich: '#415138',    // "Earthy richness"

          // 4. THE HIGHLIGHT (Use for buttons/interactions)
          olive: '#34501c',   // "Muted green brushstrokes"

          // 5. TEXT & HEADINGS
          text: '#d4e1d9',    // "Subtle stone" (Body Text)
          gold: '#b8860b',    // (Headings - kept from previous instruction)
        },
      },
      fontFamily: {
        sans: ['Lato', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-in': 'slideIn 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
        'scale': 'scale 20s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)',
        'luxury-lg': '0 35px 60px -15px rgba(0, 0, 0, 0.4)',
        'luxury-hover': '0 40px 70px -15px rgba(0, 0, 0, 0.5)',
        'glow': '0 0 20px rgba(107, 157, 201, 0.3)',
      },
    },
  },
  plugins: [],
};
