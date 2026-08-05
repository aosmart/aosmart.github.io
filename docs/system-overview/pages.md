To learn more about the `.pages.yml` file, you can read the [Pages CMS configuration documentation](https://pagescms.org/docs/configuration/). The file can also be edited more easily through the **Config** tab in the browser:

<img width="2554" height="1444" alt="image" src="https://github.com/user-attachments/assets/524811a9-0118-42d2-8f64-43e852e8e715" />

[`.pages.yml`](/home/javier/USherbrooke/stage/aosmart.github.io/.pages.yml) configures **Pages CMS**, the visual editor used to manage the site's Markdown content.

It has three main sections:

| Section | Purpose |
|---|---|
| `media` | Tells the CMS to store uploaded files in `public/` and reference them with URLs beginning with `/`. |
| `components` | Defines reusable content block schemas such as `titre`, `paragraphe`, `imageLegende`, `doubleImageLegende`, etc. |
| `content` | Defines which pages and collections users can edit, as well as which components are allowed on each one. |

For example, this component definition in `.pages.yml`:

```yaml
paragraphe:
  label: Paragraphe
  type: object
  fields:
    - name: paragraphe
      type: rich-text
      required: true
```

tells Pages CMS to display a rich-text field.

<img width="882" height="469" alt="image" src="https://github.com/user-attachments/assets/d3ca0e0c-ad19-4004-9849-5f08e4694dda" />

When the page is saved, it produces the following frontmatter:

```yaml
- type: paragraphe
  paragraphe: The entered content
```

The `content` section connects CMS entries to the actual files they edit. For example:

```yaml
- name: meteo
  label: Météorologie
  type: file
  path: src/pagesMarkdown/meteo.md
```

Most entries use `type: file`, meaning they edit a single existing page. The news section, however, is defined as a `collection`:

```yaml
- name: blogPosts
  type: collection
  path: src/newsposts
```

Each page also has an explicit list of allowed components. For example, the gallery page allows `gallery-image` components, while the team page allows `membreEquipe` components.
