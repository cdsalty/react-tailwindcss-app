
const tailwindcss = require('tailwindcss');  // use require since it's a config file
module.export = {
  plugins: [
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
  ],
};