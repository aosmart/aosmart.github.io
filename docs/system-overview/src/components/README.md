## `Renderer.astro`

This is probably **the most important** Astro component. It is used by all files in `pages/`. Its purpose is to translate the [frontmatter](https://www.coding-tech.fr/blog/qu-est-ce-que-front-matter/) found in the files under `pagesMarkdown/` into HTML elements or Astro components from `src/components/`.

For example, the following frontmatter in `pagesMarkdown/equipe.md`:

```yaml
- type: titre
  titre: Équipe
  sous-texte:
    L'installation du dispositif de la forêt connectée et l'analyse des
    données sont rendues possibles par la collaboration d'une équipe
    professionnelle et technique aux expertises complémentaires. Vous trouverez
    ici la liste des personnes ayant contribué au projet.
```

matches the following case in `Renderer.astro`:

```tsx
case "titre":
  return (
    <>
      <h1>{section["titre"]}</h1>
      <p class="lead">{section["sous-texte"]}</p>
    </>
  );
```

When the page is rendered, this frontmatter section is converted into the corresponding HTML elements.

Each supported section type (such as `titre`, `paragraphe`, `row`, `imageLegende`, etc.) has a corresponding `case` in `Renderer.astro`, making it the central component responsible for rendering the website from the Markdown content. Also see other components [here](https://github.com/aosmart/aosmart.github.io/tree/main/docs/system-overview/src/components/graphiques) and [here](https://github.com/aosmart/aosmart.github.io/tree/main/docs/system-overview/src/components/graphiques).
