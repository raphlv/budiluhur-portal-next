/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './context/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ubl: {
          // Official Primary Color (Biru Gelap)
          primary: '#173860',
          navy: '#173860',
          dark: '#0e243e',
          deep: '#081626',
          navyLight: '#1f4b82',
          // Official 5 Secondary Colors
          sky: '#1ca3dc',     // Biru Langit
          blue: '#1ca3dc',
          yellow: '#fced17',  // Kuning
          red: '#de1f26',     // Merah Cerah
          white: '#ffffff',   // Putih
          black: '#000000',   // Hitam
          // Utility tints
          slate: '#F8FAFC',
          lightSky: '#e8f6fc',
          lightYellow: '#fefde8',
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
