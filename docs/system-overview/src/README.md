`src/` contains the main code of the application. It is divided in the following subfolders

| Folder | Description |
|---|---|
| [`src/components/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/components/graphiques) | Reusable Astro UI components shared across the site|
| [`src/content/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/content) | Global site configuration. |
| [`src/layouts/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/layouts) | Shared page layouts.  |
| [`src/newsposts/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/newsposts) | Contains the content of the different articles appearing in `Nouvelles` |
| [`src/pages/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/pages) | Astro’s file-based routing directory. Each file becomes a public URL—for example, `meteo.astro` becomes `/meteo` and `pluie.astro` becomes `/pluie`. |
| [`src/pages/news/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/pages/news) | Dynamic routes for `Nouvelles` posts. |
| [`src/pagesMarkdown/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/pagesMarkdown) | Structured Markdown content for the main site pages. Most content is stored as YAML sections in frontmatter and converted into UI elements by `Renderer.astro`. |
| [`src/styles/`](/home/javier/USherbrooke/stage/aosmart.github.io/src/styles) | CSS styling for the site |
