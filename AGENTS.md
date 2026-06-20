# Agent Instructions

## Package Manager

Use **bun**, not npm/yarn. CI uses `bun ci` to install.

## Commands

- `bun run dev` — local dev server (Vite + SvelteKit)
- `bun run build` — builds to `build/` (adapter-static, prerendered SPA)
- `bun run check` — svelte-check (run before lint to avoid stale diagnostics)
- `bun run lint` — ESLint + Prettier check
- `bun run format` — Prettier auto-format
- `bun add -D <pkg>` — add dev dependency
- `bun add <pkg>` — add runtime dependency

## CI Order (verified)

check → lint (ci.yml, on push/PR), then build (gh-pages.yml, on push to main). Run locally: `check` → `lint` → `build`.

## Architecture

- SvelteKit 5 with **adapter-static** (fully prerendered SPA, no SSR runtime)
- Routes in `src/routes/`; `$projects$` is a literal directory name (file-based dynamic routing)
- `initialProjects` from `src/lib/api/projects/projects.js` drives prerender entries in `svelte.config.js`
- Build output published to GitHub Pages from `build/` directory
- Dark mode is class-based (`@custom-variant dark` in CSS), toggled via `ThemeButton.svelte` with `localStorage.theme` persistence and `<svelte:head>` inline script for flash-free load

## Tailwind CSS v4

- **No** `tailwind.config.js` or `postcss.config.js` — all config lives in `src/app.css`
- Uses `@tailwindcss/vite` plugin (not PostCSS pipeline)
- Custom theme defined in `@theme { ... }` block (colors, fonts)
- Dark mode via `@custom-variant dark (&:where(.dark, .dark *))`
- `@apply` and `@layer` still work identically
- **Breaking changes from v3 to remember:**
  - `bg-opacity-*` / `border-opacity-*` → `bg-<color>/<opacity>` / `border-<color>/<opacity>`
  - `flex-grow` → `grow`, `flex-shrink` → `shrink`
  - `container` class is for CSS container queries (not max-width centering)

## Notable Dependencies

- `@iconify/svelte` requires `ssr.noExternal` in `vite.config.ts`
- `@poppanator/sveltekit-svg` processes SVGs from `src/lib/graphics/`
- Fonts bundled via `@fontsource/*` (space-grotesk, cascadia-mono), loaded in `src/routes/+layout.svelte`
- Markdown via `marked` with plugins (highlight.js, alert, emoji, base-url, highlight)
- GitHub API via `@octokit/rest` with manual chunk splitting in vite config for size optimization

## Prettier

Spaces (2-wide), single quotes, no trailing comma, 100 char width. Svelte files use `svelte` parser via `prettier-plugin-svelte`.

## Style

Brutalism, high contrast.
