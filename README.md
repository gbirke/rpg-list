# Gabriels RPG collection

A static site with descriptions for all my RPGs

Built with [Eleventy](https://www.11ty.dev/).

## Installation

	npm install

## Development

	npm run dev

Dev server will be at http://localhost:8080/
	
## Build

	npm run build


## Creating Cover images

Use imagemagick with the following command:

	convert -density 72 input.pdf[0] -quality 90 output.jpg
