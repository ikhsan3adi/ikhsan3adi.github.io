# Agent Instructions

## Package Manager

Use **bun**, not npm/yarn. CI uses `bun ci` to install. `.npmrc` sets `engine-strict=true`.

## Commands

- `bun run dev` — local dev server (Vite + SvelteKit)
- `bun run build` — builds to `build/` (adapter-static, prerendered SPA)
- `bun run check` — runs `svelte-kit sync` (generates `.svelte-kit/` types) then `svelte-check`
- `bun run lint` — ESLint + Prettier check
- `bun run format` — Prettier auto-format

## CI Order (verified)

`check` → `lint` (ci.yml), then `build` (gh-pages.yml on push to main). Run locally in that order.

## Architecture

- **SvelteKit 5** with `adapter-static` — fully prerendered SPA, no SSR runtime. `export const prerender = true` in `+layout.ts`.
- Routes: `src/routes/`; `$projects$` is a literal directory name (file-based dynamic routing). The `[id]` segment is a dynamic param.
- `initialProjects` from `src/lib/api/projects/projects.js` drives prerender entries in `svelte.config.js`. Adding a new project requires adding to this array — the ID auto-generates a prerendered route.
- Project data flow: `initialProjects` (static metadata) → `GitHubRepository` (fetch stars/forks/etc from GitHub API) → `LocalStorageCache` (versioned localStorage) → `ProjectService` (orchestrator). `CachedRepository` wraps the GitHub fetcher with TTL (1h stats, 30min readme).
- In dev mode, `CachedRepository` falls back to dummy stats when GitHub API fails. `LocalStorageCache` uses prefix `project:dev:` in dev, `project:` in production — increment the version string to bust all caches.
- Dark mode: class-based (`@custom-variant dark`), toggled via `ThemeButton.svelte` with `localStorage.theme` persistence and `<svelte:head>` inline script.
- Uses **Svelte 5 runes**: `$state`, `$derived`, `$props()`, `$app/state` (not `$app/stores`).

## Tailwind CSS v4

- No `tailwind.config.js` or `postcss.config.js` — all config in `src/app.css`
- Uses `@tailwindcss/vite` plugin (not PostCSS)
- Custom theme via `@theme { ... }` block, dark mode via `@custom-variant dark (&:where(.dark, .dark *))`
- v3→v4 breaking changes: `bg-opacity-*` → `bg-<color>/<opacity>`, `flex-grow` → `grow`, `container` is for CSS container queries

## Notable Dependencies & Quirks

- `@iconify/svelte` requires `ssr.noExternal` in `vite.config.ts`
- `@poppanator/sveltekit-svg` processes SVGs from `src/lib/graphics/`
- Fonts: `@fontsource/cascadia-mono` (headings), `@fontsource/space-grotesk` (body). Custom `Mechsuit` font loaded from `/fonts/Mechsuit.woff2` (static/ directory).
- Icon sets: `@iconify/svelte` and `svelte-fa` (FontAwesome) both used.
- `svelte-typewriter` and `katex` are also dependencies.
- ESLint disables `svelte/no-at-html-tags` for `ProjectDetail.svelte` (renders markdown HTML).
- `src/routes/$projects$/[id]/+page.ts` has special handling: in dev mode, paths `/[$]projects$/loading` and `/[$]projects$/error` return a dummy project to prevent 404s during UI development.
- `highlight.js` CSS is imported only in the project detail page (`github-dark-dimmed.css`).
- `marked` is used with multiple plugins: highlight.js, alert, emoji, base-url, katex.
- Manual chunk splitting in `vite.config.ts` for `@octokit/*`, `highlight.js`/`marked`, `@iconify/svelte`, `svelte-fa`/FontAwesome, `svelte-typewriter`.
- `svelte-check` and ESLint warnings are treated as errors in CI.

## Prettier

Spaces (2-wide), single quotes, no trailing comma, 100 char width. Svelte files use `svelte` parser via `prettier-plugin-svelte`.

## Style

Brutalism, high contrast.

## Don't

- em dash
- emojis
- run npm, npx

<!-- CODEGRAPH_START -->
## CodeGraph

In repositories indexed by CodeGraph (a `.codegraph/` directory exists at the repo root), reach for it BEFORE grep/find or reading files when you need to understand or locate code:

- **MCP tool** (when available): `codegraph_explore` answers most code questions in one call — the relevant symbols' verbatim source plus the call paths between them, including dynamic-dispatch hops grep can't follow. Name a file or symbol in the query to read its current line-numbered source. If it's listed but deferred, load it by name via tool search.
- **Shell** (always works): `codegraph explore "<symbol names or question>"` prints the same output.

If there is no `.codegraph/` directory, skip CodeGraph entirely — indexing is the user's decision.
<!-- CODEGRAPH_END -->
