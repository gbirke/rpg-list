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

## Deployment to Synology

On a Mac with mounted "Datentonne/Rollenspiel" folder, run

	rsync -cav src/_site/ /Volumes/Datentonne/Rollenspiel/Metadata/

There is a simple nginx image that runs on port 8045 and mounts the "Metadata" directory read-only into `/usr/share/nginx/html`

## Favicons

Thanks to https://craftpix.net/freebies/free-50-rpg-book-icons/ (Image No 2)

