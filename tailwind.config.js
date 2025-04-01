/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./pages/**/*.vue",
      "./app.vue",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#00DC82', // Main primary color
            50: '#E6FFF3',
            100: '#B3FFD9',
            200: '#80FFBF',
            300: '#4DFFA6',
            400: '#1AFF8C',
            500: '#00DC82', // Custom main color
            600: '#00A864',
            700: '#00754B',
            800: '#004232',
            900: '#001F19',
          },
        },
      },
    },
    plugins: [],
}
