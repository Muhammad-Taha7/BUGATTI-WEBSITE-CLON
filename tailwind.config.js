 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./dist/*.{html,js}"],
   theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
          bitcount: ['"Bitcount Single"', 'sans-serif'],
           dancing: ['"Dancing Script"', 'cursive'],
      },
    },
   },
   plugins: [],
 }