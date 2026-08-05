`deploy.yml` is the GitHub Actions workflow that publishes the site to GitHub Pages. It is mostly the same file as the one found in the official Astro documentation [here](https://docs.astro.build/en/guides/deploy/github/).

It runs when:

- Code is pushed to the `main` branch.
- Someone manually starts it from GitHub's **Actions** page.

It contains two jobs:

| Job | Purpose |
|---|---|
| `build` | Checks out the repository, installs dependencies, builds the Astro site, and uploads the generated static files. |
| `deploy` | Takes the uploaded build output and publishes it to GitHub Pages. |

The workflow also grants the permissions required to publish to GitHub Pages and prevents multiple deployments from interfering with one another.
