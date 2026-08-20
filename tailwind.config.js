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
        ubl: {
          navy: '#00255A',
          dark: '#001433',
          blue: '#004FC2',
          lightBlue: '#E8F1FF',
          yellow: '#FFE600',
          amber: '#F59E0B',
          emerald: '#10B981',
          slate: '#F8FAFC',
        }
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
