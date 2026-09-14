/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0B2559',
        'navy-light': '#112d6b',
        'bright-blue': '#1565C0',
        'bright-blue-hover': '#1256A8',
        'light-blue': '#EAF2FB',
        'whatsapp': '#25D366',
        'whatsapp-hover': '#1EBE5A',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px rgba(11, 37, 89, 0.08)',
        'card-hover': '0 8px 32px rgba(11, 37, 89, 0.15)',
      },
    },
  },
  plugins: [],
}
