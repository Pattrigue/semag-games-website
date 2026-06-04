# Semag Games Website

The official [Semag Games](https://semag-games.com) website, home of **Vibrant Venture** — a colorful 2D adventure platformer, [out now on Steam](https://store.steampowered.com/app/1264520/Vibrant_Venture/).

## Tech stack

- [React 19](https://react.dev) + [TypeScript](https://www.typescriptlang.org)
- [Vite](https://vite.dev) (rolldown) with the React Compiler enabled
- [Mantine](https://mantine.dev) UI with CSS Modules
- [Phosphor Icons](https://phosphoricons.com)
- [Biome](https://biomejs.dev) for linting and formatting

## Development

```bash
npm ci          # install (Node >= 26)
npm run dev     # dev server with HMR
npm run build   # typecheck + production build to dist/
npm run lint    # biome lint
npm run format  # biome format
```

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), served at [semag-games.com](https://semag-games.com).

## History

The previous version of the site (2023) is preserved on the [`old-website`](../../tree/old-website) branch.
