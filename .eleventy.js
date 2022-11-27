module.exports = function (config) {

	config.addPassthroughCopy('./src/games/images');

	// Eleventy < 1.0
	config.setUseGitIgnore(false);
	// eleventy >= 1.0
	// config.ignores.delete("./src/_tmp/index.css");
	config.addWatchTarget('./src/_tmp/index.css')
  	config.addPassthroughCopy({ './src/_tmp/index.css': 'styles/index.css' })

	config.addCollection("all_games", function(collectionApi) {
		const allGames = collectionApi.getFilteredByGlob('src/games/*.md');
		allGames.sort( sortByTitle );
		return allGames;
  	});

	// Create an array of all tags
  	config.addCollection("tagList", function(collection) {
		let tagSet = new Set();
		collection.getAll().forEach(item => {
			(item.data.tags || []).forEach(tag => tagSet.add(tag));
		});
		let tagList = [...tagSet];
		tagList.sort();
		return tagList;
	});

	config.addShortcode('excerpt', article => extractExcerpt(article));
	config.addFilter('sortByTitle', coll => { coll.sort(sortByTitle); return coll })
	config.addFilter('shortenTag', tag => unhierarchicalTagName(tag));

	const markdownIt = require("markdown-it");
  	const options = {
		html: true,
		breaks: false,
		linkify: true
	};
    config.setLibrary("md", markdownIt(options));	

	return {
    dir: {
      input: 'src',
      output: 'src/_site',
    },
    passthroughFileCopy: true,
    templateFormats: ['html', 'md', 'njk', 'liquid'],
  };
}

function sortByTitle(a,b) {
		// TODO sort with map to avoid performance loss from regex application
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#sorting_with_map
		// TODO maybe add other sort transformations (Der/Die/Das/A/An)
		const stopWordRegex = new RegExp('^The ');
		const aTitle = a.data.title.replace( stopWordRegex, '' );
		const bTitle = b.data.title.replace( stopWordRegex, '' );
		return aTitle.localeCompare(bTitle);
}

function unhierarchicalTagName(tag) {
	return tag.split(":").slice(-1)[0];
}

function extractExcerpt(article) {
  if (!article.hasOwnProperty('templateContent')) {
    console.warn('Failed to extract excerpt: Document has no property "templateContent".');
    return null;
  }

  // Prevent tags page from rendering itself, see https://github.com/11ty/eleventy/issues/1237
  if (article.inputPath.match("/tags.liquid") ) {
	  return null;
  }
 
  let excerpt = null;
  const content = article.templateContent;
 
  // The start and end separators to try and match to extract the excerpt
  const separatorsList = [
    { start: '<!-- Excerpt Start -->', end: '<!-- Excerpt End -->' },
    { start: '<p>', end: '</p>' }
  ];
 
  separatorsList.some(separators => {
    const startPosition = content.indexOf(separators.start);
    const endPosition = content.indexOf(separators.end);
 
    if (startPosition !== -1 && endPosition !== -1) {
      excerpt = content.substring(startPosition + separators.start.length, endPosition).trim();
      return true; // Exit out of array loop on first match
    }
  });
 
  return excerpt;
}
