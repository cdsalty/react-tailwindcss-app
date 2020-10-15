
const tailwindcss = require('tailwindcss');  // use require since it's a config file
// module.exports = {
//   plugins: [
//     tailwindcss('./tailwind.js'),
//     require('autoprefixer')
//   ],
// };
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.js']
  },
  theme: {
    extend: {}
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
}