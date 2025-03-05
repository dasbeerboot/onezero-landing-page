/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#242326",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#52f6ff",
          foreground: "hsl(var(--primary-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      fontFamily: {
        pretendard: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      keyframes: {
        'gradient-slow': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.15' },
          '50%': { opacity: '0.2' }
        },
        'glow-pulse': {
          '0%, 100%': { 
            'box-shadow': '0 0 12px rgba(94, 246, 255, 0.6)',
            'border-width': '1px'
          },
          '50%': { 
            'box-shadow': '0 0 20px rgba(94, 246, 255, 0.8)',
            'border-width': '1.5px'
          }
        }
      },
      animation: {
        'gradient-slow': 'gradient-slow 8s ease infinite',
        'soft-pulse': 'soft-pulse 4s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}

