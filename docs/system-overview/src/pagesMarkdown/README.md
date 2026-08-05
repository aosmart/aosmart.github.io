The files in `src/pagesMarkdown/` are structured-content files. Although they use the `.md` extension, almost all their content is [YAML frontmatter](https://docs.github.com/en/contributing/writing-for-github-docs/using-yaml-frontmatter) rather than ordinary Markdown.

## Overall structure

Each file follows this pattern:

```yaml
---
Sections:
  - type: titre
    titre: Page title
    sous-texte: Short introduction

  - type: paragraphe
    paragraphe: |
      Regular text with **Markdown formatting**.

  - type: imageLegende
    image: /images/example.jpg
    alt: Description for screen readers
    legende: Caption displayed below the image
---
```

The important parts are:

- `Sections` is an ordered list.
- Every list item is one section.
- `type` tells the `Renderer.astro` component which component to use.
- The other properties provide the section’s content.
- Sections appear on the page in the same order as in the file.

Each Astro page imports that list, for example in `src/pages/meteo.astro`:

```astro
import { frontmatter } from "../pagesMarkdown/meteo.md";

const { Sections } = frontmatter;
```

It then passes the list to `Renderer.astro`:

```astro
<Renderer sections={Sections} />
```

## Available section types

| Section type | Fields | Result |
|---|---|---|
| `titre` | `titre`, `sous-texte` | Main page heading (`h1`) followed by introductory text. |
| `sous-titre` | `sous-titre` | Second-level heading (`h2`). |
| `sous-titre-avec-lien` | `sous-titre`, `lien` | Second-level heading containing a clickable link. |
| `paragraphe` | `paragraphe` | Markdown-formatted prose |
| `imageLegende` | `image`, `alt`, `legende` | One image with a caption. |
| `doubleImageLegende` | `image1`, `alt1`, `legende1`, `image2`, `alt2`, `legende2` | Two captioned images side by side on desktop and stacked on mobile. |
| `graphiqueTempsReel` | `fichier`, `legende` | One interactive graph loaded from a JSON file. |
| `doubleGraphiqueTempsReel` | `fichier1`, `legende1`, `fichier2`, `legende2` | Two interactive graphs displayed side by side or stacked on mobile. |
| `membreEquipe` | `nom`, `sous-texte`, `description`, optional `photo` | Team-member profile with text and a photograph. |
| `htmlBlock` | `htmlBlock` | Raw HTML inserted directly into the page. |
| `gallerie_imageLegende` | `image`, `alt`, `legende` | One gallery image that can be opened in a full-screen overlay. |
| `gallerie_doubleImageLegende` | Two sets of `image`, `alt`, and `legende` fields | Two expandable gallery images displayed in a responsive row. |

## Text sections

### `titre`

Normally used once at the beginning of a page:

```yaml
- type: titre
  titre: Données météorologiques
  sous-texte: Les conditions météorologiques observées au site d'étude.
```

It produces approximately:

```html
<h1>Données météorologiques</h1>
<p class="lead">Les conditions météorologiques...</p>
```

### `sous-titre`

```yaml
- type: sous-titre
  sous-titre: Description des capteurs
```

This produces an `<h2>`.

### `sous-titre-avec-lien`

```yaml
- type: sous-titre-avec-lien
  sous-titre: Visiter le site de la FERLD
  lien: https://ferld.uqat.ca/
```

This produces a linked heading with an external-link arrow.

### `paragraphe`

```yaml
- type: paragraphe
  paragraphe: |
    Une forêt connectée contient des **capteurs de haute précision**.

    Les objectifs sont :

    - mesurer la météo;
    - suivre la croissance;
    - étudier les flux de carbone.
```

The `paragraphe` value is processed with the `marked` Markdown parser.`

## Image sections

### `imageLegende`

```yaml
- type: imageLegende
  image: /images/foret/tower.jpg
  alt: Tour de mesure située dans la forêt
  legende: La tour contient plusieurs instruments météorologiques.
```

The fields have distinct purposes:

- `image`: path under the `public` directory.
- `alt`: accessible image description.
- `legende`: visible caption below the image.

For example, `/images/foret/tower.jpg` refers to:

```text
public/images/foret/tower.jpg
```

### `doubleImageLegende`

```yaml
- type: doubleImageLegende
  image1: /images/foret/bouleaux.jpg
  alt1: Bouleaux à papier
  legende1: Site expérimental des bouleaux.

  image2: /images/foret/epinettes.jpg
  alt2: Épinettes noires
  legende2: Site expérimental des épinettes.
```

The numbered fields belong to the corresponding image:

- `image1`, `alt1`, `legende1`
- `image2`, `alt2`, `legende2`

## Graph sections

### `graphiqueTempsReel`

```yaml
- type: graphiqueTempsReel
  legende: Température observée pendant la dernière semaine.
  fichier: /graphData/air_temperature.json
```

Normally, this renders `Chart.astro`.

There is one special case:

```yaml
fichier: /graphData/ap200.json
```

That exact path renders `Tower.astro` instead of a line chart.

### `doubleGraphiqueTempsReel`

```yaml
- type: doubleGraphiqueTempsReel
  fichier1: /graphData/air_temperature.json
  legende1: Température de l'air.
  fichier2: /graphData/precipitation.json
  legende2: Précipitations.
```

The two graphs are displayed next to each other on larger screens and stacked on smaller screens.

## Team-member sections

```yaml
- type: membreEquipe
  nom: Marc-André Lemay
  sous-texte: Auxiliaire de recherche, UQAT
  photo: /images/equipe/marc.jpg
  description: |
    - Installation des capteurs
    - Récolte des données
    - Analyse des données
```

The `description` supports Markdown. If `photo` is missing or empty, the renderer uses:

```text
/images/equipe/null.jpeg
```

## Gallery sections

Gallery sections resemble regular image sections, but use an interactive component. Clicking an image opens it in a full-screen overlay.

One image:

```yaml
- type: gallerie_imageLegende
  image: /images/foret/deer.jpg
  alt: Cerf observé dans la forêt
  legende: Visiteur aperçu près du site.
```

Two images:

```yaml
- type: gallerie_doubleImageLegende
  image1: /images/foret/deer.jpg
  alt1: Cerf dans la forêt
  legende1: Un cerf près des instruments.
  image2: /images/foret/tower.jpg
  alt2: Tour de mesure
  legende2: La tour au site expérimental.
```

## Raw HTML sections

```yaml
- type: htmlBlock
  htmlBlock: |
    <div class="partners">
      <img src="/logos/mrcao.png" alt="MRC d'Abitibi-Ouest">
      <img src="/logos/crsng.svg" alt="CRSNG">
    </div>
```

This is useful for layouts not covered by existing section types.

For Markdown containing multiple paragraphs or lists, `|` is generally the clearest option.

There is currently no strongly typed schema validating these sections during compilation. A misspelled `type` will not render the intended component; the renderer will instead display the unknown type as plain text.
