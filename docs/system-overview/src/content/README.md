## `site.ts`

This file defines the main settings for the entire site. For this project, the most relevant setting is the `nav` array, which defines the content of the site's navigation bar.

For example:

```ts
nav: [
  { label: "Accueil", href: "/" },
  { label: "Exclusion de pluie", href: "/pluie" },
  { label: "Météorologie", href: "/meteo" },
  { label: "Flux de carbone", href: "/flux" },
  { label: "Équipe", href: "/equipe" },
  { label: "Nouvelles", href: "/news" },
  { label: "Galerie de photos", href: "/photos" },
],
```

Changing this array will automatically update the navigation bar displayed at the top of every page.

<img width="1117" height="58" alt="Navigation bar" src="https://github.com/user-attachments/assets/aaf27e01-938c-4098-b7fd-616e120c1dcf" />
