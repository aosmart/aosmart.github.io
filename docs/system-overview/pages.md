To learn more about the `pages.yml` file, you cand find the [documentation](https://pagescms.org/docs/configuration/) here.

[`.pages.yml`](/home/javier/USherbrooke/stage/aosmart.github.io/.pages.yml) configures **Pages CMS**, the visual editor used to manage the site’s Markdown content.

It has three main sections:

| Section | Purpose |
|---|---|
| `media` | Tells the CMS to store uploaded files in `public/` and reference them with URLs beginning at `/`. |
| `components` | Defines reusable content-block schemas such as titles, paragraphs, images, graphs, team members, and HTML blocks. |
| `content` | Defines which pages and collections users can edit and which components are allowed on each one. |

For example, this component definition:

```yaml
paragraphe:
  label: Paragraphe
  type: object
  fields:
    - name: paragraphe
      type: rich-text
      required: true
```

tells Pages CMS to display a rich-text field. When saved, it produces:

```yaml
- type: paragraphe
  paragraphe: The entered content
```

The `content` section connects CMS entries to actual files:

```yaml
- name: meteo
  label: Météorologie
  type: file
  path: src/pagesMarkdown/meteo.md
```

Most entries are `type: file`, meaning they edit one existing page. The news section is a `collection`:

```yaml
- name: blogPosts
  type: collection
  path: src/newsposts
```

This lets editors create and remove multiple news-post files.

Each page also has an explicit list of allowed blocks. For example, the gallery permits gallery-image components, while the team page permits `membreEquipe`.
