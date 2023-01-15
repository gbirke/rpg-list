# Next steps
- Add pagination on game overview page 
- Add pagination on tag page (double pagination), see https://github.com/11ty/eleventy/issues/1120
- Add pagination on game detail page (next/previous game)
- In-Browser PDF preview (using caddy file server)
- Make design more responsive: 
	- Test on mobile devices and add breakpoints to avoid unnecessary columns
	- Add hamburger menu navbar (see https://medium.com/@Mrsimi/responsive-navbar-in-tailwindcss-the-fast-lane-cce11fdf78f7)
- Add search functionality: search for text and tags. See https://www.belter.io/eleventy-search/

# Beyond MVP
- Improve title sorting performance on tag page, see also https://github.com/11ty/eleventy/issues/1757
- Pages for tags, with descriptions and lists of subtags
- Improve load times by optimizing images, using [eleventy-img](https://github.com/11ty/eleventy-img)
- Author pages, linking games together, Linking to publishers
- Automated Deployment
- Sync tool for my collection of PDFs
	- generate drafts of PDFs 
	- add additional files.
	- generate JSON overview of missing systems
- Publisher pages, render Publisher in Infobox
- Add thumnails for files
- Add alphabetic navigation to pagination
- Render ISBN in infobox
- Add ratings / How likely to play / Play count
- Tag cloud, both on main and "games tagged with" pages
- Show tag list ordered by tag count
- Improve tag display for games: Add icons/colors for storytelling/rpg games,
	dice and cards
- Views / Collections based on tags
- Advanced search for specific frontmatter values (e.g. mechanic or number
	of players).
- Show "related" games (by using tag scoring: frequent tags have lower
  score, infrequent tags have higher score)
- Cover thumbnail overview (with info on hover)
- Full text search of PDFs
- Link to PDF display app. Possible candidates:
	- Kavita Reader, 
	- Ubooquity (uses IDs in the URL, would need to connect those to files)
- Timeline of acquisitions (List ordered by date, grouped by month or year)

# Done

- Add live rendering with build tool
- Create overview page for all games
- Add Tailwind CSS
- Add more information to overview page for all games (image, tags,
  excerpt)
- Add taglist collection and tag-list page (see https://github.com/11ty/eleventy-base-blog)
- Add CLI or Vim generator for front matter
- Show tag and game counts
