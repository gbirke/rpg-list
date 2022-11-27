module.exports = {
  purge: ['./src/**/*.html', './src/**/*.md', './src/**/*.liquid'],
  darkMode: false,
  variants: {
	  extend: {
		   overflow: ['hover']
	  }
  },
  plugins: [require('@tailwindcss/typography')],
};
