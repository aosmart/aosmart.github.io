[`deploy.yml`](/home/javier/USherbrooke/stage/aosmart.github.io/.github/workflows/deploy.yml) is the GitHub Actions workflow that publishes the site to GitHub Pages. It is mostky the same file you can finde [here](https://docs.astro.build/en/guides/deploy/github/)

It runs when:

- Code is pushed to the `main` branch.
- Someone starts it manually through GitHub’s Actions page.

It contains two jobs:

| Job | Purpose |
|---|---|
| `build` | Checks out the repository, installs dependencies, runs the Astro build, and uploads the generated static site. |
| `deploy` | Takes the uploaded build output and publishes it to GitHub Pages. |

The workflow also grants the permissions needed to publish to Pages and prevents multiple deployments from interfering with one another.
