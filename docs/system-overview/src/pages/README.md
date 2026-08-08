[Astro pages](https://docs.astro.build/en/basics/astro-pages/) automatically generate routes based on their file names, so each file corresponds to a page on the website.

Most of these files are very similar. They use the site's `Base` layout for styling and consistency, then render the imported frontmatter/markdown content using the `Renderer` component. `Renderer` translates the frontmatter in the imported Markdown file into the corresponding HTML elements or Astro components.
