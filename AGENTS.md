# Agent Instructions

## Package Manager

Use **bun**, not npm/yarn. CI uses `bun ci` to install.

## Dev Commands

- `bun run dev` — local dev server
- `bun run build` — builds to `build/` directory
- `bun run check` — runs svelte-check (type checking)
- `bun run lint` — ESLint + Prettier check
- `bun run format` — auto-format with Prettier
- `bun add` - add dependencies

## CI Order (verified)

check → lint → build (enforced by CI workflows)

## Architecture

- SvelteKit with **adapter-static** (prerendered SPA)
- Routes in `src/routes/`; `$projects$` is a literal directory name (file-based dynamic routing)
- `initialProjects` from `src/lib/api/projects/projects.js` drives prerender entries in `svelte.config.js`
- Build output published to GitHub Pages from `build/` directory

## Notable Dependencies

- `saos` is installed from GitHub (`github:XiboxCode/saos#0ee4835`) — listed in `trustedDependencies`
- Font icons via `@fortawesome/free-solid-svg-icons` + `svelte-fa`
- Development tools icons via `@iconify/svelte` with data-driven config in `src/lib/api/tools/tools.ts`
- Markdown rendering via `marked` with plugins
- Fonts bundled via `@fontsource/*`: `space-grotesk`, `cascadia-mono` (loaded in `src/routes/+layout.svelte`)

## Prettier Config

Uses spaces (not tabs), 2-space indent, single quotes, 100 char line width. Svelte files use `svelte` parser.

## Style

Brutalism, High contrast
