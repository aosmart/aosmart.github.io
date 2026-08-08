## Development

Almost any change to the content of the site (text, images, graphs, etc.) can be done easily through PagesCMS. Follow this [guide](https://github.com/aosmart/aosmart.github.io/blob/main/docs/guides/PAGESCMS.md) to learn how to use it.

If, for any reason, PagesCMS is not available, you can edit the content directly in the files located here:

https://github.com/aosmart/aosmart.github.io/tree/main/src/pagesMarkdown

If you want to modify how the website looks, you will need to edit the files in:

https://github.com/aosmart/aosmart.github.io/tree/main/src

For small changes, you can edit the files directly in GitHub through your browser and commit the changes.

For more significant changes, clone the repository to your local machine:

```bash
git clone https://github.com/aosmart/aosmart.github.io.git
```

You can then open the project in an IDE such as Visual Studio Code. Before running the project, make sure you have Node.js and npm installed.

Next, run the following commands (see the [Astro CLI documentation](https://docs.astro.build/en/reference/cli-reference/) for more information):

```bash
npm install
npm run dev
```

The terminal will display the local URL where the website is running, for example:

```text
Local: http://localhost:4321/
```

Whenever you save a change, the website will automatically reload in your browser so you can immediately see the result.

Once you have finished your changes, commit them and push them to GitHub. The public website will be rebuilt automatically through a GitHub Action. This process may take a few minutes. You can monitor its progress from the **Actions** tab of the `aosmart.github.io` repository.
