# Rayyan Sharief: Personal Website

Static portfolio for Rayyan Sharief. It is built with Next.js (App Router) and exported as plain HTML, CSS, and assets, so it can be hosted on any static host.

## Requirements

- Node.js 20.9 or newer
- pnpm 10.16 or newer (the lockfile is `pnpm-lock.yaml`)

## Install

```bash
pnpm install
```

## Local development

```bash
pnpm dev
```

Open http://localhost:3000.

## Typecheck

```bash
pnpm typecheck
```

## Production build

```bash
pnpm build
```

The build writes a fully static site to the **`out/`** directory (`output: 'export'` in `next.config.mjs`). Upload the contents of `out/` to any static host. No server, database, or platform API is required.

## Environment variables

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | `https://rayyans.vercel.app` | Canonical origin used for canonical links, Open Graph URLs, the sitemap, and `robots.txt`. Set this to the final domain when hosting changes. |
| `NEXT_PUBLIC_ROBOTS_INDEX` | unset (indexing on) | Set to `false` on staging or preview deployments. This adds `noindex` metadata and disallows crawling in `robots.txt`, so the preview does not compete with production in search. |

Example for a staging build:

```bash
NEXT_PUBLIC_ROBOTS_INDEX=false NEXT_PUBLIC_SITE_URL=https://preview.example.com pnpm build
```

## Project layout

- `app/`: routes and metadata (`layout.tsx`, `page.tsx`, `work/grub`, `work/seed`), `robots.ts`, `sitemap.ts`, and global styles.
- `components/`: shared header, copy-email control, and the product page template.
- `lib/portfolio-data.ts`: all site copy and links. Edit content here.
- `public/`: resume PDF, brand logos, share image, icon, and project screenshots. Files here are copied to `out/` unchanged.

## Hosting

1. Set `NEXT_PUBLIC_SITE_URL` to the final public origin.
2. Run `pnpm install && pnpm build`.
3. Publish the `out/` directory as the site root. Routes are plain files (`/`, `/work/grub/`, `/work/seed/`), so no rewrites are needed.
4. For a preview or staging deployment, also set `NEXT_PUBLIC_ROBOTS_INDEX=false`.

Hosting on ChatGPT Sites, or any other static host, follows the same steps. Do not change DNS or replace the current public site until the new build has been reviewed.

## Open items

- LinkedIn: the site uses `https://www.linkedin.com/in/rayyan-sharief-787919299/`. The resume lists a different LinkedIn slug. Confirm the correct URL in `lib/portfolio-data.ts` before launch.
- Product status copy for Grub and Seed should be re-checked against the live product sites before each release.
