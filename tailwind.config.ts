import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        '1/3': 'calc(100% / 3)',
        '1/2': 'calc(100% / 2)',
        '29': '29%',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'boskery-text': '#7A7373',
        'boskery-base': '#A42125',
        'boskery-gray': '#EBE3D9',
        'boskery-gray2': '#D7D3CB',
        'boskery-gray3': '#E2D8CB',
        'boskery-white': '#ffffff',
        'boskery-white2': '#F6F2EC',
        'boskery-black': '#1E1D1D',
        'boskery-black2': '#100F0F',
        'boskery-black3': '#000000',
        'boskery-dark': '#351C42',
        'boskery-orange': '#E76100',
        'boskery-fuchsia': '#FF1C74',
        'boskery-blue': '#6C1CD1',
        'boskery-green': '#59C36A',
        'boskery-yellow': '#FCB720',
        'boskery-border-color': '#EBE3D9',
        black : "#1E1D1D",
      },
      fontFamily: {
        'boskery_font': ['Plus Jakarta Sans', 'sans-serif'],
        'boskery_font_2': ['Quicksand', 'sans-serif'],
        'boskery_heading': ['Roboto Condensed', 'sans-serif'],
        'icomoon': ['icomoon', 'sans-serif'],
      },
      spacing: {
        'section-space': '120px',
        '192': '192px',
        '1588': '1588.5px',
        '92': '92px', // Tạo lớp padding-left cho 92px
        '120': '120px',
        '110': '110px',
        '100': '100px',
        '200': '200px',
        '80': '80px',
        '60': '60px',
        '50': '50px',
        '40': '40px',
        '30': '30px',
        '20': '20px',
        '24r': '24rem',
        '15': '15px',
        '10': '10px',
        '-60': '-60px',
        '-120': '-120px',
      },
      letterSpacing: {
        'boskery': '-1px',
        boskeryWide: '-1px',
        boskeryExtraWide: '-1.1px',
      },
      maxWidth: {
        '1562': '1562px',
      },
      screens: {
        '2xl': '1920px',
        'xl': '1400px', // Thêm breakpoint 1400px
        'xxl': '1200px',
        'lgg': '1124px',
        "dt": '580px',
        "ipad": '1024px',
        "xl1": '1000px',
      },
      keyframes: {
        zump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        zump: 'zump 2s linear infinite',
        fadeIn: 'fadeIn 2s ease-in-out',
        slideInLeft: 'slideInLeft 2s ease-in-out',
        zoomIn: 'zoomIn 2s ease-in-out',
        rotate: 'rotate 10s linear infinite',
      }

    },
  },
  plugins: [],
};
export default config;
