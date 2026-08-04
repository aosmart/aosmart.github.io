## `Renderer.astro`

This is probably **the most important** Astro component. It is used by all files in `pages/`. Its purpose is to translate the Markdown components defined in the files under `pagesMarkdown/` into HTML elements or the Astro components found in `src/components/`.

For example, the following content in `pagesMarkdown/equipe.md`:

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

When the page is rendered, this Markdown section is converted into the corresponding HTML elements.

Each supported section type (such as `titre`, `texte`, `row`, `imageAndCaption`, etc.) has a corresponding `case` in `Renderer.astro`, making it the central component responsible for rendering the website from the Markdown files.
