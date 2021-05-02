const path = require('path');

module.exports = {
	layout: "layouts/game.liquid",
	infoboxLabels: {
		author: "Author",
		playerCount: "Players",
		mechanic: "Mechanic",
		playtime: "Play time",
	},
	eleventyComputed: {
		playerCount: data => {
			if ( data.min_players && data.max_players ) {
				return data.min_players === data.max_players ? data.min_players : `${data.min_players}-${data.max_players}`
			} else if (data.min_players) {
				return `${data.min_players}+`;
			} else if (data.max_players) {
				return `Max. ${data.max_players}`;
			}
		},
		infobox: data => {
			const rawValues = {
				author: data.author,
				playerCount: data.playerCount,
				mechanic: data.mechanic,
				playtime: data.playtime,
			};
			// Filter null values and create small object array
			return Object.entries(rawValues)
				.filter(([_, v]) => v != null)
				.map(([k, v]) => ({
					label: data.infoboxLabels[k],
					value: v
				}))
		},
		gameFiles: data => data.files ? 
			data.files.map( f => ({
				// TODO check some  process.env variable if PDFs should be served via some http url
				name: path.basename(f),
				ext: path.extname(f).substr(1)
			} ) ) :
			[],
	}
}
