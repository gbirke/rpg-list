module.exports = function (config) {

	config.addPassthroughCopy('./src/games/images');

	config.addCollection("games", function(collectionApi) {
		const allGames = collectionApi.getFilteredByGlob('src/games/*.md');
		// TODO sort with map to avoid performance loss from regex application
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_with_map
		allGames.sort(function(a,b) {
			// TODO maybe add other sort transformations (Der/Die/Das/A/An)
			const stopWordRegex = new RegExp('^The ');
			const aTitle = a.data.title.replace( stopWordRegex, '' );
			const bTitle = b.data.title.replace( stopWordRegex, '' );
			return aTitle.localeCompare(bTitle);
		} );
		return allGames;
  	});

	return {
    dir: {
      input: 'src',
      output: 'src/_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'njk'],
  };
}
