module.exports = function (config) {

	config.addPassthroughCopy('./src/games/images');

	return {
    dir: {
      input: 'src',
      output: 'src/_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'nunjucks'],
  };
}
