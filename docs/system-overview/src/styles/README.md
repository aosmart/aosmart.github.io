The `src/styles/` folder contains the site-wide CSS.

| File | Purpose |
|---|---|
| `global.css` | Main stylesheet loaded by the site. It imports all files from `partials/`. |
| `partials/tokens.css`| Defines reusable CSS variables such as colors, spacing, fonts, borders, and maximum page width. |
| `partials/reset.css` | Normalizes browser defaults so elements render more consistently. |
| `partials/fonts.css` | Loads the local Inter font files from `public/fonts`. |
| `partials/structure.css` | Controls the main page layout and shared styling for content, navigation, footer, tables, and the accessibility skip link. |
| `partials/behaviors.css` | Adds interaction-related styles, including links, keyboard focus indicators, and text-selection colors. |

Individual Astro components also contain their own scoped `<style>` blocks for component-specific appearance.
