# Semag Games Website

The official [Semag Games](https://semag-games.com) website - home of **Vibrant Venture**, a colorful 2D adventure platformer, [out now on Steam](https://store.steampowered.com/app/1264520/Vibrant_Venture/).

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

## Pixel art assets

Pixel sprites (ribbons, UI containers) are committed at their native resolution alongside prescaled `-2x`/`-3x` variants generated with ImageMagick. To regenerate after updating a base asset:

```bash
magick src/assets/ribbon-promo.png -filter point -resize 200% src/assets/ribbon-promo-2x.png
magick src/assets/ribbon-make-it-yours.png -filter point -resize 300% src/assets/ribbon-make-it-yours-3x.png
```

`-filter point` (nearest-neighbor) is required — without it, ImageMagick's default filter blurs the pixel art. Only use whole-number multiples (200%, 300%) so pixels stay square.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), served at [semag-games.com](https://semag-games.com).

## History

The previous version of the site (2023) is preserved on the [`old-website`](../../tree/old-website) branch.
