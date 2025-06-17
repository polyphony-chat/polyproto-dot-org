# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

## Installation

```bash
yarn
```

### Pre-commit Hooks

This project uses pre-commit hooks to ensure code quality and uniform formatting. To set up
pre-commit hooks:

1. Install pre-commit:

    ```bash
    pip install pre-commit
    ```

2. Install prettier and dev-dependencies:

    ```bash
    yarn install
    ```

3. Install the git hooks:

    ```bash
    pre-commit install
    ```

The pre-commit hooks will automatically:

- Format Markdown and MDX files using Prettier
- Lint Markdown files using markdownlint
- Check for common issues like trailing whitespace and file endings

You can manually run the checks on all files:

```bash
pre-commit run --all-files
```

### Local Development

```bash
yarn start
```

This command starts a local development server and opens up a browser window. Most changes are
reflected live without having to restart the server.

### Build

```bash
yarn build
```

This command generates static content into the `build` directory and can be served using any static
contents hosting service.
