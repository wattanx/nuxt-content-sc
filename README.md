# Nuxt Content with Server Components

## Local development

Use Node.js 24.15.0 (see `.node-version`) and pnpm 10.34.7.

```sh
pnpm install
pnpm dev
```

Nuxt Content 3 uses the collection in `content.config.ts` and the native Node.js
SQLite connector locally. `/` renders a Content collection through a server
component. `/without-content` uses marked and sanitize-html; its Markdown file is
bundled as a Nitro server asset so it can also be read on Cloudflare.

## Cloudflare Pages

```sh
pnpm build
```

Before deploying, create or select a Cloudflare D1 database and add a Pages D1
binding named `DB` to each environment being deployed (production and preview).
Content 3 uses this binding and initializes its content database from the build's
bundled data on the first request. A deployment without `DB` cannot query Content.
Remote database creation and binding configuration are separate deployment steps.

For a local preview with an isolated D1 database:

```sh
pnpm dlx wrangler@4.157.0 pages dev dist --d1 DB --compatibility-date 2026-11-03 --compatibility-flags nodejs_compat
```

This preview uses local D1 storage. It does not create or change a remote database.

See [Nuxt Content: Cloudflare Pages](https://content.nuxt.com/docs/deploy/cloudflare-pages)
and the [Content 3 migration guide](https://content.nuxt.com/docs/getting-started/migration).
