# Next steps
- Tag cloud, both on main and "games tagged with" pages
- Add search functionality: search for text and tags.
- Cover thumbnail overview (with info on hover)
- Add thumbnails for files
- Improve tag display for games: Add icons/colors for storytelling/rpg games,
	dice and cards
- Improve title sorting performance on tag page, see also https://github.com/11ty/eleventy/issues/1757
- Pages for tags, with descriptions and lists of subtags
- Improve load times by optimizing images, using [eleventy-img](https://github.com/11ty/eleventy-img)
- Render ISBN in infobox
- Author pages, linking games together, Linking to publishers
- Automated Deployment
- Generate Reports
  - Missing files
  - Files without metadata
  - Tags without tag pages
  - Publisher / Author pages that have no game (Possible misspelling in
	  file name)
- Sync tool for my collection of PDFs
	- generate drafts of PDFs 
	- add additional files.
	- generate JSON overview of missing systems
- Publisher pages, render Publisher in Infobox
- Add ratings / How likely to play / Play count
- Advanced search for specific frontmatter values (e.g. mechanic or number
	of players).
- Show "related" games (by using tag scoring: frequent tags have lower
  score, infrequent tags have higher score)
- Make design more mobile-friendly: 
	- Add hamburger menu navbar (see https://medium.com/@Mrsimi/responsive-navbar-in-tailwindcss-the-fast-lane-cce11fdf78f7)
- When main page gets over 300KB, add pagination
- When tag-specific page gets over 300 KB, add pagination
- Timeline of acquisitions (List ordered by date, grouped by month or year)
- Full text search of PDFs
- Add pagination on game detail page (next/previous game)
- Add alphabetic navigation to pagination
- Views / Collections based on tags
- Link to PDF display app. Possible candidates:
	- Kavita Reader, 
	- Ubooquity (uses IDs in the URL, would need to connect those to files)

# Done

- Add live rendering with build tool
- Create overview page for all games
- Add Tailwind CSS
- Add more information to overview page for all games (image, tags,
  excerpt)
- Add taglist collection and tag-list page (see https://github.com/11ty/eleventy-base-blog)
- Add CLI or Vim generator for front matter
- Show tag and game counts
- Improve display with multi-column layout
- In-Browser PDF preview (using caddy file server)
